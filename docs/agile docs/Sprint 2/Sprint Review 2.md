# Sprint Review 2

During this sprint, we planned out the architecture and database of our project. We also have set up many parts of our project such as setting up the database with Neon, setting up the frontend and backend, making sure that these layers communicate, and setting up and successfully testing continuous integration with GitHub Actions. 

## Sprint Review Questions

- How has your product improved or progressed from a customer perspective?
    - Our product has clearly progressed from a customer perspective as our team set up the technologies and we also implemented code which verifies all technologies could interface between each other.
- Describe in terms of high-level features that a non-technical user could recognize and appreciate.
    - See the section titled “Customer-visible progress.”
- What progress have you made that is not visible to a common user?
    - See the section titled “Customer-invisible progress.”

## Customer-visible Progress

Most of our progress this spring was more Customer-invisible progress rather than customer-visible progress. However, we were able to create a home page for the user and test temporary tracer code. 

- We created a landing home page
    - This means that the user is now able to see the home page or the initial page they will be on when they open the app.
- Temporary counter and increment button test
    - The user can currently interact with the tracer code where a button increments a counter to show that our frontend communicates with the backend and database.

## Customer-invisible Progress

Most of our Customer-invisible progress this sprint were docs about code consistency, setting up the technology, and having these technologies communicate with each other. 

- We were able to have the backend and frontend communicate
    - This means that everything the user can visually see is able to communicate with all of the code supporting what the user can’t see.
- We set up continuous integration with action.yml file, so GitHub Actions works
    - This means that we set up continuous integration processes such as testing our code and building the program when multiple developers make changes to it
    - We used Vitest as our testing framework.
- We set up the database with Neon
    - This means we set up the database on an external service which will store our data for the software.
- We added many resources and links for developers to help better organize our code and have code consistency in formatting
    - We added a link to a guide for Vitest testing
    - We also added documentation and an information guide about formatting TypeScript code with Prettier, so our code format is consistent