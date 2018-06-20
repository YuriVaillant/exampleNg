import { Injectable } from '@angular/core';
import { APP_STATES } from '../../app.states';

@Injectable()
export class MenuService {

  constructor() { }

	private getTableScreens() {
		return [{
		  name: 'influx',
		  icon: 'cross',
		  uri: 'table',
		  id: 'CATAGGATA'
		  
	  }]		
	}
	
	private getGraphScreens() {
		return [{
		name:'influx',
		icon:'graph',
		uri:'graph',
		  id: 'AGCACGATG'
	  }]	
	}
	
	
	
	public getLeftButtons() {
		
	return [{
	  name:'table',
	  icon:'table',
	  uri:'table.overview',
	  children: [... this.getTableScreens(),{
		name:'create new',
		icon:'plus',
		uri:'table.new',		  
	  }]
  }, {
	  name:'graph',
	  icon:'graph',
	  uri:'graph.overview',
	  children: [... this.getGraphScreens(),{
		name:'create new',
		icon:'plus',
		uri:'graph.new',		  
	  }]
  }];
		
		
	}
}
