import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VehicalService } from "src/app/service/vehical.service";

@Component({
    selector: 'app-add-vehical-brand',
    templateUrl: './add-vehical-brand.component.html'
})
export class AddVehicalBrandComponent implements OnInit{
    constructor(
        private _FormBuilder: FormBuilder,
        private _VehicalService: VehicalService
    ) {}

    /**
     * Used to store add vehical form.
     */
    AddVehicalBrandForm: FormGroup

    ngOnInit(): void {
        this.SetCompanyId();

        this.AddVehicalBrandForm = this._FormBuilder.group({
            companyName: [{value: '', disabled: false}, [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-z]+$/), Validators.maxLength(10)]],
            id: ['', [Validators.required, Validators.minLength(1), Validators.pattern(/^([\d]+)$/), Validators.maxLength(10)]]
        });
    }

    /**
     * Add new vehical company.
     */
    AddVehicalCompany() {
        console.log('vehical info', this.AddVehicalBrandForm);
        if (this.AddVehicalBrandForm.invalid) {
            return;
        }
        const id = this.AddVehicalBrandForm.get('id').value;
        const url = `https://tasc-db.firebaseio.com/vehicalBrands/${id}.json`;
        this._VehicalService.AddVehicalBrand(url,this.AddVehicalBrandForm.value).subscribe(
            response => {
                if (response.companyName) {
                    this.SetCompanyId()
                    this.AddVehicalBrandForm.reset();
                }
            }
        );
    }

    /**
     * Used to set company id
     */
    SetCompanyId() {
        this._VehicalService.GetVehicalBrandList().subscribe(
            response => {
                if(Array.isArray(response)) {
                    this.AddVehicalBrandForm.patchValue({
                        id: response.length
                    })
                } else {
                   if(response) {
                    this.AddVehicalBrandForm.patchValue({
                        id: response.id + 1
                    })
                   } else {
                    this.AddVehicalBrandForm.patchValue({
                        id: 0
                    })
                   }
                }
            }
        );
    }
}