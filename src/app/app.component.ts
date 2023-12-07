import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ListaClientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'T35-Componentes';
  nombre: string = '';
  cif: string = '';
  direccion: string = '';
  grupo: string = '';
  registros: Array<object> = [];

  guardar()
  {
    if(this.nombre != '' &&  this.cif != '' &&  this.direccion != '' &&  this.grupo != '')
    {
      this.registros.push({nombre: this.nombre, cif: this.cif, direccion: this.direccion, grupo: this.grupo});
    }
  }
}
