# Sprint Journal 2

Link to instructions: [https://docs.google.com/document/d/e/2PACX-1vT6NtQOI4i2_dXNXDn4hOtefllVAdQ5aWyXF9asMAJomzY2957tUhaxASNjuEZGVil2Sel8c0PwIcqB/pub](https://docs.google.com/document/d/e/2PACX-1vT6NtQOI4i2_dXNXDn4hOtefllVAdQ5aWyXF9asMAJomzY2957tUhaxASNjuEZGVil2Sel8c0PwIcqB/pub)

# **Part 2: Software Architecture**

### **Decision 1: Authentication and Authorization**

For each of two decisions pertaining to your software architecture, identify and briefly describe an alternative. For each of the two alternatives, discuss its pros and cons compared to your choice.

We decided to use Firebase to handle user authentication and authorization. Firebase provides an SDK that allows us to integrate authentication seamlessly, managing user sign-ups, logins, and token-based authentication. 

**Alternative Considered:**

We considered **building our own authentication system**. This would involve validating emails manually, hashing and storing passwords, handling password recovery, and issuing JWT tokens for session management.

**Pros:**

- We wouldn't rely on an external service, reducing potential costs at scale.
- Full control over user authentication, which allows custom security policies.

**Cons:**

- **Complexity**: We would have to implement features like password recovery, email verification, and secure password storage.
- **Security Risks**: Handling authentication ourselves increases the risk of vulnerabilities such as weak password storage or token mismanagement.
- **Reinventing the Wheel**: Third-party services like Firebase already provide a robust, scalable authentication solution, eliminating the need to implement these features from scratch.

By choosing Firebase, we **reduce development time, improve security**, and ensure we can **focus on core application logic rather than authentication management**.

### **Decision 2: Monolithic vs. Microservices Architecture**

We considered whether to structure our system as a **monolith** or use a **microservices architecture**. After evaluating both options, we decided to go with a **monolithic architecture** for our MVP.

**Alternative Considered:**

A **microservices** architecture, where different components (such as authentication, scheduling, and user preferences) would be independent services communicating via APIs.

**Pros of Microservices:**

- **Scalability**: Individual services can scale independently based on demand.
- **Flexibility**: Each service can use different technologies best suited for its purpose.
- **Fault Isolation**: If one service fails, it doesn't necessarily bring down the whole system.

**Cons of Microservices:**

- **Increased Complexity**: Managing multiple services requires setting up inter-service communication, service discovery, and orchestration.
- **Higher Development Time**: Microservices require significant effort in structuring, deploying, and maintaining them properly.
- **Lack of Experience**: Given our current skill level and time constraints, implementing a microservices approach would slow us down and introduce unnecessary challenges.

**Why We Chose Monolith:**

- **Simpler Development & Deployment**: A single codebase with shared configurations and dependencies makes it easier to manage.
- **Consistent Technology Stack**: We are using **TypeScript for both frontend and backend**, allowing for **code reusability and global configurations**.
- **Faster Development**: With our tight timeline, a monolithic approach allows us to build features quickly without worrying about distributed system complexities.

By choosing a monolith, we can focus on delivering the core functionality efficiently and avoid over-engineering. If our application scales and requires more modularization, we can refactor parts of the system into microservices later.

# **Part 5: Process Description**

## 5.1 Risk assessment

|  | **Risk** | **Likelihood of occurring** | **Evidence** | **Steps to reduce impact** | **Plan for detecting problem** | **Mitigation plan** |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Misidentifying technologies, namely our choice of a RESTful API over a GraphQL API. | Low | We deliberated over a RESTful API and a GraphQL API. We chose a RESTful API due to the small scale of our product, and well-defined data structure. However, we defined our product to support handling many events per person, which may be more helpful for GraphQL. | Research strategies to optimize the speed of a RESTful API. Plan the endpoints of the API to ensure data returned is appropriate for frontend needs. | Determine whether a RESTful API takes excessive time to retrieve all events for a person. | Identify unnecessary information that is provided by a RESTful API. Create new API endpoints that reduce the amount of unnecessary data provided from the backend. |
| 2 | Not being able to complete a scheduling algorithm | Medium | Professor has discussed this during the user study. Our application is algorithm-heavy compared to other groups. | Make a working algorithm as soon as possible. Research scheduling algorithms already in use. | Make a description of the minimum the scheduling algorithm should perform. Determine if our implementation fulfills the minimum requirements. | Prioritize the writing of the scheduling algorithm. Assign specific people to work on the scheduling algorithm until it is sufficient for an MVP. |
| 3 | Changing survey questions after making the algorithm | High | We use survey questions as part of the algorithm to understand users’ work habits. If we change the survey questions, then users may have missing data. | Make the survey responses as expressive as possible. For example, instead of giving a binary answer, allow data to be stored as a numeric answer instead. Treat each version of a question as a separate question. | We will notice this problem if we want to change or add a survey question after the scheduling algorithm is already implemented. | Do not overwrite answers to old versions of questions. Algorithmically generate or prompt users for answers to changed or new questions. Ensure the scheduling algorithm has appropriate defaults. |

## 5.2 Epics

*An epic is a series of issues that come together to create an identifiable feature group. Completion of an epic may span multiple sprints.*

|  | **Epic** | **What will it achieve** | **Dependencies** | **Effort estimate** | **Subtasks** |
| --- | --- | --- | --- | --- | --- |
| 1  | Make the user login authorization | The user will be able to securely login into their account using a unique username and a password. | None | 3 person-weeks | Implement the user login and sign-up, Create tests to determine whether the login/sign-up works, Test the login/sign-up  tests to confirm they work and make changes as needed. |
| 2 | Implement the database | The backend should contain the components for each object of the database, ensuring that each object can successfully store the information necessary. | None | 6 person-weeks | Decide which database technology to use, Implement the data models |
| 3 | Surveys the user and stores the information | The frontend will survey the user. The database will store the user’s answers and preferences from the survey.  | Make the user login authorization, implement the database | 10 person-weeks | Make the survey, users can fill out personal info on the survey, survey responses can be stored in the database |
| 4 | Stores the users events for the calendar | It will store the events and assignments that the user enters in the survey and after on the calendar as well.  | Implement the database, Make the scheduler algorithm | 6 person-weeks | Events can be added to database, events can be removed from database |
| 5 | Make the scheduler algorithm | The scheduler algorithm will be able to schedule an individual’s recurring events that do not have times assigned. | Implement the database, Surveys the user and stores the information | 7 person-weeks | Research on how to create an algorithm, define inputs and outputs of algorithm, code the scheduler algorithm |
| 6 | Frontend calendar is displayed and modifiable | The user should be able to easily switch between daily, weekly, and monthly views of their calendar, without losing any calendar information. The calendar shows the user’s events from the database. The user can also modify individual events. | Stores the users events for the calendar, Implement the database | 10 person-weeks | Implements weekly view, implements monthly view, shows events in calendar, event details are visible, events can be modified |

## 5.3 Product Roadmap

[Product Roadmap](Sprint%20Journal%202%201ad81728581b80228268c7dfc9e7f1e0/Product%20Roadmap%201c081728581b80aea67bc5fff9173633.csv)

**Screenshots of roadmap:**

![Screenshot 2025-03-29 at 7.46.29 PM.png](Sprint%20Journal%202%201ad81728581b80228268c7dfc9e7f1e0/Screenshot_2025-03-29_at_7.46.29_PM.png)

![Screenshot 2025-03-29 at 7.46.35 PM.png](Sprint%20Journal%202%201ad81728581b80228268c7dfc9e7f1e0/Screenshot_2025-03-29_at_7.46.35_PM.png)

## 5.4 Documentation Plan

- In the requirements document

# **Part 6: Continuous Integration Plan**

- Test Library: Vitest
- Why We Chose It:
    - Vitest is a beginner-friendly testing framework compatible with Typescript. The framework is similar to JUnit, which many of our team members have used while learning Java in CSC 207. Therefore, we deem Vitest as an appropriate testing framework for our project as our team as a whole is relatively new to testing.
- Your CI service and how your project repository is linked to it: Our CI Service is GitHub Actions. The project repository is linked to GitHub Actions through a folder called “.github”, nested in that folder is a folder called “workflows”. Currently, we have one CI file called “action.yml”. Every push on our branches of development and main will trigger GitHub Action to run (our CI pipeline).
- Why We Chose It: GitHub Actions is a compatible CI service with Vitest, which would allow our team to automate the testing workflow. We find GitHub Actions to be a simple and easy-to-learn technology to use, as we have demoed the technology in CSC 324 and it seems to have a seamless integration into GitHub, which we are already using for version control.

# **Part 7: Test Automation and Continuous Integration Setup**

 Screenshot of your successful tests:  

![image.png](Sprint%20Journal%202%201ad81728581b80228268c7dfc9e7f1e0/image.png)

![image.png](Sprint%20Journal%202%201ad81728581b80228268c7dfc9e7f1e0/image%201.png)

![image.png](Sprint%20Journal%202%201ad81728581b80228268c7dfc9e7f1e0/image%202.png)

# **Part 8: Additional work of your choice**

**Researched**: what scheduling method we will use to automate the user’s schedule will be based on Multilevel Queue scheduling in which every answer on the initial survey gets assigned a level of priority based on how the users answered. The multilevel queue will be used with maybe hourly times of the day the user is available then the time of day that gets chosen as when the task will be completed will be based on the priority queue created by the initial survey

**Tracer code**: We have wrote tracer code that verifies the ability for the frontend, backend, and database layers of our application to communicate properly between each other. The tracer code does the following:

- The frontend fetches dummy data from the database through sending a GET request to the backend. Then, the frontend displays information based on the dummy data.
- The frontend modifies the dummy data in the database through sending a POST request to the backend.

Through writing tracer code, we have identified common mistakes, such as not using CORS, and ensured that all of us have working development environments.

**Deployment**: We have deployed the backend and frontend. Specifically, we used Render ([https://render.com/](https://render.com/)) to host the application. We have two services running on Render—one hosting the backend in Node and one hosting the React frontend. We have planned to make our repo have two settings, `prod` and `dev`, so we can have appropriate configurations for local and deployed usage.

**Landing page**: We have started work on making a static landing page that has a brief overview of the app. We used UI components from [https://ui.aceternity.com/](https://ui.aceternity.com/) to design the landing page.

**Initial Survey Questions:**  We finalized our initial survey questions for new StressLess users.

**Initial Survey Answers:**  We finalized our initial survey answers so users can enter specific numeric answers