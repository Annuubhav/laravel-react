Installation Steps

1. Rename .env.example with .env
2. Create a database with name laravel_react
3. Update  database details in .env file. Like host or username
4. run following commands

- composer install
- php artisan migrate
- php artisan passport:install
- php artisan db:seed

Now the laravel application is setup

Let's setup the react part of the applicaiton

Execute below commands
- npm install
- npm run dev

Now run the application in browser with the url you have put in the .env " APP_URL " parameter.

Use the following credentials to access the application
email :- anubhav@gupta.com
password :- 123456
