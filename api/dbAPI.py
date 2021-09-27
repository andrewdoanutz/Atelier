from db.database import Database
from flask_restful import Resource

class DatabaseAPI(Resource):
  def __init__(self):
    super().__init__()
    self.db = Database()