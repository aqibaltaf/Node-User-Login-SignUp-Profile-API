![API](https://user-images.githubusercontent.com/61707240/155891549-c9afbfcd-d873-4abc-988b-87d74866e706.png)

<pre style="font-size:100px;"><strong>A secure Node Js API to manage login, signup and logout operations.
This API uses Express Js , Mongo and JWT (json web token) for Authentication.</strong>
</pre>

# How To USE
## Modules Requirement?
<pre>
Open Terminal (cmd)
cd YourProjectFolderName

Then install all of these modules one by one:

npm install node
npm install express
npm install bcrypt
npm install body-parser
npm intsall mongoose
npm install jsonwebtoken
npm i install dotenv</pre>

## Database Requirement?

<pre>Now, Search Mongo Atlas on Google and create an account.
Once you are logged in there follow these steps:
1. Go to Database access and set up your Database username and password.
2. Go to Network access and type 0.0.0.0/0 or Allow access from anywhere and click confirm.
3. Go to Database under Depolyment tab, Click connect --> Connect your application ---> copy the Address.</pre>

![1](https://user-images.githubusercontent.com/61707240/155889620-d1c28fcc-ac04-4960-a2ac-8cafd269aa41.JPG)

<pre>
  4. Go to app.js in your project folder, and paste this link in mongoose.connect('');</pre>
  
![image](https://user-images.githubusercontent.com/61707240/155889733-ea7ea083-7cfa-47f9-b283-735ec29975e0.png)

*make sure to replace the '<password<password>>' with your Database password.
## Other Requirments
<pre> 
1. Create a .env file, and write your Secret Key as ACCESS_TOKEN = write any thing you want
for eg:
      1. Create .env file
      2. Type ACESS_TOKEN = This is a dummy text
      3. Save .env

2. Type node server.js on your terminal to run this API.
3. Install Postman to send and get request from the Database.</pre>

## Contact
<pre>
For Any Query or help feel free to contact me at <Strong>aqibaltaf99@gmail.com</Strong>
And if you liked this API, Make sure to give it a star</pre>
