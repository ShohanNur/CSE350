# Service Xpress

Service Xpress is a comprehensive platform designed to connect customers with a wide range of service providers. From home cleaning and appliance repair to furniture assembly, Service Xpress makes it easy for customers to find reliable professionals for everyday household needs.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)


## Project Overview

Service Xpress aims to streamline the process of booking and receiving household services. Our platform serves as a bridge between customers who need services and experienced providers who offer them. Customers can easily browse through a variety of services, view profiles of service providers, and book services directly through our secure platform. Meanwhile, service providers can join our network to showcase their skills, set their rates, and grow their customer base.

### For Customers:
- Easy signup and login process.
- Browse a wide range of household services.
- View detailed provider profiles, including experience and rates.
- Secure payment processing via Stripe.
- Schedule and manage bookings conveniently.

### For Service Providers:
- Create and manage a professional profile.
- Set personalized rates and availability.
- Gain access to a broad customer base.
- Receive and manage bookings through an intuitive dashboard.

## Features

- **User Authentication:** Secure login and signup functionalities for both service providers and customers.
- **Profile Management:** Users can create and customize their profiles with relevant details and preferences.
- **Service Booking:** Customers can book services directly through the platform with just a few clicks.
- **Payment Integration:** Integration with Stripe for safe and reliable payment transactions.
- **Responsive Design:** The platform is fully responsive, ensuring a seamless experience on both desktop and mobile devices.
- **Review System:** After service completion, customers can leave reviews for the service providers, enhancing trust and reliability.

## Technologies

Service Xpress is built using the following technologies:
- **Node.js** - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js** - A web application framework for Node.js.
- **MongoDB** - A NoSQL database used for storing user and service data.
- **React.js** - A JavaScript library for building user interfaces.

## Getting Started

To get a local copy up and running follow these simple steps.

 **Prerequisites** 

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB or MongoDB Atlas account

**Installation**  
1.Clone the repo
   ```sh
   git clone https://github.com/your-username/Service-Xpress.git
   ```
   
2.Go to the project directory and install dependencies for both the client and api.
  ```sh
  cd client
  npm install
  ```
  ```sh
  cd api
  npm install 
  ```



   3.Create a .env file in api directories and add the environment variables.

 .env Variables :
 ```sh
   MONGO= mongodb+srv://<username>:<password>@cluster0.xvfcyln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbname=<database_name>
   JWT_KEY= <random generat key>
   STRIPE= <stipes test key>
 ```  

  4.Start backend
 ```sh
   cd api
   npm start
 ```
  5.Start frontend  
 ```sh
   cd client
   npm run dev
 ```
If it is not working then use:
```sh
  cd client 
  npm install --force
  npm install --legacy-peer-deps
```


# API Endpoints

The following table lists all the backend endpoints used in Service Xpress for various functionalities such as authentication, service management, user management, reviews, orders, conversations, and messaging.

| Category        | Action           | Method   | URI                                                      |
|-----------------|------------------|----------|----------------------------------------------------------|
| **Authentication** | Register         | POST     | `localhost:8800/api/auth/register`                       |
|                 | Login            | POST     | `localhost:8800/api/auth/login`                               |
|                 | Logout           | POST     | `localhost:8800/api/auth/logout`                         |
| **Service**         | Add Service      | POST     | `localhost:8800/api/gigs`                                |
|                 | Delete a Service | DELETE   | `localhost:8800/api/gigs/:id`                            |
|                 | Get a Service    | GET      | `localhost:8800/api/gigs/single/:id`                     |
|                 | Get all Services | GET      | `localhost:8800/api/gigs`                                |
| **Users**           | Delete a User    | DELETE   | `localhost:8800/api/users/:id`                           |
|                 | Get a User       | GET      | `localhost:8800/api/users/:id`                           |
| **Review**          | Create a Review  | POST     | `localhost:8800/api/reviews`                             |
|                 | Get Review       | GET      | `localhost:8800/api/reviews/:gigId`                      |
|                 | Delete a Review  | DELETE   | `localhost:8800/api/reviews/:id`                         |
| **Order**           | Get Orders       | GET      | `localhost:8800/api/orders`                              |
|                 | Create Orders    | POST     | `localhost:8800/api/orders/:gigId`                       |
|                 | Payment          | POST     | `localhost:8800/api/orders/create-payment-intent/:id`    |
|                 | Confirm Payment  | PUT      | `localhost:8800/api/orders/`                             |
| **Conversation**    | Get Conversations| GET      | `localhost:8800/api/conversations/`                      |
|                 | Create Conversation| POST    | `localhost:8800/api/conversations/`                       |
|                 | Get a Single Conversation | GET| `localhost:8800/api/conversations/single/:id`            |
|                 | Update Conversation| PUT     | `localhost:8800/api/conversations/:id`                    |
| **Message**         | Create Message   | POST     | `localhost:8800/api/messages/`                           |
|                 | Get Message       | GET      | `localhost:8800/api/messages/:id`                        |



## Usage

Service Xpress is designed to cater to both service providers and clients, ensuring a seamless interaction between both parties.

**For Service Providers:**  
Upon joining Service Xpress, providers can create and customize their profiles. These profiles are an opportunity for providers to showcase their experience, expertise, and the rates they charge for their services. This transparency helps build trust with potential clients while allowing providers to manage their offerings and grow their customer base efficiently.

**For Clients:** 

Clients looking for reliable and professional household services can sign up on our website. The registration process is straightforward, enabling clients to quickly gain access to a wide range of services. Once logged in, clients can browse through the profiles of service providers, compare pricing, and read reviews from other users to help them make informed decisions. Booking a service is just a few clicks away, with payment conveniently handled through Stripe, ensuring a secure transaction process. This ease of use and secure payment option enhances the overall customer experience on Service Xpress.

      





