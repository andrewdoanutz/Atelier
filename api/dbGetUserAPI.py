from flask import jsonify, make_response
from flask_restful import Api, Resource, reqparse
from api.dbAPI import DatabaseAPI

class DatabaseGetUserAPI(DatabaseAPI):
  
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
    if not user:
      return make_response(jsonify(user = None), 404)
      
    return jsonify(user = user)