from database import Database
import json
db = Database()

print("Creating USERS Table")
db.conn.execute("CREATE TABLE IF NOT EXISTS USERS (email TEXT PRIMARY KEY, password TEXT NOT NULL)")
# db.conn.execute("insert into USERS (email, password) values ('test', 'testpass')")
# db.conn.commit()
print(db.conn.execute("SELECT * FROM USERS").fetchall())


db.conn.close()