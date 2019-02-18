import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManageLabelsService } from "app/services/manage-labels.service";
import { DatasetManagerService } from "app/services/dataset-manager.service";
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
    private datasetManagerService: DatasetManagerService,
    public notificationService:NotificationService,
    private router: Router
  ){}

  datasetForm = new FormGroup({
      description: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log('added');
    this.datasetManagerService.addDataset(this.datasetForm.value.description)
      .subscribe(dataset => {
        this.notificationService.sendNotification('dataset created!');
        this.router.navigate(['/manage-datasets'])
      })

  }
}
