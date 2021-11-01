import sqlite3
import os

class Database:
    DB_PATH = os.path.join(os.path.dirname(os.path.realpath(__file__)),"database.db")

    def __init__(self):
        super().__init__()
        self.conn = self.create_connection()

    def create_connection(self):
        connection = None
        try:
            connection = sqlite3.connect(self.DB_PATH)
            print("Connection to SQLite DB successful")
        except sqlite3.Error as e:
            print(f"The error '{e}' occurred")

        return connection
    
    def convertToBinaryData(self, filename):
        with open(filename, 'rb') as file:
            blobData = file.read()
        return blobData