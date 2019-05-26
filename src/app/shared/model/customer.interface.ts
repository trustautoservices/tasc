/**
 * Used to store the structure of customer
 */
export interface ICustomer {
    apointmentDate: Date; 
    bookingTime: number;
    contactNo: string; 
    firstName: string; 
    lastGenralCheckUpDate: string;
    lastName: string;
    lastServiceDate: Date;
    middleName: string;
    noOfPunctureRepair: number;
    userId: number;
    vehical: string; 
    vehicalCompany: number;
    vehicalNumber: string;
}