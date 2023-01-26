# commercify

ENV CONFIG

```
SERVER_PORT=xxxx
NODE_DEBUGGER_PORT=xxxx
DB_ROOT_USERNAME=xxxx
DB_ROOT_PASSWORD=xxxx
```

DEBUGGING

Go to http://localhost:9229/json and copy "devtoolsFrontendUrl" in a new browser
src: https://www.becomebetterprogrammer.com/how-to-debug-node-js-with-typescript-using-nodemon/

MONGO DB TROUBLESHOOT CONFIG(add role of root):

```
db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [ "root" ]
  }
)
```

REST API

```
Content-Type. Some common examples of content types are “text/plain”, “application/xml”, “text/html”, “application/json”, “image/gif”, and “image/jpeg”
```
