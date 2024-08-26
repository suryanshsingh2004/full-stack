from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World! hi my name is suryansh singh "

if __name__ == "__main__":
    app.run()
    app.run(debug=True)

    @app.route("/for-loop")
    def forLoop():
        marks=[1,2,3,4,5]
        totalMarks=0
        for mark in marks:
            totalMarks=totalMarks+mark
            
        return "totalMarks:totalMarks"
