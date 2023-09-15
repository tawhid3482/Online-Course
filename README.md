Question No.1=> Add at least 3 Project features?

ans:

1.About project :=> It is a basicaly online course on basic Web development,Programming,Data Science Essentials,Graphic Design,Mobile App,Digital Marketing,Business Finance etc.

2.Waitlist and Notifications :=> i add some toast in my project when a user or student select one course in multiple time then it's show and also when the credit and remaining  is less than or getter than 20 or  0 then it's show the toast.

3.Select Course :=> You can select any course in this project but remember 2 things 
1st one never select one course multiple time and 2st one is if your credit hour and remaining is finish you cannot select another course.



Question No.2=> Discuss how you managed the state in your assignment project?

Ans: First, I declare a useState hook to initialize an empty array. Then, I use another hook to load JSON data from course.json and set this data using setCarts. Additionally, I declare three more useState hooks for the following purposes:

The first one is used to select a course item within an event handler.
The second one tracks the remaining course value, and if it falls below 0, a toast notification is displayed.
T