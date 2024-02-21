from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from datetime import datetime, timezone
import pprint 

uri = "mongodb+srv://peterprince3110:Hannah%403456@cluster0.pugwlss.mongodb.net/"

//Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    # Send a ping to confirm a successful connection
    client.admin.command('ping')
    print("success")

except Exception as e:
    print(e)

db = client['student_grades']
collection = db['grades']

print("---------InsertOne-----------")
//nsertOne
result = collection.insert_one({"name": "Alice", "grade": 85})
print("Inserted document ID:", result.inserted_id)

print("---------InsertMany-----------")
//InsertMany
result = collection.insert_many([
    {"name": "Bob", "grade": 90},
    {"name": "Charlie", "grade": 75},
    {"name": "David", "grade": 95}
])
print("Inserted documents IDs:", result.inserted_ids)


//Read Operations
print("---------FindOne-----------")
//Find One
print(collection.find_one({'name': 'Alice'}))

print("---------FindAll----------")
//Find All
for grade in collection.find():
    print(grade)

//Update Operations
print("---------UpdateOne-----------")
//Update One
collection.update_one({'name': 'Alice'}, {'$set': {'grade': 88}})
print("Updated document ID:", result.inserted_ids)

print("---------UpdateOne-----------")
//UpdateMany
result = collection.update_many({}, {'$inc': {'grade': 5}})
print("Updated documents IDs:", [str(doc) for doc in collection.find({}, {'_id': 1})])

//Delete Operations
print("---------DeleteOne-----------")
//Delete One
result = collection.delete_one({'name': 'Charlie'})
print("Deleted document ID:", result.deleted_count)

print("---------DeleteMany-----------")
//Delete All
result = collection.delete_many({})
print("Deleted documents count:", result.deleted_count)

    
