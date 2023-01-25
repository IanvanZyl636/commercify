set -e

mongosh <<EOF
print(
  "Start #################################################################"
);

use $MONGO_INITDB_DATABASE;

db.createUser({
  user: '$MONGO_DB_USERNAME',
  pwd: '$MONGO_DB_PASSWORD',
  roles: ['readWrite', 'dbAdmin']
});

print("END #################################################################");
EOF