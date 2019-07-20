import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-set-dataset-stepper',
  templateUrl: './set-dataset-stepper.component.html',
  styleUrls: ['./set-dataset-stepper.component.css']
})
export class SetDatasetStepperComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
    if(this.data.data.length > 64)

  }

}
