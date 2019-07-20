import { Component, OnInit } from '@angular/core';
import { ManageLabelsService } from "app/services/manage-labels.service";

@Component({
  selector: 'labels-list',
  templateUrl: './labels-list.component.html',
  styleUrls: ['./labels-list.component.css']
})
export class LabelsListComponent implements OnInit {

  constructor(private manageLabelsService:ManageLabelsService) { }

  ngOnInit() {
  }

}
