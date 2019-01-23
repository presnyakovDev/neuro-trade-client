import { Component, OnInit } from '@angular/core';
import { DatasetManagerService } from "app/services/dataset-manager.service";

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

  addDataset(description:string){
    datasetManagerService.addDataset(description).subscribe((res)=>{
      console.log('dataset added!')
    });
  }


}
