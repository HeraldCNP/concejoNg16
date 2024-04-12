import { Component, OnInit, inject } from '@angular/core';
import { CarpetaService } from 'src/app/modules/carpetas/service/carpeta.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }

  private carpetaService = inject(CarpetaService)
  ngOnInit(): void {
  }

  enviarValor(valor: string) {
    this.carpetaService.termino.emit(valor);
  }
}
