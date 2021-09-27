from flask import jsonify
from flask_restful import Api, Resource, reqparse
from api.dbAPI import DatabaseAPI

class DatabaseUserAPI(DatabaseAPI):
  
  def get(self):
    users = self.db.conn.execute("SELECT * FROM USERS").fetchall()
    self.db.conn.close()
    return jsonify(status = "success", users = users)

  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument("email", type=str)

    args = parser.parse_args()

    user = self.db.conn.execute("SELECT * FROM USERS WHERE email=:email", {"email": args["email"]}).fetchall()
    self.db.conn.close()

    return jsonify(status = "success", user = user)