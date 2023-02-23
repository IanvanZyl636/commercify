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

PASSWORD REGEX

```
/^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/
```

Basica explanation

```
(?=(.*RULE){MIN_OCCURANCES,})
```

Rules

```
^                               start anchor
(?=(.*[a-z]){3,})               lowercase letters. {3,} indicates that you want 3 of this group
(?=(.*[A-Z]){2,})               uppercase letters. {2,} indicates that you want 2 of this group
(?=(.*[0-9]){2,})               numbers. {2,} indicates that you want 2 of this group
(?=(.*[!@#$%^&*()\-__+.]){1,})  all the special characters in the [] fields. The ones used by regex are escaped by using the \ or the character itself. {1,} is redundant, but good practice, in case you change that to more than 1 in the future. Also keeps all the groups consistent
{8,}                            indicates that you want 8 or more
$
```

GOOGLE OAUTH 2.0

```
https://www.youtube.com/watch?v=Qt3KJZ2kQk0&ab_channel=TomDoesTech
```

Dynamic keys type with intellisense

```
export type McbTabConfigType<T> = {
  [key in keyof T & string]:McbTabConfigModel
}

export interface McbTabConfigModel
{
  route:string;
  title:string;
  component:Type<McbTabComponent>;
}

export const PAYMENTS_TABS:McbTabConfigType<{test1:McbTabConfigModel,test2:McbTabConfigModel}> = {
  test1: {
    route: 'test1',
    title: 'Test1',
    component: McbTabComponent
  },
  test2: {
    route: 'test2',
    title: 'Test2',
    component: McbTabComponent
  }
}

 (Object.keys(PAYMENTS_TABS) as [keyof typeof PAYMENTS_TABS]).map((key) => ({path: PAYMENTS_TABS[key].route, component:PAYMENTS_TABS[key].component}))
```
