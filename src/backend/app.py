from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)


class CartItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False)
    picture_url = db.Column(db.String(750), unique=False)
    price = db.Column(db.String(10), unique=False)

    def __init__(self, name, picture_url, price):
        self.name = name
        self.picture_url = picture_url
        self.price = price


class CartItemSchema(ma.Schema):
    class Meta:
        fields = ('name', 'picture_url', 'price')


cart_item_schema = CartItemSchema()
cart_items_schema = CartItemSchema(many=True)


@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Nathan",
        "about": "Test data"
    }

    return response_body


if __name__ == '__main__':
    app.run(debug=True)
