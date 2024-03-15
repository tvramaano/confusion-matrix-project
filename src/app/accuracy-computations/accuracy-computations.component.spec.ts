import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccuracyComputationsComponent } from './accuracy-computations.component';

describe('AccuracyComputationsComponent', () => {
  let component: AccuracyComputationsComponent;
  let fixture: ComponentFixture<AccuracyComputationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccuracyComputationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccuracyComputationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
