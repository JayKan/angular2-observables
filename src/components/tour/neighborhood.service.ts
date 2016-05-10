import { Injectable } from '@angular/core';
import { Neighborhood } from './neighborhood.model';
import { Observable, Subject } from 'rxjs/Rx';
// import { SocketService } from './socket.service';

interface INeighborhoodsOperation extends Function {
  (neighborhoods: Neighborhood[]): Neighborhood[]  
}

@Injectable()
export class NeighborhoodService {

  neighborhoods: Neighborhood[];
  $neighborhoods: Observable<Neighborhood[]>;

  $$newNeighborhoods: Subject<any> = new Subject<any>();
  $$create:  Subject<any> = new Subject<any>();
  $$updates: Subject<any> = new Subject<any>();

  constructor() {
    this.neighborhoods = [];
    
    this.$neighborhoods = this.$$updates
        .scan((neighborhoods: Neighborhood[],
              operation: INeighborhoodsOperation) => {
          return operation(neighborhoods);
        }, [])
        .publishReplay(1)
        .refCount();
    
    this.$$create
        .map((neighborhood: Neighborhood) => {
          return (neighborhoods: Neighborhood[]) => {
            return neighborhoods.concat(neighborhood);
          };
        })
        .subscribe(this.$$updates);
    
    this.$$newNeighborhoods.subscribe(this.$$create);

    // this.socketAPI.onUpdateNeighborhood((name, amount) => {
    //   let neighborhood: Neighborhood = this.neighborhoods.filter(
    //       (n) => n.name == name
    //   )[0];
    //
    //   if (neighborhood) {
    //     neighborhood.setTTAmount(amount);
    //   }
    // })
  }


  pushNeighborhood(...names: string[]): void {
    // console.log('Names: ', typeof names, names);
    // using push instead of concat because concat()
    // constructs a new array and we don't want that.
    // also push() can push multiple elements (...)
    this.neighborhoods.push(
        ...names
            .map(name => new Neighborhood(name))
    );
  }

  add(neighborhood: Neighborhood): void {
    this.$$newNeighborhoods.next(neighborhood);
  }
  
  
  // updateNeighborhood(neighborhood: Neighborhood, amount: number) {
  //   this.socketAPI.updateNeighborhood(neighborhood.name, amount);
  // }
}