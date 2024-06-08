import { AdditionalChargeConstants } from "./invoice.constant";

export const additionalChargeCalculation = (data: {
    collisionDamageWaiver: boolean,
    liableInsurance: boolean,
    rentalTax: boolean
}) => {
    let total = 0;
    if (data?.collisionDamageWaiver) {
        total += AdditionalChargeConstants.COLLISION_DAMAGE_WAIVER;
    }
    if (data?.liableInsurance) {
        total += AdditionalChargeConstants.LIABILITY_INSURANCE;
    }
    if (data?.rentalTax) {
        total += AdditionalChargeConstants.RENTAL_TAX;
    }

    return total > 0 ? total : 0;
}

// Calculate the total rental charges considering the rental duration, selected car rates, discounts, and additional charges. 
// Bonus: Let's say you have a Tesla in your system that charges $10 per hour and $50 per day. What occurs now if the car is rented for six hours? Is the customer willing to pay more than the daily rate for one-fourth of the period? Regarding the hourly, daily, and weekly rate systems, how do you handle this issue? Describe your solution in the readme file of your project.



export const vehicleChargeCalculation = (car: any, duration: { weeks: number; days: number; hours: number }) => {
    let total = 0;
    const { rates } = car;
    const { weekly, daily, hourly } = rates || {}; // Handle missing rates object

    // Calculate capped hourly cost (capped at daily rate)
    const cappedHourlyCost = Math.min(hourly || 0, daily || 0); // Use defaults if rates are missing

    // Calculate cost based on duration components

    // Weekly cost
    if (duration?.weeks) {
        total += duration.weeks * weekly;
    }

    // Daily cost
    if (duration?.days) {
        total += duration.days * daily;
    }

    // Hourly cost (capped)
    if (duration.hours) {
        total += cappedHourlyCost * duration.hours;
    }

    return total;
};

export const calculateTotal = (data: any) => {
    const { reservationDetails, vehicleInfo, additionalCharges } = data;

    const additionalCharge = additionalChargeCalculation(additionalCharges);
    const vehicleCharge = vehicleChargeCalculation(vehicleInfo, reservationDetails?.duration);
    const total = additionalCharge + vehicleCharge - reservationDetails?.discount;
    return total > 0 ? total : 0;
}