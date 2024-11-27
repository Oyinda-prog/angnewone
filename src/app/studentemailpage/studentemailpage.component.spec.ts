import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentemailpageComponent } from './studentemailpage.component';

describe('StudentemailpageComponent', () => {
  let component: StudentemailpageComponent;
  let fixture: ComponentFixture<StudentemailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentemailpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentemailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
