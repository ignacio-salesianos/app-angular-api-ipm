import { Component, input, output } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle-list-response';

@Component({
  imports: [],
  selector: 'app-vehicle-item-component',
  styleUrl: './vehicle-item-component.css',
  templateUrl: './vehicle-item-component.html',
})
export class VehicleItemComponent {
  vehicle = input<Vehicle>();
  vehicleClicked = output<string>();

  getVehicleId(): string {
    return this.vehicle()?.url.split('/')[5]!;
  }

  emitVehicleClicked() {
    this.vehicleClicked.emit(this.getVehicleId());
  }
}