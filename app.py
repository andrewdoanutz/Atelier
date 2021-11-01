from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment

from api.dbGetUserAPI import DatabaseGetUserAPI
from api.dbVerifyUserAPI import DatabaseVerifyUserAPI
from api.dbUserAPI import DatabaseUserAPI
from api.dbForgotPasswordAPI import DatabaseForgotPasswordAPI
from api.dbSaveImageAPI import DatabaseSaveImageAPI

app = Flask(__name__, static_url_path='', static_folder='frontend/public')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/")
def index():
    pass

api.add_resource(DatabaseGetUserAPI, "/api/db/getuser")
api.add_resource(DatabaseVerifyUserAPI, "/api/db/verifyuser")
api.add_resource(DatabaseUserAPI, "/api/db/user")
api.add_resource(DatabaseForgotPasswordAPI, "/api/db/forgotpassword")
api.add_resource(DatabaseSaveImageAPI, "/api/db/saveimage")