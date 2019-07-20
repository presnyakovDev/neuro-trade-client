import { Component, OnInit, Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'auto-table',
  templateUrl: './auto-table.component.html',
  styleUrls: ['./auto-table.component.css']
})
export class AutoTableComponent implements OnInit {
  @Input() data;
  columnsNames : string[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.data.length){
      console.log(this.data)
      this.columnsNames = this.getColumnNames(this.data)
    }
  }

  getColumnNames(data:any[]){
    return Object.keys(data[0])
  }

}
