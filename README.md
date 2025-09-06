# [adidas-taiwan-store-query-system]
## About The Project
This project is a web-based store locator for Adidas locations in Taiwan. It is built using Google Apps Script and leverages Google Sheets as a database to store and retrieve store information. The user can select a region from a dropdown menu to view a list of all Adidas stores in that specific area, including their name, contact number, and address.

The application also tracks the number of queries made per month, providing simple usage analytics.

## How It Works
### Frontend Interface(```index.html```)
The main page presents the user with a title, an Adidas logo, and a dropdown menu to select a Taiwanese region. This page is rendered by the ```doGet()``` function in the Google Apps Script (```main.gs```).

### Data Source (Google Sheets): 
A Google Sheet is used to store the store data. There is a 'table' sheet that lists the available regions, and then separate sheets for each region containing detailed store information (name, phone, address).

### Backend Logic (```main.gs```):

* ```doGet()```: Serves the initial ```index.html``` page.
* ```searchcity()```: Populates the dropdown menu on the main page by fetching region names from the 'table' sheet.
* ```doPost(e)```: Handles the form submission when a user selects a region. It retrieves the corresponding sheet data for the chosen region.
* ```showTable(kind)```: Fetches all data from the specified region's sheet.
* ```sendToSheet()```: This function runs each time a search is performed. It logs the query count to a 'counter' sheet, incrementing a counter for the current year and month.

### Results Display (```result.html```)
After a user submits their selection, the backend processes the request and displays the result.html page. This page dynamically renders a table populated with the store data fetched by the showTable function.

## Features
1. **Region-Based Search**: Users can easily search for stores by selecting a region.
2. **Dynamic Data Display**: Store information is dynamically fetched from a Google Sheet and displayed in a clean, tabular format.
3. **Usage Counter**: Automatically tracks the number of searches performed each month.
4. **External Links**: Provides quick links to the official Adidas US and Taiwan websites.
5. **Simple UI**: A straightforward and user-friendly interface for easy navigation.

## Technologies Used
* *JavaScript (Google Apps Script)*: For backend logic, data handling, and serving web pages.
* *HTML5*: For the structure of the web pages.
* *CSS3*: For basic styling of the application.
* *Google Sheets*: Used as a simple database to store and manage store locations.
* *jQuery & jQuery UI*: Utilized for the enhanced combobox feature on the search page.
* *Bootstrap*: For responsive styling and layout components.

## Project Files
```main.gs```: Contains all the server-side Google Apps Script functions that handle HTTP requests, interact with the Google Sheet, and render the HTML templates.

```index.html```: The main landing page of the application, which contains the search form.

```result.html```: The page that displays the search results in a table.

```style.css```: Contains custom CSS rules for the application's appearance.



## Searing UI
![image](https://github.com/chij6/Adidas-stores-system/blob/main/search_page.png)

## Searching Results
![image](https://github.com/chij6/Adidas-stores-system/blob/main/search_result.png)
