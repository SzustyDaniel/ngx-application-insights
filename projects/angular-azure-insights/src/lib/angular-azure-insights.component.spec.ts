import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAzureInsightsComponent } from './angular-azure-insights.component';

describe('AngularAzureInsightsComponent', () => {
  let component: AngularAzureInsightsComponent;
  let fixture: ComponentFixture<AngularAzureInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAzureInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAzureInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
