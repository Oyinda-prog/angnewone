import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprofilepictureComponent } from './studentprofilepicture.component';

describe('StudentprofilepictureComponent', () => {
  let component: StudentprofilepictureComponent;
  let fixture: ComponentFixture<StudentprofilepictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentprofilepictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentprofilepictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
