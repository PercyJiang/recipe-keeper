CREATE TABLE recipe (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	recipe_name VARCHAR(25) NOT NULL,
	image LONGBLOB,
	creator VARCHAR(25), 
	created_at Date
);

CREATE TABLE recipe_material (
	id INT NOT NULL,
	material_name VARCHAR(25) NOT NULL
);

CREATE TABLE recipe_step (
	id INT NOT NULL,
	step_number INT NOT NULL,
	step_desc VARCHAR(100) NOT NULL
);
