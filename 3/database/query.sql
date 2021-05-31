SELECT * FROM recipe;
SELECT material_name FROM recipe INNER JOIN recipe_material ON recipe.id = recipe_material.id;
SELECT step_number, step_desc FROM recipe INNER JOIN recipe_step ON recipe.id = recipe_step.id;