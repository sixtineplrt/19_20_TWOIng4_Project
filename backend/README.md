Bienvenue, vous êtes sur la partie Backend rédigée par Salomé MASBERNAT et Sixtine POLART
•	Installation : 

-	npm install 
-	npm start

•	MongooseDB est en ligne donc il est inutile de l’installer

•	Nous utilisons trois collections dans la base de données :
 
-	Users
-	Sensor
-	Measure

•	Chaque collection a sa route et son CRUD

•	Les requêtes ont été testée sur Postman :

-	http://localhost:3000/sensors/numberSensors: retourne le nombre de capteurs.
-	http://localhost:3000/sensors : retourne le nombre total de capteurs.
-	http://localhost:3000/users: retourne les utilisateurs.
-	http://localhost:3000/measures: retourne les mesures.
