import { Injectable, Input } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class FilterService {

  constructor() { }

  @Input()
  public List = []; 
  
  private stringFn (filter, item) {
	    return _.contains(item[key], filter);
  };
  
  private numberFn (filter, item) {
		return item[key] === filter);
  };
  
  private filterType (typeFn) {	  
	return (filter, item) => {
	  return _.any(item.keys(), (key) => {
		return typeof(item[key]) === typeof(filter) && typeFn(filter, item[key]);
	  };	  
	}
  };
  
  private actions = {
	'string': filterType(stringFn),
	'int': filterType(numberFn),
	'dateTime': dateTimeFilter
  };
  
  public Filter (filters,_quickSearch, _relevance) {
	let result = [];
    let quickSearch =  _quickSearch | false; //_quickSearch ? break : ();
	let hasRelevance = _relevance |false;
	
	_each(List, (item) => {	
		if(options[filter.type] && options[typeof(filter)](filter, item)) {	
			result.push({
				relevance: hasRelevance && item.relevance ? item.relevance++ : 1;
				item...
			});
		};
	});		
	return result;
  }
}
