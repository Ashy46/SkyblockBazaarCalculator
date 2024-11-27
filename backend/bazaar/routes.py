from flask import Blueprint, jsonify
from .bazaarData import returnBazaarMatrix

bazaar_bp = Blueprint('bazaar', __name__)
app = Blueprint('app', __name__)

@app.route('/')
def home():
    return "Hello, World!"

@bazaar_bp.route('/matrix', methods=['GET'])
def get_bazaar_matrix():
    """
    Endpoint to retrieve the bazaar matrix.
    Calls the returnBazaarMatrix function from bazaarData.py.
    """
    matrix = returnBazaarMatrix()
    if matrix == "Error":
        return jsonify({"error": "Failed to fetch bazaar data"}), 500
    return jsonify(matrix)