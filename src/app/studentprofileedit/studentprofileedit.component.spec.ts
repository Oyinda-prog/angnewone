import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprofileeditComponent } from './studentprofileedit.component';

describe('StudentprofileeditComponent', () => {
  let component: StudentprofileeditComponent;
  let fixture: ComponentFixture<StudentprofileeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentprofileeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentprofileeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
