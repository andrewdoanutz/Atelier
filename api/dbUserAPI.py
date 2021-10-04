from flask import jsonify
from flask_restful import Api, Resource, reqparse
from api.dbAPI import DatabaseAPI

class DatabaseUserAPI(DatabaseAPI):

  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument("email", type=str)
    parser.add_argument("password", type=str)

    args = parser.parse_args()

    self.db.conn.execute("INSERT INTO USERS (email, password) VALUES (:email, :password)",
     {"email": args["email"], "password": args["password"]})
    self.db.conn.commit()
    self.db.conn.close()

    return jsonify(status = "success")
    
  def put(self):
    parser = reqparse.RequestParser()
    parser.add_argument("email", type=str)
    parser.add_argument("password", type=str)

    args = parser.parse_args()

    self.db.conn.execute("UPDATE USERS SET email=:email, password=:password WHERE email=:email",
     {"email": args["email"], "password": args["password"]})
    self.db.conn.commit()
    self.db.conn.close()

    return jsonify(status = "success")
