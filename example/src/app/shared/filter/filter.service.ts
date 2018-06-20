import { Injectable, Input } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class FilterService {

  constructor() { }
  
  private stringFn (filter, itemValue) {
	    return itemValue.indexOf(filter) === 0;
  };
  
  private numberFn (filter, itemValue) {
		return itemValue === filter;
  };
  
  private filterType (typeFn) {	  
	return (filter, item) => {
	  return _.any(item.keys(), (key) => {
		return typeof(item[key]) === typeof(filter) && typeFn(filter, item[key]);
	  });	  
	}
  };
  
  private actions = {
	'string': this.filterType(this.stringFn),
	'int': this.filterType(this.numberFn),
	'dateTime': this.filterType(this.stringFn)
  };
  
  public Filter (items, filters,_quickSearch, _relevance) {
	let result = [];
    let quickSearch =  _quickSearch || false; //_quickSearch ? break : ();
	let hasRelevance = _relevance || false;
	
	_.each(items, (item) => {
		item.relevance = 0;		
		_.each(filters, (filter) => {
			if(this.actions[filter.type] && this.actions[typeof(filter)](filter, item)) {	
				result.push({
					relevance: hasRelevance && item.relevance ? item.relevance++ : 1,
					...item
				});
			};
		});
	});
	return result;
  }
}