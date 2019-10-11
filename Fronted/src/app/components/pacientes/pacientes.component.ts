import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Paciente } from '../../dataservice/paciente';
import { dataService } from '../../dataservice/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: Paciente[];
//MODAL
  public popoverTitle: string = 'Mensaje Confirmacion Eliminar';
  public popoverMessage: string = ' ¿Desea Borrar Este Registro?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  @ViewChild('btnClose') btnClose: ElementRef;
//Modal Alerta
  constructor(private dataService: dataService, public dialog: MatDialog,private router: Router) {
    this.getPacientes();
    this.selectedPaciente = {
      id: -1, nombrePac: '', apellidoPac: '', rutPac: '', direccionPac: ''
      , telefonoPac: '', release_date: ''
    }
  }
  getPacientes(): void {
    this.dataService
      .getPacientes()
      .then(pacientes => this.pacientes = pacientes);
  }
  delete(pac): void {
    this.dataService.deletePacientes(pac.id);
    this.pacientes = this.pacientes.filter(a => a !== pac);
  }
  ngOnInit() {
    this.getPacientes();
  }
  selectedPaciente;
  examenClicked = (exa) => {
    this.dataService.getOnePaciente(exa.id).subscribe(
      (data: Paciente) => {
        this.selectedPaciente = data;
      },
      error => {
        alert('Error al Conectar Datos ');
      }
    );
  }
  updatePaciente = () => {
    this.dataService.updatePaciente(this.selectedPaciente).subscribe(
      data => {
        this.selectedPaciente = data;
        this.btnClose.nativeElement.click(location.reload())
      
      },
      error => {
        alert('Error al Actualizar Paciente ');
      }
    );
  }
  redirect(){
		this.router.navigate(['./pacientes'])
	}
}
