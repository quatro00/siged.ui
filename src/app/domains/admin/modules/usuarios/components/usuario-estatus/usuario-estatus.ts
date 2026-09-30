import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-estatus',
  imports: [],
  templateUrl: './usuario-estatus.html',
  styleUrl: './usuario-estatus.css',
})
export class UsuarioEstatus {
  @Input() activo = false;
}
