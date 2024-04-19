import { Component, ViewChild, inject, OnInit, signal } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';
import { CarpetaService } from 'src/app/modules/carpetas/service/carpeta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  carpetaService = inject(CarpetaService);


  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };
  @ViewChild('modal') private modalComponent: ModalComponent;
  constructor() {
    this.carpetaService.totales()
    .subscribe({
      next: (data: any) => {
        // console.log('totales', data);
        this.totales.set(data);
        console.log('totales', this.totales());

      },
      error: (message: any | undefined) => {
        console.log(message.error.message);
        Swal.fire('Error', message.error.message, 'error')
      },
    })
  }

  async openModal() {
    return await this.modalComponent.open();
  }

  totales = signal<any>({});

  ngOnInit(): void {
    // this.cargarTotales();
  }

  cargarTotales() {

  }

}
