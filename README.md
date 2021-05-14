# Recipe Keeper

A recipe keeping site that allow users to store recipes  

## Users
Guest;  

## Objects

**Recipe**  
RecipeName -> String;  
Creator -> String;  
Image -> String;  
CreatedAt -> Date;  
Materials -> List(String);  
Steps -> List(String);  

## Services

**Guest**  
CREATE -> Recipe;  
READ -> Recipe;  
UPDATE -> Recipe;  
DELETE -> Recipe;  
