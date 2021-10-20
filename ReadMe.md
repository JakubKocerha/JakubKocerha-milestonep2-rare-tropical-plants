# Rare Tropical Plants
 
## User Experience (UX)
### User Stories
#### First time visitor Goals
1. As a first-time visitor, I want to easily understand the main purpose of the site and learn more about how to take care of specific plants.
2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
3. As a first-time visitor, I want to know more details about the plant I purchased. As an inexperienced in tropical plants, I want to know how to provide good quality daily care of my plants. I also want to have contact with the provider of the site via social links or email. Eventually, I want to have the possibility to obtain information on where to buy presented plants.

#### Returning Visitor Goals
1. As a returning visitor, I want to follow the gallery and get a link with auctions to buy a new plant. 
2. I want to have an access to the content related to such plants. 

#### Frequent User Goals
1. As a frequent user, I want to have easy access to up-to-date and correct information and new auctions I can find in the link at the bottom of the page or the upper part of the home page. 

### Design
#### Color scheme
- The main colors used based on the site's designer decision:
    * rgba(201, 141, 81)
    * rgba(90, 64, 38);
    * rgb(255, 255, 255)
    * rgba(0, 0, 0)
    * rgb(244, 232, 220)
    * rgba(161, 109, 56)
    * rgb(250, 228, 203)
    * rgba(255, 0, 0, 1)
    * rgba(68, 167, 65)
    * rgba(206, 152, 98)
    * #c98d51;

#### Typography
- Font for the main heading _MonteCarlo_. Font for the rest of the site textual content was chosen _Oswald_.
- As a fallback font in case the other main fonts don't work was chosen _Sans Serif_.

#### Imagery
- Images play a significant role to the user, especially in the gallery with higher quality and details of the featured content images.

## Features

### Existing Features
    - __Navigation Bar__
    




?

- __The landing page__
    - Due to the primary purpose of the site, providing helpful information to house plant growers, the landing page offers the list of featured plants and their basic information directly to make the purpose of the site clear.
    - Every item of the list is interactive, reacts to the mouse's position over the element, offering a button. When the user clicks the button element, the item container shows the details, information about plant care, and a map showing the original habitat. It reacts on mouse leave that closes detailed container to the default state of the item in the list. 
    - The hero image uses CSS animation styles to shrink when the page is loading. 
    - As a template for the listed plants, Bootstrap Media heading is used.

    -fill correct link-
    ![Nav bar](https://github.com/JakubKocerha/milestonep1-my-arctic-life/blob/master/readme-media/navbar.jpg)


- __Footer__
    - The footer is designed simply with three Icons linked to social media and plant auctions of the site provider.


    -fill correct link-
    ![Footer](https://github.com/JakubKocerha/milestonep1-my-arctic-life/blob/master/readme-media/footer.jpg)

- __The Contact page__
    - The contact form offers direct contact with the site provider via a form. Therefore the user has a chance to ask additional questions related to the content. 
    - The form uses "emailjs" API and sends email according to the parameters set in emailjs account.
    - The form alerts the user about the success or failure of the sent email.

    ![Back to top button](https://github.com/JakubKocerha/milestonep1-my-arctic-life/blob/master/readme-media/why-arctic.jpg)


- __The Gallery page__
    - Gallery provides a detailed view of the rare plants and their natural beauty. When a user clicks on the photo icon, the image fills the whole width of the container below it.


### Features To Implement
    * More multimedia content(photos, videos).
    * More listed items(plants).
    * E-shop - allowing visitors to buy a plant right on the web site. 

## Main technologies used
* HTML5
* CSS3
* JavaScript
* [JQuery API](https://api.jquery.com/)
* [EmailJS API](https://www.emailjs.com/)
* [Google Maps API](https://developers.google.com/maps)
* [Bootstrap 4.2.1](https://getbootstrap.com/docs/4.2/getting-started/introduction/)
* [Github](https://github.com/)
* [Gitpod](https://www.gitpod.io/)
* [Pixlr](https://pixlr.com/)
* [Balsamiq](https://balsamiq.com/)
* [Font Awsome](https://fontawesome.com/)


## Testing

### Visual testing
* Google Devtools and its Toggle device toolbar with (responsive rule, grid blocks and given default mobile devices).
* Github deployed [Rare Tropical Plants](https://jakubkocerha.github.io/JakubKocerha-milestonep2-rare-tropical-plants/) on smartphone Samsung Galaxy Xcover Pro, laptop HP ProBook x360 11 G3 EE, and Dell screen res. 1920 x 1080px.
* Browsers used for testing - Google Chrome, Microsoft Edge.

### Contact form testing
* Testing by sending form/receiving email. 

### Validator testing
- HTML [W3C validator](https://validator.w3.org/) using URI of the site deployed to Github.
    1. [index.html W3C validator](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fjakubkocerha.github.io%2FJakubKocerha-milestonep2-rare-tropical-plants%2Findex.html)
        * No errors were returned.
    2. [contact.html W3C validator](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fjakubkocerha.github.io%2FJakubKocerha-milestonep2-rare-tropical-plants%2Fcontact.html)
        * No errors were returned.
        * Syntax warning about the used code. The used code is from CI tutorials and emailjs API samples. The code left unchanged as it works without any issue.
    3. [gallery.html W3C validator](https://jakubkocerha.github.io/JakubKocerha-milestonep2-rare-tropical-plants/gallery.html)
        * Error: Element img is missing required attribute src. Missing attribute due to expansion of the original picture. Alt assigned in the original img before expansion. alt="Expanded image" added. 
    
- CSS [W3C validator](https://jigsaw.w3.org/css-validator/)
    - Validation of the site URI deployed on Github [Rare Tropical Plants](https://     jakubkocerha.github.io/JakubKocerha-milestonep2-rare-tropical-plants/)
    * No errors were returned.
    * Warnings related to esternal libraries.

- JSHint [JSHint validator](https://jshint.com/)
    - Validation of JS files
        * [script.js](https://github.com/JakubKocerha/JakubKocerha-milestonep2-rare-tropical-plants/blob/main/assets/js/script.js)
            - No major issues found
        * [maps.js](https://github.com/JakubKocerha/JakubKocerha-milestonep2-rare-tropical-plants/blob/main/assets/js/maps.js)
            - No major issues found 
        * [contact.js](https://github.com/JakubKocerha/JakubKocerha-milestonep2-rare-tropical-plants/blob/main/assets/js/contact.js)
            - No major issues found
        * [gallery.js](https://github.com/JakubKocerha/JakubKocerha-milestonep2-rare-tropical-plants/blob/main/assets/js/gallery.js)
            - No major issues found
        
### Testing User Stories from User Experience (UX) Section


#### First Time visitor Goals
- As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the plants of the presented person.
    * The user's main interest is to find accurate information about plants and how to take care of them. The landing page is easy and understandable. Onmouse/onclick interactive events provide easier and meaningful access to all the content of the page. 
    * The site provides not only information about the plants. User has a chance to click on the link giving a possibility to buy items similar to those presented on the site from serious and reputable seller(s). 
- As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
    * The easy navigation menu helps users to find information they need. Devices with a lower resolutions are provided with a sticky menu at the top of the page. So it is easy to get to another section of the site.
    * If the user finds information on the site insufficient, the contact form, social links, and the link to the auctions are provided. 

    
#### Returning Visitor Goals
- As a returning visitor, I want to have an access to informations about plant care when I need it.
- As a returning visitor, I want to be able to follow new auctions linked to the site. 
    * The page owner is supposed to maintain the user's attention throughout the regular addition and updates of the site's content and/or related social media.
    * As a returning user, I want fast and correct communication over plant care, auctions, shipping, etc. .

#### Frequent User Goals
- As a Frequent User, I want to check any newly added plants and auctions.
    * Majority of the auctions will be linked to the site URL.

### Google Developer Tools Lighthouse
Report from [PageSpeedInsight](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fjakubkocerha.github.io%2FJakubKocerha-milestonep2-rare-tropical-plants%2F).

### Responsive Design:
* Bootstrap grid applied in HTML markup
    * Extra small
    * Small
    * Medium
    * Large

* 2 media queries 
    * focused on smaller devices adjustments 

### Wireframes
- Links to wireframes below show the basic structure of each page on a mobile devices, tablet, and laptop.








1. [Wireframe Home](https://github.com/JakubKocerha/milestonep1-my-arctic-life/blob/master/readme-media/page1-project1mainhome.png)
2. [Wireframe Why Arctic?](https://github.com/JakubKocerha/milestonep1-my-arctic-life/blob/master/readme-media/page2-projec1twhyarctic.png)
3. [Wireframe Life](https://github.com/JakubKocerha/milestonep1-my-arctic-life/blob/master/readme-media/page3-project1life.png)
4. [Wireframe Join-me](https://github.com/JakubKocerha/milestonep1-my-arctic-life/blob/master/readme-media/page4-project1joinme.png)

### Bugs and Debugging
#### Bugs
A commonly known bug with very low resolution, ca <200px, causes the float of the content to the left and creates a gap on the right side of the screen.
Warning generated by validator while testing HTML code about structural heading outline were intended.
The .sticky-top utility uses CSS’s position: sticky, which isn’t fully supported in all browsers.

## Deployment
### GitHub Pages
- The site was deployed to GitHub pages. The steps to deploy are as follows:
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/JakubKocerha/JakubKocerha-milestonep2-rare-tropical-plants)
2. At the top of the Repository (not top of page), navigate to the _Settings_ button.
3. Scroll down the Settings page until you locate the _GitHub Pages_ Section.
4. Under _Source_, click the dropdown called _None_ and select _Master Branch_ and press _Save_. 
5. Once the _Master branch_ has been selected, the page will be automatically refreshed with a detailed ribbon including a link to the site to indicate the successful deployment. 

- The live link can be found here - https://jakubkocerha.github.io/JakubKocerha-milestonep2-rare-tropical-plants/
- The link to the repository can be found here - https://github.com/JakubKocerha/JakubKocerha-milestonep2-rare-tropical-plants

### Forking the GitHub Repository
- By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...
1. Log in to GitHub and locate the [GitHub Repository](https://github.com/JakubKocerha/JakubKocerha-milestonep2-rare-tropical-plants)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/JakubKocerha/JakubKocerha-milestonep2-rare-tropical-plants)
2. Above the list of files, click "Code".
3. To clone the repository using HTTPS, navigate to "HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits
### Content
#### Fonts
- [Google Fonts](https://fonts.google.com/)
    * Font for the main heading _MonteCarlo_.
    * Font for the rest of the site _Oswald_.
    * The fallback font _Sans Serif_.
#### Codes adopted from other sources:
[Bootstrap](https://getbootstrap.com/docs/4.2/getting-started/introduction/)
- Grid system
- Nav links
- Media object
- Form
-`<Meta>` elements
- Meta and stylesheets copied from [Code Institute tutorial](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+HE101+2020/courseware/fcc67a894619420399970ae84fc4802f/59591be08b13436ebe782f57967be07a/).
[w3schools](https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp)
- Gallery
[jQuery doc](https://jquery.com/)
- Home page, Plants sorting
[emailjs.com](https://www.emailjs.com/)
- Email form
[stackoverflow.com](https://stackoverflow.com/)
- location.reload()

### Media
#### Textual content
1. Other textual content - Jakub Kocerha.
2. Readme.md - some content for writting readme.md file was taken from [Code Institute README.md samples](https://github.com/Code-Institute-Solutions/SampleREADME) and [Code Institute readme-tepmlate](https://github.com/Code-Institute-Solutions/readme-template).

#### External links
#### 'win free shipping'
- [tradera.se](https://www.tradera.com/en/profile/feedback/5186836/sunnygreenforest)

#### Social links
- [tradera.se](https://www.tradera.com/en/profile/feedback/5186836/sunnygreenforest)
- [Facebook](https://www.facebook.com/)
- [Instagram](https://www.instagram.com/)

#### Images
- All used photos were taken by Jakub Kocerha.
