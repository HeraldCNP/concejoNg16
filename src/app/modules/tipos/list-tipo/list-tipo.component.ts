import { Component, OnInit, ViewChild, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TipoService } from '../service/tipo.service';
import Swal from 'sweetalert2';
import { FormSubTipoComponent } from '../components/form-sub-tipo/form-sub-tipo.component';
import { FormTipoComponent } from '../components/form-tipo/form-tipo.component';


@Component({
  selector: 'app-list-tipo',
  templateUrl: './list-tipo.component.html',
  styleUrls: ['./list-tipo.component.scss']
})
export class ListTipoComponent implements OnInit {

  private tipoService = inject(TipoService)


  carpetaId: any = '';

  constructor(private matDialog: MatDialog) {

  }



  displayedColumn: string[] = ['nombre', 'subTipos', 'acciones'];
  dataSource!: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tipos = signal<any>(null);



  ngOnInit(): void {
    this.cargarTipos();
  }

  cargarTipos() {
    this.tipoService.getAllTipos()
      .subscribe({
        next: (data: any) => {
          this.tipos.set(data);
          console.log(this.tipos());
          this.dataSource = new MatTableDataSource(this.tipos());
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (message: any | undefined) => {
          console.log(message.error.message);
          Swal.fire('Error', message.error.message, 'error')
        }
      })
  }

  createTipo() {
    this.openDialog(0, 'Crear Tipo')
  }

  editTipo(id: any) {
    this.openDialog(id, 'Editar Tipo')
  }

  addTipo(id:string){
    this.openDialog2(id, 'Añadir Sub Tipo')
  }

  deleteTipo(id: any) {
    Swal.fire({
      title: "Estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoService.deleteTipo(id)
        .subscribe({
          next: () => {
            this.cargarTipos();
          },
          error: (message: string | undefined) => {
            Swal.fire('Error', message, 'error')
          }
        })
        Swal.fire({
          title: "¡Eliminado!",
          text: "Tipo ha sido eliminado.",
          icon: "success"
        });
      }
    });

  }

  openDialog(id: any, title: any) {
    let dialog = this.matDialog.open(FormTipoComponent, {
      width: '600px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '1000ms',
      data: {
        id: id,
        title: title,
      }
    });
    dialog.afterClosed().subscribe({
      next: (resp: any) => {
        if (resp == 'edited') {
          this.cargarTipos();
          Swal.fire('Bien', `Tipo Editado Correctamente`, 'success')
        }

        if(resp == 'created'){
          this.cargarTipos();
          Swal.fire('Bien', `Tipo Creado Correctamente`, 'success')
        }
      },
      error: (resp: any) => {
        console.log(resp.error.message);
        // Swal.fire('Error', resp, 'error')
        // Swal.fire('Error', resp, 'error')
      }
    })
  }

  openDialog2(id: any, title: any) {
    let dialog = this.matDialog.open(FormSubTipoComponent, {
      width: '600px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '1000ms',
      data: {
        id: id,
        title: title,
      }
    });
    dialog.afterClosed().subscribe({
      next: (resp: any) => {
        if (resp == 'edited') {
          this.cargarTipos();
          Swal.fire('Bien', `Beneficiario Editado Correctamente`, 'success')
        }

        if(resp == 'created'){
          this.cargarTipos();
          Swal.fire('Bien', `Sub Tipo Creado Correctamente`, 'success')
        }
      },
      error: (resp: any) => {
        console.log(resp.error.message);
        // Swal.fire('Error', resp, 'error')
        // Swal.fire('Error', resp, 'error')
      }
    })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteSubTipo(id: any, item:any) {
    Swal.fire({
      title: "Estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, bórralo!"
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(item);

        let data = {
          subTipo: item,
        }
        this.tipoService.deleteSubTipo(id, data)
        .subscribe({
          next: () => {
            this.cargarTipos();
          },
          error: (message: string | undefined) => {
            Swal.fire('Error', message, 'error')
          }
        })
        Swal.fire({
          title: "¡Eliminado!",
          text: "Sub Tipo ha sido eliminado.",
          icon: "success"
        });
      }
    });

  }
}
