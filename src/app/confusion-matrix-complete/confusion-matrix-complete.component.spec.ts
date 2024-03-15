import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfusionMatrixCompleteComponent } from './confusion-matrix-complete.component';

describe('ConfusionMatrixCompleteComponent', () => {
  let component: ConfusionMatrixCompleteComponent;
  let fixture: ComponentFixture<ConfusionMatrixCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfusionMatrixCompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfusionMatrixCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
