import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { URL_SERVICES } from 'src/app/config/config';
import { AuthService } from '../../auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarpetaService {
  private readonly baseUrl: string = URL_SERVICES;
  private http = inject(HttpClient);
  private authService = inject(AuthService)

  termino: EventEmitter<string> = new EventEmitter<string>;

  constructor() { }

  get token() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.authService.logout();

    }
    return token;
  }
  get headers() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return headers;
  }

  private flag: string;


  getValorSeleccionado() {
    console.log('valorRecibido', this.flag);

    return this.flag;

  }

  setValorSeleccionado(valor: string) {
    console.log('valor', valor);

    this.flag = valor;

  }


  /* Servicios Tipos */

  getAllCarpetas(flag:string): Observable<any> {
    const url = `${this.baseUrl}/carpeta?tipo=${flag}`;
    const header = this.headers;
    return this.http.get<any>(url, { headers: header });
  }

  createCarpeta(data: any): Observable<any> {
    const url = `${this.baseUrl}/carpeta`;
    const header = this.headers;
    return this.http.post<any>(url, data, { headers: header });
  }

  getCarpetaById(id: any) {
    const url = `${this.baseUrl}/carpeta/${id}`;
    const header = this.headers;
    return this.http.get<any>(url, { headers: header });
    // return this.http.get<any>(url+id, { headers });
  }

  // editBeneficiary(form: any, id: any): Observable<any> {
  //   let dir = `${this.URL}/proveedor/${id}`;
  //   return this.http.put<any>(dir, form)
  // }

  editCarpeta(data: any, id: any): Observable<any> {
    const url = `${this.baseUrl}/carpeta/${id}`;
    const header = this.headers;
    return this.http.patch<any>(url, data, { headers: header });
    // return this.http.post<any>(url, data, { headers });
  }

  deleteCarpeta(id: any): Observable<any> {
    const url = `${this.baseUrl}/carpeta/${id}`;
    const header = this.headers;
    return this.http.delete<any>(url, { headers: header });
  }


  /* END Servicios Tipos */


  /* Servicios Tipos */

  createSubTipo(id: any, data: any): Observable<any> {
    const url = `${this.baseUrl}/tipos/addSubTipo/${id}`;
    console.log(data);
    const header = this.headers;
    return this.http.patch<any>(url, data, { headers: header });
  }

  deleteSubTipo(id: any, data: any): Observable<any> {
    const url = `${this.baseUrl}/tipos/deleteSubTipo/${id}`;
    const header = this.headers;
    return this.http.patch<any>(url, data, { headers: header });
  }






  /* END Servicios Tipos */


  totales(): Observable<any> {
    const url = `${this.baseUrl}/carpeta/totales`;
    const header = this.headers;
    return this.http.get<any>(url, { headers: header });
  }

}
