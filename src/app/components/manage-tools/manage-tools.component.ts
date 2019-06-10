import { Component, OnInit } from '@angular/core';
import { StockApiService } from "app/services/stock-api.service";
import { PredictionsService } from "app/services/predictions.service";
import { ManageLabelsService } from "app/services/manage-labels.service";
import { CommonToolsService } from "app/services/common-tools.service";
import { StockParamsService } from "app/services/stock-params.service";
import { DataManagerService } from "app/services/data-manager.service";
import { NotificationService } from "app/services/notification.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-tools',
  templateUrl: './manage-tools.component.html',
  styleUrls: ['./manage-tools.component.css']
})

export class ManageToolsComponent implements OnInit {
  stocks = {};
  data;
  constructor(
    private stockApiService: StockApiService,
    private predictionsService: PredictionsService,
    private manageLabelsService: ManageLabelsService,
    private commonToolsService: CommonToolsService,
    private stockParamsService: StockParamsService,
    private dataManagerService: DataManagerService,
    public notificationService:NotificationService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  getStocks(){
    this.stockApiService.getStockData(this.stockParamsService.selectedValue.stockName, this.stockParamsService.selectedValue.period)
    .subscribe((data:Array<any>)=>{
      this.data = data;
      this.stocks = this.commonToolsService.dataTransformForStockPrice(this.stockApiService.mapResults(data));
      this.manageLabelsService.setLength(data.length)
    })
    console.log(this.manageLabelsService.getLabels());
  }

  saveExamples(){
    let results = [...this.data]
    this.manageLabelsService.getLabels().forEach(
      function(value, index){
        results[index].label = value;
      }
    )
    this.dataManagerService.addExamples(results, this.route.snapshot.paramMap.get('id'))
      .subscribe(examples => {
        this.notificationService.sendNotification('examples added!');
        this.router.navigate(['/manage-datasets'])
      })
    console.log(results);

  }

  ngOnInit() {}

}
