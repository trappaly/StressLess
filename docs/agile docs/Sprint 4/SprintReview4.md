# Sprint Review 4

During this sprint, we updated the frontend by adding a user help guide, adding a sidebar to be able to navigate from the calendar page to the user route page, and users can now edit their display name on their user profile. We also edited questions in the frontend, so they are more consistent with the rest of the questions like instead of half of them being in military time and the other half of the questions being in an AM/PM format, they are now all in an AM/PM format. We also added a log out button as well that reroutes to the landing page. We also fetched the user preferences from the backend to be able to display the user’s preferences in the front end and users can now edit their display name as well. 

In the backend, we added routes and controllers for navigating deadlines. We also set up testing API base and configured CI and wrote tests for the user and calendar routes and how the backend helps update the database. We also protected the routes, so users can’t access their information unless they’re logged in. We also implemented the logic for a log out button as well. In the backend, they added a put preference controller as well. 

## Sprint Review Questions

- How has your product improved or progressed from a customer perspective?
    - We Implemented some changes to allow our product to be more easier for users to navigate. We added a help button with detailed instructions for how to use each page and navigate our app. Also we altered the initial preferences questions to allow for a more intuitive experience. We changed the preference questions to specify what type of unit user response should be(minute/hours), and converted the time display to AM/PM format. User’s are able to stay logged in without being prompted to sign in. We added a navigation bar that allows users to route between calendar and profile page, and added a log out button that routes users back to landing page. Calendar is visible in night mode as well.
- Describe in terms of high-level features that a non-technical user could recognize and appreciate.
    - Protected routings that users can’t access unless logged in
    - Accessible routing transition between calendar and profile page
    - Logout button terminates user’s authentication requiring them to re-authenticate to access account again
- What progress have you made that is not visible to a common user?
    - We started working on storing calendar events to the backend
    - Created testing to see how well the backend communicates with the database
    - We started working on displaying instructions in the help page that pertains to the current page

## Customer-visible Progress

- Implemented a User Help Button and Guide
    - The user can now hover over the help button to see the user help guide that helps tell users what they should do with the website
- Adding a sidebar to navigate between the calendar and user profile page
    - A sidebar now exists on the side, so if the user clicks on the calendar they will go to the calendar page and if the user clicks on the user profile page, they will go to the user profile page
- Can edit their display name on the user profile
    - In the profile page, the user can now edit their name in their profile
- Edited questions on user preferences survey, so time format was more consistent
    - Before questions had a mix of AM/PM and military time, but now all of the questions have been converted to all have consistent times of AM/PM time
- Log out button exists
    - The user is now able to log out and be directed to the home page
- User’s can now see their preferences entered in frontend
    - The personal preferences that a user enters is displayed in the user’s profile in the frontend

## Customer-invisible Progress

- Added routes and controllers for managing deadlines
    - Created controllers and routes in the backend for deadlines similar to the ones that already exist for user authentication, user routes, and user deadlines
- Set up testing API base and configured CI
    - Set up testing environment to run tests for backend
- Wrote tests for the user and calendar routes
    - Wrote tests for the user and calendar routes to ensure that the code works for all types of cases
- Protected the routes
    - A user can only access their information when they’re logged in and not if they’re logged out
- Implemented put preference controller
    - Allows the user to update their preferences