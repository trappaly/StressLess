# Sprint Review 3: Initial Release

During this sprint, we set up all the necessary technologies for our app and created documentation on how each teammate can get on board and download the technologies on their personal machines. Aside from the set-up of all of the technology, we also made progress on the frontend and the backend of our projects. Specifically, the frontend now has a landing page, a user-preference form, and the layout for the app. The backend now has the database fully set-up, has made progress with authentication, and is almost finished with controllers and routing.

## Sprint Review Questions

- How has your product improved or progressed from a customer perspective?
    - We created a landing page, a user preference form, and started making a calendar. This is great progress for our customers, as they are now able to see a basic implementation of our product and get an idea of how we envision our product to look like, which we hope to improve in the upcoming sprints.
- Describe in terms of high-level features that a non-technical user could recognize and appreciate.
    - An entry point to the app with user authentication to unlock personalized content after login
    - Fully responsive form where users can set their study/productivity style and sleep time
    - Users can switch between light and dark themes
    - Calendar page with monthly, weekly, and daily view.
- What progress have you made that is not visible to a common user?
    - In the backend, we started working on authentication with firebase for users, creating controllers and web routes, and fully set up the database(Neon) with Prisma. We also created fake data using faker for testing purposes.
    - This will be good progress to our user because they will be able to navigate to the web page based on the urls and authentication would help ensure their security
    - Our users would also appreciate seeing that our app is seemingly functional based on the fake data we posted, as we can now use these fake data entries to test our app.

## Customer-visible Progress

- Our customers can now switch between light and dark themes in the app interface, which is specifically helpful for those who prefer switching between modes during different times of their day.
- Our customers can now interact with a fully-responsive form that collects their preferences (i.e. study style, productive times, and hours of sleep), which is one of the core features of our app that is customizable for each individual.
- The calendar now has a basic implementation of different calendar views (i.e. monthly, weekly, and daily) which is helpful for our customers to navigate through their plans.
- The user can register or login.
- The app has a landing page, and from there, the user can register or login.

## Customer-invisible Progress

- The database is now fully setup.
    - More specifically, our team worked on writing the database schema and connecting our database (Neon) through Prisma (which we have also worked on setting up).
    - Now, all we need to do is confirm a successful connection and implementation of our database and its subsequent schema in relation to the frontend and other backend components.