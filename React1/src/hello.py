import pymongo
from pymongo import MongoClient
# client = MongoClient()
client = MongoClient("localhost", 27017)
db = client["test-database"]
collection = db["test_collection"]

import datetime
post = {
    "author": "Mike",
    "text": "My first blog post!",
    "tags": ["mongodb", "python", "pymongo"],
    "date": datetime.datetime.now(tz=datetime.timezone.utc),
}


posts = db.posts
post_id = collection.insert_one(post).inserted_id




def dataBase1():
    users =[
    {
        '_id' : 1,
        'name' : "John",
        'dept' : "CSE"
        },
        {
         '_id' : 2,
        'name' : "Rohan",
       'dept' : "CSE"
        },
        {
         '_id' : 3,
        'name' : "Jack",
        'dept' : "CSE"
        },
        {
         '_id' : 4,
        'name' : "Mohan",
       'dept' : "CSE"
        },
        {
         '_id' : 5,
        'name' : "Jojo",
        'dept' : "CSE"
        }
    ]
    collection.insert_many(users)
    return "database inserted"


def read():
    userOne = mdb.users.find_one({'_id' : 1})
    users = mdb.users.find({'dept' : "CSE"})
    foundList = []
    for user in users:
        foundList.append(user)

    secondList = []
    for user in foundList:
        secondList.append(user)
    print ('users', users)
    return{'fountList' : foundList, "secondList": secondList, "userOne": userOne}




print(post_id)
# post_id
# ObjectId('...')
# db.list_collection_names()
# ['posts']
# import pprint
# pprint.pprint(posts.find_one())
# {'_id': ObjectId('...'),
#  'author': 'Mike',
#  'date': datetime.datetime(...),
#  'tags': ['mongodb', 'python', 'pymongo'],
#  'text': 'My first blog post!'}


# pprint.pprint(posts.find_one({"author": "Mike"}))
# {'_id': ObjectId('...'),
#  'author': 'Mike',
#  'date': datetime.datetime(...),
#  'tags': ['mongodb', 'python', 'pymongo'],
#  'text': 'My first blog post!'}

# posts.find_one({"author": "Eliot"})

# post_id
# ObjectId(...)
# pprint.pprint(posts.find_one({"_id": post_id}))
# {'_id': ObjectId('...'),
#  'author': 'Mike',
#  'date': datetime.datetime(...),
#  'tags': ['mongodb', 'python', 'pymongo'],
#  'text': 'My first blog post!'}


# post_id_as_str = str(post_id)
# posts.find_one({"_id": post_id_as_str})  # No result

