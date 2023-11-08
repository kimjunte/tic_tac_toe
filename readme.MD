## Limio

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

  * React with Redux (front-end of our main app & Limio Shop)
  * Gatsby (Limio Shop)
  * AWS Lambda with Serverless for our backend API
  * Node.js for the above & our product catalog backend
  * AWS DynamoDB for our main database
  * Git for our product catalog storage
  * AWS Cognito for our user management
  * We build with Webpack
  * Jest for testing
  * Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

 * React testing library to replace some of component tests
 * Refactoring to use React hooks across our codebase where possible
 
We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).  

We can then discuss the changes that you have made.

### Overview

The directories contain 3 sample apps. They are based on the the tic-tac-toe react tutorial, which you can find at [https://reactjs.org/tutorial/tutorial.html].

The directories are:

| Directory      | Contents    |
| ---------------|-------------| 
| app-original   | The original app from the tutorial |
| app-standalone | The same app, but re-written slightly (this has been updated to move away from class components and use functional components with React hooks) |
| app-redux      | The same app, using redux |

### Questions

Please answer the following questions:
    
1. Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.   
   * Why do you think that was done, what are the advantages / disadvantages?
   Seperating the code into component allows for easier testing and also more orthgonal("module") code. Firstly since each component can be tested individually we can ensure it works as functionaly and check for race conditions in isolation before integrating other parts.

   The code is more orthogonal, meaning that it won't influence another part of the code which is the case for some spagetti code. For example changing the Header should have nothing to do with changing the Board or how the Game works which is the reason why there was some seperations.

   The modularity also allows the code to be more reuable as it is as simple as importanting to another file and share it company wide. I also personally feel it increases readability as well compared to the massive injex.js file in the app-original.

   Since each module is isolated and can be tested serperately it also means that it is easier to colloborate. This is the same reason as orthogonal found in the pramattic programmer book but put simply. We arn't stepping on each others toes. And if the new feature was implemented and new tests were written in the feature branch than it should be 'safe' to deploy to production. (Provided it's bee tagged and tests)

   I'm trying my best to think about a disadvantage as I always want to keep things more DRY and 'modularlise' as much as possible. In any code I do. I think the only disadvantage I can think of is the inital set up to design the code modularly. I found React does the componnent archieture quite intuitvely but there also needs to be some work on directory structure and tell company wide how we strucutre things. Solution: Documentations/meetings + proper archiecture discussions before implementing v1.

   Another disadvantage I found when using React to code in this was, i found I have to keep passing down variables (props) to each componenet and some re render issues due to poor state management.


2. Thinking about a production ready app, what do you think is missing from all the examples? *Hint: the square component in the standalone app has one*

   * I am a big adovacte for test as I have come from an automated testing background. Although I don't have personal/professional expereince of using Jest myself I can tell it looks roughly like a unit test. 'Simulating' some button presses and allows to find some 'expected' value. Looks very similar to pytest in feel except in syntax obviously. The importance with unit test is that it can run on CI/CD pipelines and find bugs quickly. Honestly - i have no idea how I wrote code before testing. It allows debugging to happen during the development life style instead of discovering in production or end to end testing. This is not to say all tests can be solved by unit tests. Some bugs can only be found in integration tests and end to end testing with live environment. The job of the automated tester is to 'simulate' the testing environemnt to its bare components just enought to recreate the bug and then ensure it never happens again and added to regression testing ( if ci/cd -> just add it to the pipeline before merging back to branch. Runs on every feature branch and/or every merge and tag) to ensure nothing is brokern.

3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?

   I am not familiar with Redux but have seen the word when developping a little on React. A quick googletells me it's easy to test and behave consistently in different environemnts. Brillant, so with redux we can simlulate the same environement in development as well a production. Which fundamentally solves the 'it works on my computer' problem that traditional developers have. I believe the ownership of a feature and bug goes through the whole life cycle of the release process and thus happy the redux is used to faciliate this.

4. *If you are interested in the full-stack role* Please take a look at the partial implementation of an express routes in backend/router.js.
    * Thinking of a production application, what issues do you see with this code? *List as many as you like*

    I'm applying for a support engineer role but I'll do my best to answer it anyway as I think I know the answer. The first thing I saw was the connection of the mogodb. The information is recieved via an environment variable which is feasiable and completely normal. However there are no quick checks to work out if the url is empty. In development env the mongdb env variable might not be assigned for some reason or unreachable and thus a problem could happen in connecting with the mongodb database. 

    We also seems to be query the logs and outputting the exact query of the SQL database in production. Which means a hacker can get information on how to query how database.

    The return of the query product object should do some error handing. Error handing on connection or some maybe not even json format.



### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that is highlights the winning move.
   Completed. Please use npm run

2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.

3. If you get time, implement something that you think that the app could do and is cool. What other things would you change. 

   I have skipped this exercise as I'm applying for a support engineer role and not a full stack developer role.

### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience. 
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it. 
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.




    
      
    
    

 





