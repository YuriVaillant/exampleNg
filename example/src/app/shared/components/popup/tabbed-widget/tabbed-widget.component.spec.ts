import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedWidgetComponent } from './tabbed-widget.component';

describe('TabbedWidgetComponent', () => {
  let component: TabbedWidgetComponent;
  let fixture: ComponentFixture<TabbedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
