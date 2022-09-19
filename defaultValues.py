import requests

unit = """{{"unit_name": "{0}","unit_symbol": "{1}"}}"""
units = [("Gramm", "g"), ("Kilogramm", "kg"), ("Milliliter", "ml"), ("Liter", "l"), ("Stück", "Stk")]

unit_conversion = """{{"unit_factor_id": {0},"unit_result_id": {1},"factor": {2}}}"""
unit_conversions = [(1, 2, 1000), (2, 1, 0.001), (3, 4, 1000), (4, 3, 0.001)]

category = """{{"category_name": "{0}","category_icon": "{1}"}}"""
categories = [
    ("Obst", "https://cdn-icons-png.flaticon.com/512/2892/2892338.png"), 
    ("Gemüse", "https://cdn-icons-png.flaticon.com/512/2805/2805947.png"), 
    ("Getränke", "https://cdn-icons-png.flaticon.com/512/2405/2405597.png"), 
    ("Backwaren", "https://cdn-icons-png.flaticon.com/512/3081/3081967.png"), 
    ("Konserven", "https://cdn-icons-png.flaticon.com/512/1236/1236977.png"), 
    ("Süßwaren", "https://cdn-icons-png.flaticon.com/512/2454/2454268.png")
]

product_class = """{{"class_name": "{0}","class_image": "{1}","storage_life_opened": {2},"category_id": {3},"unit_id": {4}}}"""
product_classes = [
    ("Apfel", "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg", 7, 1, 5),
    ("Birne", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/D%27anjou_pear.jpg/640px-D%27anjou_pear.jpg", 7, 1, 5),
    ("Brokkoli", "https://commons.wikimedia.org/wiki/File:Broccoli_DSC00862.png", 7, 2, 5),
    ("Brot", "https://commons.wikimedia.org/wiki/File:Bread_%D1%85%D0%BB%D0%B5%D0%B1_03.jpg", 7, 4, 5)
]

fridge_user = """{{"login": "{0}","password": "{1}"}}"""
fridge_users = [
    ("admin", "admin"),
]

device = """{{"device_name": "{0}"}}"""
devices = [("Kühlschrank",)]

device_content = """{{"class_id": {0},"ean": {1}}}"""
device_contents = [
    (1, 3046920022651),
]

def post(url, template, data):
    for item in data:
        json_data = template.format(*item)
        print(json_data)
        print(requests.post(url, data=json_data, headers={'Content-Type': 'application/json'}))

post("http://localhost:3000/api/v1/unit", unit, units)
post("http://localhost:3000/api/v1/unit_conversion", unit_conversion, unit_conversions)
post("http://localhost:3000/api/v1/product_category", category, categories)
post("http://localhost:3000/api/v1/product_class", product_class, product_classes)
post("http://localhost:3000/api/v1/fridge_user", fridge_user, fridge_users)
post("http://localhost:3000/api/v1/device/admin", device, devices)
post("http://localhost:3000/api/v1/device_content/1", device_content, device_contents)