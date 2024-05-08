from bs4 import BeautifulSoup # type: ignore
from urllib.request import urlopen, Request
from flask import Flask, request
import json

app = Flask(__name__)

@app.route('/getdata', methods=['GET', 'POST'])
def getData():
  userId = request.args.get('userid')
  diary_url = 'https://www.myfitnesspal.com/food/diary/' + userId
  req = Request(url=diary_url, headers={'User-Agent': 'Mozilla/5.0'})
  html = urlopen(req).read()
  soup = BeautifulSoup(html, 'html.parser')
  
  meal_table = soup.find(attrs={'id':'diary-table'})
  print('========================================================================')
    
  meals_data = {
      'breakfast': [],
      'lunch': [],
      'dinner': [],
      'snacks': []
  }

  meals_json = {
      'breakfast': [],
      'lunch': [],
      'dinner': [],
      'snacks': []
  }

  index = 0

  for tr_tag in meal_table.find_all('tr'):
      if index == 4:
          break
      if not tr_tag.get('class'):
          meals_data[list(meals_data.keys())[index]].append(tr_tag)
      else:
          if 'bottom' in tr_tag.get('class'):
              index += 1

  for refeicao in meals_data:
    
    for tr_tag in meals_data[refeicao]:
      item = tr_tag.find('td', class_='first alt').text.strip()
      calories = int(tr_tag.find_all('td')[1].text)
      carbs_value = int(tr_tag.find_all('span', class_='macro-value')[0].text)
      carbs_percentage = int(tr_tag.find_all('span', class_='macro-percentage')[0].text)
      protein_value = int(tr_tag.find_all('span', class_='macro-value')[1].text)
      protein_percentage = int(tr_tag.find_all('span', class_='macro-percentage')[1].text)
      fat_value = int(tr_tag.find_all('span', class_='macro-value')[2].text)
      fat_percentage = int(tr_tag.find_all('span', class_='macro-percentage')[2].text)
      fiber = int(tr_tag.find_all('td')[5].text)
      sugar = int(tr_tag.find_all('td')[6].text)

      dados = {
          'item': item,
          'calories': calories,
          'carbs': {
              'value': carbs_value,
              'percentage': carbs_percentage
          },
          'protein': {
              'value': protein_value,
              'percentage': protein_percentage
          },
          'fat': {
              'value': fat_value,
              'percentage': fat_percentage
          },
          'fiber': fiber,
          'sugar': sugar
      }

      meals_json[refeicao].append(dados)

  json_meals = json.dumps(meals_json, indent=4)
  print(json_meals)
  print('ENVIADO PARA O CLIENT!')
  return json_meals

app.run(debug=True)
