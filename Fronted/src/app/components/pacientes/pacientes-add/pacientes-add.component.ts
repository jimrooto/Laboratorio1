import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../dataservice/paciente';
import { Router } from '@angular/router';
import { dataService } from '../../../dataservice/data.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-pacientes-add',
  templateUrl: './pacientes-add.component.html',
  styleUrls: ['./pacientes-add.component.css']
})
export class PacientesAddComponent implements OnInit {

  paciente = new Paciente();

	constructor(	private dataService: dataService,
  					private router: Router) { }

	save(): void {
		this.dataService.createPaciente(this.paciente)
		.then(
			() => this.redirect(),
			() => alert('Error al crear paciente'),
		)

	}

	redirect(){
		this.router.navigate(['./pacientes'])
	}

	ngOnInit() {
	}}
