import click
import requests

unit_str = """{{"unit_name": "{0}","unit_symbol": "{1}"}}"""
units = [("Gramm", "g"), ("Kilogramm", "kg"),
         ("Milliliter", "ml"), ("Liter", "l"), ("Stück", "Stk")]

unit_conversion_str = """{{"unit_factor_id": {0},"unit_result_id": {1},"factor": {2}}}"""
unit_conversions = [(1, 2, 1000), (2, 1, 0.001), (3, 4, 1000), (4, 3, 0.001)]

category_str = """{{"category_name": "{0}","category_icon": "{1}"}}"""
categories = [
    ("Obst", "https://cdn-icons-png.flaticon.com/512/2892/2892338.png"),
    ("Gemüse", "https://cdn-icons-png.flaticon.com/512/2805/2805947.png"),
    ("Getränke", "https://cdn-icons-png.flaticon.com/512/2405/2405597.png"),
    ("Backwaren", "https://cdn-icons-png.flaticon.com/512/3081/3081967.png"),
    ("Konserven", "https://cdn-icons-png.flaticon.com/512/1236/1236977.png"),
    ("Süßwaren", "https://cdn-icons-png.flaticon.com/512/2454/2454268.png")
]

product_class_str = """{{"class_name": "{0}","class_image": "{1}","storage_life_opened": {2},"category_id": {3},"unit_id": {4}}}"""
product_classes = [
    ("Apfel", "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg", 7, 1, 5),
    ("Birne", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/D%27anjou_pear.jpg/640px-D%27anjou_pear.jpg", 7, 1, 5),
    ("Brokkoli", "https://upload.wikimedia.org/wikipedia/commons/5/53/Broccoli_DSC00862.png", 7, 2, 5),
    ("Brot", "https://upload.wikimedia.org/wikipedia/commons/4/42/Bread_%D1%85%D0%BB%D0%B5%D0%B1_03.jpg", 7, 4, 5),
    ("Erdnüsse", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/16-09-17-WikiLovesCocktails-Zutaten-Img0161.jpg/640px-16-09-17-WikiLovesCocktails-Zutaten-Img0161.jpg", 7, 2, 1),
]

fridge_user_str = """{{"login": "{0}","password": "{1}"}}"""
fridge_users = [
    ("admin", "admin"),
    ("user", "user")
]

device_str = """{{"device_name": "{0}"}}"""
devices = [("Kühlschrank",), ("Gefrierschrank",), ("Kühlschrank Nr. 2",)]

ean_str = """{{"ean": "{0}"}}"""
device_contents = []

class_str = """{{"class_id": {0}}}"""
classes = [(1,), (2,), (3,), (1,)]

drop_str = """{{"class_id": {0}, "ean": "{1}"}}"""


def post(url, template, data):
    for item in data:
        json_data = template.format(*item)
        print(json_data)
        print(requests.post(url, data=json_data, headers={
              'Content-Type': 'application/json'}))


def put(url, template, data):
    for item in data:
        json_data = template.format(*item)
        print(json_data)
        print(requests.put(url, data=json_data, headers={
              'Content-Type': 'application/json'}))


@click.group()
def main():
    pass

# Default Values


@main.command()
def default_values():
    post("http://localhost:3000/api/v1/unit", unit_str, units)
    post("http://localhost:3000/api/v1/unit_conversion",
         unit_conversion_str, unit_conversions)
    post("http://localhost:3000/api/v1/product_category", category_str, categories)
    post("http://localhost:3000/api/v1/product_class",
         product_class_str, product_classes)
    # post("http://localhost:3000/api/v1/fridge_user",
    #      fridge_user_str, fridge_users)
    # post("http://localhost:3000/api/v1/device/admin", device_str, devices)
    # post("http://localhost:3000/api/v1/device/user",
    #      device_str, [("Kühlschrank Nr. 3",)])
    # post("http://localhost:3000/api/v1/device_content/1",
    #      ean_str, device_contents)
    # post("http://localhost:3000/api/v1/device_content/1",
    #      class_str, classes)


# Fridge User
@main.command()
@click.option('--login', prompt='Login', help='The login name used to log into the fridge.')
@click.option('--password', prompt='Password', help='The password used to log into the fridge.')
def fridge_user(login, password):
    post("http://localhost:3000/api/v1/fridge_user",
         fridge_user_str, [(login, password)])
    click.echo('Creating fridge user with login: %s and password: %s. %s' % (
        login, password, 'Success'))


# Device Content ean
@main.command()
@click.option('--device_id', prompt='Device ID', help='The ID of the device.')
@click.option('--ean', prompt='EAN', help='The EAN of the product.')
def ean(device_id, ean):
    post("http://localhost:3000/api/v1/device_content/" + device_id,
         ean_str, [(ean,)])
    click.echo('Creating device content with EAN: %s. %s' % (
        ean, 'Success'))


# Device Content class
@main.command()
@click.option('--device_id', prompt='Device ID', help='The ID of the device.')
@click.option('--class_id', prompt='Class ID', help='The ID of the product class.')
def class_id(device_id, class_id):
    post("http://localhost:3000/api/v1/device_content/" + device_id,
         class_str, [(class_id,)])
    click.echo('Creating device content with class ID: %s. %s' % (
        class_id, 'Success'))


# Device
@main.command()
@click.option('--device_name', prompt='Device Name', help='The name of the device.')
@click.option('--login', prompt='Login', help='The login name used to log into the fridge.')
def device(device_name, login):
    post("http://localhost:3000/api/v1/device/" + login,
         device_str, [(device_name,)])
    click.echo('Creating device with name: %s. %s' % (
        device_name, 'Success'))


# Drop product
@main.command()
@click.option('--device_id', prompt='Device ID', help='The ID of the device.')
@click.option('--ean', prompt='EAN', help='The EAN of the product.')
@click.option('--class_id', prompt='Class ID', help='The ID of the product class.')
def drop(device_id, ean, class_id):
    put("http://localhost:3000/api/v1/device_content/" + device_id,
        drop_str, [(class_id, ean)])
    click.echo('Dropping product with EAN: %s and class ID: %s. %s' % (
        ean, class_id, 'Success'))


if __name__ == "__main__":
    main()
