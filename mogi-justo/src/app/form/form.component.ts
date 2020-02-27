import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  usuario: Usuario;

  constructor() { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  btnSalvar(): void {
    console.log('djsajd');
    console.log(this.usuario);
  }

}
