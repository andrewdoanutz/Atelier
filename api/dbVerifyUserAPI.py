from flask import jsonify, make_response
from flask_restful import Api, Resource, reqparse
from api.dbAPI import DatabaseAPI
from flask_jwt_extended import create_access_token, set_access_cookies

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

    access_token = create_access_token(identity = args["email"])
    response = jsonify(user = user)
    set_access_cookies(response, access_token)
    return response