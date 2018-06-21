import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-sorting-row',
  templateUrl: './table-sorting-row.component.html',
  styleUrls: ['./table-sorting-row.component.css']
})
export class TableSortingRowComponent implements OnInit {

  constructor() { }
  
  @Input()
  public titles;
  
  @Input()
  public values;
  
  ngOnInit() {
  }
}
