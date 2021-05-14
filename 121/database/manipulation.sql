-- CREATE

INSERT INTO recipe (
	recipe_name, image, creator, created_at
) VALUES (
	'Ramen', NULL, 'Percy', '2021-05-14'
);

INSERT INTO recipe_material (id, material_name) VALUES (1, 'Ramen');
INSERT INTO recipe_material (id, material_name) VALUES (1, 'Condiments');
INSERT INTO recipe_material (id, material_name) VALUES (1, 'Egg');
INSERT INTO recipe_material (id, material_name) VALUES (1, 'Small Pot');

INSERT INTO recipe_step (id, step_number, step_desc) VALUES (1, 1, 'Boil water in small pot');
INSERT INTO recipe_step (id, step_number, step_desc) VALUES (1, 2, 'Put in ramen and condiments');
INSERT INTO recipe_step (id, step_number, step_desc) VALUES (1, 3, 'Boil');
INSERT INTO recipe_step (id, step_number, step_desc) VALUES (1, 4, 'Add egg');
INSERT INTO recipe_step (id, step_number, step_desc) VALUES (1, 5, 'Boil');

-- UPDATE
UPDATE recipe SET created_at = '2021-05-13' WHERE id = 1;
UPDATE recipe_material SET material_name = 'Egg * 2' WHERE id = 1 AND material_name = 'Egg';

-- DELETE
DELETE FROM recipe_step WHERE id = 1 AND step_number = 5;