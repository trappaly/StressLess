# Sprint Review 5

During this sprint, we updated the frontend by adding verification to the user’s emails and many more features to our calendar. We added both email verification and forgetting password where the user receives an email with a link to click on to verify their email or is redirected to reset their password. Additionally, we added many features to the calendar. We added customization for both deadlines and events, so the user can now put customizable features such as the name, duration, and when it’s occurring by inputting values instead of dragging the event and customization based on dragging it. Additionally, we also made it more visually pleasing and easy to read by adding in color coded events and deadlines. We also added displaying reoccurring events and the deletion of events and deadlines. We also created a generate schedule button that will generate the customizable schedule and display it on the calendar when the user clicks the button and they can remove the generated schedule if they don’t like the generated schedule when the user clicks the remove generated schedule button. We also added the option for the user to enable notifications when creating an event. 

In the backend, we implemented our customizable scheduling algorithm and implemented recurring events. We took the inputs from the user’s preferences, events, and deadlines and created a scheduling algorithm to created customized schedules with users with built in breaks. Additionally, we also implemented reoccurring events, so that a reoccurring event would show on either the daily, weekly, or monthly time it is reoccurring for instead of only displaying it in on place which it was doing before. 

## Sprint Review Questions

- How has your product improved or progressed from a customer perspective?
    - Our product has improved visually and intuitively. The calendar supports customizable features that give users more control and flexibility over their schedules. Users can now create both events and deadline and tailor them with specific detail. These entries are now color-coded, making it easier for users to quicky understand and manage their schedule at first glance. We have improved security and accessibility, by adding email verification, a “forgot password” flow and the option to preview passwords while typing. We also have a “generate schedule” button, which creates a personalized schedule based on user’s preferences, deadlines, and events- complete with built-in breaks. Additionally, notifications
    
    Sprint Review 5
    During this sprint, we updated the frontend by adding verification to the user’s emails and many more features to our calendar. We added both email verification and forgetting password where the user receives an email with a link to click on to verify their email or is redirected to reset their password. Additionally, we added many features to the calendar. We added customization for both deadlines and events, so the user can now put customizable features such as the name, duration, and when it’s occurring by inputting values instead of dragging the event and customization based on dragging it. Additionally, we also made it more visually pleasing and easy to read by adding in color coded events and deadlines. We also added displaying reoccurring events and the deletion of events and deadlines. We also created a generate schedule button that will generate the customizable schedule and display it on the calendar when the user clicks the button and they can remove the generated schedule if they don’t like the generated schedule when the user clicks the remove generated schedule button. We also added the option for the user to enable notifications when creating an event.
    
- Describe in terms of high-level features that a non-technical user could recognize and appreciate.
    - Authorization and Authentication
        - Added email verification to sign-up procedure
        - Added a password preview mode so user can see their password as they type
        - Added forgetting password link in  sign-in area to recover password
        - Made every error/guidance message user-friendly
        - Added delete account feature so user can delete their account in the profile area
        
        Calendar:
        
        - Both events and deadlines have input fields for information like `description`, `location`, `due_time`, that get saved to the user’s profile . These information also show up when an event/deadline is clicked.
        - Events and deadlines can be deleted visually from calendar by clicking on event and selecting delete and it will be deleted where it was stored initially for the user.
        - User can select whether an event is recurring daily, weekly, or monthly and the event will be shown on the calendar as the user selected.
        - Events created by the user are shown as blue, events generated StressLess auto generate scheduler are shown in green, and deadlines are red
        - Notification: Added notification for events/deadlines that go off at the start time of the event
        - Added a button to select “autogenerate” schedule  in bottom right view of calendar and it designs schedule based off of the initial preference survey such that events are generated on calendar that caters to the user’s commitments as well as focus/productive time preference in a time-blocking manner.
- What progress have you made that is not visible to a common user?
    - Made a schema change to the `events` table to include a `deadline_id` field, which is important for our scheduling algorithm.
    - Implemented a fully time-based scheduling algorithm in the backend, with functions in the frontend to trigger `POST` and `DELETE` methods. Events can be generated and deleted now.

## Customer-visible Progress

- Email Verification
    - The user now has to verify their email sent to their gmail before creating their account
    - When the user clicks on the verification email link, it will then redirect to their profile page
- Forgetting Password
    - The user now has the ability to click on forget password link
    - If the user forgets their password, they will get an email to their email to reset their password
    - The user can click this link to reset their password and renter a new password if they forgot their old one
- Customization for Events
    - The user can now customize events
    - The user can add a title, description, location, start time, end time, and whether it’s reoccurring or not
- Option to choose a deadline or event
    - The user can now choose whether they want a deadline or an event
    - Prior they could only add events, but now they can add both now as well
- Customization for Deadlines
    - The user can now customize deadlines
    - The user can add a title, description, and estimated duration for a deadline
- Color Coded Events and Deadlines
    - The user now has a more visually appealing schedule
    - Upcoming deadlines are color coded in red, events are color coded as blue, and working times on deadlines are color coded as green
- Deletion of Events and Deadlines
    - The user can now delete both events and deadlines
- Generating Customizable Schedule on Calendar Page Based on User Preferences
    - The user can now view a generated customizable schedule
    - The user can now click the generate schedule button at the bottom of the page
    - Once the user clicks the generate schedule button at the bottom of the page, the calendar will display a customizable schedule with times to work on specific assignments with built in breaks
- Remove Generated Customizable Schedule
    - If the user does not like their customizable schedule, then they can click the remove generated customizable schedule button
    - This will remove all of the generated events from their schedule
- Added Notifications
    - If the user enables notification permissions, then it notifies you right before the event starts
- Implemented Reoccurring Events
    - Events now show in the frontend for their reoccurring daily, weekly, or monthly time

## Customer-invisible Progress

- Implemented backend scheduler
    - We created our main scheduler algorithm in the backend
    - We took in the user’s preferences, events, and deadlines to create this scheduler
    - We based the scheduling algorithm in the backend based on the number of minutes
    - The scheduler schedules times to work on deadlines based on the user’s free time during their working hours, and when they don’t have an event at that time
- Implemented reoccurring events
    - We created an algorithm that takes in user’s reoccuring pattern(weekly, daily, monthly) and creates events/deadlines to be stored in the database and calendar view.
    - When creating an event/deadline users are prompted to check whether it is recurring. If they check it, then they are prompted to fill in recurring start/end date and recurring pattern.
    - The algorithm creates the event/deadline based on the pattern selected from the recurring start date to recurring end-date