import * as _ from 'lodash';

import { TableOverviewComponent } from './screens/table/table-overview/table-overview.component';
import { TableDetailComponent } from './screens/table/table-detail/table-detail.component';
import { TableNewComponent } from './screens/table/table-new/table-new.component';

import { GraphOverviewComponent } from './screens/graph/graph-overview/graph-overview.component';
import { GraphDetailComponent } from './screens/graph/graph-detail/graph-detail.component';
import { GraphNewComponent } from './screens/graph/graph-new/graph-new.component';
import { TableComponent } from './screens/table/table/table.component';

export class APP_STATES {
	
	public static MENU = [{
	  name:'table',
	  icon:'table',
	  url:'/table',
		component:TableComponent
	},{
		name:'overview',
		icon:'table',
		url:'/overview',
		component:TableOverviewComponent
	},{
		name:'table.detail',
	  icon:'table',
	  url:'/id/:tableScreenId',
	  component:TableDetailComponent
	},{
		name:'table.new',
	  icon:'plus',
	  url:'/new',
	  component:TableNewComponent
	},{
	  name:'graph',
	  icon:'graph',
	  url:'/graph'
	},{
	  name:'graph.detail',
	  icon:'plus',
	  url:'/id/:graphScreenId',
	  component:GraphDetailComponent
	},{
	  name:'graph.new',
	  icon:'plus',
	  url:'/new',
	  component:GraphNewComponent
	}];
}
