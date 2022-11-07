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
    + [Play](#play)
    + [Correct Answer](#Correct-Answer)
    + [Incorrect Answer](#Incorrect-Answer)
    + [Score and Question progress tracker](#ScoreandQuestionprogresstracker)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
  * [Cross-Browser Testing](#cross-browser-testing)
  * [Compatibility Testing](#compatibility-testing)
  * [Responsiveness Testing](#responsiveness-testing)
  * [User Testing](#user-testing)
  * [Validator Testing](#Validator-Testing)
  * [Performance Testing](#performance-testing)
  * [Errors, Bugs or Issues During Development](#errors-bugs-or-issues-during-development)
  * [Improvements for the Site](#Improvements-for-the-site)
- [Deployment](#deployment)
- [Credits](#credits)
  * [Code](#code)
  * [Images](#images)
  * [Fonts](#fonts)
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

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/musicplayer.png">  

Below when the play button is selected a pop up appears above showing the name and also the image within the music player rotates.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/musicon.png">  

### Correct Answer
When the user selects the correct answer, the question will go green and then commence to the next screen. The score will increase by 100 and the progress bar will increase.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/correct.png">

### Incorrect Answer
When the user selects the incorrect answer, the question will go red and then commence to the next screen. The score will remain at the figure it was prior to selection and the progress bar will increase.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/incorrect.png">

### Score and Question progress tracker
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
+ PicResize - Assisted in adjusting size of images.


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

Mobile Score Screen

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/mobiletwo.jpg">

Mobile Rules Screen

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/mobilefour.jpg">

I also tested the score system by playing the quiz and at the time scored 400, i wanted to ensure that score is also reflected within the High Scores html when the high scores button is selected in the home page.

Score 400 below 

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/savescore.png">

Checked High score page

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/scoresaved.png">

## Validator Testing

The HTML of the website was tested using the validator at [https://validator.w3.org/]. 

I've been advised of the below errors and have now corrected all of them and the site passed the validator.

+ Missing h1 closing tags within the game.html
+ Missing <"/div"> within the game.html page.

<img src="https://github.com/PrezBala/ProjectOne/blob/main/wireframescreenshots/htmlcheck.png">

The CSS was tested using the validator at [https://jigsaw.w3.org/css-validator/] and no errors were reported.

<img src="https://github.com/PrezBala/ProjectOne/blob/main/wireframescreenshots/csscheck.png">

The Javascript was tested using the validator at [https://jshint.com/] no errors once corrections were made (corrections were to add ';')

<img src="https://github.com/PrezBala/ProjectOne/blob/main/wireframescreenshots/javacheck.png">


## Performance Testing

I used the extension "Lighthouse" within Google Chrome Developer Tools and the results ranged as show below.

Home page - I was content with the score given here.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/lighthouse.png">

Game page - In future i will consider using webP format for images to improve load times and also i've added a aria-label within the music players buttons to improve accessibility score.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/lighthouse2.png">

High score page - I was content with the score given here.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/lighthouse3.png">


## Errors, Bugs or Issues During Development

I encountered  bugs / issues during the creation stage of the music players within the game.html / game.jss and also encountered an issue on smaller devices when attempting to configure smaller devices (laptops, ipads) to correctly display everything correctly.

The issues i encountered with the music player initially was that the image failed to appear / rotate though after checking through all the reference points within the code i made a few amendments and the image pulled through correctly.

On the smaller devices the music player / progress bar were unable to fit within the screen, though after referencing the correct codes for them within .css and through several tweaking and testing i got it to the stage i am content with.

I've also encountered two errors after deploying the site to live:

1st error was in regards to the background wallpaper, i found the image was fitted to the screen incorrectly, as shown below.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/error1.png">

This issue was corrected within style.css by adding a reference for body and adding a "no-repeat and cover" tag.

The 2nd error is a "error 404" displaying when attempting to save the high score as shown below.

<img src="https://github.com/PrezBala/ProjectTwo-Quiz/blob/main/assets/readmeimages/error2.png">

This was corrected within the end.js by adding a reference to the index.html to the 'location assign'.


## Improvements for the Site

During the finalizing process of developing the site, i soon thought of several different methods of how i could have improved this site and implement these ideas in the future for other projects:

+ More aesthetics for the main page and also during gameplay (i.e. animated wallpapers and also additional animations when selecting right or wrong answer)

+ An additional button during the quiz game play which can toggle on/off for button noises.

+ Improvements to the leaderboard table, to make it more aesthetically appealing.

[Back to Table of Contents](https://github.com/PrezBala/ProjectTwo-Quiz#table-of-contents) 

<hr>

# Deployment

### The steps to deploy the website to Github Pages below:

1. I accessed the Code Institute template at [https://github.com/Code-Institute-Org/gitpod-full-template] and clicked on the "Use This Template" button.
2. The next step, i gave my repository a suitable name.
3. I clicked on the green Gitpod button (using browser extensions on Google Chrome)
4. This created my development environment on Gitpod where I began to push the incremental changes to the live hosted site.
5. I navigated to the Github repo settings tab and found the Github pages dedicated section.
6. Within the Source dropdown menu I clicked on "main", and then "Save". Live link is available here [https://prezbala.github.io/ProjectTwo-Quiz/index.html]

### To test this on my local machine i followed the steps below.

1. Navigate to the Github repo at [https://github.com/PrezBala/ProjectTwo-Quiz]
2. Click on the Code button, then Download ZIP.
3. Extracted / Saved the ZIP to a secure location on my machine.
4. Ran the file on a browser of my choice (i.e. Chrome)


[Back to Table of Contents](https://github.com/PrezBala/ProjectTwo-Quiz#table-of-contents) 

<hr>

# Credits

## Code

+ Youtube - This platform has been incredibly useful and after watching countless videos i've learnt several different ways to code certain things i wouldnt have thought of before. The video here helped me create a modal for the rules pop-up [https://www.youtube.com/watch?v=MBaw_6cPmAw&t=146s] and especially Brian Designs channel [https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A/videos]
+ The Slack community. The help a student is able to receive from the other students is a really great tool to have.
+ My Mentor Andre Aquilina who has provided me several tips/advise which has helped me in figuring out bugs i encountered during testing phases.

## Images
All image content for the project i found via google images.

## Fonts
Just one font was used throughout the website, with varying weight for headings and body text.
[Fredoka One](https://fonts.google.com/specimen/Fredoka+One)

## Icons
The Media player icons on the game page were sourced from Font Awesome [https://fontawesome.com/]

## Text Content
All text content across the application was composed by myself.


[Back to Table of Contents](https://github.com/PrezBala/ProjectTwo-Quiz#table-of-contents) 