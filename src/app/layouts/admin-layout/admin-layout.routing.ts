import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { VehicalComponent } from '../../pages/vehical/vehical.compoent';
import { AddVehicalBrandComponent } from '../../pages/add-vehical-brand/add-vehical-brand.component';
import { AddVehicalComponet } from '../../pages/add-vehical/add-vehical.component';
import { AddCustomerComponent } from '../../pages/add-customer/add-customer.component';
import { CustomerHomepageComponent } from 'src/app/pages/customer-homepage/customer-homepage.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',         component: DashboardComponent },
    { path: 'user-profile',      component: UserProfileComponent },
    { path: 'tables',            component: TablesComponent },
    { path: 'icons',             component: IconsComponent },
    { path: 'maps',              component: MapsComponent },
    { path: 'add-vehical-brand', component: AddVehicalBrandComponent },
    { path: 'add-vehical',       component: AddVehicalComponet },
    { path: 'vehical',           component: VehicalComponent },
    { path: 'add-customer',      component: AddCustomerComponent },
    { path: 'customer',          component: CustomerHomepageComponent }
];
