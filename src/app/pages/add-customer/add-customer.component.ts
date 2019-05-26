import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { VehicalService } from "src/app/service/vehical.service";
import { IVehicalBrand } from "src/app/shared/model/vehical-brand.interface";
import { IVehical } from "src/app/shared/model/vehical.interface";
import { UserService } from "src/app/service/user.service";
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
})
export class AddCustomerComponent implements OnInit {

    constructor(
        private _FB: FormBuilder,
        private _VehicalService: VehicalService,
        private _UserService: UserService
    ) {}

    /**
     * Used to store todays date.
     */
    readonly TodaysDate: Date = new Date();

    /**
     * Used to store start time
     */
    StartTime = new Date().setHours(8);
    
    /**
     * Used to store end Time.
     */
    EndTime = new Date().setHours(17)

    /**
     * Used to store user id.
     */
    UserId: number = 0;

    /**
     * Used to store the user form.
     */
    AddUserForm: FormGroup;

    /**
     * Used to store vehical brand list
     */
    VehicalBrandList: IVehicalBrand[];

    /**
     * Used to store all vehical list.
     */
    VehicalList: IVehical[];

    /**
     * Used to vehical list based on company
     */
    VehicalForCompany: IVehical[];

    ngOnInit() {
        this.AddUserForm = this._FB.group({
            userId: [this.UserId, [Validators.required]],
            firstName: ['', [Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
            middleName: ['',[Validators.pattern(/^[A-Za-z]+$/)]],
            lastName: ['', [Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
            contactNo: ['', [Validators.required,Validators.pattern(/^([\d]+)$/)]],
            vehicalCompany: ['', [Validators.required]],
            vehical: ['', [Validators.required]],
            vehicalNumber: ['',Validators.pattern(/^[A-Za-z\d]+$/)],
            lastGenralCheckUpDate: [''],
            lastServiceDate: [''],
            noOfPunctureRepair: ['',[Validators.pattern(/^([\d]+)$/)]],
            apointmentDate: ['',],
            bookingTime: ['']
        })

        this.GetUserList();
        this.GetVehicalBrandList();
        this.GetVehicaList();

        this.AddUserForm.get('vehicalCompany').valueChanges.subscribe(
            companyId => {
                this.VehicalForCompany = this.VehicalList.filter(vehical => vehical.vehicalBrandId == companyId);
            }
        );

        this._UserService.TodaysCustomer.subscribe(
            response => console.log('todays customer list', response)
        );

        this._UserService.AllAvailabelCustomer.subscribe(
            response => console.log('All available cmponent', response)
        );
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
     * Used to get all available list of vehical and store count
     */
    GetVehicaList() {
        this._VehicalService.GetVehicalList().subscribe(
            response => {
                if(Array.isArray(response)) {
                    this.VehicalList = response;
                }
            }
        );
    }

    /**
     * Used to get all list of user
     */
    GetUserList() {
        this._UserService.GetUsers().subscribe(
            response => {
                if(Array.isArray(response)) {
                    const userId = response.length;
                    this.UserId = userId;
                    this.AddUserForm.patchValue({
                        userId: userId
                    });
                }
            }
        );
    }

    /**
     * Used to add user
     */
    AddUser() {
        if(this.AddUserForm.invalid) {
            return;
        }
        const url = `https://tasc-db.firebaseio.com/customer/${this.UserId}.json`;
        if(this.AddUserForm.get('bookingTime')) {
            this.AddUserForm.value.bookingTime = new Date(this.AddUserForm.value.bookingTime).getTime();
        }
        this._UserService.AddUser(url, this.AddUserForm.value).subscribe(
            response =>{ 
                this.AddUserForm.reset();
                this.AddUserForm.patchValue({
                    userId: response['userId'] + 1
                })
            }
        );
    }

}