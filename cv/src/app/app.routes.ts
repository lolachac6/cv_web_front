import { Routes } from '@angular/router';
import { HomeComponentsComponent } from './components/home-components/home-components.component';
import { ContactComponentsComponent } from './components/contact-components/contact-components.component';
import { MyProyectComponentsComponent } from './components/my-proyect-components/my-proyect-components.component';
import { AboutMeComponentsComponent } from './components/about-me-components/about-me-components.component';



export const routes: Routes = [
    {path:"" , component: HomeComponentsComponent},
    {path: "contact", component: ContactComponentsComponent},
    {path: "projects/:id", component: MyProyectComponentsComponent},
    {path: "aboutMe", component: AboutMeComponentsComponent}

];


