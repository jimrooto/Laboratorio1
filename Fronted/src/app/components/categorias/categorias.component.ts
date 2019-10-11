import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Categoria } from '../../dataservice/categoria';
import { dataService } from '../../dataservice/data.service';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Pipe, PipeTransform } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const ELEMENT_DATA: Categoria[] = [


];

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  @ViewChild('btnClose') btnClose: ElementRef;
  //Alerta Borrar
  public popoverTitle: string = 'Mensaje Confirmacion Eliminar';
  public popoverMessage: string = ' ¿Desea Borrar Este Registro?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  //Alerta Borrar

  public displayedColumns = ['id', 'nombre', 'detalle'];

  closeResult: string;
  categorias: Categoria[];
  selectedCategory;
  dataSource = new MatTableDataSource(this.categorias);
  constructor(private dataService: dataService, private router: Router, public dialog: MatDialog) {
    this.getCategorias();
    this.selectedCategory = {
      id: -1, nombreCat: '', detalleCat: '', release_date: ''
    };
  }
  updateCategory = () => {
    this.dataService.updateCategoria(this.selectedCategory).subscribe(
      data => {
        this.selectedCategory = data;
        this.btnClose.nativeElement.click(location.reload());
      },
      error => {
        alert('Error al actualizar categoria');
      }
    );
  }

  getCategorias(): void {
    this.dataService
      .getCategorias()
      .then(categorias => this.categorias = categorias);
  }
  delete(cat): void {
    this.dataService.deleteCategorias(cat.id);
    this.categorias = this.categorias.filter(a => a !== cat);
  }

  examenClicked = (cat) => {

    this.dataService.getOneCategory(cat.id).subscribe(
      (data: Categoria) => {
        this.selectedCategory = data;
      
      },
      error => {
        alert('Error Al Conectar Datos');
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.getCategorias();
  }
}
