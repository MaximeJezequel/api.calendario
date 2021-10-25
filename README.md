# api.calendario

api.calendario is the back-end server used by the Binouze Corporation, in conjunction with the app.calendario front app.

### Installation

Node.js should be installed as a prerequisite.
https://nodejs.org/en/download/
If you're using Windows, bash should also be installed.
https://gist.github.com/bhubr/00c6e39e72231cf091a17772d73e6fb3

When you're done, in the terminal, run :

- "npm install" to install dependencies

### MySQL database

MySQL server should be installed as a prerequisite and you should create at least one user.
https://dev.mysql.com/doc/mysql-getting-started/en/

You can retrieve the database config by importing the file "db.sql" in the "./config" folder :
1-Enter the "config" folder by running "cd config".
2-Launch MySQL by running "mysql -u root -p" and enter your user password when prompted.
(Windows users may need to use "winpty" software package and run "winpty mysql -u root -p")
3-Import the database by running "source db.sql"

### Environment variables :

You should create a '.env" file at the root of your projet, containing the following text (replace the text with your own values)

PORT = server port // (e.g. 4000)
DB_HOST= server address // (e.g localhost)
DB_PORT= database port // (3306 if you're using MySQL)
DB_USER= database user // (your username from MySQl)
DB_PASSWORD= database password // (your username password from MySQl)
DB_NAME= database name // (calendario, if you've imported the provided database)

### Different access routes to database :

app.use('/events', eventsRouter)

### Go !

You're ready to launch the server, run :

- "npm start"
