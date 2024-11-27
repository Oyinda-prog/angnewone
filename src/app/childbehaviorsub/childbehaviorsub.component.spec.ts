import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbehaviorsubComponent } from './childbehaviorsub.component';

describe('ChildbehaviorsubComponent', () => {
  let component: ChildbehaviorsubComponent;
  let fixture: ComponentFixture<ChildbehaviorsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildbehaviorsubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildbehaviorsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
