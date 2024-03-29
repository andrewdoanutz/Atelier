from flask import jsonify, make_response
from flask_restful import Api, Resource, reqparse
from api.dbAPI import DatabaseAPI

class DatabaseVerifyUserAPI(DatabaseAPI):

  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument("email", type=str)
    parser.add_argument("password", type=str)

    args = parser.parse_args()
    user = self.db.conn.execute("SELECT * FROM USERS WHERE email=:email AND password=:password",
     {"email": args["email"], "password": args["password"]}).fetchall()
    self.db.conn.close()

    if not user:
      return make_response(jsonify(user = None), 404)

    return jsonify(user = user)