import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildeoneComponent } from './childeone.component';

describe('ChildeoneComponent', () => {
  let component: ChildeoneComponent;
  let fixture: ComponentFixture<ChildeoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildeoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
