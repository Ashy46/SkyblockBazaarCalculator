from flask import Blueprint, jsonify, request
from .bazaarData import returnBazaarMatrix
from .flipingPortflio import flipingPortflio

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

@bazaar_bp.route('/portfolio', methods=['POST'])
def get_portfolio():
    """
    Endpoint to retrieve the portfolio.
    Calls the flipingPortflio function from flipingPortflio.py.
    """
    investmentSize = request.json.get('investmentSize')
    investmentSize = int(investmentSize)
    portfolio, totalReturns = flipingPortflio(investmentSize)
    return jsonify({"portfolio": portfolio, "totalReturns": totalReturns})