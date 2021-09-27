from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.dbUserAPI import DatabaseUserAPI

app = Flask(__name__, static_url_path='', static_folder='frontend/public')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/")
def index():
    pass

api.add_resource(DatabaseUserAPI, "/api/db/getuser")