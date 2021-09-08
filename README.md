# Interview Scheduler
A React application that allows users book and cancel interviews.

## Project Features
Interviews can be booked between Monday and Friday.
A user can switch between weekdays.
A user can book an interview in an empty appointment slot.
Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
A user can cancel an existing interview.
A user can edit the details of an existing interview.
The list of days informs the user how many slots are available for each day.
The expected day updates the number of spots available when an interview is booked or canceled.
A user is presented with a confirmation when they attempt to cancel an interview.
A user is shown an error if an interview cannot be saved or deleted.
A user is shown a status indicator while asynchronous operations are in progress.
When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Final Product

## New appointment booking
!["Screenshot of create New appointment"](https://github.com/Pooja-IT/scheduler/blob/master/docs/Create%20New%20Appointment.png?raw=true)
## Daily Appointments View
!["Screenshot of daily appointments view"](https://github.com/Pooja-IT/scheduler/blob/master/docs/Daily%20appointments%20view.png?raw=true)
## Delete Status Indicator
!["Screenshot of delete status indicator"](https://github.com/Pooja-IT/scheduler/blob/master/docs/Delete%20Status%20indicator.png?raw=true)
## Error for Student Name
!["Screenshot of error for student name"](https://github.com/Pooja-IT/scheduler/blob/master/docs/Error%20for%20student%20name.png?raw=true)
## Interview Confirmation
!["Screenshot of interview confirmation"](https://github.com/Pooja-IT/scheduler/blob/master/docs/Interview%20Confirmation.png?raw=true)
## Saving Indicator
!["Screenshot of saving indicator"](https://github.com/Pooja-IT/scheduler/blob/master/docs/Saving%20indicator.png?raw=true)
## Handling Error
!["Screenshot of handling error"](https://github.com/Pooja-IT/scheduler/blob/master/docs/handling%20error.png?raw=true)



## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
