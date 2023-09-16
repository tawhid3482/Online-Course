Question No.1=> Add at least 3 Project features?

ans:

1/ Project Overview: This project is primarily an online course platform that covers a wide range of subjects, including basic web development, programming, data science essentials, graphic design, mobile app development, digital marketing, and business finance.

2/ Waitlist and Notifications: In the project, we have implemented a waitlist feature with notifications. When a user or student attempts to enroll in a course multiple times, a notification toast will be displayed. Additionally, if the user's credit balance falls below 20 or reaches 0, a notification toast will also appear, indicating that they cannot enroll in additional courses.

3/ Course Selection: Users are free to choose any course within the project. However, there are two important restrictions to keep in mind. First, users should not attempt to enroll in the same course multiple times. Second, if their credit hours are exhausted or their remaining balance reaches zero, they won't be able to select any more courses until they recharge their credits.



Question No.2=> Discuss how you managed the state in your assignment project?

Ans: First, I declare a useState hook to initialize an empty array. Then, I use another hook to load JSON data from course.json and set this data using setCarts. Additionally, I declare three more useState hooks for the following purposes:

1.The first one is used to select a course item within an event handler.

2.The second one tracks the remaining course value, and if it falls below 0, a toast notification is displayed.

3.The third and final useState hook is used to manage and update the total credit hours."