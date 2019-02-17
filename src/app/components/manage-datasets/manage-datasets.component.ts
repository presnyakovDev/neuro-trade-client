import { Component, OnInit } from '@angular/core';
import { DatasetManagerService } from "app/services/dataset-manager.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-manage-datasets',
  templateUrl: './manage-datasets.component.html',
  styleUrls: ['./manage-datasets.component.css']
})
export class ManageDatasetsComponent {
  datasets = [];
  displayedColumns: string[] = ['decription', 'date', 'update', 'delete'];

  constructor(public datasetManagerService: DatasetManagerService, public dialog:MatDialog) {
    datasetManagerService.getDatasets().subscribe((res:any[])=>{
      console.log(res)
      this.datasets = res;
    });
  }

  openDialog(component){
    const dialogRef = this.dialog.open(component, {
      width: '250px'
    });
  }

  addDataset(description:string){
    /*datasetManagerService.addDataset(description).subscribe((res)=>{
      console.log('dataset added!')
    });*/
  }

  deleteDataset(id){
    this.datasetManagerService.deleteDataset(id)
      .subscribe((res)=>{
        console.log('dataset deleted!', res)
      });
  }


}
