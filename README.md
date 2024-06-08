<<<<<<< HEAD
## Overview
This project is a web application built using the MERN (MongoDB, Express.js, React, Node.js) stack for a car rental service. The application allows users to input customer details, rental duration, discounts, and additional charges to generate and print an invoice. It integrates with an external API to fetch car details and rental rates.


## Features
### 1. Api Integration:
- Fetch the details  of available cars.
- Parse API response and extracted car details, hourly rates, daily rates, and weekly rates.

### 2. Frontend Development:
- User-friendly interface for inputting customer details, rental duration, discounts and additional charges.
- Display fetched car details with options for the user to select a car.

### 3. Backend Development:
- Calculate total rental charges considering rental duration, selected car rates, discounts, and additional charges.
- If the hourly rental cost exceeds the daily rate, then the daily rate is applied.
- Create an invoice based on the inputs provided with instant updates for every modification.
- Format the invoice with necessary details: customer information, car details, rental duration, charges, discounts, additional charges, and total amount payable.

### 4. Printing Functionality:
- Implemented feature to print/download the generated invoice.

### 5. Testing:
- Thoroughly test the application to ensure all functionalities work as expected.
- Test different scenarios such as various rental durations, discounts, and additional charges.

## Technologies Used
- Frontend: Next js, Tailwind CSS, MUI
- Backend: Node js, Express js

## Installation
1. Clone the repository:<br>
&nbsp; &nbsp; &nbsp; git clone https://github.com/likhon29/invoice_generator_nyntax

2. Frontend: <br>
&nbsp; &nbsp; &nbsp; cd client <br>
&nbsp; &nbsp; &nbsp; npm i <br>
&nbsp; &nbsp; &nbsp; npm run dev

3. Backend: <br>
&nbsp; &nbsp; &nbsp; cd server <br>
&nbsp; &nbsp; &nbsp; npm i <br>
&nbsp; &nbsp; &nbsp; npm run start:dev

4. Build: <br>
&nbsp; &nbsp; &nbsp; npm run build

## Usage
1. Open your browser and navigate to http://localhost:3000.
2. Input customer details, select rental duration, apply discounts, and add any additional charges.
3. Select a car from the list of available cars fetched from the API.
4. The total rental charges will be calculated automatically.
5. Generate and print the invoice using the provided functionality.

## Bonus Feature Explanation
For cases where the hourly rental cost exceeds the daily rate for a partial-day rental, the application will apply the daily rate instead of the hourly rate to ensure the customer is not overcharged. For example, if a Tesla charges $10 per hour and $50 per day, renting it for 6 hours would cost $60 at the hourly rate. Instead, the daily rate of $50 is applied.

## Testing
- Conduct unit tests for individual components.
- Perform integration tests for API calls and data fetching.
- Test various scenarios: <br>
&nbsp; i. &nbsp; Different rental durations (hours, days, weeks). <br>
&nbsp; ii. &nbsp; Application of different discount rates. <br>
&nbsp; iii. &nbsp; Addition of various extra charges.

## Conclusion
The application Car Rental Service Invoice Generator offers a complete solution for fee calculations, rental car management, and printable invoice generation. It makes use of the MERN stack's strength to provide a flawless user experience that includes precise billing and simple invoice administration.
=======
## Overview
This project is a web application built using the MERN (MongoDB, Express.js, React, Node.js) stack for a car rental service. The application allows users to input customer details, rental duration, discounts, and additional charges to generate and print an invoice. It integrates with an external API to fetch car details and rental rates.


## Features
### 1. Api Integration:
- Fetch the details  of available cars.
- Parse API response and extracted car details, hourly rates, daily rates, and weekly rates.

### 2. Frontend Development:
- User-friendly interface for inputting customer details, rental duration, discounts and additional charges.
- Display fetched car details with options for the user to select a car.

### 3. Backend Development:
- Calculate total rental charges considering rental duration, selected car rates, discounts, and additional charges.
- If the hourly rental cost exceeds the daily rate, then the daily rate is applied.
- Create an invoice based on the inputs provided with instant updates for every modification.
- Format the invoice with necessary details: customer information, car details, rental duration, charges, discounts, additional charges, and total amount payable.

### 4. Printing Functionality:
- Implemented feature to print/download the generated invoice.

### 5. Testing:
- Thoroughly test the application to ensure all functionalities work as expected.
- Test different scenarios such as various rental durations, discounts, and additional charges.

## Technologies Used
- Frontend: Next js, Tailwind CSS, MUI
- Backend: Node js, Express js

## Installation
1. Clone the repository:<br>
&nbsp; &nbsp; &nbsp; git clone https://github.com/likhon29/invoice_generator_nyntax

2. Frontend: <br>
&nbsp; &nbsp; &nbsp; cd client <br>
&nbsp; &nbsp; &nbsp; npm i <br>
&nbsp; &nbsp; &nbsp; npm run dev

3. Backend: <br>
&nbsp; &nbsp; &nbsp; cd server <br>
&nbsp; &nbsp; &nbsp; npm i <br>
&nbsp; &nbsp; &nbsp; npm run start:dev

4. Build: <br>
&nbsp; &nbsp; &nbsp; npm run build

## Usage
1. Open your browser and navigate to http://localhost:3000.
2. Input customer details, select rental duration, apply discounts, and add any additional charges.
3. Select a car from the list of available cars fetched from the API.
4. The total rental charges will be calculated automatically.
5. Generate and print the invoice using the provided functionality.

## Bonus Feature Explanation
For cases where the hourly rental cost exceeds the daily rate for a partial-day rental, the application will apply the daily rate instead of the hourly rate to ensure the customer is not overcharged. For example, if a Tesla charges $10 per hour and $50 per day, renting it for 6 hours would cost $60 at the hourly rate. Instead, the daily rate of $50 is applied.

## Testing
- Conduct unit tests for individual components.
- Perform integration tests for API calls and data fetching.
- Test various scenarios: <br>
&nbsp; i. &nbsp; Different rental durations (hours, days, weeks). <br>
&nbsp; ii. &nbsp; Application of different discount rates. <br>
&nbsp; iii. &nbsp; Addition of various extra charges.

## Conclusion
The application Car Rental Service Invoice Generator offers a complete solution for fee calculations, rental car management, and printable invoice generation. It makes use of the MERN stack's strength to provide a flawless user experience that includes precise billing and simple invoice administration.
>>>>>>> ea114cb48bb862b94c94c4595a27d1025d28f59b
