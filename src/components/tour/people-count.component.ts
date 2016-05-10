import { Component, OnInit, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators } from '@angular/common';

@Component({
  selector: 'people-count',
  template: `  
    <div class="panel panel-default">
      <div class="panel-heading">
        {{ title }}
      </div>
      <div class="panel-body">
        <p>How many Tourists on a trip do you see?</p>
        <form [ngFormModel]="peopleCountForm">
          <input type="range" ngControl="amount" [step]="amount" />
          Value: {{ getAmount }}
        </form>
      </div>
      
      <div class="panel-footer">
        <button type="button" class="btn btn-success" (click)="reportAmount()">Report</button>
      </div>
    </div>
  `,
  inputs: ['title: tt-title', 'amount: tt-amount'],
  // properties: ['title: tt-title', 'amount: tt-amount'],
  outputs: ['amountChange: tt-change'],
  directives: [FORM_DIRECTIVES],
  encapsulation: ViewEncapsulation.None
})

export class PeopleCountComponent implements OnInit {
  title: string;
  amount: string;

  amountControl: Control = new Control('');
  peopleCountForm: ControlGroup;

  amountChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _builder: FormBuilder) {}

  ngOnInit(): void {
    this.peopleCountForm = this._builder.group({
      'amount': [0, Validators.required]
    });
  }

  reportAmount(): void {
    this.amountChange.emit({
      amount: this.peopleCountForm.value.amount
    });
  }
  
  get getAmount(): string {
    return JSON.stringify(this.peopleCountForm.value.amount);
  }
}
