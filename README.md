# Events-Registration-App
Web-based application for events registration.

**Objective**:
- **Events board page**: implement the events board page where users can observe the
paginated list of available events. List of events can be pre-populated in the database
manually or via seed script. Event should consist of:
- title;
- description;
- event date;
- organizer.

- **Event registration page**: by clicking on “Register”, users should be redirected to the
event registration page, which contains a registration form with the following fields: full
name, email, date of birth, “where did you hear about this event?”.
Once the form is submitted, the response should be stored in a database.

**Event participants page**: implement the event participants page where users can see
a list of registered participants. This page should be available by clicking on the “View”
button.

## Main stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Express.js, MongoDB (Atlas)

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Vitaliy-Mazurenko/Events-Registration-App.git
   cd chat/backend

   ```

2. **Install backend dependencies**:

   ```bash
   npm install
   ```

3. **Start the backend server**:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the `frontend` directory**:

   ```bash
   cd ../frontend
   ```

2. **Install frontend dependencies**:

   ```bash
   npm install
   ```

3. **Start the frontend development server**:
   ```bash
   npm run dev
   ```

### Usage


- Open your browser and navigate to `http://localhost:5173/` to see the application.
- The backend server will run on `http://localhost:4000`.


###  Deploy an application [Events Registration App](http://events.victory.vinnica.ua/).
