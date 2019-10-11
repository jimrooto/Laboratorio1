import { Component, OnInit } from '@angular/core';

import { Examen } from '../../../dataservice/examen';
import { Categoria } from '../../../dataservice/categoria';
import { Router } from '@angular/router';
import { dataService } from '../../../dataservice/data.service';
import { Doctor} from '../../../dataservice/doctor';
import swal from 'sweetalert';
import {map, startWith} from 'rxjs/operators';
import { Paciente } from '../../../dataservice/paciente';
import {Observable} from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-examenes-add',
  templateUrl: './examenes-add.component.html',
  styleUrls: ['./examenes-add.component.css']
})
export class ExamenesAddComponent implements OnInit {
  
  constructor(	private dataService: dataService,
    private router: Router) { }

  selectedExamen;
  selectedPaciente;
  selectedDoctor;
  paciente = new Paciente();
  doctores: Doctor[];
	examenes: Observable<string[]>;
  examen = new Examen();
  pacientes:Paciente[];
  categorias: Categoria[];

  getDoctores(): void {
    this.dataService
      .getDoctores()
      .then(doctores => this.doctores = doctores);
  }
  getPacientes(): void {
    this.dataService
      .getPacientes()
      .then(pacientes => this.pacientes = pacientes);
  }
  getCategorias(): void {
    this.dataService
      .getCategorias()
      .then(categorias => this.categorias = categorias);
  }
	redirect(){
		this.router.navigate(['./examenes'])
	}
  examenClicked = (pac) => {
   
    this.dataService.getOnePaciente(pac.id).subscribe(
      (data: Paciente) => {
        this.selectedPaciente = data;
        console.log('JSON DATA --->', data);
      },
      error => {
        alert('Error al Conectar Datos ');
      }
    );
  }
  doctorClicked = (doc) => {
   
    this.dataService.getOneDoctor(doc.id).subscribe(
      (data: Doctor) => {
        this.selectedDoctor = data;
        console.log('JSON DATA --->', data);
      },
      error => {
        alert('Error al Conectar Datos ');
      }
    );
  }
	save(): void {
		this.dataService.createExamen(this.examen)
		.then(
			() => this.redirect(),
			() => alert('Error al crear examen'),
		)
	}
  
  getOnePaciente = (pac) => {
    this.dataService.getOnePaciente(pac.rut).subscribe(
      (data: Paciente) => {
        this.selectedPaciente = data; 
        console.log('JSON DATA --->', data); 
      },
      error => {
        console.log(error);
      }
    );
  }

  getOneDoctor = (doc) => {
    this.dataService.getOneDoctor(doc.id).subscribe(
      (data: Doctor) => {
        this.selectedDoctor = data; 
        console.log('JSON DATA --->', data); 
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {  
    this.getCategorias();
    this.getPacientes();
    this.getDoctores();
  
	}
}
