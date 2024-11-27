import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcourseupdateComponent } from './studentcourseupdate.component';

describe('StudentcourseupdateComponent', () => {
  let component: StudentcourseupdateComponent;
  let fixture: ComponentFixture<StudentcourseupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentcourseupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentcourseupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
