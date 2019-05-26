import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { VehicalComponent } from '../../pages/vehical/vehical.compoent';
import { L10nService } from '../../shared/service/l10n.service';
import { L10nPipe } from '../../shared/pipe/l10n.pipe';
import { VehicalService } from '../../service/vehical.service';
import { AddVehicalBrandComponent } from '../../pages/add-vehical-brand/add-vehical-brand.component';
import { AddVehicalComponet } from '../../pages/add-vehical/add-vehical.component';
import { AddCustomerComponent } from '../../pages/add-customer/add-customer.component';
import { UserService } from '../../service/user.service';
import { UpperCaseDirective } from 'src/app/shared/directives/uppercase.directive';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { TimepickerModule } from 'ngx-bootstrap';
import { CustomerHomepageComponent } from 'src/app/pages/customer-homepage/customer-homepage.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    NavbarComponent,
    VehicalComponent,
    AddVehicalBrandComponent,
    AddVehicalComponet,
    AddCustomerComponent,
    CustomerHomepageComponent,
    L10nPipe,
    UpperCaseDirective
  ],
  providers: [
    L10nService,
    VehicalService,
    UserService
  ]
})

export class AdminLayoutModule {}
