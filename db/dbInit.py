from database import Database
import json
db = Database()

print("Creating USERS Table")
db.conn.execute("CREATE TABLE IF NOT EXISTS USERS (email TEXT PRIMARY KEY, password TEXT NOT NULL)")
# db.conn.execute("insert into USERS (email, password) values ('test', 'testpass')")
print("Creating IMAGES Table") #saves image URI
db.conn.execute("CREATE TABLE IF NOT EXISTS IMAGES (user_email TEXT, image TEXT NOT NULL, label TEXT NOT NULL, FOREIGN KEY(user_email) REFERENCES USERS(email) ON DELETE CASCADE ON UPDATE CASCADE)")
db.conn.commit()
print(db.conn.execute("SELECT * FROM USERS").fetchall())


db.conn.close()