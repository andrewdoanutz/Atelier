from flask import jsonify, make_response
from flask_restful import Api, Resource, reqparse
from flask_jwt_extended import jwt_required
from PIL import Image
import os

from api.dbAPI import DatabaseAPI
from db.database import Database
from api.helpers.clothingClassifier import ClothingClassifier

class DatabaseGetImagesAPI(DatabaseAPI):
  @jwt_required
  def post(self):
    parser = reqparse.RequestParser()
    parser.add_argument("email", type=str)

    args = parser.parse_args()
    user = self.db.conn.execute("SELECT * FROM USERS WHERE email=:email",
     {"email": args["email"]}).fetchall()
    if not user:
      self.db.conn.close()
      print("User not found:", args["email"])
      return make_response(jsonify(error = "User does not exist"), 404)

    images = self.db.conn.execute("SELECT image, label FROM IMAGES WHERE user_email=:email",
     {"email": args["email"]}).fetchall()
    self.db.conn.close()

    return jsonify(status = "success", images = images)