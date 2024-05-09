from bs4 import BeautifulSoup # type: ignore
from urllib.request import urlopen, Request
from flask import Flask, request
import json

app = Flask(__name__)

@app.route('/getdata', methods=['GET', 'POST'])
def getData():
    try:
        userId = request.args.get('userid')
        date = request.args.get('date')
        diary_url = 'https://www.myfitnesspal.com/food/diary/' + userId + '?date=' + date
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
        total_cal_needed = soup.find_all(attrs={'class':'total alt'})[0].find_all('td')[1].text

        for tr_tag in meal_table.find_all('tr'):
            if index == 4:
                break
            if not tr_tag.get('class'):
                meals_data[list(meals_data.keys())[index]].append(tr_tag)
            else:
                if 'bottom' in tr_tag.get('class'):
                    index += 1

        for refeicao in meals_data:
            total_calorias_refeicao = 0
            for tr_tag in meals_data[refeicao]:
                item = tr_tag.find('td', class_='first alt').text.strip()
                calories = int(tr_tag.find_all('td')[1].text)
                total_calorias_refeicao += calories 
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

            meals_json[refeicao].append({'total_calories': total_calorias_refeicao})

        total_calorias_geral = sum(total_calorias_refeicao for total_calorias_refeicao in (sum(item['calories'] for item in meals_json[refeicao] if 'total_calories' not in item) for refeicao in meals_json))
        meals_json['total_calories'] = total_calorias_geral
        meals_json['total_calories_needed'] = total_cal_needed
        json_meals = json.dumps(meals_json, indent=4)
        print('ENVIADO PARA O CLIENT!')
        return json_meals

    except Exception as e:
        print('ERROR NO ENVIO')
        return {'status': 'error'}

app.run(debug=True)
