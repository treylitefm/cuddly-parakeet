#!/bin/bash

nc -vz postgres-server 5432

while [ $? -eq 1 ]; do
    echo Database not ready for connections
    echo Sleepiong 3 seconds then trying again...
    sleep 3
    nc -vz postgres-server 5432
done

echo Database is ready bub

#python manage.py makemigrations;
#python manage.py migrate;
#gunicorn --workers 3 --bind 0.0.0.0:8000 $1.wsgi:application
#python manage.py runserver 0.0.0.0:8000
npm install --save gulp gulp-sass
node node_modules/gulp/bin/gulp.js
