import { Component, OnInit } from '@angular/core';
import { NotificationService } from "app/services/notification.service";
import { DataManagerService } from "app/services/data-manager.service";
import { ConfirmDialogService } from "app/services/confirm-dialog.service";
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
    public confirmDialogService:ConfirmDialogService,
    public dialog:MatDialog)
  {
    dataManagerService.getDatasets().subscribe((result:any[])=>{
      this.datasets = result;
      console.log(result);
    });
  }

  openDialog(component){
    const dialogRef = this.dialog.open(component, {
      width: '250px'
    });
  }

  deleteDataset(name, id){
    this.confirmDialogService.openDialogToConfirmDelete(name)
      .subscribe((result)=> {
        if(result){
          this.dataManagerService.deleteDataset(id)
            .subscribe((result)=>{
              this.notificationService.sendNotification('dataset deleted!');
              console.log('dataset deleted!', result)
              this.syncDatasets()
            });
        }
      })
  }

  syncDatasets(){
    this.dataManagerService.getDatasets().subscribe((result:any[])=>{
      this.datasets = result;
    });
  }

}
