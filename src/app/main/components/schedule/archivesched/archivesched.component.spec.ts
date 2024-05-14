import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveschedComponent } from './archivesched.component';

describe('ArchiveschedComponent', () => {
  let component: ArchiveschedComponent;
  let fixture: ComponentFixture<ArchiveschedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveschedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveschedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
