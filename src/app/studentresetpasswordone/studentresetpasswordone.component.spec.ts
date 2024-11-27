import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentresetpasswordoneComponent } from './studentresetpasswordone.component';

describe('StudentresetpasswordoneComponent', () => {
  let component: StudentresetpasswordoneComponent;
  let fixture: ComponentFixture<StudentresetpasswordoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentresetpasswordoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentresetpasswordoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
