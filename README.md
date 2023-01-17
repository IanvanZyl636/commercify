# commercify

ENV CONFIG

```
SERVER_PORT=xxxx
NODE_DEBUGGER_PORT=xxxx
DB_ROOT_USERNAME=xxxx
DB_ROOT_PASSWORD=xxxx
```

DEBUGGING

Go to localhost:9229/json and copy "devtoolsFrontendUrl" in a new browser
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
