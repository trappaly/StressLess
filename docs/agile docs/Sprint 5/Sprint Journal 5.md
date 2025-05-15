# Sprint Journal 5

# 1. Adoption Plan

## **(1a) Create Adoption Plan**

**1) Date that you wrote this journal entry.**

Friday, May 2

**2) Is your product ready for adoption?**

- *Describe the current state of your product's development at the time of writing this journal entry.*
- *Give a comprehensive risk/benefit analysis of your product by stating at least 5 risks or benefits of using your product*
- *Is it right to encourage people to adopt your product in its current state? Or will you continue developing instead? Explain your decision.*

---

Our product is not ready for adoption. Currently, our product displays the frontend calendar and supports adding/removing events. However, we still need to work on managing events, adding/removing/managing deadlines, and scheduling time to work on deadlines. Ideally, we also want to have certain stretch goals, such as calendar integration. Since we do not have our planned features fully implemented yet, our product is not adoptable right now.

Below are 5 risks and benefits for using the product.

- **Benefit**: Users can think more intentionally about work habits when using our product to create a schedule.
- **Risk**: We do not have a mobile-friendly way to use the product now, since calendaring is largely done on mobile nowadays.
- **Risk**: We have not confirmed whether our product works at scale.
- **Risk**: The product does not have any ways to incentivize users following their schedules.
- **Risk**: The product lacks notification functionality, which is an important aspect for keeping users accountable to the plans they make on the app.

Given these risks and the missing features, it is not right to encourage people to adopt our product. Many features are not fully working and the optimization of our product at a large scale is unconfirmed. We seek to complete the feature set initially planned and make the software user-friendly and mobile-friendly before encouraging users to adopt it.

**3b) Continued development plan (if not ready for adoption)**

- *Will your product be ready for adoption after some future work? Why or why not? (Don't be too hard on yourself if you decide not. Many software products make their most important impact as a learning experience for the development team rather than by reaching target users. It's totally fine if that's the case for your product. We are responsible to only encourage others to use our software when it is right to do so.)*
- *If you answered yes to the previous question, what future work is needed before adoption? Aim high. You will not be evaluated on completing all the future work.*
- *If you answered no, what future work is needed for you to tie off the loose ends of your product and feel satisfied in your learning?*

---

We are not sure right now about whether our product is ready for adoption. We initially planned on making the scheduling algorithm as an integral part of our product. However, we realized we also lacked skills in the user-facing and business-logic aspects, which are fundamental to all software products today. This meant that we spent a significant amount of time learning how to implement the basic frontend and backend logic of our app, preventing us from engaging with the scheduling algorithm significantly. Therefore, the readiness for adoption of our product would depend on the feasibility to complete our scheduling algorithm.

If the scheduling algorithm is found to be doable without significant research, or if this is a solved problem, then our product will be ready for adoption. Future work at this point would likely involve creating a frontend that is user-friendly and accessible while providing users access to the scheduling algorithm from a calendar interface. This would include adding the remaining features we plan to implement, including managing events and implementing deadlines. Furthermore, we would want to make our application usable from mobile devices. We would also need to ensure reliability through expanding the scope of our testing and ensuring our product performs at scale.

Otherwise, we may determine our product is not ready for adoption after some future work, because the future work is too significant. We can tie up loose ends through delivering a generic calendar app without a polished scheduling algorithm. In such an app, we would further develop our user interface so that it is consistent with industry standards, completing our implementation of event and deadline management. We would also improve our code documentation and test coverage. This will make us satisfied in our learning through gaining the fundamental understanding needed to create a full-stack web application, which will be useful for future projects or jobs we pursue individually.

## **(1b) Carry out adoption or continued development plan**

**Date:** May 11, 2025

### **What we did to carry out our continued development plan and the results:**

The work that we have completed in this sprint that was self-selected:

- Authorization and Authentication
    - Added email verification to sign-up procedure
    - Added password preview mode
    - Added forgetting password feature to sign-in procedure
    - Made error/guidance message more user-friendly
    - Added delete account feature where it removes Firebase instance and Neon instances across tables
- Calendar:
    - Both events and deadlines have input fields for information like `description`, `location`, `due_time`, etc. and information are sent to the backend to be stored. These information also show up when an event/deadline is clicked.
    - Events and deadlines can be deleted end-to-end.
    - Made a schema change to the `events` table to include a `deadline_id` field, which is important for our scheduling algorithm.
    - Implemented a fully time-based scheduling algorithm in the backend, with functions in the frontend to trigger `POST` and `DELETE` methods. Events can be generated and deleted now.
    - Implemented recurring events feature for daily, weekly, and monthly patterns.
    - Events created by the user, events generated by our backend, and deadlines have different colors.
- Notification: Added notification for events/deadlines right at the time of that they start.

All these works helped us achieve our Minimum Viable Product. *As a reminder, the MVP had the following major features:*

- Users can input activities (both recurring and one-time) they must do, including class time, assignments, extracurricular activities (including clubs, sports, etc.), work hours, meal times, and sleep times. Users can also input expected times needed to complete each activity that does not occur at fixed times.
- Users will fill out initial survey, so they can input preferences for when they are the most productive, when they want to have free time, when they want to sleep/wake up, and if they prefer working through their assignments for long periods of time or if they need small breaks in between.
- The app designs a weekly routine for a whole academic semester that caters to the user’s commitments as well as focus/productive time preference in a time-blocking manner.
- Users can update their planned activities and make the app regenerate the calendar.
- Notifications for upcoming deadlines, important events, etc.
- User will be able to see weekly and daily schedules as well as monthly schedule
- The app will have an authentication system. Users must log in and out to access the app.

### Is our product finally ready for adoption?

No, our product is at its Minimum Viable state and does not have much value to offer to its users yet. Our scheduling algorithm and data schema is very basic. Furthermore, our calendar only provides very few quality-of-life features beyond a scheduling algorithm.

For example, our scheduling algorithm searches through all of the user’s available time and allocates up to the user’s preferred work duration (plus a short break) until enough time is scheduled for work on this deadline or if it expires. We do this in sequence for each deadline, starting from the one with the closest due date. This means that while the algorithm solves our problem, it does not do so in the most optimal way, as another method may yield work for more deadlines being fully scheduled. Another unresolved issue is the algorithm’s behavior when the preferred work duration is shorter than the fixed break period, as the algorithm attempts to schedule over the break period in this case. Therefore, due to the limited time working on the scheduling algorithm, while it is easy to implement a simple algorithm, it is neither optimal nor does it account for any edge cases.

Additionally, our data schema is basic. It does not provide full support for modifying event series, for example, since it does not keep track of event series as individual data entries; a recurrence pattern is only used when posting the event to the backend so that multiple recurring events are created. Therefore, it is currently impossible to identify the other events that are part of an event series after event creation. Furthermore, the available user preference questions have hardcoded IDs, meaning that solving the problem of adding more user preference questions in a systematic way is necessary. Finally, we have not considered how our data schema aligns with the iCalendar format, which is the format used by calendaring software like Google and Outlook calendars.

Finally, our calendar provides very few quality of life features beyond the scheduling algorithm. For example, editing events is not supported yet; a user must delete an event to edit it. Furthermore, as previously mentioned, event series could not be deleted or modified together after it has been implemented. Finally, the application is not mobile friendly yet, given the difficulties team member faced with learning new technologies and the different mobile devices each of us have.

Altogether, while we have achieved our minimum viable product, the lack of optimization of our scheduling algorithm, basic data schema, and few quality of life features in the calendar all prevent our product from being ready for adoption. Nonetheless, by completing even a basic version of the scheduling algorithm, we have completed an MVP. Therefore, hypothetically speaking, if we continued to develop this product towards adoption, our work will be focused on more incremental changes, since we have implemented the fundamental features and logic that differentiate us from other products, which would tie up any loose ends we currently have, though we are still satisfied with the MVP.

# 2. Self-selected Work

Please see the “**What we did to carry out our continued development plan and the results:”** above to understand what self-selected work we chose to do and finished during this sprint.

# 3. Bug Logging

Links to bug reports

1. [Registered display name not saved upon sign up](https://trello.com/c/CyphDamU/184-debug-registered-display-name-not-saved-upon-sign-up)
2. [Events fetched are by multiple users](https://trello.com/c/Rz8hffCp/192-debug-events-fetched-are-by-multiple-users)
3. [Old events fetched but not rendered, FullCalendar modal showing up at the wrong time on StressLess](https://trello.com/c/GJuOJAoe/187-debug-old-events-fetched-but-not-rendered-fullcalendar-modal-showing-up-at-the-wrong-time)
4. [Events generated are not across all free time block, sometimes overlap pre-existing events on StressLess](https://trello.com/c/H1a54YOH/200-debug-events-generated-are-not-across-all-free-time-block-sometimes-overlap-pre-existing-events)
5. [Event fields saving as undefined](https://trello.com/c/ux6Rb9SO/190-debug-event-fields-saving-as-undefined)

# 4. License

[https://github.com/StressLess-Team/StressLess/blob/development/LICENSE](https://github.com/StressLess-Team/StressLess/blob/development/LICENSE)

# 5. **Wrap-up work**

*Make your repository presentable to future audiences.*

*Potential future audiences may include:*

- *future 324 students looking for inspiration for their project proposals*
- *prospective employers looking at your github*
- *prospective users looking to get started with your product*

*Consider the following tasks to make it presentable*

- *code cleanup*
- *final documentation*

### What we did:

- Created additional internal final documentation to help developers set up the project.
    - Update our docs about database schema to represent our current design
    - Noted that our Neon database and Firebase credentials may not be available after end of project.
    - To enable future developers to use their own database and Firebase credentials, we have created information on how to add our schema onto their own new databases using Prisma.
- Created documentation on how to fork and clone, and contribute to the project as an outsider.

### Relevant commits

- [https://github.com/StressLess-Team/StressLess/commit/169b6584160fbaad10fb96d77670bf398fd6038c](https://github.com/StressLess-Team/StressLess/commit/169b6584160fbaad10fb96d77670bf398fd6038c)
- [https://github.com/StressLess-Team/StressLess/commit/461c270c75eb0de18ded8bd3a79f980a1e1e9645](https://github.com/StressLess-Team/StressLess/commit/461c270c75eb0de18ded8bd3a79f980a1e1e9645)
- [https://github.com/StressLess-Team/StressLess/commit/5932811534f0169b7f50225191c4987c9bf3dbc0](https://github.com/StressLess-Team/StressLess/commit/5932811534f0169b7f50225191c4987c9bf3dbc0)

# 6. Final Presentation

Slides and notes: [https://docs.google.com/presentation/d/1aY6ztK-rckRT6eEvw2xBany0oC_AyZdzaygsn_e-Zuo/edit?usp=sharing](https://docs.google.com/presentation/d/1aY6ztK-rckRT6eEvw2xBany0oC_AyZdzaygsn_e-Zuo/edit?usp=sharing)

# 7. Blog Post

## StressLess

- Product name: StressLess
- Repository Link: [https://github.com/StressLess-Team/StressLess](https://github.com/StressLess-Team/StressLess)
- By: Khanh Do, Nifemi Ogunmesa, Madel Sibal, Alyssa Trapp,  Cheyanne Vinson, and Tim Yu
- Categories: Calendar, Web Application, Planning
- Target Users: The main target user audience are for students with assignments, but it can be for anyone who wants help organizing their busy schedules

## Overview

We are StressLess. We are a customized scheduling algorithm to help you manage your time and help you stress less. Our goal is to take your study preferences, events, and deadlines and create a schedule for you to organize your time, so you can live a healthier and happier you!

![image.png](Sprint%20Journal%205%201e781728581b802f8b49c48b18ad1913/image.png)

## Motivation

The motivation behind our app is we know that many students procrastinate, especially college students which was our inspiration. The intention of our app is to help students better manage their time and create more manageable study schedules. The need for product is for student procrastinators who aren’t the best at managing their time. The goal is mainly to help students to manage their time management skills, but it can also be used by anyone with a busy schedule who wants help organizing everything they have to accomplish. 

## Product

Our product is a calendar with a customized scheduler study algorithm. A user will enter their preferences into a user preference survey on preferred studying preferences and sleep time. The user will also be able to add events like on a regular calendar and deadlines which represent assignments. Then based on the preferences from the user preference survey, the calendar will calculate a customizable study schedule algorithm. 

![Screenshot 2025-05-11 223346.png](Sprint%20Journal%205%201e781728581b802f8b49c48b18ad1913/Screenshot_2025-05-11_223346.png)

![image.png](Sprint%20Journal%205%201e781728581b802f8b49c48b18ad1913/image%201.png)

![Screenshot 2025-05-11 at 5.32.05 PM.png](Sprint%20Journal%205%201e781728581b802f8b49c48b18ad1913/Screenshot_2025-05-11_at_5.32.05_PM.png)

![Screenshot 2025-05-11 at 5.32.15 PM.png](Sprint%20Journal%205%201e781728581b802f8b49c48b18ad1913/Screenshot_2025-05-11_at_5.32.15_PM.png)

Our main product’s features include: 

1. Entering personalized user preferences into a user preference survey for study habits and sleep schedule
2. Entering customizable events or deadlines onto the calendar 
    1. An event is an activity in the schedule that must happen at a specific time similar to most other online calendar applications
    2. A deadline has a due date of when it has to be done and expected amount of work needed to get it done, but it has no set time the user has to work on it
3. Based on the user preference survey and the amount of time all of the deadlines will take,  our app will generate a customizable schedule that will tell the user when to work on which assignments with built in breaks

You can access our product below. We are a web application. Please do not view it on mobile.       

[https://stressless-frontend.onrender.com/](https://stressless-frontend.onrender.com/)

## Process

![thumbnail_IMG_6638.jpg](Sprint%20Journal%205%201e781728581b802f8b49c48b18ad1913/thumbnail_IMG_6638.jpg)

1. We initially started out having the idea mainly targeted for high school, college, masters, or any students with a syllabus for students to scan each syllabi in a semester and the customizable scheduling algorithm would automatically take the deadlines and schedule them for the user. 
2. However, we then realized that this wouldn’t be possible within the scope of this course. We decided to shift to having the user manually enter in deadlines and events instead
3. Originally, we were just going to have study shifts that said generic study time, but after a stakeholder meeting  during the paper prototype meeting we made a shift to implementing it to say which assignment the user should be working on at a certain time
4. Originally, we were also only going to have a monthly view. However, from stakeholder feedback during the paper prototype we meeting we also incorporated a weekly view as well 
5. Other feedback we received when we coded was originally we were going to have one user help guide, but there was a lot of information on there. During one of our stakeholder meetings is when we had part of our app coded was having a user help guide per page with relevant information instead of having one user help guide that contained everything.
6. Other feedback we received when we coded was being more specific in telling the user whether they should be entering minutes or hours in the user preference survey, so we update the user preference survey to make that more clear
7. Overall our app went from an idea of scanning syllabi and organizing events to a google Calendar-style app with the addition of customized deadlines and customized scheduler studying algorithm schedule. 

One lesson we learned that it’s OK to have no idea what we’re doing at first. Learning new technology takes a lot of time at first and even if it feels like you’re wasting a lot of time reading documentation and figuring out how to use all of these new technologies but, the moment it works is worth it. Another lesson we learned is to work a manageable workload. There was a point in the semester where we all felt we were overspending time on documentation instead of making progress and implementing new features into our product. We learned to be more OK with creating more manageable schedules and reading and initially understanding more documentation than coding itself. 

## Advice and Acknowledgments

Our advice would be to choose your technologies early. You want to choose your technologies early, so you can start reading and understanding documentation before you start coding. You should do this a lot earlier in the planning process than you think you should. Once coding starts you will want to have a background of the documentation of new technologies, so you don’t feel like you are spending more time on reading and re-reading documentation rather than on actually making progress towards coding. 

Another advice is to really leverage version control and GitHub. Writing nice markdowns that help your teammates understand better the project and the process is also very important. 

![image.png](Sprint%20Journal%205%201e781728581b802f8b49c48b18ad1913/image%202.png)

We would like to thank Professor Perlmutter and our class mentor Elliot Swaim for their guidance and support throughout this project. We would like to thank all of our stakeholders who gave us useful feedback to help us improve our app. We want to thank the following YouTube tutorial for helping us implement our calendar [***https://youtu.be/VrC5XhjW6W0?si=_ibhdo7doCMXNtB3](https://youtu.be/VrC5XhjW6W0?si=_ibhdo7doCMXNtB3) .*** Finally, we would also like to thank all of our amazing teammates for all of their hardwork, dedication, and creativity for making this project possible. 

![53e30d9a-f6d3-46cb-91ff-3acc1a85798a.JPG](Sprint%20Journal%205%201e781728581b802f8b49c48b18ad1913/53e30d9a-f6d3-46cb-91ff-3acc1a85798a.jpg)

![thumbnail_20250514_172815.jpg](Sprint%20Journal%205%201e781728581b802f8b49c48b18ad1913/thumbnail_20250514_172815.jpg)