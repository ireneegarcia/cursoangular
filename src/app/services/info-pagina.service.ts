import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/infoEquipo';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;

  equipo: any = [];

  constructor(private http: HttpClient) {

    this.cargarInfo();

    this.cargarEquipo();
  }

  private cargarInfo() {
    // leer archivo json
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
      });
  }

  private cargarEquipo() {
    // leer archivo json
    this.http.get('https://curso-angular-a2ab3.firebaseio.com/equipo.json')
      .subscribe((resp: InfoEquipo) => {
        this.equipo = resp;
        // console.log(resp);
      });
  }
}
