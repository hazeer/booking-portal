import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-esd-plan-my-event',
  templateUrl: './esd-plan-my-event.component.html',
  styleUrls: ['./esd-plan-my-event.component.scss']
})
export class EsdPlanMyEventComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selectedDate: any;
  name = 'Angular 6';

  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
