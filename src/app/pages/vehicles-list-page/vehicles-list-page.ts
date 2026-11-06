import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleService } from '../../services/vehicle-service';
import { Vehicle } from '../../interfaces/vehicle-list-response';
import { VehicleItemComponent } from '../../components/vehicle-item-component/vehicle-item-component';
import { VehicleModal } from '../../components/vehicle-modal/vehicle-modal';

@Component({
  imports: [VehicleItemComponent],
  selector: 'app-vehicles-list-page',
  styleUrl: './vehicles-list-page.css',
  templateUrl: './vehicles-list-page.html',
})
export class VehiclesListPage implements OnInit {
  vehicleService = inject(VehicleService);
  private modalService = inject(NgbModal);
  vehicleList = signal<Vehicle[]>([]);

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe(resp => {
      this.vehicleList.set(resp.results);
    });
  }

  openVehicleModal(id: string) {
    this.vehicleService.getOne(id).subscribe(resp => {
      const modalRef = this.modalService.open(VehicleModal);
      modalRef.componentInstance.vehicle = resp;
    });
  }
}