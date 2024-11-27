import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentupdatepasswordComponent } from './studentupdatepassword.component';

describe('StudentupdatepasswordComponent', () => {
  let component: StudentupdatepasswordComponent;
  let fixture: ComponentFixture<StudentupdatepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentupdatepasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentupdatepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
