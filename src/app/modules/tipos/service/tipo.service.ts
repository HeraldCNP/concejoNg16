import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '../../auth';
import { URL_SERVICES } from '../../../config/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  private readonly baseUrl: string = URL_SERVICES ;
  private http = inject(HttpClient);
  private authService = inject(AuthService)

  constructor() { }

  get token(){
    const token = localStorage.getItem('token');
    if (!token) {
      this.authService.logout();
    }
    return token;
  }
  get headers(){
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return headers;
  }


  /* Servicios Tipos */

  getAllTipos(): Observable<any> {
    const url = `${this.baseUrl}/tipos`;
    const header = this.headers;
    return this.http.get<any>(url, { headers: header });
  }

  createTipo(data: any): Observable<any> {
    const url = `${this.baseUrl}/tipos`;
    const header = this.headers;
    return this.http.post<any>(url, data, { headers: header });
  }

  getTipoById(id:any){
    const url = `${this.baseUrl}/tipos/${id}`;
    const header = this.headers;
    return this.http.get<any>(url, { headers: header });
    // return this.http.get<any>(url+id, { headers });
  }

  // editBeneficiary(form: any, id: any): Observable<any> {
  //   let dir = `${this.URL}/proveedor/${id}`;
  //   return this.http.put<any>(dir, form)
  // }

  editTipo(data: any, id: any): Observable<any> {
    const url = `${this.baseUrl}/tipos/${id}`;
    const header = this.headers;
    return this.http.patch<any>(url, data, { headers: header });
    // return this.http.post<any>(url, data, { headers });
  }

  deleteTipo(id: any): Observable<any> {
    const url = `${this.baseUrl}/tipos/${id}`;
    const header = this.headers;
    return this.http.delete<any>(url, { headers: header });
  }


  /* END Servicios Tipos */


  /* Servicios Tipos */

  createSubTipo(id:any, data: any): Observable<any> {
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

}

