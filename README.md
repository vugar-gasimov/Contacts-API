# Contacts-API

## Overview

This project is an API for managing contacts. It includes CRUD (Create, Read, Update, Delete) operations for contact management.

## Installation

1. Clone this repository.
2. Run npm install to install the necessary dependencies.
3. Start the server using npm start.

## Usage

### Endpoints

- `GET /api/contacts`: - Get all contacts.
- `POST /api/contacts`: - Add a new contact.
- `GET /api/contacts/:id`: - Get a contact by ID.
- `PUT /api/contacts/:id`: - Update a contact by ID.
- `DELETE /api/contacts/:id`: - Remove a contact by ID.

### Examples

**Get all contacts**

GET /api/contacts

Add a contact
POST /api/contacts
Content-Type: application/json

{
"name": "Kennedy Lane",
"email": "mattis.Cras@nonenimMauris.net",
"phone": "(542) 451-7038"
}

## API Structure

- `models/contacts.js`: Contains functions to perform CRUD operations on contacts using a JSON file.
- `routes/api/contacts.js`: Defines API routes and their corresponding controllers.
- `controllers/contacts.js`: Implements functions to handle requests and interact with the contact model.
- `middlewares/validate.js`: Middleware functions for request body validation using Joi.
- `schemas/contacts.js`: Joi schemas for request body validation.

### Dependencies

- `express`: Web server framework for Node.js.
- `joi`: Schema validation library.
- `nanoid`: Unique ID generation library.

### Contributing

Feel free to contribute by opening issues or creating pull requests.
