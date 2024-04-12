import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_SERVICES } from 'src/app/config/config';
import { AuthService } from 'src/app/modules/auth';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {
  private readonly baseUrl: string = URL_SERVICES;
  private http = inject(HttpClient);
  private authService = inject(AuthService)

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


  buscarArchivos(tipo?: string, subTipo?: string, gestion?: number, numero?: string, detalle?: string, ): Observable<any[]> {
    const header = this.headers;
    let dir = `${this.baseUrl}/archivo?tipo=${tipo}&subTipo=${subTipo}&gestion=${gestion}&numero=${numero}&detalle=${detalle}`;
    console.log(dir);
    return this.http.get<any>(dir, { headers: header });
  }

  // localhost:3200/api/archivo?subTipo=emitida&tipo=correspondencia&gestion=2020&numero=2&detalle=detalle 3&lugar=concejo

  /* Servicios Resoluciones */

  createArchivo(data: any): Observable<any> {
    const url = `${this.baseUrl}/archivo`;
    const header = this.headers;

    const req = new HttpRequest('POST', url, data,  {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);

    // return this.http.post<any>(url, data, { headers: header });
  }

  getArchivoById(id: any) {
    const url = `${this.baseUrl}/archivo/${id}`;
    const header = this.headers;
    return this.http.get<any>(url, { headers: header });
    // return this.http.get<any>(url+id, { headers });
  }

  updateArchivo(data: any, id: any): Observable<any> {
    const url = `${this.baseUrl}/archivo/${id}`;
    const header = this.headers;

    const req = new HttpRequest('PATCH', url, data,  {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);

    // return this.http.post<any>(url, data, { headers: header });
  }

  deleteArchivo(id: any): Observable<any> {
    const url = `${this.baseUrl}/archivo/${id}`;
    const header = this.headers;
    return this.http.delete<any>(url, { headers: header });
  }

  /* END Servicios Resoluciones */

}

