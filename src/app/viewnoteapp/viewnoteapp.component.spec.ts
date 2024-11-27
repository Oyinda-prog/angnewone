import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnoteappComponent } from './viewnoteapp.component';

describe('ViewnoteappComponent', () => {
  let component: ViewnoteappComponent;
  let fixture: ComponentFixture<ViewnoteappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewnoteappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewnoteappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
