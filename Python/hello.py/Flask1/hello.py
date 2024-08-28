# from flask import Flask
# app = Flask(__name__)

# @app.route("/")
# def hello():
#     return "Hello World! hi my name is suryansh singh "

# if __name__ == "__main__":
#     app.run()
#     app.run(debug=True)

#     @app.route("/for-loop")
#     def forLoop():
#         marks=[1,2,3,4,5]
#         totalMarks=0
#         for mark in marks:
#             totalMarks=totalMarks+mark
            
#         return "totalMarks:totalMarks"
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
mdb = client['pro456']
collection = mdb['users']
@app.route("/db/insert")
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

@app.route("/db/read")
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

from pymongo import MongoClient
from flask import Flask
from flask_cors import CORS
app=Flask(__name__)
cors=CORS(app,resources={r"/*"})

import { useEffect, useState } from "react";
const Counter = () => {
  
  const [count, setCount] = useState(0);
  const[loading,setLoading]=useState(true);
  const display=false;
  const[multipliedValue,setMultipliedValue]=useState(1);

  const countButtonClick = () => {
    setCount(count + 1);
    setMultipliedValue(multipliedValue*2);
    console.log(count);
  }; 
  setTimeout(()=>{
    setLoading(false);
  },5000);

  return (
    <>
      <h1>HI</h1>
      <h2>SURYANSH SINGH</h2>
      <h3>This Button is clicked {count} times</h3>
      <h3>Multiplied Value:{multipliedValue}</h3>
      <button onClick={() => countButtonClick()}>This is a Button</button>
    </>
  );
};

export default Counter;
