import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreceiptpageComponent } from './adminreceiptpage.component';

describe('AdminreceiptpageComponent', () => {
  let component: AdminreceiptpageComponent;
  let fixture: ComponentFixture<AdminreceiptpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminreceiptpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminreceiptpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
