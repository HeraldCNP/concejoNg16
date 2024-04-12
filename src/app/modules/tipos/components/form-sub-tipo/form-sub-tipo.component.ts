import { Component, Inject, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoService } from '../../service/tipo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-sub-tipo',
  templateUrl: './form-sub-tipo.component.html',
  styleUrls: ['./form-sub-tipo.component.scss']
})
export class FormSubTipoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private tipoService = inject(TipoService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<FormSubTipoComponent>) {

  }

  editData: any;

  inputData: any;

  closeDialog(data: any) {
    this.ref.close(data);
  }



  ngOnInit(): void {
    this.inputData = this.data;
    if (this.inputData.id != 0) {
      // this.loadBeneficiaryForId(this.inputData.id);
    }
  }

  public subTipoForm: FormGroup = this.fb.group({
    subTipo: ['', [Validators.required]],
  })

  get form() {
    return this.subTipoForm.controls;
  }

  tipos = signal<any>(null);


    saveSubTipo() {
    this.tipoService.createSubTipo(this.inputData.id, this.subTipoForm.value).subscribe({
      next: (resp: any) => {
        this.closeDialog('created');
      },
      error: (resp: any) => {
        // console.log(resp.error.message);
        Swal.fire('Error', resp.error.message, 'error')
        // Swal.fire('Error', resp, 'error')
      }
    })
  }


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


  // loadBeneficiaryForId(id: any) {
  //   this.tipoService.getBeneficiaryById(id).subscribe(item => {
  //     this.editData = item;
  //     this.beneficiaryForm.patchValue({
  //       nombres: this.editData.nombres,
  //       ci: this.editData.ci,
  //       expedido: this.editData.expedido,
  //       fechaNacimiento: this.editData.fechaNacimiento,
  //       sexo: this.editData.sexo,
  //       carnetFechaVencimiento: this.editData.carnetFechaVencimiento,
  //       tipoDiscapacidad: this.editData.tipoDiscapacidad,
  //       porcentajeDiscapacidad: this.editData.porcentajeDiscapacidad,
  //       direccion: this.editData.direccion,
  //       celular: this.editData.celular,
  //       observacion: this.editData.observacion,
  //     });
  //   })
  // }



  // editBeneficiary(id: any) {
  //   this.tipoService.editBeneficiary(this.beneficiaryForm.value, id).subscribe({
  //     next: (resp: any) => {
  //       this.closeDialog('edited');
  //       // console.log("resp",resp);
  //     },
  //     error: (resp: any) => {
  //       console.log(resp.error.message);
  //       // Swal.fire('Error', resp, 'error')
  //       // Swal.fire('Error', resp, 'error')
  //     }
  //   })
  // }
}
