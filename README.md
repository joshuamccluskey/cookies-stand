# pats-salmon-cookies

Pat's Salmon Cookies project for Code Fellow's 201

## LAB - 06 Objects

## Pat's Salmon Cookies

Your friend Pat has come up with a business idea by combining two signature Seattle icons: Pat has developed a recipe for a coffee-time confection called Salmon Cookies. These cookies made into the shape of a salmon that has just a hint of fishy goodness.

Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications.

Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

The minimum number of customers per hour.
The maximum number of customers per hour.
The average number of cookies purchased per customer.
Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application.

Pat needs you to take a leading role in doing the design work and construction of a public-facing page, too. They already have a logo image picked out (below), but Pat is requesting your assistance in the design of the documents, color scheme, fonts, and any additional images for the public facing site.

A salmon

So, in addition to building an application that calculates daily sales projections for each location (on a page called sales.html), you also need to create a public-facing page (on the homepage index.html) that is colorful, eye-catching, readable, useful, and informative.

You’ve got a lot to do. Plan your work, and work your plan.

Instructions
Before you begin, create a new repository within GitHub callled “cookie-stand”. Make sure that this repository is propertly set up with a license and a readme. Clone this repo down to your local machine

Create two new pages within your project. One for Sales Data (sales.html) and another for the homepage (index.html).

Sales Data
Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:

Stores the min/max hourly customers, and the average cookies per customer, in object properties
Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
Store the results for each location in a separate array… perhaps as a property of the object representing that location
Display the values of each array as unordered lists in the browser
Calculating the sum of these hourly totals; your output for each location should look like this:

Seattle

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
Total: 875 cookies
Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

Here are the starting numbers that you’ll need to build these objects:

<!-- Location	Min / Cust	Max / Cust	Avg Cookie / Sale
Seattle	23	65	6.3
Tokyo	3	24	1.2
Dubai	11	38	3.7
Paris	20	38	2.3
Lima	2	16	4.6 -->
These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. Make sure to make each location is its own JavaScript object.

Home Page
Read below for the requirements of your index.html page.

Note: Everything listed below is a stretch goal for lab 06. All of these requirements will be required for the final submission of the project, so start implementing these early.

In addition to the provided picture of the fish, your index.html file should contain:

A custom Google font for highlights
A specified standard sans-serif web font for data (such as Arial, Verdana, or Helvetica)
A specified standard serif web font for text (such as Georgia, Times, etc.)
Specified different font colors for all three font usages
A background color for the default page background (make sure font colors have good contrast and are readable on this background)
A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!)
Anything else you’d like to add related to style. But remember: simplicity, clarity, and consistency are good things in design.
Be thoughtful about layout and overall organization of the page.
Include all of the typical stuff that you’ll find on the home page of a business: locations, hours, contact information, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.
Developer Style Guide
In addition to the requirements listed above, please ensure that your project also contains the following according to our style guide:

For every lab within this project, you will be creating a new branch for every day. Create a new branch name that follows the following format class##-feature (example: class06-Objects).

Within your local version of your repo, add your .gitignore and .eslintrc.json.

While working within your non-main branch, conduct regular commits within git.

All properties/values and methods should be correctly constructed and given meaningful names.

Functions and methods should follow the single-responsibility principle.

Use template literals in your JS logic to render the stores as lists on the sales page

Stretch Goals
Read this article, this article, and this article on the differences between low-fidelity and high-fidelity wireframes. Based on these readings, draw conclusions about what you would want in your own low-fidelity and high-fidelity wireframes.*

Create a low-fidelity wireframe of what you want the page to look like.

Create a high-fidelity wireframe of what you want your page to look like.

### Author: Joshua McCluskey

#### Links and Resources: N/A

#### submission PR

### Reflections and Comments

At first I thought this was going to be fast, but after realizing elements had to be added to the sales.html, it got nuanced very quickly. There were a lot of small steps that needed to be accomplished to complete each task. It took me the whole lab for me to complete the requirements. Speaking out loud when you are stuck, really does work so I need to find a rubber ducky to talk to whole I typing and thinking.

## LAB - 07 Add a constructor function to the cookie stand project

## Pat's Salmon Cookies

Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

### Author: Joshua McCluskey

### Links and Resources: N/A

### submission PR

### Reflections and Comments

I felt like this was the toughest lab to figure out out of all the labs so far in 201. I hit several points where my brain had hit its point, and I kept trying to push through. I now appreciate any dynamic table that I may see from here on out. I thought that it would take as long as the build out in the class demonstration. Then I quickly realized if I was going to use the functions that I had already built that it would take longer to modify the code to work. I learned an invaluable amount during this exercise. This assignment took me the whole lab.

## LAB - 08 CSS

## Pat's Salmon Cookies

ontinue working on the functionality of your sales.html page if you do not have it working 100% yet, including the row of totals across the bottom.

Pat has provided you 7 additional images that they would like to see on the home page of the site. These images are located in your daily class GitHub repo: class-08/lab-b/assets/.

Your public-facing index.html page should include the following:

locations with addresses,
hours open
contact information
Anything else you feel neccesary.
A link to your sales.html page
Be sure to also include a link to your index.html page on your sales.html pages as well.
Feel free to make this information up. Get creative, have fun, but remember to be professional.

Stretch Goals
Add the ability for your users to choose among multiple display or color profiles for the page. Clicking a button should allow them to choose (for instance) whether the text is dark on a light background, or the text is light on a dark background. You can also experiment with changing up the style: make a version of your display that mimics a newspaper, or an Excel spreadsheet, or Roman chiseling in stone. (But make sure the user can choose a more normal style, too!) You can also experiment with using a select input to choose the style.

Make a style guide, using this one that a team Brian was on made for Everlast as a model.

Make two additional pages:

Mock up an order form that would be public facing (store.html) so that visitors to the website can order salmon cookies and swag. That form would need to receive all of the things you’d expect on an order form: name, address, payment info, products to order, quantities, special instructions, and so on.
A second ‘private’ page (order-processing.html) that shows a list of pending orders and the individual order details. The business owner can then process the orders by clicking a button next to the order that then moves that list item to a ‘Filled Orders’ list at the bottom of the page.

### Author: Joshua McCluskey

### Links and Resources

[Google Fonts](<link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Bungee+Outline&display=swap" rel="stylesheet">)

### submission PR

Reflections and Comments:

This lab went very fast considering the amount of work that needed to be done. It helped to have the wireframe ready to use from the first part of the lab. Then it was pretty much modifying the page to fit the website. It took some adjustments to stop overlapping and then it all came togeter working section by section. Overall, it was a solid lab. A ton of time can be spent on styling, I need to catch myself in the future from spending too much time in the grand scheme of the course and other features of the website that require more time and mental resources.

## LAB - 09 Forms

## Pat's Salmon Cookies

Today you will be adding a form to your existing cookie stand project so that you can add new locations to the table by simply inputting their information with the form.

Create a new HTML form to accept the information for a new cookie stand. Be sure to utulize the <fieldset> tag to help you style it.

Upon submission of the HTML form, create an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.

Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!).

If not complete from lab 7, write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.

Anywhere you have repeated chunks of code, apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that’s when you want to consider refactoring.

Validate your html through HTML5 validation.

Confirm that your code is following the single responsibility rule. Each function should only do one thing, with the capability to break it out further as needed.



### Author: Joshua McCluskey

### Links and Resources

[Google Fonts](<link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Bungee+Outline&display=swap" rel="stylesheet">)

### submission PR

Reflections and Comments:

This lab went well I'm really starting to feel thing coming all togehter and cementing in my head. Troubleshooting is beginning to be more clear. I'm starting to break things down into smaller details which I haven't done before to troubleshoot and debug. I thought this lab went well. THe CSS was actually difficult, messing around with measurements. I have to spend more time to understand setting up some kind of break point so the page has some consitencacy. Overall, it was a lab that I learned a lot from. I think building forms and connecting them to JS is my new favorite thing to do.


## LAB - 10b Finish the salmon cookie stand project

## Pat's Salmon Cookies

Finish up your Salmon Cookies project. Ensure that you meet all minimum functionality described in prior labs as well as succesfully implemented all of the requirements for the index.html file listed in Lab 06. Here they are, listed below:

A custom Google font for highlights
A specified standard sans-serif web font for data (such as Arial, Verdana, or Helvetica)
A specified standard serif web font for text (such as Georgia, Times, etc.)
Specified different font colors for all three font usages
A background color for the default page background (make sure font colors have good contrast and are readable on this background)
A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!)
Anything else you’d like to add related to style. But remember: simplicity, clarity, and consistency are good things in design.
Be thoughtful about layout and overall organization of the page.
Include all of the typical stuff that you’ll find on the home page of a business: locations, hours, phone number, email address, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.

### Author: Joshua McCluskey

### Links and Resources

[Google Fonts](<link href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Bungee+Outline&display=swap" rel="stylesheet">)

### submission PR

Reflections and Comments:

This project overall, was really challenging. It pushed me to my limits. When Ryan said this week is a right of passage for Code Fellows, I didn't know what we were getting into for the salmon cookie project. This week pushed me to my limits, and I've grown so much in such a short period of time. There's no turning back after getting through this week. It felt like a huge accomplishment. Especially since I've always been intimidated by numbers and math. Being thrown in the deep end where it's uncomfortable, I learned more skills, but also I learned how to be comfortable being uncomfortable.

