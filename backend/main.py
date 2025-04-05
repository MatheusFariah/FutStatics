# Este módulo define a aplicação Flask para o sistema FutStatics.
# Ele inclui as rotas básicas para o backend, como a rota principal que
# renderiza a página inicial (index.html).

from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
