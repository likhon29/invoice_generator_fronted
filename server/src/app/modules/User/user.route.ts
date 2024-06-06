/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express';


const router = express.Router();

router.get(
    '/me',
    (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            success: true,
            message: 'User Profile',
            data: {
                id: '123456',
                name: 'John Doe',
                email: 'abc@gmail.com',
            }
        });
    }
);

export const UserRoutes = router;