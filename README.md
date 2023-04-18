# Spring-Boot-Security-CURD-JWT-MySQL
## This is a simple App with the user login/signup and logout functions, the App built with the Sprint Boot, Spring Security, CURD, MySQL, JWT and React 
![Screen Shot 2023-04-17 at 21 42 51](https://user-images.githubusercontent.com/66295998/232647995-5d621121-6ec7-44fa-a0c3-84f2ca11fd83.png)
![Screen Shot 2023-04-17 at 21 16 08](https://user-images.githubusercontent.com/66295998/232648013-54da9b9e-2fe6-4fbc-a62f-0c1d0888ccf7.png)
## 1. You can clone it from github by running following command
```
https://github.com/ScarlettZ842/Spring-Boot-Security-CURD-JWT-MySQL.git
```
## 2. Run the App from Front-end by using follwing command
```
npm install & npm start
```
## 3. Create the MySQL Database and change the root username & password 
```
create database user_app
```
open src/main/resources/application.properties file to change the username and password
## 4.  Run the App from Back-end by using follwing command
```
mvn spring-boot:run
```
## Once the Application started successfully then you can test the functions or call endpoints

## 5. For users to signup or login(create new users) or signout with POST Request
```
http://localhost:8080/signup
```
```
http://localhost:8080/signin
```
```
http://localhost:8080/signout
```
## 6. To get the public resource without user login with GET Request
```
http://localhost:8080/api/test/user
```
## 7. To delete the existed user with DELETE Request
```
http://localhost:8080/api/test/user/<id>
```


