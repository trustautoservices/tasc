import { Component } from "@angular/core";
import { IRouteInfo } from "../../model/route-info.interface";
import { Router } from "@angular/router";

@Component({
    selector: 'app-vehical',
    templateUrl: './vehical.compoent.html'
})
export class VehicalComponent {
    constructor(
        private _Router: Router
    ) {}
    /**
     * Used to store menus of navbar
     */
    MenuList: IRouteInfo[] = [
        { path: 'add-vehical-brand', title: 'Add Vehical Brand', icon: 'ni-delivery-fast', class: '' },
        { path: 'add-vehical', title: 'Add Vehical', icon: 'ni-ambulance', class: '' }
    ];
}