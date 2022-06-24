# MytheresaChallenge
Mytheresa Challenge

I have implemented 2nd case, I can add a lot more things but with this time i did a basic framework.As i learned new PlayWright but i love this tool this one of my 1st POC on PlayWright as it was mentioned PlayWright is best tool to automate.

My solutions for case 1 and 3 at the end.

Repo - https://github.com/viveksaraf2020/MytheresaChallenge.git

I kept it public so easy to ccess and clone.

1. Navigate to any space in directory and Clone the code with (Do not create any folder)
Command - git clone https://github.com/viveksaraf2020/MytheresaChallenge.git

2. Open the Terminal and put the command for headless execution 
Command - npm run headless

3.  Open the Terminal and put the command for with head execution 
Command - npm run header

Note-
- I added retry feature so if it fails it will execute again once all test cases
- I added 3 browsers to validate

Issue observed - After logged in or after invalid login i can see page is not loading properly althoug there is no console error.The page not loadng completely and coz of that page fail there most of the time.PLease observae same mnually as well.


Solution -1 case-
With the API integration of PlayWright package i can do the 1st case where i need to capture the status code and validate.

Solution -3 case-
There is a feature in Playwright where we can create list easily and make a CSV file with details.


