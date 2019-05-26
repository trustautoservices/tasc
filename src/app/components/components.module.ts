import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { L10nPipe } from '../shared/pipe/l10n.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    // NavbarComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    // NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
