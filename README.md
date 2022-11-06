# Marvel Studio Quiz - Project 2

<img src= "https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/responsive.png">

This website is a quiz on the Marvel Studio franchise. The quiz will test the knowledge on the user on some of the movies Marvel have created, highlighting if the user correctly answered or not. Each correct answer awards the users with a 100 points, an incorrect answer will not net any points for the user. After the 10 questions have been answered the user will see there total score and can save that score to a leaderboard against other users.

The goal of this project is to entice viewers with an interest in the Marvel Universe, the user will answer Marvel themed questions and also able to listen to 1 of the 3 well known Marvel themes during play through.

[Live link to website](https://prezbala.github.io/ProjectTwo-Quiz/index.html)

<hr>

# Table of Contents
<!-- TOC start -->
- [User Experience)](#ux-user-experience)
  * [Website Goal](#website-owner-business-goals)
  * [User Goals](#user-goals)
  * [Wireframes](#wireframes)
- [Features](#features)
    + [Common Elements](#common-elements)
    + [Home Page](#home-page)
    + [Gallery Page](#about-us-page)
    + [Contact Us Page](#contact-us-page)
    + [Submitted Page](#Submitted-page)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
  * [Cross-Browser Testing](#cross-browser-testing)
  * [Compatibility Testing](#compatibility-testing)
  * [Responsiveness Testing](#responsiveness-testing)
  * [User Testing](#user-testing)
  * [Validator Testing](#validator-testing)
  * [Performance Testing](#performance-testing)
  * [Errors, Bugs or Issues During Development](#errors-bugs-or-issues-during-development)
  * [Improvements for the Site](#Improvements-for-the-site)
- [Deployment](#deployment)
- [Credits](#credits)
  * [Code](#code)
  * [Images](#images)
  * [Fonts](#fonts)
  * [Colours](#colours)
  * [Icons](#icons)
  * [Text Content](#text-content)
<!-- TOC end -->
<!-- TOC -->

<hr>

# UX (User Experience)
## Website Owner Goals

The main purpose for this is to engage the user in a fun quiz based on the Marvel franchise. Through a range of questions from each of the franchises movies this will eventually culminate to a score at the end, where the user can save there score against other players or to improve themselves.  

## User Goals
### First-time Users
+ The user can easily identify the main purpose of the site through the headline title and named buttons
+ The user can easily navigate to the high score page and see a list of there own score including other players too
+ The user can select the rules button to open a pop up that will advise the user on what to do and also a brief history of Marvel Studios.

## Wireframes
The following image shows a wireframe of each of the 4 pages of the site. These wireframes were created using [MockPlus](https://user.mockplus.com/signin?next=https://app.mockplus.com/app).

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/wireframe.png">

Mobile phone wire frame also shown below

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/mobilewireframe.png">

[Back to Table of Contents](https://github.com/PrezBala/ProjectTwo-Quiz#table-of-contents) 

<hr>

# Features

### Common Elements
The common elements across all pages will be the background theme (Avengers - Iron man vs Captain America) and also the colour theme (Red,Blue and Green)

+ The Wallpaper - I decided to use the below wallpaper across all screens in this quiz site. Due to Marvel movie Civil War being one of the highest grossing movies and also a personal favourite. I find the image very strike with the traditional Marvel colours making it stand out.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/marvelwallpaper.jpg">


### Home Page
This is the main landing page which the user will be first presented with, with big bold texts showcasing what the main function of the site is. By using a eye catching wallpaper and the Avengers themed colours i hope to keep users interested in viewing the site. This page contains the following elements below:

+ Home Screen - The image of 2 of the leading characters in the movie franchise in head to head combat is a very striking image for the user, i've also used the 3 colours signified for the Marvel franchise Blue,Red and Green which relates to the big 3 characters in the movies Captain America, Iron man and the Incredible Hulk.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/homescreen.png">

+ Audio Player - I've added a audio player beneath the 'Rules' button. When play is selected the Marvel intro theme will commence playing and the user can decide to pause or continue. I wanted to ensure that the music does not automatically play when the user first loads the site as i rather the user has control on this function (in case user is in a library or just doesn't want to listen to music!) 

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/miniplayer.png">

### Play

Once play is selected the page will update to the game.html page where the user can begin to answer questions and also keep track of there progress/score. I've also added a functionility for a music player  with a rotating image and playlist pop-up.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/gamepage.png">

I wanted to make the audio player for the game page to be more visually appealing and also to insert an image to reference the music that is playing i.e. Spiderman head for the spiderman theme, Ironman heads for Ironman 3 and also Avengers theme for the Avengers theme, the head also rotates which i thought would be fun to add. I added a function where the user can see a blue pop up appear with text imbedded so when the music starts playing, it shows what hero the theme refers to.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/musicon.png">  

### Correct Answer
When the user selects the correct answer, the question will go green and then commence to the next screen. The score will increase by 100 and the progress bar will increase.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/correct.png">

### Incorrect Answer
When the user selects the incorrect answer, the question will go red and then commence to the next screen. The score will remain at the figure it was prior to selection and the progress bar will increase.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/incorrect.png">

### Score and Question progress / tracker
The question progress bar will keep a value on what question the user is up to and also show a progression bar on how far the user is from completion. The score on the right side will show the user that each correct answer awards 100 points whereas incorrect answers award 0, the values update as the user progresses through.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/questionscore.png">

<hr>

# Technologies Used / CREDITS

+ HTML - Hypertext markup language used to give the website its overall structure and semantic value.
+ Google Fonts - Fredoka One font used.
+ Javascript - To ensure several funcationalities could be carried out i.e. Red/Green answer, HighScore storage etc..
+ CSS3 - Cascading Style Sheets used to apply consistent styles across all sections of the application.
+ Color Scheme - Using the Avenger themed colours, i've also taken inspiration from the below image.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/avengercolours.jpg">

+ Structure of the readme file was taken from my Project one: [ProjectOne](https://github.com/PrezBala/ProjectOne)
+ Font Awesome - All icons (Social icons) were taken from Font Awesome
+ Git, Github & Gitpod - Used to continuously develop and deploy the incremental versions of the application.
+ Mockup - Assisted in creation of wireframe mockups.

[Back to Table of Contents](https://github.com/PrezBala/ProjectTwo-Quiz#table-of-contents) 

<hr>

# Testing

## Cross-Browser Testing
I have tested this website across the 3 main web browsers Google Chrome, Microsoft Edge & Safari (using my MAC). The site loaded consistently across all 3 with no issues detected.

## Compatibility Testing
I tested the site across differing devices, using my Samsung Galaxy S20 Ultra, Dell Laptop and my iMac. I've used several different browsers and no issues were detected between any of these devices.

## Responsiveness Testing
-----------------------------
Throughout the process of creating the site, i've used Google Chromes Developer tools to test the responsiveness of the site. I've used 3 seperate dimensions to test and design the site for different screen sizes. 
 
+ 1280px width and below 
+ 800px width and below 
+ 400px width and below 
-------------------------------

## User Testing

I wanted to ensure that the text and buttons are very clearly visible and also that the background image is centralised. After several adding several @media screen to accomodate different phone sizes i was happy how it appears on my personal phone (Samsung S20 Ultra). I ensured that on bigger screen the answer boxes within the game.html is stretched across the screen whereas on smaller devices (mobiles) it's considerably smaller and that the text is easily read.

One of the biggest challenges was the media box to facilitate the 'spinning head' and for the text to appear easy to read, though after several tweaks and testing i got it to a stage where that i'm content with.

Mobile Home screen

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/mobileone.jpg">

Mobile Game Screen

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/mobilethree.jpg">



## Validator Testing

The HTML of the website was tested using the validator at [https://validator.w3.org/]. 

I've been advised of the below errors and have now corrected all of them and the site passed the validator.

+ Missing closing tag for images within Gallery.
+ Footer link error for social links.
+ Missing <"/div"> within contact us page.

<img src="https://github.com/PrezBala/ProjectOne/blob/main/wireframescreenshots/htmlcheck.jpg">

The CSS was tested using the validator at [https://jigsaw.w3.org/css-validator/] and no errors were reported.

<img src="https://github.com/PrezBala/ProjectOne/blob/main/wireframescreenshots/jigsaw.jpg">


## Performance Testing

I used the extension "Lighthouse" within Google Chrome Developer Tools and the results ranged from 90% - 93% which i am content with.

<img src="https://github.com/PrezBala/ProjectOne/blob/main/wireframescreenshots/lighthouse.jpg">

## Errors, Bugs or Issues During Development

While testing several devices i encountered an issue with the contact us form. On smaller screened iphones i found the contact us page spread across the screen where the user is unable to read what the entry field correlates to. After several alterations and testing within CSS and adjusting the size i eventually got the table to a size i am happy with as shown below.

<img src="https://github.com/PrezBala/ProjectOne/blob/main/wireframescreenshots/smallphone.jpg">

## Improvements for the Site

During the finalizing process of developing the site, i soon thought of several different methods of how i could have improved this site and implement these ideas in the future for other projects:

+ Improve the aesthetic for smaller devices when viewing the footer, initially i liked the "stacked" style of it but thought perhaps it might appear too clunky and should match how the site looks on larger screens.

+ Use higher resolution images especially for the header logo, as this counted towards my grading for the "lighthouse" check i've used in Google developer tools.

[Back to Table of Contents](https://github.com/PrezBala/ProjectOne#table-of-contents) 

<hr>

# Deployment

### The steps to deploy the website to Github Pages below:

1. I accessed the Code Institute template at [https://github.com/Code-Institute-Org/gitpod-full-template] and clicked on the "Use This Template" button.
2. The next step, i gave my repository a suitable name.
3. I clicked on the green Gitpod button (using browser extensions on Google Chrome)
4. This created my development environment on Gitpod where I began to push the incremental changes to the live hosted site.
5. I navigated to the Github repo settings tab and found the Github pages dedicated section.
6. Within the Source dropdown menu I clicked on "main", and then "Save". Live link is available here [https://prezbala.github.io/ProjectOne/index.html]

### To test this on my local machine i followed the steps below.

1. Navigate to the Github repo at [https://github.com/PrezBala/ProjectOne]
2. Click on the Code button, then Download ZIP.
3. Extracted / Saved the ZIP to a secure location on my machine.
4. Ran the file on a browser of my choice (i.e. Chrome)


[Back to Table of Contents](https://github.com/PrezBala/ProjectOne#table-of-contents) 

<hr>

# Credits

## Code

+ The code for the social icons/Header style was derived using Bootstrap frameworks
+ The code for the hero image with animation on the homepage was taken and modified from the Love Running walkthrough project offered by Code Institute. I made small modifications to suit my project 
+ I've looked at websites created by other students within Slack to see how they've structured there code and also there read me files which helped influence my own version.
the student codes i took influence from were (https://github.com/jboyd8/milestone-project-1) , (https://github.com/kevinjohnkiely/la-rosa-restaurant-project-1/) and (https://github.com/BenD2525/the-rescuers-p1). 
+ The Slack community. The help a student is able to receive from the other students is a really great tool to have.
+ The code for the social icons/Header style was derived using Bootstrap frameworks
+ My Mentor Andre Aquilina who has provided me several tips/advise which has helped me in figuring out bugs i encountered during testing phases.

## Images
All image content for the project i found via google images.

## Fonts
Just one font was used throughout the website, with varying weight for headings and body text.
[Permanent Marker](https://fonts.google.com/specimen/Permanent+Marker)

## Icons
The social media icons on the contact page were sourced from Font Awesome [https://fontawesome.com/]

## Text Content
All text content across the application was composed by myself and also derived information from the links below.

[Wikipedia](https://en.wikipedia.org/wiki/Shogun%27s_Samurai) 
and
[Quora](https://www.quora.com/What-is-the-difference-between-a-samurai-and-a-shogun) 


[Back to Table of Contents](https://github.com/PrezBala/ProjectOne#table-of-contents) 