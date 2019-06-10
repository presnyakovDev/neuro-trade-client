import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'auto-table',
  templateUrl: './auto-table.component.html',
  styleUrls: ['./auto-table.component.css']
})
export class AutoTableComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }
}
