# MyStore

This is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js) and Redux for state management. It provides a comprehensive foundation for building an online store, including features like product management, user authentication, and shopping cart with PayPal & credit/debit payments functionality. See it in action at (https://myshop-k7z9.onrender.com/)

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **User Authentication**: Users can create accounts, log in, and maintain their profiles.
- **Product Management**: Admins can add, edit, and delete products, while users can browse and search for products.
- **Shopping Cart**: Users can add products to their cart, view the cart, and proceed to checkout.
- **Payment Integration**: Integrates with PayPal / credit card payment gateway for secure transactions.
- **Redux State Management**: Utilizes Redux for efficient state management and a seamless user experience.
- **Responsive Design**: The application is mobile-friendly and adapts to various screen sizes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB database set up and running.
- Payment gateway credentials (e.g.,PayPal) for payment integration.

## Installation

### Clone the repository

   ```bash
   git clone https://github.com/kimsoyol/my-shop-demo


## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:8000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@gmail.com (Admin)
123456

nay@gmail.com (Customer)
123456

```
