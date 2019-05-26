import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRouteInfo } from '../../model/route-info.interface';
import { L10nService } from 'src/app/shared/service/l10n.service';


export const ROUTES: IRouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/icons', title: 'Icons', icon: 'ni-planet text-blue', class: '' },
  { path: '/maps', title: 'Maps', icon: 'ni-pin-3 text-orange', class: '' },
  { path: '/user-profile', title: 'User profile', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/tables', title: 'Tables', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
  { path: '/register', title: 'Register', icon: 'ni-circle-08 text-pink', class: '' },
  { path: '/vehical', title: 'Vehical Control', icon: 'ni-vector text-info', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [L10nService]
})
export class SidebarComponent implements OnInit {  
  /**
   * Used to store admin routes
   */
  ADMIN_ROUTES: IRouteInfo[] = [
    { path: '/vehical', title: 'Vehical', icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/add-vehical-brand', title: 'Add Vehical Brand', icon: 'ni-delivery-fast', class: '' },
    { path: '/add-vehical', title: 'Add Vehical', icon: 'ni-ambulance', class: '' },
    { path: '/add-customer', title: 'Add Customer', icon: 'ni-satisfied text-orange', class: '' },
    { path: '/customer', title: 'Customer Homepage', icon: 'ni-planet text-blue', class: '' },
  ];

  public menuItems: any[];
  public isCollapsed = true;

  constructor(
    private _Router: Router,
    private _L10nService: L10nService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this._Router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  /**
   * Get localised label
   */
  GetLabel(keyName: string): string {
    return this._L10nService.GetLabel(keyName);
  }
}
