import { ICar } from "./car";
import { ICustomerInfo } from "./customer";

export interface IReservation {
    reservation_id: string;

    pickUpDate: string;
    dropOffDate: string;

    duration: {
        weeks: number;
        days: number;
        hours: number;
    };

    discount: number;

    customerInfo: ICustomerInfo;

    carInfo: ICar;

    additionalCharges: [
        {
            name: string;
            cost: number;
            isChecked: boolean;
            cost_type: string;
        }
    ];
}