from flask import jsonify, make_response
from flask_restful import Api, Resource
from flask_jwt_extended import jwt_required, get_jwt_identity

from api.dbAPI import DatabaseAPI

class DatabaseGetImagesAPI(DatabaseAPI):
  @jwt_required()
  def get(self):
    identity = get_jwt_identity()
    user = self.db.conn.execute("SELECT * FROM USERS WHERE email=:email",
    {"email": identity}).fetchall()

    if not user:
      self.db.conn.close()
      print("User not found:", identity)
      return make_response(jsonify(error = "User does not exist"), 404)

    images = self.db.conn.execute("SELECT image, label FROM IMAGES WHERE user_email=:email",
    {"email": identity}).fetchall()
    self.db.conn.close()

    return jsonify(status = "success", images = images)
