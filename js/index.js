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
let headerNav = document.querySelectorAll ('nav a');
headerNav[0].innertext = 'Services';
headerNav[1].innertext = 'Product';
headerNav[2].innertext = 'Vision';
headerNav[3].innertext = 'Features';
headerNav[4].innertext = 'About';
headerNav[5].innertext = 'Contact';

document.querySelector('#logo-img').src = 'img/logo.png';

document.querySelector('cta-text h1').innerHTML = 'DOM<br> IS<br> AWESOME';
document.querySelector('.cta-text button').innertext = 'Get Started';

document.getElementById('cta-img').src = 'img/header-img.png';

let topContent = document.querySelectorAll('.top-content .text-content');
topContent[0].querySelector('h4').textContent = 'Features';
topContent[0].querySelector('p').textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topContent[1].querySelector('h4').textContent = 'About';
topContent[1].querySelector('p').textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

document.getElementById('middle-img').src = 'img/mid-page-accent.jpg';

let bottomContent = document.querySelectorAll('.bottom-content .text-content');
bottomContent[0].querySelector('h4').textcontent = 'Services';
bottomContent[0].querySelector('p').textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomContent[1].querySelector('h4').textContent = 'Product';
bottomContent[1].querySelector('p').textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomContent[2].querySelector('h4').textContent = 'Vision';
bottomContent[2].querySelector('p').textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let contact = document.querySelector('.contact');
contact.querySelector('h4').innerText = 'Contact';
contact.querySelector('p')[0].innerHTML = '123 Way 456 Street<br> Somewhere, USA';
contact.querySelector('p')[1].innerText = '1 (888) 888-8888';
contact.querySelector('p')[2].innerText = 'sales@greatidea.io';

document.querySelector('footer p').innerText = 'Copyright Great Idea! 2018';

headerNav.forEach(item => item.style.color = 'green');