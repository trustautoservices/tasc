import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Subject, Observable } from "rxjs";
import { ICustomer } from "../shared/model/customer.interface";
import { map, filter } from "rxjs/operators";

@Injectable()
export class UserService {
    constructor(
        private _HTTP: HttpClient
    ) { 
        this.GetUserInfo();
        this.AllAvailabelCustomer.subscribe(
            customerList => {
                this.TodaysCustomer.next(
                    customerList.filter(
                        customer => {
                            const todaysDate = new Date().getDate();
                            return new Date(customer.apointmentDate).getDate() == todaysDate;
                        }
                    )
                )
            }
        )
    }

    /**
     * Used to store Total available customer
     */
    TotalCustomerAvailable: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    /**
     * Used to store all available user
     */
    AllAvailabelCustomer: BehaviorSubject<ICustomer[]> = new BehaviorSubject<ICustomer[]>([]);

    /**
     * Used to store todays customer List
     */
    TodaysCustomer: BehaviorSubject<ICustomer[]> = new BehaviorSubject<ICustomer[]>([]);

    /**
     * Used to get all users.
     */
    GetUsers() {
        return this._HTTP.get<ICustomer[]>('https://tasc-db.firebaseio.com/customer.json');
    }

    /**
     * Used to add new user
     * @param url used to store url to user
     * @param data used to store user data.
     */
    AddUser(url, data) {
        return this._HTTP.put(url, data);
    }

    /**
     * Used to get all user information
     */
    GetUserInfo() {
        this.GetUsers().subscribe(
            response => {
                if (Array.isArray(response)) {
                    this.TotalCustomerAvailable.next(response.length);
                    this.AllAvailabelCustomer.next(response);
                }
            }
        );
    }

    /**
     * Used to get customer based on booking date.
     * @param bookingDate Used to store booking date.
     */
    GetCustomerByBookingDate(bookingDate: Date) {
        const date: string = (bookingDate.getMonth() + 1) + '/' + bookingDate.getDate() + '/' +  bookingDate.getFullYear();
        return this._HTTP.get<ICustomer[]>('https://tasc-db.firebaseio.com/customer.json').pipe(
            map(result =>
                result.filter(customer => {
                    const customerDate: Date = new Date(customer.apointmentDate);
                    const apointmentDate: string = (customerDate.getMonth() + 1) + '/' + customerDate.getDate() + '/' +  customerDate.getFullYear();;
                    console.log(`search Date: ${date}, customer date: ${apointmentDate}, is both equal ${apointmentDate == date}`);
                    return apointmentDate == date
                })
            )
        );
    }
}