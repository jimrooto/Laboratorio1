import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../dataservice/user';
import { Router } from '@angular/router';
import { dataService } from '../../../dataservice/data.service';
import { UserService } from '../../../dataservice/UserService';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css'],
	providers: [UserService]
})
export class RegistroComponent implements OnInit {

	input;
	usuario = new Usuario();
	constructor(private dataService: dataService,
	private router: Router, private userService: UserService) { }

	save(): void {
		this.dataService.createUsuario(this.usuario)
			.then(
				() => this.redirect(),
				() => alert('Error al crear usuario'),
			)
	}
	ngOnInit() {
	}
	redirect() {
		this.router.navigate(['./usuarios'])
	}
}
