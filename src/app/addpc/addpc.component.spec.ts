import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpcComponent } from './addpc.component';

describe('AddpcComponent', () => {
  let component: AddpcComponent;
  let fixture: ComponentFixture<AddpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
