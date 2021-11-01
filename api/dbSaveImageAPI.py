from flask import jsonify, make_response
from flask_restful import Api, Resource, reqparse
from api.dbAPI import DatabaseAPI
from db.database import Database

class DatabaseSaveImageAPI(DatabaseAPI):

  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument("email", type=str)
    parser.add_argument("files", action="append")

    args = parser.parse_args()
    user = self.db.conn.execute("SELECT * FROM USERS WHERE email=:email",
     {"email": args["email"]}).fetchall()
    if not user:
      self.db.conn.close()
      return make_response(jsonify(error = "User does not exist"), 404)
    for file in args["files"]:
      self.db.conn.execute("INSERT INTO IMAGES (user_email, image) VALUES (:email, :image)",
      {"email": args["email"], "image": file})

    self.db.conn.commit()
    self.db.conn.close()

    return jsonify(status = "success")