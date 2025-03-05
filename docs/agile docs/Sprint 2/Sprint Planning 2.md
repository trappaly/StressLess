# Sprint Planning 2: Design, Architecture, Testing, Continuous Integration (StressLess)

# Overview

In this sprint, we will solidify the architecture and design of our product. We will write a testing plan, set up automated testing and continuous integration, and complete additional work toward the initial release.

# Capacity - 2 Weeks Sprint

- **Tim (10 hours over two weeks)**: Busy most evenings. Has exams and assignments until Wednesday, 3/5. May have some time to learn technologies over the break, but not do group work.
- **Alyssa (12 hours):**  Slighty busier 2nd week than first week. Can meet anytime after 6:30 pm M and T, W,  before 11:30 am or 2:30-4 pm on T and TH, 4-5 on F, and can prob mostly do anytime Sa or Su. Can also meet in mornings before 11 am M, W, and F. I  won’t be working on this over spring break.
- **Nifemi: ( 10 hours):** Flexible schedule, prefer to meet after 4pm during weekdays and anytime weekends. Unable to meet during spring break.
- **Khanh (1st week: 6 hours, 2nd week: 12 hours, optional spring break: infinity):** My first week will be busier because of a personal obligation. I can do additional work during spring break.
- **Madel (10 hours):** My availability is not flexible for the first week of the sprint, as I have 2 midterms and a paper due by Thursday. I will also be absent on the Friday of the first week of the sprint and will not be working on the project during Spring Break. I am more flexible in the second week of the sprint, and I am willing to make up any of my missed work then.
- **Cheyanne( hours):** available on friday after 4pm, everyday after 4pm im free. Mostly free, mondays: busy in the morning 10 to 12;  free from 12 to 2pm every MWF; class on T/TH from 2:30pm to 4 otherwise free those days; typically free after 4pm everyday

# Goals

### 1st Week

- Define what data we need for our app (data models)
    - Make an ER diagram.
    - Make our database schemas.
    - Settle on data system technology.
    - Set up the database.
    - Add the data model to our **Requirements Document.**
- Define our programming language style guide
    - Choose one source.
    - Add it to the developer guidelines on our [GitHub repo](https://github.com/trappaly/StressLess/).
- Refine our software architecture in our **Required Document**
    - Identify major software components and their functionality.
    - Define high-level interfaces between components.
    - Identify data storage components and their interactions.
    - Provide an architecture diagram with explanatory notes.
    - Outline key architectural assumptions.
    - Document two alternative architecture choices and compare their pros and cons in our **Journal.**

### 2nd Week

- Refine our software design in our **Required Document**
    - Detail the software components identified in the architecture.
    - Define responsibilities for each component.
    - Specify detailed interfaces between components.
    - Describe data flow and communication between components.
- Thoroughly describe our process
    - Identify the top three risks to successful completion of our project.
    - Divide our planned work into about 3-6 epics.
    - Create a timeline or calendar to represent our product roadmap.
    - Create user guides, admin guides, developer guides, man pages, help menus, wikis, skeletons with corresponding issues in our **Issue Manager.**
- Define our testing and continuous integration plan
    - Choose unit test, integration test, end-to-end test library with justification on why we choose it.
    - Choose our CI service with justification.
    - Set up a basic CI pipeline.
    - Document the whole process.
    - Write a few basic test suites like testing writing to tables, testing sending information back and forth between backend and user interface, clicking buttons on UI.
    - Automate these tests in our CI pipeline.
    - Make all tests green/passed.
- **Additional work:**
    - Deploy
        - Choose backend host
        - Choose frontend host
        - Deploy
        - Integrate to CI/CD
    - Authentication & Authorization
        - Choose auth service.
        - Set up email/password, store encrypted password.
        - Frontend has the sign up/sign in/log out flow.
        - Store user session state securely.
    - Landing Page
        - Build a responsive landing page according to our paper prototype.
        - Just build the functional features, no need to care about aesthetics.
        - Implement a signup/login flow directly from the landing page.
    - Integrate some calendar API and build a monthly/weekly/daily view that user.

# Task Breakdown

https://trello.com/b/qHGNCIJI/stressless

See the issue tracker. Our tasks can be divided into these categories: Coding Guidelines, Data Modeling, Software Architecture, Software Design, Process Description, CI Plan, Test Automation and CI Setup, Additional Work of Choice.

We plan to divide up our work instead of everyone working on everything together. We also plan to have some of us working on the project over the break to speed up the process but this is not expected of.

# Assignments

See the issue tracker.

# Issue Tracker

See the link above in “Task Breakdown”
