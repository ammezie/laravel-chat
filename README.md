# laravel-chat
Build a chat app with Laravel and Pusher

### Getting Started

Clone the project repository by running the command below if you use SSH

```
git clone git@github.com:ammezie/laravel-chat.git
```

If you use https, use this instead

```
git clone https://github.com/ammezie/laravel-chat.git
```

After cloning,run:

```
composer install
```

Duplicate `.env.example` and rename it `.env`

Then run:

```
php artisan key:generate
```

### Database Migrations

Be sure to fill in your database details in your `.env` file before running the migrations:

```
php artisan migration
```

And finally, start the application:

```
php artisan serve
```

and visit [http://localhost:8000/](http://localhost:8000/) to see the application in action.