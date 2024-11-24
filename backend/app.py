from flask import Flask
from flask_cors import CORS
from bazaar.routes import bazaar_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(bazaar_bp, url_prefix='/api/bazaar')

if __name__ == '__main__':
    app.run(debug=True)