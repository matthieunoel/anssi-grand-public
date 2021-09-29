import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpcComponent } from './viewpc.component';

describe('ViewpcComponent', () => {
  let component: ViewpcComponent;
  let fixture: ComponentFixture<ViewpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
