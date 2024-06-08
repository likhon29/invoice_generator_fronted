
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { calculateTotal } from './invoice.utils';

const calculateInvoiceTotal = async (payload: any) => {

    if (!payload) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Payload is required');
    }


    const total = calculateTotal(payload)

    return total;
};

export const InvoiceServices = {
    calculateInvoiceTotal,
};