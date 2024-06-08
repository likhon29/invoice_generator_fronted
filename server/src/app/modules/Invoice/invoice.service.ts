
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';

const calculateInvoiceTotal = async (payload: any) => {

    // if (!payload) {
    //     throw new AppError(httpStatus.BAD_REQUEST, 'Information is required');
    // }

    // const { reservationInfo, vehicleInfo, additonalChargesInfo } = payload;


    // const result = await Course.create(payload);
    return {
        total: 1000,
        discount: 100,
        payable: 900,
    };
};

export const InvoiceServices = {
    calculateInvoiceTotal,
};