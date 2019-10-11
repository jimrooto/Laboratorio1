import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Doctor } from '../../dataservice/doctor';
import { dataService } from '../../dataservice/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {

  //Alerta Borrar
  public popoverTitle: string = 'Mensaje Confirmacion Eliminar';
  public popoverMessage: string = ' ¿Desea Borrar Este Registro?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  //Alerta Borrar
  doctores: Doctor[];
  selectedDoctor;
  @ViewChild('btnClose') btnClose: ElementRef;

  constructor(private dataService: dataService, public dialog: MatDialog,
		private router: Router) {
    this.getDoctores();
    this.selectedDoctor = {
      id: -1, nombreDoc: '', apellidoDoc: '', rutDoc: '', direccionDoc: ''
      , telefonoDoc: '', release_date: ''
    }
  }
  getDoctores(): void {
    this.dataService
      .getDoctores()
      .then(doctores => this.doctores = doctores);
  }
  delete(doc): void {
    this.dataService.deleteDoctor(doc.id);
    this.doctores = this.doctores.filter(a => a !== doc);
  }
  ngOnInit() {
    this.getDoctores();
  }
  updateDoctor = () => {
    this.dataService.updateDoctor(this.selectedDoctor).subscribe(
      data => {
        this.selectedDoctor = data;
        this.btnClose.nativeElement.click( location.reload())
        
      },
      error => {
        alert('Error al Actualizar doctor');
      }
    );
  }
  examenClicked = (exa) => {
    this.dataService.getOneDoctor(exa.id).subscribe(
      (data: Doctor) => {
        this.selectedDoctor = data;
      },
      error => {
        alert('Error al Conectar Datos ');
      }
    );
  }
  redirect() {
		this.router.navigate(['./doctores'])
	}
}
