/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express';
import { InvoiceControllers } from './invoice.controller';


const router = express.Router();


router.post(
    '/calculate',
    InvoiceControllers.calculateInvoiceTotal
);


export const InvoiceRoutes = router;