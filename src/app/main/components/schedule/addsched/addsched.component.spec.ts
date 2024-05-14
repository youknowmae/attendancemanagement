import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddschedComponent } from './addsched.component';

describe('AddschedComponent', () => {
  let component: AddschedComponent;
  let fixture: ComponentFixture<AddschedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddschedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddschedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
