import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { CategoriasComponent } from '../app/components/categorias/categorias.component';
import { CategoriasAddComponent } from '../app/components/categorias/categorias-add/categorias-add.component';
import { DoctoresComponent } from '../app/components/doctores/doctores.component';
import { DoctoresAddComponent } from '../app/components/doctores/doctores-add/doctores-add.component';
import { ExamenesComponent } from '../app/components/examenes/examenes.component';
import { ExamenesAddComponent } from '../app/components/examenes/examenes-add/examenes-add.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PacientesComponent } from '../app/components/pacientes/pacientes.component';
import { PacientesAddComponent } from '../app/components/pacientes/pacientes-add/pacientes-add.component';
import { RegistroComponent } from '../app/components/admin/registro/registro.component';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from '../app/components/admin/usuarios/usuarios.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth/auth.service';
const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'doctores',
                children: [
                    {
                        path: '',
                        component: DoctoresComponent,
                    },
                    {
                        path: 'add',
                        component: DoctoresAddComponent,
                    }
                ]
            },

            {
                path: 'login',
                children: [
                    {
                        path: '',
                        component: LoginComponent,
                    },
                ]
            },
            {
                path: 'categorias',
                children: [
                    {
                        path: '',
                        component: CategoriasComponent, canActivate:[AuthGuard]
                    },
                    {
                        path: 'add',
                        component: CategoriasAddComponent,
                    }
                ]
            }, {
                path: 'pacientes',
                children: [
                    {
                        path: '',
                        component: PacientesComponent,
                    },
                    {
                        path: 'add',
                        component: PacientesAddComponent,
                    }
                ]
            },
            {
                path: 'examenes',
                children: [
                    {
                        path: '',
                        component: ExamenesComponent,
                    },
                    {
                        path: 'add',
                        component: ExamenesAddComponent,
                    }
                ]
            }, {
                path: 'usuarios',
                children: [
                    {
                        path: '',
                        component: UsuariosComponent,
                    },
                    {
                        path: 'add',
                        component: RegistroComponent,
                    }
                ]
            },
            {
                path: 'register',
                children: [
                    {
                        path: '',
                        component: RegisterComponent,
                    },
                    {
                        path: 'add',
                        component: RegistroComponent,
                    }
                ]
            },
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        component: LoginComponent,
                    },
                    {
                        path: 'add',
                        component: RegistroComponent,
                    }
                ]
            },
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
    MainComponent,
];
