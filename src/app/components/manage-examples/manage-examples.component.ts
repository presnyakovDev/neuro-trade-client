import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataManagerService } from "app/services/data-manager.service";

@Component({
  selector: 'app-manage-examples',
  templateUrl: './manage-examples.component.html',
  styleUrls: ['./manage-examples.component.css']
})
export class ManageExamplesComponent implements OnInit {
  examples = [];
  displayedColumns: string[] = [];
  id:any;

  constructor(private route: ActivatedRoute, public dataManagerService: DataManagerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.dataManagerService.getExamples(this.id).subscribe((res:any[])=>{
      this.examples = res;
      console.log(res);
    });
  }

}
