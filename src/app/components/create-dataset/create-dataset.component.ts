import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManageLabelsService } from "app/services/manage-labels.service";
import { DataManagerService } from "app/services/data-manager.service";
import { NotificationService } from "app/services/notification.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-dataset',
  templateUrl: './create-dataset.component.html',
  styleUrls: ['./create-dataset.component.css']
})

export class CreateDatasetComponent {
  constructor(
    private manageLabelsService:ManageLabelsService,
    private dataManagerService: DataManagerService,
    public notificationService:NotificationService,
    private router: Router
  ){}

  datasetForm = new FormGroup({
      description: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log('added');
    this.dataManagerService.addDataset(this.datasetForm.value.description)
      .subscribe(dataset => {
        this.notificationService.sendNotification('dataset created!');
        this.router.navigate(['/manage-datasets'])
      })

  }
}
