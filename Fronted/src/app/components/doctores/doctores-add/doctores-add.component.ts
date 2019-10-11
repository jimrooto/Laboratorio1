import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../../dataservice/doctor';
import { Router } from '@angular/router';
import { dataService } from '../../../dataservice/data.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
	selector: 'app-doctores-add',
	templateUrl: './doctores-add.component.html',
	styleUrls: ['./doctores-add.component.css']
})
export class DoctoresAddComponent implements OnInit {

	doctor = new Doctor();
	constructor(private dataService: dataService,
		private router: Router) { }

	save(): void {
		this.dataService.createDoctor(this.doctor)
			.then(
				() => this.redirect(),
				() => alert('Error al crear doctor'),
			)
	}
	redirect() {
		this.router.navigate(['./doctores'])
	}
	ngOnInit() {
	}
}
