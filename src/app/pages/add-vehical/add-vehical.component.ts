import { Component, OnInit } from "@angular/core";
import { VehicalService } from "src/app/service/vehical.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IVehicalBrand } from "src/app/shared/model/vehical-brand.interface";
import { IVehicalType } from "src/app/shared/model/vehical-type.interface";
import { IVehicalTransmission } from "src/app/shared/model/vehical-transmission.interface";

@Component({
    selector: 'app-add-vehical',
    templateUrl: 'add-vehical.component.html'
})
export class AddVehicalComponet implements OnInit {
    constructor(
        private _VehicalService: VehicalService,
        private _FormBuilder: FormBuilder
    ) { }

    /**
     * Used to add vehical
     */
    AddVehicalForm: FormGroup;

    /**
     * Used to store vehical brand list
     */
    VehicalBrandList: IVehicalBrand[];

    /**
     * Used to store vehical type list.
     */
    VehicalTypeList: IVehicalType[];

    /**
     * Used to store vehical transmission list
     */
    VehicaTransmissionList: IVehicalTransmission[];

    /**
     * Used to store total count of available vehicals
     */
    TotalVehicalCount: number = 0;

    ngOnInit() { 
        this.AddVehicalForm = this._FormBuilder.group({
            vehicalId: [this.TotalVehicalCount, [Validators.required]],
            vehicalBrandId: ['', [Validators.required]],
            vehicalName:  ['', [Validators.required]],
            vehicalTypeId:  ['', [Validators.required]],
            transmissionTypeId: ['', [Validators.required]]
        });
        this.GetVehicaList();
        this.GetVehicalBrandList();
        this.GetVehicalTypeList();
        this.GetVehicalTransmissionList();
    }
    
    /**
     * Used to get all available vehical brand list.
     */
    GetVehicalBrandList() {
        this._VehicalService.GetVehicalBrandList().subscribe(
            response => {
                if(Array.isArray(response)) {
                    this.VehicalBrandList = response;
                }
            }
        );
    }

    /**
     * Used to get vehical type list.
     */
    GetVehicalTypeList() {
        this._VehicalService.GetVehicalTypes().subscribe(
            response => {
                if(response) {
                    this.VehicalTypeList = response;
                }
            }
        );
    }

    /**
     * Used to get Vehical transmission list.
     */
    GetVehicalTransmissionList() {
        this._VehicalService.GetVehicalTransmission().subscribe(
            response => {
                if(response) {
                    this.VehicaTransmissionList = response;
                }
            }
        );
    }

    /**
     * Used to add New Vehical
     */
    AddVehical() {
        if(this.AddVehicalForm.invalid) {
            return;
        }
        const url = `https://tasc-db.firebaseio.com/vehical/${this.TotalVehicalCount}.json`;
        console.log('form value', this.AddVehicalForm.value);
        this._VehicalService.AddVehical(url, this.AddVehicalForm.value).subscribe(
            response => {
                if(response) {
                    this.AddVehicalForm.reset();
                    const nextVehicalId: number = +response.vehicalId + 1;
                    this.TotalVehicalCount = nextVehicalId;
                    this.AddVehicalForm.patchValue({
                        vehicalId: nextVehicalId
                    });
                }
            }
        )
    }

    /**
     * Used to get all available list of vehical and store count
     */
    GetVehicaList() {
        this._VehicalService.GetVehicalList().subscribe(
            response => {
                if(Array.isArray(response)) {
                    this.TotalVehicalCount = response.length;
                    this.AddVehicalForm.patchValue({
                        vehicalId: this.TotalVehicalCount
                    });
                }
            }
        );
    }
}