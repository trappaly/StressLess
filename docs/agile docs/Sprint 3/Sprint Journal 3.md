# Sprint Journal 3

## Difference Document

We made changes to the use cases of our Requirements Document. Our difference document can be viewed here.

## Last Commit

Kindly reference the tag in our development branch titled “sprint-3-initial-release”.

## Code Review

Kindly reference our development branch for all of our code reviews.

## Technical Processes

Kindly refer to the root README file in our development branch to see our technical processes.

## Non-User Facing Progress

- The database is now fully set up.
    - More specifically, our team worked on writing the database schema and connecting our database (Neon) through Prisma (which we have also worked on setting up).
    - Now, all we need to do is confirm a successful connection and implementation of our database and its subsequent schema in relation to the frontend and other backend components.
- Set up authentication with Firebase.
    - This helps ensure security for the user.
- Started implementing user controllers and user routes.
    - Partial implementation of user controllers and user routes. Has written the code for these, but we have not verified that they are working ye.
- Wrote controllers for both user management (log in, log out, sign up, and get responses) and calendar events.

## User-Facing Features

1) Click get started to get directed to the sign in/sign up or scroll down to see the sign in/sign up section. 

2) First time users should sign up by inputting username, password, and name before clicking the sign up button

3) First time users will be directed to the preference form page where they can:

- They can drag slide the slider to input their productive time
- Input work duration, preferred sleep time
- Enter start of workday and end of workday

4) Upon user inputing their user preferences, they can click save preferences to potentially store it.

5) User should sign in by inputting username, password, and name before clicking the sign up button and will be directed to the dashboard.

1. Once signed in the user will see the monthly view of the calendar. 
- From there they can drag an event from the drag an event box, Using the event that they dragged, they can determine the duration to which they want to work on that event. Say if they drag the event(from the right-most side there will be a directed white arrow to drag) from Thursday to Saturday it would create the event Thursday, Friday and Saturday day.
- If the user would like to create a new event on a specific date, they can click on the date from the monthly view and then a prompt will show up to add the event with the title
- The user can also click on the event that has been added and have the option to delete it and gets prompted with a “are you sure you want to delete” and then you can select delete or cancel
- If the user clicks on the week button (next to the month button), they will see a weekly view of their schedule and they can scroll down from 6 AM to the end of the day.
    - From there they can click on any time slot and add an event
- There’s a button that says today and when you click the today button, you will be taken to the current day which is shown by highlighting that date on the monthly view and the weekly view