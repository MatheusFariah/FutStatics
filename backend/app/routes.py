from flask import render_template


def setup_routes(app):
    @app.route('/')
    def index():
        return render_template('index.html')
