// SELECT western_easterns.spirit_animal_id FROM( 
// 	western_easterns INNER JOIN eastern
// 	on western_easterns.eastern_id = eastern.id
// )
// INNER JOIN western ON(western_easterns.western_id = western.id)
// WHERE (western.name = 'aquarius' && eastern.name = 'horse');

// INNER JOIN Customers
// ON Orders.CustomerID=Customers.CustomerID;

// SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
// FROM Orders
// INNER JOIN Customers
// ON Orders.CustomerID=Customers.CustomerID;

// SELECT TableA.*, TableB.*, TableC.* FROM (
// 	TableB INNER JOIN TableA
// 	ON TableB.aID= TableA.aID
// )
// INNER JOIN TableC ON(TableB.cID= Tablec.cID)
// WHERE (DATE(TableC.date)=date(now()))

// SELECT western_easterns.spirit_animal_id FROM( western_easterns INNER JOIN eastern on western_easterns.eastern_id = eastern.id)INNER JOIN western ON(western_easterns.western_id = western.id) WHERE (western.name = 'Aquarius' AND eastern.name = 'Horse');