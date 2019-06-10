import { Component, OnInit } from '@angular/core';
import { NotificationService } from "app/services/notification.service";
import { DataManagerService } from "app/services/data-manager.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-manage-datasets',
  templateUrl: './manage-datasets.component.html',
  styleUrls: ['./manage-datasets.component.css']
})
export class ManageDatasetsComponent {
  datasets = [];
  displayedColumns: string[] = ['decription', 'date', 'show examples', 'update', 'delete'];

  constructor(
    public dataManagerService: DataManagerService,
    public notificationService:NotificationService,
    public dialog:MatDialog)
  {
    dataManagerService.getDatasets().subscribe((res:any[])=>{
      this.datasets = res;
      console.log(res);
    });
  }

  openDialog(component){
    const dialogRef = this.dialog.open(component, {
      width: '250px'
    });
  }

  deleteDataset(id){
    this.dataManagerService.deleteDataset(id)
      .subscribe((res)=>{
        this.notificationService.sendNotification('dataset deleted!');
        console.log('dataset deleted!', res)
        this.syncDatasets()
      });
  }

  syncDatasets(){
    this.dataManagerService.getDatasets().subscribe((res:any[])=>{
      this.datasets = res;
    });
  }

}
