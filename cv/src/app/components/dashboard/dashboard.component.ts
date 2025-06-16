import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { SocialMediaComponent } from "../social-media/social-media.component";
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    SocialMediaComponent,
    
]
})
export class DashboardComponent  {
  private breakpointObserver = inject(BreakpointObserver);
  activateRoute = inject(ActivatedRoute);
  router = inject(Router);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit(){
        this.activateRoute.fragment.subscribe((fragment:any)=>{
          let element = document.getElementById(fragment);
          if(element){
            element.scrollIntoView({behavior:'smooth',block:'start'})
          }
        })

    }
  goToSection(fragment: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        this.router.navigate(['/'], { fragment });
      }, 100); 
    });
  }





    


    



}
