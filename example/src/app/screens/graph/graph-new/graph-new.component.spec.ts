import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphNewComponent } from './graph-new.component';

describe('GraphNewComponent', () => {
  let component: GraphNewComponent;
  let fixture: ComponentFixture<GraphNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
