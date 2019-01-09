import { Component, OnInit } from '@angular/core';
import { SetLabelsService } from "app/services/set-labels.service";

@Component({
  selector: 'labels-list',
  templateUrl: './labels-list.component.html',
  styleUrls: ['./labels-list.component.css']
})
export class LabelsListComponent implements OnInit {

  constructor(private setLabelsService:SetLabelsService) { }

  ngOnInit() {
  }

}
