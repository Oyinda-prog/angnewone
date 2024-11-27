import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminresoursesComponent } from './adminresourses.component';

describe('AdminresoursesComponent', () => {
  let component: AdminresoursesComponent;
  let fixture: ComponentFixture<AdminresoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminresoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminresoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
