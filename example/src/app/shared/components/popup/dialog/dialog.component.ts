import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input()
  public title: string;
  
  @Input()
  public message:string;
  
  @Input()
  public options:Array<DialogOption>;
  
  
  constructor() { }

  ngOnInit() {
  }

}
