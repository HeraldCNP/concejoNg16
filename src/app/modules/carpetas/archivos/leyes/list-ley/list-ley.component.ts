import { Component, OnInit, ViewChild, inject, signal } from '@angular/core';
import { CarpetaService } from '../../../service/carpeta.service';
import { ArchivoService } from '../../service/archivo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { URL_SERVICES } from 'src/app/config/config';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';
import { VerCarpetaComponent } from '../../components/ver-carpeta/ver-carpeta.component';

@Component({
  selector: 'app-list-ley',
  templateUrl: './list-ley.component.html',
  styleUrls: ['./list-ley.component.scss']
})
export class ListLeyComponent implements OnInit {

  private carpetaService = inject(CarpetaService)
  private archivoService = inject(ArchivoService);
  private router = inject(Router);
  private activeRouter = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  public readonly baseUrl: string = URL_SERVICES;

  carpetaId: any = '';
  carpetas = signal<any>(null);
  carpeta = signal<any>(null);

  buscarForm: any;

  constructor(private matDialog: MatDialog) {
    this.carpetaId = this.activeRouter.snapshot.paramMap.get('id');
    this.cargarCarpeta(this.carpetaId);

    this.buscarForm = this.fb.group({
      gestion: [''],
      numero: [''],
      detalle: [''],
    });
  }


  displayedColumn: string[] = ['numero', 'detalle', 'fechaAprobacion', 'fechaPromulgacion', 'fojas', 'archivo', 'observaciones', 'acciones'];
  dataSource!: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {

  }

  get form() {
    return this.buscarForm.controls;
  }

  obtener(form: any) {
    let tipo: string = 'leyes';
    let subTipo: string = '';
    let gestion: number = form.value.gestion;
    let numero: string = form.value.numero;
    let detalle: string = form.value.detalle;

    this.archivoService.buscarArchivos(tipo, subTipo, gestion, numero, detalle).subscribe(
      (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => console.log('HTTP Error', err),
      () => {

      }
    );
  }

  cargarCarpeta(id: string) {
    this.carpetaService.getCarpetaById(id)
      .subscribe({
        next: (data: any) => {
          this.carpeta.set(data);
          console.log('Carpeta', this.carpeta().archivos);
          this.dataSource = new MatTableDataSource(this.carpeta().archivos);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (message: any | undefined) => {
          console.log(message.error.message);
          Swal.fire('Error', message.error.message, 'error')
        }
      })
  }

  cargarCarpetas() {
    this.carpetaService.getAllCarpetas('')
      .subscribe({
        next: (data: any) => {
          this.carpetas.set(data);
          console.log('Carpetas', this.carpetas());
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


  deleteArchivoResolucion(id: any) {
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
        this.archivoService.deleteArchivo(id)
          .subscribe({
            next: () => {
              this.cargarCarpeta(this.carpetaId)
            },
            error: (message: string | undefined) => {
              Swal.fire('Error', message, 'error')
            }
          })
        Swal.fire({
          title: "¡Eliminado!",
          text: "Archivo ha sido eliminado.",
          icon: "success"
        });
        this.router.navigate(['carpetas/listLey', this.carpetaId]);
      }
    });

  }





  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  verArchivo(id: any) {
    console.log(id);
    this.archivoService.getArchivoById(id)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.openDialog(data);
        },
        error: (message: any | undefined) => {
          console.log(message.error.message);
          Swal.fire('Error', message.error.message, 'error')
        }
      })
  }

  openDialog(data: any) {
    let dialog = this.matDialog.open(VerCarpetaComponent, {
      width: '300px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '1000ms',
      data: {
        tipo: data.idCarpeta.tipo,
        subTipo: data.idCarpeta.subTipo,
        tomo: data.idCarpeta.tomo,
        lugar: data.idCarpeta.lugar,
        estante: data.idCarpeta.estante,
        fila: data.idCarpeta.fila,
      }
    });
    dialog.afterClosed().subscribe({
      next: (resp: any) => {
        if (resp == 'edited') {
          this.cargarCarpetas();
          Swal.fire('Bien', `Carpeta Editada Correctamente`, 'success')
        }

        if (resp == 'created') {
          this.cargarCarpetas();
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

  createArchivoLey(id: any) {
    this.router.navigate(['carpetas/createLey', id]);
  }

  editArchivoLey(id: any) {
    this.router.navigate(['carpetas/updateLey', id]);
  }

}
