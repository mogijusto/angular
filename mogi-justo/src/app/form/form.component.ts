import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/form.model';
import { TesteService } from '../teste.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  usuario: Usuario;

  constructor(private service: TesteService) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.service.getTeste().subscribe(data =>{
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  btnSalvar(): void {
    console.log('djsajd');
    console.log(this.usuario);
  }

}
