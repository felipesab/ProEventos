import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos : any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.eventos = this.http.get('https://localhost:5001/eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );
  }

}
