import * as _ from 'lodash';

export class APP_STATES {
	
	public static MENU = [{
	  name:'table',
	  icon:'table',
	  url:'table/overview'
	},{
	  name:'table.detail',
	  icon:'table',
	  url:'table/:tableScreenId'
	},{
	  name:'table.new',
	  icon:'plus',
	  url:'table/new'	  
	},{
	  name:'graph',
	  icon:'table',
	  url:'graph/overview'
	},{
	  name:'graph.detail',
	  icon:'plus',
	  url:'graph/:graphScreenId'
	},{
	  name:'graph.new',
	  icon:'plus',
	  url:'graph/new'
	}];	 
	  
}
