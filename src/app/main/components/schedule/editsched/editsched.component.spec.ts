import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditschedComponent } from './editsched.component';

describe('EditschedComponent', () => {
  let component: EditschedComponent;
  let fixture: ComponentFixture<EditschedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditschedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditschedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
