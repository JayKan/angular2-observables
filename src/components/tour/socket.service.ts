import { Injectable } from '@angular/core';

@Injectable()
export class SocketService {
  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect('http://localhost:3000');
  }

  /**
   * @method updateNeighborhood
   * @param name {string}
   * @param TTAmount {number}
   * @description Take a change from current application
   * and propagate to others who are running the apps.
   */
  updateNeighborhood(name: string, TTAmount: number): void {
    this.socket.emit('updateNeighborhoods', {
      // dynamically computed property [name]
      [name]: TTAmount
    });
  }

  /**
   * @method updateNeighborhood
   * @param listener {Function}
   * @description When others update our app, we will have a listener be called with
   * the neighborhood name and the amount.
   */
  onUpdateNeighborhood(listener: Function): void {
    this.socket.on('updateNeighborhoods', data => {
      console.log('socketAPI(): ', data);
      Object.keys(data).forEach(
        (name) => listener(name, data[name])
      );
    });
  }

}