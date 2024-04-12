import { Component, Inject, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarpetaService } from '../../service/carpeta.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoService } from '../../../tipos/service/tipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-carpeta',
  templateUrl: './form-carpeta.component.html',
  styleUrls: ['./form-carpeta.component.scss']
})
export class FormCarpetaComponent implements OnInit {
  private fb = inject(FormBuilder);
  private carpetaService = inject(CarpetaService);
  private tipoService = inject(TipoService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<FormCarpetaComponent>) {

  }

  editData: any;

  inputData: any;

  closeDialog(data: any) {
    this.ref.close(data);
  }


  ngOnInit(): void {
    this.inputData = this.data;
    console.log(this.inputData);
    if (this.inputData.id != 0) {
      this.loadCarpetaForId(this.inputData.id);
    }
    this.cargarTipos();
  }
  // displayedColumn: string[] = ['gestion', 'nombre', 'tomo', 'tipo', 'subTipo', 'lugar', 'ubicacion', 'acciones'];
  public carpetaForm: FormGroup = this.fb.group({
    gestion: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    tomo: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    subTipo: [''],
    lugar: ['', [Validators.required]],
    estante: [''],
    fila: [''],
    observaciones: [''],
  })

  get form() {
    return this.carpetaForm.controls;
  }

  carpetas = signal<any>(null);
  tipos = signal<any>(null);
  subTipos = signal<any>(null);

  cargarTipos() {
    this.tipoService.getAllTipos()
      .subscribe({
        next: (data: any) => {
          this.tipos.set(data);
          console.log(this.tipos());
        },
        error: (message: string | undefined) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }

  selectTipo(tipo: any) {
    if(tipo.subTipo.length != 0){
      this.subTipos.set(tipo.subTipo);
    }else{
      this.subTipos.set(null);
    }
  }
  loadCarpetaForId(id: any) {
    this.carpetaService.getCarpetaById(id).subscribe(item => {
      this.editData = item;
      console.log(this.editData);
      this.carpetaForm.patchValue({
        gestion: this.editData.gestion,
        nombre: this.editData.nombre,
        tomo: this.editData.tomo,
        tipo: this.editData.tipo,
        subTipo: this.editData.subTipo,
        lugar: this.editData.lugar,
        estante: this.editData.estante,
        fila: this.editData.fila,
        observaciones: this.editData.observaciones,
      });
    })
  }




  saveCarpeta() {
    this.carpetaService.createCarpeta(this.carpetaForm.value).subscribe({
      next: (resp: any) => {
        this.closeDialog('created');
      },
      error: (resp: any) => {
        console.log(resp.error.message);
        // Swal.fire('Error', resp, 'error')
        // Swal.fire('Error', resp, 'error')
      }
    })
  }

  editCarpeta(id: any) {
    this.carpetaService.editCarpeta(this.carpetaForm.value, id).subscribe({
      next: (resp: any) => {
        this.closeDialog('edited');
        // console.log("resp",resp);
      },
      error: (resp: any) => {
        console.log(resp.error.message);
        // Swal.fire('Error', resp, 'error')
        // Swal.fire('Error', resp, 'error')
      }
    })
  }
}
