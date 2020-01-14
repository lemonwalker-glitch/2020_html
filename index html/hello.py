from flask import Flask, render_template, Response, request, url_for, redirect, stream_with_context
import json
import datetime
import os.path

app = Flask(__name__)


@app.route('/', methods = ['GET','POST'])
def index(): 
    if request.method == "POST":

        print(request.is_json)
        print(request.args)
        print(request.get_json())
        response = request.get_json()
        activity = response["activity"] #checkin // checkout
        print(activity)
        return redirect(url_for("recog")) 
        
    return render_template('index.html')

@app.route('/welcome')
def welcome():
    print('welcome bitch')
    try:
        print("try works")
        with open('log.json') as log:
            person = json.load(log)
    except:
        print("didnt work")

    return render_template('welcome.html', name = "cocksucker", activity = "jerking off", timestamp = "at this very moment", date = "today") 
@app.route('/training')
def training():
    return render_template('training.html')


@app.route('/what-is-your-name')
def what_is_your_name():
    if request.remote_addr == '127.0.0.1':
        return render_template('what-is-your-name.html')
    else:
        return 'you are not allowed here'

if __name__ == '__main__':
    #socketio.run(app, debug=True, host='0.0.0.0', port=5000)
    
    app.run(debug=True, host='0.0.0.0',port=7000, threaded=True)
    