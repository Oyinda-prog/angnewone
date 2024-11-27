import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentreceiptuploadsComponent } from './studentreceiptuploads.component';

describe('StudentreceiptuploadsComponent', () => {
  let component: StudentreceiptuploadsComponent;
  let fixture: ComponentFixture<StudentreceiptuploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentreceiptuploadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentreceiptuploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
