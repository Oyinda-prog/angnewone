import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcomponetComponent } from './editcomponet.component';

describe('EditcomponetComponent', () => {
  let component: EditcomponetComponent;
  let fixture: ComponentFixture<EditcomponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditcomponetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
