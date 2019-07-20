import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-dataset',
  templateUrl: './add-dataset.component.html',
  styleUrls: ['./add-dataset.component.css']
})
export class AddDatasetComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddDatasetComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

}
