import { Component, OnInit } from '@angular/core';
import { dataService } from '../../../dataservice/data.service';
import { Categoria } from '../../../dataservice/categoria';
import { Router } from '@angular/router';
@Component({
	selector: 'app-categorias-add',
	templateUrl: './categorias-add.component.html',
	styleUrls: ['./categorias-add.component.css']
})
export class CategoriasAddComponent implements OnInit {

	categoria = new Categoria();
	categorias: Categoria[];
	constructor(private dataService: dataService,
		private router: Router) { }

	save(): void {
		this.dataService.createCategoria(this.categoria)
			.then(
				() => this.redirect(),
				() => alert('Error al crear categoria'),
			)
	}
	redirect() {
		this.router.navigate(['./categorias'])
	}
	ngOnInit() {
		this.getCategorias();
	}
	getCategorias(): void {
		this.dataService
		  .getCategorias()
		  .then(categorias => this.categorias = categorias);
	  }
	
}
