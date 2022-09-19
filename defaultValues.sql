-- -----------------------------------------------------
-- Default values
-- -----------------------------------------------------
INSERT INTO unit (unit_name, unit_symbol) VALUES ('Gramm', 'g');
INSERT INTO unit (unit_name, unit_symbol) VALUES ('Milliliter', 'ml');
INSERT INTO unit (unit_name, unit_symbol) VALUES ('Liter', 'l');
INSERT INTO unit (unit_name, unit_symbol) VALUES ('Kilogramm', 'kg');
INSERT INTO unit (unit_name, unit_symbol) VALUES ('Stück', 'pcs');
INSERT INTO unit (unit_name, unit_symbol) VALUES ('Teelöffel', 'tsp');
INSERT INTO unit (unit_name, unit_symbol) VALUES ('Esslöffel', 'tbsp');
INSERT INTO unit (unit_name, unit_symbol) VALUES ('Tasse', 'cup');

INSERT INTO unit_conversion (unit_factor_id, unit_result_id, factor) VALUES ((SELECT unit_id FROM unit WHERE unit_symbol = 'g'), (SELECT unit_id FROM unit WHERE unit_symbol = 'kg'), 1000);
INSERT INTO unit_conversion (unit_factor_id, unit_result_id, factor) VALUES ((SELECT unit_id FROM unit WHERE unit_symbol = 'ml'), (SELECT unit_id FROM unit WHERE unit_symbol = 'l'), 1000);
INSERT INTO unit_conversion (unit_factor_id, unit_result_id, factor) VALUES ((SELECT unit_id FROM unit WHERE unit_symbol = 'kg'), (SELECT unit_id FROM unit WHERE unit_symbol = 'g'), 0.001);
INSERT INTO unit_conversion (unit_factor_id, unit_result_id, factor) VALUES ((SELECT unit_id FROM unit WHERE unit_symbol = 'l'), (SELECT unit_id FROM unit WHERE unit_symbol = 'ml'), 0.001);
INSERT INTO unit_conversion (unit_factor_id, unit_result_id, factor) VALUES ((SELECT unit_id FROM unit WHERE unit_symbol = 'tsp'), (SELECT unit_id FROM unit WHERE unit_symbol = 'tbsp'), 3);
INSERT INTO unit_conversion (unit_factor_id, unit_result_id, factor) VALUES ((SELECT unit_id FROM unit WHERE unit_symbol = 'tbsp'), (SELECT unit_id FROM unit WHERE unit_symbol = 'tsp'), 0.33333333333333333333333333333333);


INSERT INTO product_category (category_name) VALUES ('Obst');
INSERT INTO product_category (category_name) VALUES ('Gemüse');
INSERT INTO product_category (category_name) VALUES ('Milchprodukte');
INSERT INTO product_category (category_name) VALUES ('Getränke');
INSERT INTO product_category (category_name) VALUES ('Backwaren');
INSERT INTO product_category (category_name) VALUES ('Soßen');
INSERT INTO product_category (category_name) VALUES ('Süßwaren');
INSERT INTO product_category (category_name) VALUES ('Aufstriche');

INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Apfel', 7, (SELECT category_id FROM product_category WHERE category_name = 'Obst'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Birne', 7, (SELECT category_id FROM product_category WHERE category_name = 'Obst'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Banane', 7, (SELECT category_id FROM product_category WHERE category_name = 'Obst'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Kirsche', 7, (SELECT category_id FROM product_category WHERE category_name = 'Obst'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Pfirsich', 7, (SELECT category_id FROM product_category WHERE category_name = 'Obst'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Mango', 7, (SELECT category_id FROM product_category WHERE category_name = 'Obst'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Ananas', 7, (SELECT category_id FROM product_category WHERE category_name = 'Obst'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Kiwi', 7, (SELECT category_id FROM product_category WHERE category_name = 'Obst'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Zitrone', 7, (SELECT category_id FROM product_category WHERE category_name = 'Obst'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Orange', 7, (SELECT category_id FROM product_category WHERE category_name = 'Obst'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Gurke', 7, (SELECT category_id FROM product_category WHERE category_name = 'Gemüse'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Tomate', 7, (SELECT category_id FROM product_category WHERE category_name = 'Gemüse'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Zucchini', 7, (SELECT category_id FROM product_category WHERE category_name = 'Gemüse'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Karotte', 7, (SELECT category_id FROM product_category WHERE category_name = 'Gemüse'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Kartoffel', 7, (SELECT category_id FROM product_category WHERE category_name = 'Gemüse'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Brokkoli', 7, (SELECT category_id FROM product_category WHERE category_name = 'Gemüse'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Blumenkohl', 7, (SELECT category_id FROM product_category WHERE category_name = 'Gemüse'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Kohl', 7, (SELECT category_id FROM product_category WHERE category_name = 'Gemüse'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
INSERT INTO product_class (class_name, storage_life_opend, category_id, unit_id) VALUES ('Mais', 7, (SELECT category_id FROM product_category WHERE category_name = 'Gemüse'), (SELECT unit_id FROM unit WHERE unit_symbol = 'pcs'));
