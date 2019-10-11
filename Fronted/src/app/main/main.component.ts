import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


    rutas: Object[] =[

		{
			title: 'Pacientes',
			route: '/pacientes',
			icon: 'accessibility',
		},

	]

	routes: Object[] = [
		{
			title: 'Pacientes',
			route: '/pacientes',
			icon: 'accessibility',
		},
		{
			title: 'Doctores',
			route: '/doctores',
			icon: 'work',
		},
		{
			title: 'Exámenes',
			route: '/examenes',
			icon: 'description',
		},
		{
			title: 'Categoría',
			route: '/categorias',
			icon: 'apps',
		},
		{
			title: 'Usuarios',
			route: '/usuarios',
			icon: 'account_box',
		},
		{
			title: 'Login',
			route: '/login',
			icon: 'how_to_reg',
		},
	]
	constructor() { }
	ngOnInit() {
	}
}
