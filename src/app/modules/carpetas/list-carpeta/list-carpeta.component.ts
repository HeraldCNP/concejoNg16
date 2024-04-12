import { Component, Input, OnInit, ViewChild, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarpetaService } from '../service/carpeta.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { FormCarpetaComponent } from '../components/form-carpeta/form-carpeta.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarMenuComponent } from 'src/app/_metronic/layout/components/sidebar/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-list-carpeta',
  templateUrl: './list-carpeta.component.html',
  styleUrls: ['./list-carpeta.component.scss']
})
export class ListCarpetaComponent implements OnInit {

  constructor(private matDialog: MatDialog) {

  }


  private carpetaService = inject(CarpetaService)
  private router = inject(Router);



  displayedColumn: string[] = ['gestion', 'nombre', 'tomo', 'tipo', 'subTipo', 'lugar', 'estante', 'fila', 'observaciones', 'acciones'];
  dataSource!: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  carpetas = signal<any>(null);
  flag:string = '';
  cantidad:number = 0;

  ngOnInit(): void {
    this.carpetaService.termino.subscribe(
      termino => {
        this.flag = termino;
        this.cargarCarpetas(termino);
      }
    );
    this.cargarCarpetas(this.flag);
  }

  cargarCarpetas(flag:string) {
    this.carpetaService.getAllCarpetas(flag)
      .subscribe({
        next: (data: any) => {
          console.log('Carpetas', data);
          this.cantidad = data.totalDocuments;
          this.carpetas.set(data.carpetas);
          this.dataSource = new MatTableDataSource(this.carpetas());
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (message: any | undefined) => {
          console.log(message.error.message);
          Swal.fire('Error', message.error.message, 'error')
        }
      })
  }

  createCarpeta() {
    this.openDialog(0, 'Crear Carpeta')
  }

  editCarpeta(id: any) {
    this.openDialog(id, 'Editar Carpeta')
  }

  // addTipo(id:string){
  //   this.openDialog2(id, 'Añadir Sub Tipo')
  // }

  deleteCarpeta(id: any) {
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
        this.carpetaService.deleteCarpeta(id)
          .subscribe({
            next: () => {
              this.cargarCarpetas('');
            },
            error: (message: string | undefined) => {
              Swal.fire('Error', message, 'error')
            }
          })
        Swal.fire({
          title: "¡Eliminado!",
          text: "Carpeta ha sido eliminado.",
          icon: "success"
        });

      }
    });

  }

  openDialog(id: any, title: any) {
    let dialog = this.matDialog.open(FormCarpetaComponent, {
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
          this.cargarCarpetas('');
          Swal.fire('Bien', `Carpeta Editada Correctamente`, 'success')
        }

        if (resp == 'created') {
          this.cargarCarpetas('');
          Swal.fire('Bien', `Carpeta Creada Correctamente`, 'success')
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


  listArchivo(row: any){
    switch (row.tipo) {
      case 'resoluciones':
        console.log(row.tipo);
        this.router.navigate(['carpetas/listResolucion', row._id]);
        break;
      case 'leyes':
        console.log(row.tipo);
        this.router.navigate(['carpetas/listLey', row._id]);
        break;

      default:
        break;
    }

  }

  createArchivo(row: any) {

    switch (row.tipo) {
      case 'resoluciones':
        console.log(row.tipo);
        this.router.navigate(['carpetas/createResolucion', row._id]);
        break;
      case 'leyes':
        console.log(row.tipo);
        this.router.navigate(['carpetas/createLey', row._id]);
        break;
      default:
        break;


    }
  }
}
