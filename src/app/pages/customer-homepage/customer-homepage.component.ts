import { Component, OnInit } from "@angular/core";
import { ICustomer } from "src/app/shared/model/customer.interface";
import { UserService } from "src/app/service/user.service";

@Component({
    selector: 'app-customer',
    templateUrl: './customer-homepage.component.html'
})
export class CustomerHomepageComponent implements OnInit{
    constructor(
        private _UserService:  UserService
    ) {}
    /**
     * Used to store all available customer list
     */
    AllCustomerList: ICustomer[] = [];

    /**
     * Used to store search date.
     */
    SearchDate;

    /**
     * Used to store status of records showing by date
     */
    IsCustomerShownByBookingDate: boolean = false;

    ngOnInit() {
        this._UserService.AllAvailabelCustomer.subscribe(
            response => {
                if(response && Array.isArray(response)) {
                    this.IsCustomerShownByBookingDate = false;
                    this.AllCustomerList = response;
                }
            }
        );
    }

    SearchCustomerByDate() {
        if (this.SearchDate) {
            const date: Date = new Date(this.SearchDate);
            this._UserService.GetCustomerByBookingDate(date).subscribe(
                response => {
                    if(response && Array.isArray(response)) {
                        this.IsCustomerShownByBookingDate  = !this.IsCustomerShownByBookingDate;
                        this.AllCustomerList = response;
                    }
                }
            );
        }
    }

    ShoowAllCustomer() {
        this.SearchDate = '';
        this._UserService.GetUserInfo();
    }
}