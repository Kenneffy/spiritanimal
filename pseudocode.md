request to combo page
run query

Select table

Transverse through all the rows of the data

1. Finish making tables
2. Seed western and eastern tables
3. cheerio request using JQUERY to set data for the spirit animal table and western/eastern table
4. insert into the 2 tables
5. loop over all spirit animals and use request to each url and grab description using cheerio and update description for that particular animal
6. when user submits the form run a sql query to get the spirit animal to ther user

SELECT spiritanimal.name, spirit animal.description from westerns_easterns we left join spirit_animals sa on sa.spirit_animal_id = we.id where we.western_id = user input for (req.body.eastern) and we.eastern_id = user input(req.body.western)