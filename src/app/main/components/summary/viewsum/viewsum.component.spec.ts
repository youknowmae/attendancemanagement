import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsumComponent } from './viewsum.component';

describe('ViewsumComponent', () => {
  let component: ViewsumComponent;
  let fixture: ComponentFixture<ViewsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewsumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
