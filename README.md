Weather App (instructions on how to compile and run the application)

Three modules here 

1.commons (parent module)

2.consumer (child)

3.producer (child)

for execution follow the steps:

1.Open Weather App as Maven Project
2.Create Database in PostgreSQL
3.Update Db credentials in Weather Consumer (weather.consumer/src/main/resources/application.properties)
4.Update Db credentials in Weather Producer (/weather.producer/src/main/resources/application.properties)
5.Run weather.consumer as spring boot
6.Run weather.producer as spring boot
7.write in url http://localhost:8080/ to access web page 

Note:

consumer is running on 9090 port (you can change in application.properties)

producer is running on 8080 port (you can change in application.properties)

------------------------------------------------------------------------------------
================Problem Statement======================

There is an XML weather API accessible at http://www.ilmateenistus.ee/ilma_andmed/xml/forecast.php?lang=eng

Build a Spring-Boot application consisting of at least two Maven modules.

Module 1 - background process:

	This module has to contain a scheduled method (with the @Scheduled annotation) that will consume the weather API and save the results in a PostgreSQL database.
	You can ignore any wind/sea data in the API result as this is not important to this task.
	The scheduled method should run every 30 minutes.
	The module should set up the database schema by itself on startup if one does not exist already. Assume that the application will have superuser access to a PostgreSQL database with the following properties:
		Address: localhost:5432
		Database: weather
		Username: weather
		Password: weather
	
Module 2 - web:

	This module should serve a simple web page.
	The web page should show the user the latest weather forecast (read from the database).
	The user should be able to easily look up current weather for their location, by entering the name of the location in a search bar.
	
Optionally, you can create a third module that would contain code and/or settings common to both applications, so that the two previously mentioned modules can re-use some of the same code.

No limitations are set on the front-end framework, so use whatever framework you want and design the page however you see fit.

The application has to use Maven as the build environment and should be easy to compile and run.


