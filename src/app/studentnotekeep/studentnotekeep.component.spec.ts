import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentnotekeepComponent } from './studentnotekeep.component';

describe('StudentnotekeepComponent', () => {
  let component: StudentnotekeepComponent;
  let fixture: ComponentFixture<StudentnotekeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentnotekeepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentnotekeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
