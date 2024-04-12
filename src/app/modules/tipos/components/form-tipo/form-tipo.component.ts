import { Component, Inject, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoService } from '../../service/tipo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-tipo',
  templateUrl: './form-tipo.component.html',
  styleUrls: ['./form-tipo.component.scss']
})
export class FormTipoComponent implements OnInit{
  private fb = inject(FormBuilder);
  private tipoService = inject(TipoService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<FormTipoComponent>) {

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
      this.loadTipoForId(this.inputData.id);
    }
  }

  public tipoForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
  })

  get form() {
    return this.tipoForm.controls;
  }

  tipos = signal<any>(null);



  // cargarTipos() {
  //   this.tipoService.getAllTipos()
  //     .subscribe({
  //       next: (data: any) => {
  //         this.tipos.set(data);
  //         console.log(this.tipos());
  //       },
  //       error: (message: string | undefined) => {
  //         Swal.fire('Error', message, 'error')
  //       }
  //     })
  // }


  loadTipoForId(id: any) {
    this.tipoService.getTipoById(id).subscribe(item => {
      this.editData = item;
      this.tipoForm.patchValue({
        nombre: this.editData.nombre,
      });
    })
  }

  saveTipo() {
    this.tipoService.createTipo(this.tipoForm.value).subscribe({
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

  editTipo(id: any) {
    this.tipoService.editTipo(this.tipoForm.value, id).subscribe({
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
