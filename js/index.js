const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//--------------------------------------------------------------
const header = document.querySelector('nav');
const navBar = header.querySelectorAll('a');
navBar[0].textContent = siteContent['nav']['nav-item-1']
navBar[1].textContent = siteContent['nav']['nav-item-2']
navBar[2].textContent = siteContent['nav']['nav-item-3']
navBar[3].textContent = siteContent['nav']['nav-item-4']
navBar[4].textContent = siteContent['nav']['nav-item-5']
navBar[5].textContent = siteContent['nav']['nav-item-6'];

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src',siteContent['cta']['img-src']);

let cta = siteContent['cta']['h1'].split('');
const title = document.getElementsByTagName('h1')[0];
title.innerHTML = cta.join('<br>');

const midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

const getStarted = document.getElementsByTagName('button')[0];
getStarted.innerText = siteContent['cta']['button'];

const mainContent = document.querySelector('.main-content');
const mainSection = mainContent.querySelectorAll('h4');
const mainText = mainContent.querySelectorAll('p');
mainSection[0].textContent = siteContent['main-content']['features-h4'];
mainText[0].textContent = siteContent['main-content']['features-content'];
mainSection[1].textContent = siteContent['main-content']['about-h4'];
mainText[1].textContent = siteContent['main-content']['about-content'];
mainSection[2].textContent = siteContent['main-content']['services-h4'];
mainText[2].textContent = siteContent['main-content']['services-content'];
mainSection[3].textContent = siteContent['main-content']['product-h4'];
mainText[3].textContent = siteContent['main-content']['product-content'];
mainSection[4].textContent = siteContent['main-content']['vision-h4'];
mainText[4].textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('.contact');
const contactTitle = contact.querySelector('h4');
let contactText = contact.querySelectorAll('p');
contactTitle.textContent = siteContent['contact']['contact-h4'];
contactText[0].textContent = siteContent['contact']['address'];
contactText[1].textContent = siteContent ['contact']['phone'];
contactText[2].textContent = siteContent ['contact']['email'];

const footer = document.querySelector('footer');
const year = footer.querySelector('p');
year.textContent = siteContent['footer']['copyright'];

navBar.forEach(item => {item.style.color = 'green'});

const appendage = navBar[0].cloneNode(true);
appendage.textContent = 'Careers';
header.appendChild(appendage);

const meetUs = navBar[0].cloneNode(true);
meetUs.textContent = 'Meet The Team';
header.prepend(meetUs);