import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentclassmatesComponent } from './studentclassmates.component';

describe('StudentclassmatesComponent', () => {
  let component: StudentclassmatesComponent;
  let fixture: ComponentFixture<StudentclassmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentclassmatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentclassmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
