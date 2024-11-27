import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentresetpasswordtwoComponent } from './studentresetpasswordtwo.component';

describe('StudentresetpasswordtwoComponent', () => {
  let component: StudentresetpasswordtwoComponent;
  let fixture: ComponentFixture<StudentresetpasswordtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentresetpasswordtwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentresetpasswordtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
