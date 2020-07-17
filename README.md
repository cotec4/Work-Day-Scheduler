# Work-Day-Scheduler
The goal of this assignment was to create a work-day scheduler where you can input text (events) for the day and save those inputs to local storage.
Initially I created the majority of this code in HTML which led to DRY HTML code with up to 24 Divs for each hour (as I decided to show the current hour even if the current hour was outside the traditional 9-5 working hours). I then focused on eliminating the DRY code by creating a for loop in JS to replace the Divs and append the new Divs to the container.
I then focused on using jQuery code to reference each time-block rather than creating new variables in JS to reference to.

This was a challenging but refreshing assignment in both creating the website then de-bugging and finally eliminating the DRY code.