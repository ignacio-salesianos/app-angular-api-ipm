import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesListPage } from './vehicles-list-page';

describe('VehiclesListPage', () => {
  let component: VehiclesListPage;
  let fixture: ComponentFixture<VehiclesListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclesListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
