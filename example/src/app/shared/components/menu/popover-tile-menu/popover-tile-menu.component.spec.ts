import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverTileMenuComponent } from './popover-tile-menu.component';

describe('PopoverTileMenuComponent', () => {
  let component: PopoverTileMenuComponent;
  let fixture: ComponentFixture<PopoverTileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverTileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
