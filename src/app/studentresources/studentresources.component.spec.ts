import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentresourcesComponent } from './studentresources.component';

describe('StudentresourcesComponent', () => {
  let component: StudentresourcesComponent;
  let fixture: ComponentFixture<StudentresourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentresourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
