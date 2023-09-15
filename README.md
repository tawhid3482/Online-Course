Question No.1=> Add at least 3 Project features?

ans:


Question No.2=> Discuss how you managed the state in your assignment project?

Ans: First, I declare a useState hook to initialize an empty array. Then, I use another hook to load JSON data from course.json and set this data using setCarts. Additionally, I declare three more useState hooks for the following purposes:

The first one is used to select a course item within an event handler.
The second one tracks the remaining course value, and if it falls below 0, a toast notification is displayed.
T