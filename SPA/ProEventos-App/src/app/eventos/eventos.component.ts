import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos : any = [];
  eventosFiltrados: any = [];
  imagemLargura = 150;
  imagemMargem = 2;
  imagem = true;
  private _filtroLista: string = "";

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string){
    this._filtroLista = value;

    this.eventosFiltrados = this.filtroLista ? this.filtrarLista(this.filtroLista) : this.eventos;
  }

  private filtrarLista(filtro: string): string {
    return this.eventos.filter(
      (eventos: {tema: string; local: string}) => eventos.tema.toLocaleLowerCase().indexOf(filtro) !== -1 ||
      eventos.local.toLocaleLowerCase().indexOf(filtro) !== -1)
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAll();
  }

  exibirImagem(){
    this.imagem = !this.imagem;
  }

  getAll(){
    this.eventos = this.http.get('https://localhost:5001/eventos').subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = response},
      error => console.log(error)
    );
  }

}
