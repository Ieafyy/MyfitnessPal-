# MyfitnessPal++

Esse é um projeto pessoal que tem como objetivo realizar consuntas de perfis da plataforma de controle alimentar [MyfitnessPal](https://www.myfitnesspal.com/).

![alt text](image.png)

O projeto foi desenvolvido usando as seguintes tecnologias:

## Backend:

- Python 3:
  - BeautifulSoup4 (e urllib) pra scrap da página
  - Flask para construção da API e comunicação com o front

## Frontend:

- Javascript:
  - React
  - Framer Motion para as animações
  - TailwindCss e DaisyUI para estilização

# Setup do ambiente

Antes de iniciar as buscas é preciso iniciar o backend localmente Para isso, instale o Python pelo site oficial e dentro da pasta backend execute no terminal:

```bash
$ pip install -r requirements.txt
$ python main.py
```

Executando ambos comandos o backend deverá ser iniciado no endereço local (http://127.0.0.1:5000)

Para o front, inicialmente tenha o Node.js instalado em sua máquina e na pasta raiz do projeto execute o seguinte comando no terminal:

```bash
$ npm install
npm run dev
```

Assim, todos os pacotes usados no projeto serão instalados localmente e o frontend será executado no localhost (por padrão: http://localhost:5173/)

# Destrinchando o projeto

A plataforma do myfitnessPal não possui nenhuma API pública para desenvolvedores independentes, sendo assim, para criar esse projeto foi preciso scrapear a url onde os dados são logados (https://www.myfitnesspal.com/food/diary/${username}).

(Importante: Para que seu usuário seja acessado é preciso definir seu _food diary_ como público, para isso vá até https://www.myfitnesspal.com/account/diary-settings e em 'Diary Sharing' marque a opção **public**)

![alt text](image-1.png)

Agora basicamente o front executa uma request para o backend, que realiza o scrap dos dados com base no nome de usuário de data. O retorno é um JSON e usamos esses dados obtidos para montarmos a interface com todas as informações das refeições.

![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-6.png)
![alt text](image-5.png)

É possível realizar essa busca passando como parâmetro o dia. Por padrão, ele irá puxar dados do dia de hoje

![alt text](image-8.png)
![alt text](image-9.png)

(Como não há alimentos postados nesse dia, fica zerado)

![alt text](image-10.png)

(Temos também essa tela de erro, quando por algum motivo o back não conseguiu encontrar os dados. Nesse caso, foi por que digitei um usuário que não existe)

![alt text](image-11.png)

(Quando as calorias do dia são extrapoladas, o design muda)
