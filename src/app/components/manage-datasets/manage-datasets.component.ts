import { Component, OnInit } from '@angular/core';
import { NotificationService } from "app/services/notification.service";
import { DatasetManagerService } from "app/services/dataset-manager.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-manage-datasets',
  templateUrl: './manage-datasets.component.html',
  styleUrls: ['./manage-datasets.component.css']
})
export class ManageDatasetsComponent {
  datasets = [];
  displayedColumns: string[] = ['decription', 'date', 'add examples', 'update', 'delete'];

  constructor(public datasetManagerService: DatasetManagerService, public notificationService:NotificationService, public dialog:MatDialog) {
    datasetManagerService.getDatasets().subscribe((res:any[])=>{
      this.datasets = res;
    });
  }

  openDialog(component){
    const dialogRef = this.dialog.open(component, {
      width: '250px'
    });
  }

  deleteDataset(id){
    this.datasetManagerService.deleteDataset(id)
      .subscribe((res)=>{
        this.notificationService.sendNotification('dataset deleted!');
        console.log('dataset deleted!', res)
        this.syncDatasets()
      });
  }

  syncDatasets(){
    this.datasetManagerService.getDatasets().subscribe((res:any[])=>{
      this.datasets = res;
    });
  }

}
