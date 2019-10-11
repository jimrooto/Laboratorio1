import { Component, OnInit, ViewChild, Inject, ElementRef } from '@angular/core';
import { Examen } from '../../dataservice/examen';
import { Categoria } from '../../dataservice/categoria';
import { dataService } from '../../dataservice/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { Router } from '@angular/router';
import { ModalManager } from 'ngb-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {
  selectedExamen;
  categorias: Categoria[];

  //Alerta BOrrar
  public popoverTitle: string = 'Mensaje Confirmacion Eliminar';
  public popoverMessage: string = ' ¿Desea Borrar Este Registro?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  //---------
  examenes: Examen[];
  @ViewChild('btnClose') btnClose: ElementRef;
  constructor(private dataService: dataService, public dialog: MatDialog) {
    this.getExamenes();
    this.selectedExamen = {
      id: -1, nombreExa: '', descripcionExa: '',
      release_date: '', fechaExa: '', categoriaExa: '', nombrePac: '',
      apellidoPac: '', rutPac: '', apellidoDoc: '', nombreDoc: ''
    };
  }
  ngOnInit() {
    this.getExamenes();
    this.getCategorias();
  }
  //-----------------Mantenedores
  getExamenes(): void {
    this.dataService
      .getExamenes()
      .then(examenes => this.examenes = examenes);
  }
  getCategorias(): void {
    this.dataService
      .getCategorias()
      .then(categorias => this.categorias = categorias);
  }
  delete(exa): void {
    this.dataService.deleteExamenes(exa.id);
    this.examenes = this.examenes.filter(e => e !== exa);
  }
  examenClicked = (exa) => {

    this.dataService.getOneExamen(exa.id).subscribe(
      (data: Examen) => {
        this.selectedExamen = data;

      },
      error => {
        alert('Error al Conectar Datos ');
      }
    );
  }
  updateExamen = () => {
    this.dataService.updateExamen(this.selectedExamen).subscribe(
      data => {
        this.selectedExamen = data;
        this.btnClose.nativeElement.click()
      },
      error => {
        alert('Error al Actualizar Examen ');
      }
    );
  }
  //--------------Imprimir
  print = (exa) => {
    this.dataService.getOneExamen(exa.id).subscribe(
      (data: Examen) => {
        this.selectedExamen = data;
        console.log(this.selectedExamen);
        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>LABORATORIO CLINICO SAN CARLOS</title>
           <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
       <H1>Reporte De Examen: Laboratorio Clinico San Carlos</H1>
      <body onload="window.print();window.close()">${printContents}</body>
      </html>`
        );
        popupWin.document.close();


      },
      error => {
        alert('Error al Conectar Datos ');
      }
    );
}
}