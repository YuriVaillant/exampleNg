import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortingRowComponent } from './table-sorting-row.component';

describe('TableSortingRowComponent', () => {
  let component: TableSortingRowComponent;
  let fixture: ComponentFixture<TableSortingRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSortingRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSortingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
