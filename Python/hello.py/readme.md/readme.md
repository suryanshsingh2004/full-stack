from pymongo import MongoClient

# Replace the connection string with your MongoDB server address
client = MongoClient('mongodb://localhost:27017/')

# Test the connection
db = client.test_database
collection = db.test_collection
result = collection.insert_one({'name': 'test'})
print('Inserted document id:', result.inserted_id)

# Close the connection
client.close()

