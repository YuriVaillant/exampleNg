import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit {

  constructor() { }

  @Input()
  public titles;
  
  ngOnInit() {
	  
  }

}
