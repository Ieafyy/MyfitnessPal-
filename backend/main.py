from bs4 import BeautifulSoup
from urllib.request import urlopen, Request
from flask import Flask, request

app = Flask(__name__)

@app.route('/getdata', methods=['GET', 'POST'])
def getData():
  userId = request.args.get('userid')
  print(userId)
  diary_url = 'https://www.myfitnesspal.com/food/diary/' + userId
  req = Request(url=diary_url, headers={'User-Agent': 'Mozilla/5.0'})
  html = urlopen(req).read()
  soup = BeautifulSoup(html, 'html.parser')
  return soup

app.run(debug=True)
