import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyNumberComponent } from './lucky-number.component';

describe('LuckyNumberComponent', () => {
  let component: LuckyNumberComponent;
  let fixture: ComponentFixture<LuckyNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuckyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
