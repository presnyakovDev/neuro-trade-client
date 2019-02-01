import { Component, OnInit } from '@angular/core';
import { DatasetManagerService } from "app/services/dataset-manager.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATAs} from '@angular/material';


@Component({
  selector: 'app-manage-datasets',
  templateUrl: './manage-datasets.component.html',
  styleUrls: ['./manage-datasets.component.css']
})
export class ManageDatasetsComponent {
  datasets = [];
  displayedColumns: string[] = ['decription', 'date', 'update', 'delete'];

  constructor(datasetManagerService: DatasetManagerService) {
    datasetManagerService.getDatasets().subscribe((res:any[])=>{
      console.log(res)
      this.datasets = res;
    });
  }

  openDialog(public dialog: MatDialog){
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    }
  }

  addDataset(description:string){
    datasetManagerService.addDataset(description).subscribe((res)=>{
      console.log('dataset added!')
    });
  }


}
