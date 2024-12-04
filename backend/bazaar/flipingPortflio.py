from .bazaarData import getBazaarData
import math

def processData():
    data = getBazaarData()
    processedData = {}
    for product in data.keys():
        quickStatus = data[product]["quick_status"]
        liquidty = min(quickStatus["sellMovingWeek"], quickStatus["buyMovingWeek"])/7
        #Quick sell price = buy price of orders
        buyPrice = data[product]["quick_status"]["sellPrice"]
        #Quick buy price = sell price of orders
        sellPrice = data[product]["quick_status"]["buyPrice"]

        if liquidty > 1000 and (sellPrice > 400 and buyPrice > 400):
            returns = ((sellPrice - buyPrice) / buyPrice) * liquidty
            processedData[product] = [buyPrice, sellPrice, returns]

    return processedData

def highestReturns():
    data = processData()
    highestReturns = dict(sorted(data.items(), key=lambda x: x[1][2], reverse=True))
    return highestReturns

def weightFunction(size):
    weights = []
    denom = 0
    for i in range(1, size + 1):
        denom += math.pow(1.1,i)
    for i in range(1, size + 1):
        weights.append(math.pow(1.1,i)/denom)
    return weights

def flipingPortflio(investmentSize):
    data = highestReturns()
    portfolio = {}
    totalReturns = 0
    weights = []
    if investmentSize > 20000000:
        weights = weightFunction(10)
    elif investmentSize > 5000000:
        weights = weightFunction(7)
    elif investmentSize > 1000000:
        weights = weightFunction(5)
    else:
        weights = weightFunction(3)

    for idx, product in enumerate(data):
        if idx == len(weights):
            break
        amount = math.floor(weights[idx] * investmentSize / data[product][0])
        totalReturns += amount * (data[product][1] - data[product][0])
        portfolio[product] = amount

    return (portfolio, totalReturns)

print(flipingPortflio(11000000))

    