import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Neighborhood } from './neighborhood.model';
import { NeighborhoodService } from './neighborhood.service';
import { SocketService } from './socket.service';
import { PeopleCountComponent } from './people-count.component';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'tourist',
  template: `
  <div class="container">      
    <h4>Tourist on a Trip</h4>    
    <button class="btn btn-default btn-primary margin-bottom-20" (click)="add()">Add Another Tour</button>
    <div class="row" *ngFor="#neighborhood of $neighborhoods | async">
      <div class="col-md-12">
        <span class="value">
          <strong>Model value</strong>: {{ neighborhood.TTAmount }}
        </span>
        <people-count
         [tt-title]="neighborhood.name"
         [tt-amount]="neighborhood.TTAmount"
         (tt-change)="neighborhood.setTTAmount($event.amount)">
        </people-count>
      </div>
    </div>
  </div>
  `,
  directives: [PeopleCountComponent],
  providers: [NeighborhoodService, SocketService],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['components/tour/tour.component.css']
})

export class TouristComponent implements OnInit {
  neighborhoods: Neighborhood[];

  $neighborhoods: Observable<Neighborhood[]>;

  constructor(private _neighborhoodAPI: NeighborhoodService) {}

  ngOnInit(): void {
    this.neighborhoods = this._neighborhoodAPI.neighborhoods;
    this._neighborhoodAPI.pushNeighborhood(
        'South Amsterdam',
        'Central Amsterdam',
        'Netherlands'
    );

    this.$neighborhoods = this._neighborhoodAPI.$neighborhoods;

    setTimeout(() => {
      this._neighborhoodAPI.add( new Neighborhood('Jay Kan') );
      this._neighborhoodAPI.add( new Neighborhood('Michael Jordan') );
    });
  }

  add() {
    this._neighborhoodAPI.add( new Neighborhood('Another One'));
  }
}