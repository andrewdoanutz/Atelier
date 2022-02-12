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
    strippedImages = []
    for f in args["files"]:
      strippedImages.append(f.split(",")[1])
    labels = classifier.predictImages(strippedImages)
    
    for f, label in zip(args["files"], labels):
      self.db.conn.execute("INSERT INTO IMAGES (user_email, image, label) VALUES (:email, :image, :label)",
      {"email": args["email"], "image": f, "label": label[0]})

    self.db.conn.commit()
    self.db.conn.close()

    return jsonify(status = "success")

  def patch(self):
    parser = reqparse.RequestParser()
    parser.add_argument("email", type=str)
    parser.add_argument("category", type=str)
    parser.add_argument("image", type=str)

    args = parser.parse_args()
    user = self.db.conn.execute("SELECT * FROM USERS WHERE email=:email",
     {"email": args["email"]}).fetchall()
    if not user:
      self.db.conn.close()
      print("User not found:", args["email"])
      return make_response(jsonify(error = "User does not exist"), 404)

    self.db.conn.execute("UPDATE IMAGES SET label=:label WHERE user_email=:email AND image=:image", {"email": args["email"], "label": args["category"], "image": args["image"]})

    self.db.conn.commit()
    self.db.conn.close()

    return jsonify(status = "success")