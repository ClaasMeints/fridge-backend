import os


tables = [
    'fridge_user',
    'fridge_user_device_relation',
    'device',
    'device_content',
    'product',
    'product_class',
    'product_category',
    'unit',
    'unit_conversion',
    'required_content',
    'shopping_list',
]

for table in tables:
    os.system(f'rm -rf ./src/{table}/')
    os.makedirs(f'./src/{table}', exist_ok=True)

for blueprint in os.listdir('./src/.blueprints'):
    with open(f'./src/.blueprints/{blueprint}', 'r') as blueprint_file:
        blueprint_content = blueprint_file.read()
        for table in tables:
            content = blueprint_content.format(table)
            with open(f'./src/{table}/{table}.{blueprint.split(".")[1]}.ts', 'w') as table_file:
                table_file.write(content)