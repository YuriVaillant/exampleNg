import { Component, OnInit, Input,  trigger, state, style, transition, animate } from '@angular/core';
import { TargetState, StateService } from '@uirouter/core';
import { MenuService } from '../../../entities/menu.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css'],
   animations : [
    trigger('hoverState', [
      state('false', style({
        transform: 'opacity(0)'
      })),
      state('true',   style({
        transform: 'opacity(1)'
      })),
      transition('false <=> true', animate('1000ms ease-in-out'))
    ])
  ]
})
export class LeftMenuComponent implements OnInit {

  constructor(public menuService:MenuService,private $state: StateService) { }
  
  private _buttons =  this.menuService.getLeftButtons()
  private activeButton;
  
  @Input()
  set buttons(buttons:Array<any>) {
	  this._buttons = buttons || [];	  
  }
  
  get buttons(): Array<any> { return this._buttons}
  
  onClick(button) {
	  this.$state.go(button.uri);
  }
  
  onMouseEnter(button) {
	  if(this.activeButton) {
		this.activeButton.hasHover = false;
		this.activeButton.isOpen = false;
		clearTimeout(this.activeButton.timer)
	  }
	  this.activeButton = button;
	  this.activeButton.hasHover = true;
	  this.activeButton.isOpen = true;
  }
  
  onMouseLeave(button) {
	  this.activeButton.hasHover = false;
	  this.activeButton.timer = setTimeout(() => { 
		this.activeButton.isOpen = false;	  
	  }, 500);
  }
	
	public gotoPage(href: string) {
	}
  
  ngOnInit() {
  }

}
