import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../../../../app/dataservice/user';
import { dataService } from '../../../../app/dataservice/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  selectedUsuario;
  usuarios: Usuario[];
  public popoverTitle: string = 'Mensaje Confirmacion Eliminar';
  public popoverMessage: string = ' ¿Desea Borrar Este Registro?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  @ViewChild('btnClose') btnClose: ElementRef;
  closeResult: string;

  constructor(private dataService: dataService, public dialog: MatDialog) {
    this.getUsuarios();
    this.selectedUsuario = {
      id: -1, username: '', email: '', password: ''
    }
  }

  updateUsuario = () => {
    this.dataService.updateUsuario(this.selectedUsuario).subscribe(
      data => {
        this.selectedUsuario = data;
        this.btnClose.nativeElement.click(location.reload());
      },
      error => {
        alert('Error al Actualizar usuario');
      }
    );
  }
  getUsuarios(): void {
    this.dataService
      .getUsuarios()
      .then(usuarios => this.usuarios = usuarios);
  }
  delete(usr): void {
    this.dataService.deleteUsuario(usr.id);
    this.usuarios = this.usuarios.filter(a => a !== usr);
  }
  examenClicked = (exa) => {
    this.dataService.getOneUsuario(exa.id).subscribe(
      (data: Usuario) => {
        this.selectedUsuario = data;
      },
      error => {
        alert('Error al Conectar Datos ');
      }
    );
  }
  ngOnInit() {
    this.getUsuarios();
  }

}