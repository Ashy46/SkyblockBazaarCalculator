"""
This file gathers the data from the bazaar and stores it. It will refresh every 5 minutes
since the api only allows calls every 5 minutes. 
"""
import requests
import json
import time
url = "https://api.hypixel.net/skyblock/bazaar"

def getBazaarData():
    response = requests.get(url)
    if response.status_code != 200:
        return "Error"
    data = response.json()
    data = data["products"]
    return data

def returnBazaarMatrix():
    data = getBazaarData()
    if data == "Error":
        return "Error"
    productKeys = data.keys()
    bazaarMatrix = {}
    for product in productKeys:
        quick_status = data[product]["quick_status"]
        #Needs a required liquidity and buy/sell price can't be 0
        if ((quick_status["sellMovingWeek"] <  1000 or quick_status["buyMovingWeek"] < 1000) or 
            (quick_status["sellPrice"] <= 0 or quick_status["buyPrice"] <= 0)):
            continue
        #Quick sell price = buy price of orders
        buyPrice = data[product]["quick_status"]["sellPrice"]
        #Quick buy price = sell price of orders
        sellPrice = data[product]["quick_status"]["buyPrice"]

        percentReturn = ((sellPrice - buyPrice) / buyPrice) * 100
        bazaarMatrix[product] = percentReturn
    
    return bazaarMatrix


matrix = returnBazaarMatrix()
print(matrix)
