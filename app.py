from flask import Flask, jsonify, redirect, url_for
from flask_jwt_extended import JWTManager, set_access_cookies, create_access_token, get_jwt_identity, unset_jwt_cookies, get_jwt
from flask_restful import Api
from flask_cors import CORS
from datetime import datetime, timedelta, timezone

from api.dbGetUserAPI import DatabaseGetUserAPI
from api.dbVerifyUserAPI import DatabaseVerifyUserAPI
from api.dbUserAPI import DatabaseUserAPI
from api.dbForgotPasswordAPI import DatabaseForgotPasswordAPI
from api.dbSaveImageAPI import DatabaseSaveImageAPI
from api.dbGetImagesAPI import DatabaseGetImagesAPI

app = Flask(__name__, static_url_path='', static_folder='frontend/public')

app.config['PROPAGATE_EXCEPTIONS'] = True

# If true this will only allow the cookies that contain your JWTs to be sent
# over https. In production, this should always be set to True
app.config["JWT_COOKIE_SECURE"] = False
app.config["JWT_TOKEN_LOCATION"] = ["cookies"]
app.config["JWT_SECRET_KEY"] = "3OWdE3JE9Ph6CARp8kjvs11dy9GW5dKN"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
app.config['JWT_COOKIE_CSRF_PROTECT'] = True
jwt = JWTManager(app)
CORS(app, supports_credentials=True)

api = Api(app)

@jwt.expired_token_loader
def my_expired_token_callback(jwt_header, jwt_payload):
    response = redirect("/", code=302)
    unset_jwt_cookies(response)
    return response

@app.after_request
def refreshExpiringJWTs(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            set_access_cookies(response, access_token)
        return response
    except (RuntimeError, KeyError) as e:
        # Case where there is not a valid JWT. Just return the original respone
        print(e)
        return response

@app.route("/")
def index():
    pass

@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

api.add_resource(DatabaseGetUserAPI, "/api/db/getuser")
api.add_resource(DatabaseVerifyUserAPI, "/api/db/verifyuser")
api.add_resource(DatabaseUserAPI, "/api/db/user")
api.add_resource(DatabaseForgotPasswordAPI, "/api/db/forgotpassword")
api.add_resource(DatabaseSaveImageAPI, "/api/db/saveimage")
api.add_resource(DatabaseGetImagesAPI, "/api/db/getimages")