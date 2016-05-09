import { Observable } from 'rxjs/Rx';

export function observableFirebaseObject<T>(ref: any): Observable<T> {
  return Observable.create(function(observer: any) {
    function value(snapshot: any) {
      console.log('Snapshot: ', snapshot);
      observer.next(snapshot.val());
    }
    ref.on('value', value);
    return () => {
      ref.off('value', value)
    }
  });
}

export function observableFirebaseArray<T>(ref: any): Observable<T[]> {
  return Observable.create(function(observer: any) {

    let arr: any[] = [];
    const keyFieldName = '$$fbKey';

    function child_added(snapshot: any, prevChildKey: string) {
      let child = snapshot.val();
      child[keyFieldName] = snapshot.key();
      let prevEntry = arr.find(y => y[keyFieldName] === prevChildKey);
      arr.splice(arr.indexOf(prevEntry) + 1, 0, child);
      observer.next(arr.slice()); // safe copy
    }

    function child_changed(snapshot: any) {
      let key = snapshot.key();
      let child = snapshot.val();
      let x = arr.find(y => y[keyFieldName] === key);
      if (x) {
        for(let k in child) x[k] = child[k];
      }
      observer.next(arr.slice()); // safe copy
    }

    function child_removed(snapshot: any) {
      let key = snapshot.key();
      let x = arr.find(y => y[keyFieldName] === key);
      if (x) {
        arr.splice(arr.indexOf(1), 1);
      }
      observer.next(arr.slice());
    }

    function child_moved(snapshoot: any, prevChildKey: string) {
      let key = snapshoot.key();
      let child = snapshoot.val();
      child[keyFieldName] = key;

      // Remove from old slot
      let x = arr.find(y => y[keyFieldName] === key);
      if (x) {
        arr.splice(arr.indexOf(x), 1);
      }

      // add in new slot
      let prevEntry = arr.find(y => y[keyFieldName] === prevChildKey);
      if (prevEntry) {
        arr.splice(arr.indexOf(prevEntry) + 1, 0, child);
      } else {
        arr.splice(0, 0, child);
      }

      observer.next(arr.slice()); // safe copy
    }

    // Start out empty, until data arrives
    observer.next(arr.slice()); // Safe copy using slice()

    ref.on('child_added', child_added);
    ref.on('child_changed', child_changed);
    ref.on('child_removed', child_removed);
    ref.on('child_moved', child_moved);

    return () => {
      ref.off('child_added', child_added);
      ref.off('child_changed', child_changed);
      ref.off('child_removed', child_removed);
      ref.off('child_moved', child_moved);
    };
  });
}