import { Injectable } from '@angular/core';
import { Headers, Http, } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Doctor } from './doctor';
import { Categoria } from './categoria';
import { Examen } from './examen';
import { Paciente } from './paciente';
import { Usuario } from './user';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
@Injectable()
export class dataService {
	baseurl = "http://127.0.0.1:8000";
	constructor(private http: Http, private httpClient: HttpClient) { }
	private headers = new Headers({ 'Content-Type': 'application/json' });

	//*****************************DOCTOR CONSULTA**********************************************************************
	getDoctores(): Promise<Doctor[]> {
		return this.http.get(this.baseurl + '/doctor?format=json', { headers: this.headers })
			.toPromise()
			.then(response => response.json() as Doctor[])
	}
	deleteDoctor(id: number): Promise<void> {
		const url = `${this.baseurl + "/doctor"}/${id}`;
		return this.http.delete(url, { headers: this.headers })
			.toPromise()
			.then(() => null)
	}
	createDoctor(d: Doctor): Promise<Doctor> {
		return this.http
			.post(this.baseurl + "/doctor", JSON.stringify(d), { headers: this.headers })
			.toPromise()
			.then(res => res.json() as Doctor)
	}
	updateDoctor(doctores): Observable<any> {
		const body = { nombreDoc: doctores.nombreDoc, apellidoDoc: doctores.apellidoDoc, rutDoc: doctores.rutDoc, release_date: doctores.release_date, direccionDoc: doctores.direccionDoc, telefonoDoc: doctores.telefonoDoc };
		return this.http.put(this.baseurl + '/doctor/' + doctores.id, body,
			{ headers: this.headers });
	}
	//*********************************PACIENTES******************************** */
	getPacientes(): Promise<Paciente[]> {
		return this.http.get(this.baseurl + '/paciente?format=json', { headers: this.headers })
			.toPromise()
			.then(response => response.json() as Paciente[])
	}
	deletePacientes(id: number): Promise<void> {
		const url = `${this.baseurl + "/paciente"}/${id}`;
		return this.http.delete(url, { headers: this.headers })
			.toPromise()
			.then(() => null)
	}
	createPaciente(d: Paciente): Promise<Paciente> {
		return this.http
			.post(this.baseurl + "/paciente", JSON.stringify(d), { headers: this.headers })
			.toPromise()
			.then(res => res.json() as Paciente)
	}
	updatePaciente(pacientes): Observable<any> {
		const body = { nombrePac: pacientes.nombrePac, apellidoPac: pacientes.apellidoPac, rutPac: pacientes.rutPac, release_date: pacientes.release_date, direccionPac: pacientes.direccionPac, telefonoPac: pacientes.telefonoPac };
		return this.http.put(this.baseurl + '/paciente/' + pacientes.id, body,
			{ headers: this.headers });
	}
	//***************************************************************** */
	//*********************************CATEGORIA******************************** */
	getCategorias(): Promise<Categoria[]> {
		return this.http.get(this.baseurl + '/categoria?format=json', { headers: this.headers })
			.toPromise()
			.then(response => response.json() as Categoria[])
	}
	deleteCategorias(id: number): Promise<void> {
		const url = `${this.baseurl + "/categoria"}/${id}`;
		return this.http.delete(url, { headers: this.headers })
			.toPromise()
			.then(() => null)
	}
	createCategoria(d: Categoria): Promise<Categoria> {
		return this.http
			.post(this.baseurl + "/categoria", JSON.stringify(d), { headers: this.headers })
			.toPromise()
			.then(res => res.json() as Categoria)
	}
	updateCategoria(categorias): Observable<any> {
		const body = { nombreCat: categorias.nombreCat, detalleCat: categorias.detalleCat, release_date: categorias.release_date };
		return this.http.put(this.baseurl + '/categoria/' + categorias.id, body,
			{ headers: this.headers });
	}
	//***************************************************************** */
	//*********************************EXAMENES******************************** */
	getExamenes(): Promise<Examen[]> {
		return this.http.get(this.baseurl + '/examen?format=json', { headers: this.headers })
			.toPromise()
			.then(response => response.json() as Examen[])
	}
	deleteExamenes(id: number): Promise<void> {
		const url = `${this.baseurl + "/examen"}/${id}`;
		return this.http.delete(url, { headers: this.headers })
			.toPromise()
			.then(() => null)
	}
	createExamen(d: Examen): Promise<Examen> {
		return this.http
			.post(this.baseurl + '/examen', JSON.stringify(d), { headers: this.headers })
			.toPromise()
			.then(res => res.json() as Examen)
	}
	getOneExamen(id): Observable<Examen> {
		return this.httpClient.get<Examen>(this.baseurl + '/examen/' + id ,
		).pipe()
	}
	getOnePaciente(id): Observable<Paciente> {
		return this.httpClient.get<Paciente>(this.baseurl + '/paciente/' + id ,
		).pipe()
	}
	getOneDoctor(id): Observable<Doctor> {
		return this.httpClient.get<Doctor>(this.baseurl + '/doctor/' + id ,
		).pipe()
	}
	getOneCategory(id): Observable<Categoria> {
		return this.httpClient.get<Categoria>(this.baseurl + '/categoria/' + id ,
		).pipe()
	}
	getOneUsuario(id): Observable<Usuario> {
		return this.httpClient.get<Usuario>(this.baseurl + '/users/' + id ,
		).pipe()
	}
	updateExamen(examen): Observable<any> {
		const body = { nombreExa: examen.nombreExa, descripcionExa: examen.descripcionExa, release_date: examen.release_date, fechaExa: examen.fechaExa, categoriaExa: examen.categoriaExa };
		return this.http.put(this.baseurl + '/examen/' + examen.id, body,
			{ headers: this.headers });
	}
	//**********************************************USUARIOS*******************
	getUsuarios(): Promise<Usuario[]> {
		return this.http.get(this.baseurl + '/users?format=json', { headers: this.headers })
			.toPromise()
			.then(response => response.json() as Usuario[])
	}
	deleteUsuario(id: number): Promise<void> {
		const url = `${this.baseurl + "/users"}/${id}`;
		return this.http.delete(url, { headers: this.headers })
			.toPromise()
			.then(() => null)
	}
	createUsuario(d: Usuario): Promise<Usuario> {
		return this.http
			.post(this.baseurl + "/users/", JSON.stringify(d), { headers: this.headers })
			.toPromise()
			.then(res => res.json() as Usuario)
	}
	updateUsuario(usuarios): Observable<any> {
		const body = { username: usuarios.username, email: usuarios.email, password: usuarios.password };
		return this.http.put(this.baseurl + '/users/' + usuarios.id, body,
			{ headers: this.headers });
	}
	//***************************************************************** */
}
