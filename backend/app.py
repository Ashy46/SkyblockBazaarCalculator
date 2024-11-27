from flask import Flask
from flask_cors import CORS
from bazaar.routes import bazaar_bp, home as home_route


def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    app.register_blueprint(bazaar_bp, url_prefix='/api/bazaar')
    app.add_url_rule('/', 'home', home_route)

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)