import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { IVehicalBrand } from '../shared/model/vehical-brand.interface';
import { map } from 'rxjs/operators';
import { IVehicalType } from '../shared/model/vehical-type.interface';
import { IVehicalTransmission } from '../shared/model/vehical-transmission.interface';
import { IVehical } from '../shared/model/vehical.interface';

@Injectable()
export class VehicalService {
    constructor(
        private _HTTP: HttpClient
    ) {}

    /**
     * Used to return all availabel vehical brand list.
     */
    GetVehicalBrandList() {
        return this._HTTP.get<IVehicalBrand[] | IVehicalBrand>('https://tasc-db.firebaseio.com/vehicalBrands.json');
    }

    /**
     * Used to add new vehical brand.
     * @param data Used to store new vehical brand data.
     */
    AddVehicalBrand(url: string, data) {
        return this._HTTP.put<IVehicalBrand>(url, data);
    }

    /**
     * Used to get vehical type list.
     */
    GetVehicalTypes() {
        return this._HTTP.get<IVehicalType[]>('https://tasc-db.firebaseio.com/vehicalType.json');
    }

    /**
     * Used to get vehical transmission list
     */
    GetVehicalTransmission() {
        return this._HTTP.get<IVehicalTransmission[]>('https://tasc-db.firebaseio.com/transmissionType.json');
    }

    /**
     * Used to add new vehical
     * @param url Used to store url
     * @param data Used to store data.
     */
    AddVehical(url: string, data) {
        return this._HTTP.put<IVehical>(url, data);
    }

    /**
     * Used to get all vehical list.
     */
    GetVehicalList() {
        return this._HTTP.get<IVehical[]>('https://tasc-db.firebaseio.com/vehical.json');
    }
}