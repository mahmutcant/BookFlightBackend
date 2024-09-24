### Express.js Project README

# Express Flight Management API

This project is an Express.js API for managing flight information. Users can log in, add flight details, and retrieve their saved flights.

## Setup

### Requirements

- Node.js
- npm or yarn
- MongoDB (Local or MongoDB Atlas)

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mahmutcant/BookFlightbackend
   cd BookFlightBackend

2. **Install Dependencies**
    ```bash
        npm install
        # or
        yarn install

3. **Configure Environment Variables**
    ```bash
        MONGO_URI=mongodb+srv://username:password@cluster0.49csa.mongodb.net/userDb?retryWrites=true&w=majority&appName=Cluster0
        JWT_SECRET=jwt_secret

4. **Start the Application**
    ```bash
        npm start
        # or
        yarn start