from flask import jsonify, make_response
from flask_restful import Api, Resource, reqparse
from PIL import Image
import os

from api.dbAPI import DatabaseAPI
from db.database import Database
from api.helpers.clothingClassifier import ClothingClassifier

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
      print("User not found:", args["email"])
      return make_response(jsonify(error = "User does not exist"), 404)

    classifier = ClothingClassifier()
    labels = classifier.predictImages(args["files"])
    
    for file, label in zip(args["files"], labels):
      print(args["email"], file, label)
      # self.db.conn.execute("INSERT INTO IMAGES (user_email, image, label) VALUES (:email, :image, :label)",
      # {"email": args["email"], "image": file, "label": label[0]})

    #self.db.conn.commit()
    self.db.conn.close()

    return jsonify(status = "success")