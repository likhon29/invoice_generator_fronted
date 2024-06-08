import httpStatus from 'http-status';
import catchAsync from '../../utils/catechAsync';
import sendResponse from '../../utils/sendResponse';
import { InvoiceServices } from './invoice.service';


const calculateInvoiceTotal = catchAsync(async (req, res) => {
    const result = await InvoiceServices.calculateInvoiceTotal(req.body);
    console.log(result)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Invoice Calculated Successfully',
        data: result,
    });
});


export const InvoiceControllers = {
    calculateInvoiceTotal
};