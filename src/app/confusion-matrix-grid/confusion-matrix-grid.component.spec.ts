import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfusionMatrixGridComponent } from './confusion-matrix-grid.component';

describe('ConfusionMatrixGridComponent', () => {
  let component: ConfusionMatrixGridComponent;
  let fixture: ComponentFixture<ConfusionMatrixGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfusionMatrixGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfusionMatrixGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
