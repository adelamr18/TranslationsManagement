To setup the project:
1-navigate to client from terminal  then cd to translationsmanagement type on terminal: npm i
2-navigate to server from terminal  then type on terminal: npm i

To run the project and the backend server
1-To run the frontend: navigate to client then cd to translationsmanagement then type npm run div
2-To run the backend server: navigate to the server directory from terminal then type nodemon server.js



Remark: 1- please note that when running the backend unit tests the translations results will be cleared and the mongodb database will not contain any translations 
2- to ensure that elastic search will work locally on your laptop please when running the server by typing nodemon server.js download the elastic search library on your laptop then navigate to bin on terminal then open elasticsearch.bat and leave it open unil it is done while the server is running then close it