let metaTag = document.createElement('meta')
metaTag.setAttribute('name', 'facebook-domain-verification')
metaTag.setAttribute('content', '4x11uvip5o0pp6izphxmmpqs2yspks')
document.getElementsByTagName('head')[0].appendChild(metaTag)

$(document).ready(function(){
    $('.js-search-input').attr('placeholder', '¿Qué estás buscando?');
});
currentTitle =  document.title
var intervall = null;
var fireEmoji = String.fromCodePoint(0x1F525);
let intervalTitle = ()=>{
interval = window.setInterval(()=>{

document.title='No te vayas!'

window.setTimeout(()=>{
document.title = currentTitle
}, 200)

}, 700)
}
let clearIntervalTitle = () =>{
clearInterval(interval)
}
document.addEventListener('visibilitychange', ()=>{
if(!(document.visibilityState === 'visible')){
intervalTitle();
}else{
clearIntervalTitle()
}
})

let currentUrl = window.location.href
//-------INSERT CACE IMAGE-------//
let containerCaceImg = document.createElement('div')
containerCaceImg.className += 'footer-logo'
let ancleCace = document.createElement('a')
ancleCace.href= 'https://www.cace.org.ar/'
ancleCace.target = '_blank'
let imgCace = document.createElement('img')
imgCace.src = '//d2r9epyceweg5n.cloudfront.net/stores/001/702/414/rte/CACE originales.png'

ancleCace.appendChild(imgCace)
containerCaceImg.appendChild(ancleCace)
if(!currentUrl.includes('checkout')){
let containerLogos = document.querySelector('footer .footer-legal .row .pt-4')
containerLogos.insertAdjacentElement('afterbegin', containerCaceImg)
containerLogos.style.display='flex'
containerLogos.style.justifyContent='space-evenly'
}

//-------INSERT CYBER BANNER-------//
const insertCyberBanner = ()=> {
let divTag = document.createElement('div')
divTag.className +='banner__collections cyber-banner'
document.querySelector('.page-header .col-md-12 h1').remove()
document.querySelector('.page-header .col-md-12').appendChild(divTag)
}
if(currentUrl ==='https://www.virulana.com.ar/black-friday/' || currentUrl ==='https://virulana.com.ar/black-friday/'){
insertCyberBanner();
document.querySelector('.page-header').className += ' container__cyber'
document.querySelector('.category-body').className += ' products__cyber'
}

//-------INSERT SHIPPING TEXT-------//
let shippingContainer = document.querySelector('#product-shipping-container')
let shippingContainerWidget = document.querySelector('#cart-shipping-container')

let textInjection = (textToInject) => {
let pTag = document.createElement('p')
pTag.className += ' shipping-modified'
pTag.innerText = textToInject
return pTag
}
if(shippingContainer){
shippingContainer.appendChild(textInjection('Tiempo de envíos especial Black Friday:'))
shippingContainer.appendChild(textInjection('CABA y GBA: 5 días hábiles'))
shippingContainer.appendChild(textInjection('Todo el país: 10 días hábiles'))
}
if(shippingContainerWidget){
let container = document.createElement('div')
container.appendChild(textInjection('Tiempo de envíos especial Black Friday:'))
container.appendChild(textInjection('CABA y GBA: 5 días hábiles'))
container.appendChild(textInjection('Todo el país: 10 días hábiles'))
shippingContainerWidget.appendChild(container)
}
setTimeout(()=>{
let shippingTextCheckout = document.querySelectorAll('.shipping-options-container .shipping-method-item-desc')
let shippingContainerCheckout = document.querySelector('.panel-with-header.m-bottom-half')
if(shippingContainerCheckout){
let arrText = [...shippingTextCheckout]
arrText.map(elm => elm.style.display = 'none')

shippingContainerCheckout.insertAdjacentElement('afterend', textInjection('Todo el país: 10 días hábiles'))
shippingContainerCheckout.insertAdjacentElement('afterend', textInjection('CABA y GBA: 5 días hábiles'))
shippingContainerCheckout.insertAdjacentElement('afterend', textInjection('Tiempo de envíos especial Black Friday:'))

}
}
, 1000)



//--------BANNER CONFIG------//
const bannerMobile = ()=>{
let imgs=document.getElementsByClassName('js-slider-img')
let imgsArr=[...imgs]
let imgs1 = imgsArr.find(imgs => imgs.alt === "Imagen del carrusel 1")
/*let imgs2 = imgsArr.filter(imgs => imgs.alt === "Imagen del carrusel 2")*/
imgs1.src = "//d2r9epyceweg5n.cloudfront.net/stores/001/702/414/rte/Virulana_BMobile_17-12.jpg"
imgs1.srcset = "//d2r9epyceweg5n.cloudfront.net/stores/001/702/414/rte/Virulana_BMobile_17-12.jpg"


/*
imgs2[0].src = "//d2r9epyceweg5n.cloudfront.net/stores/001/702/414/rte/Virulana_BMobile_17-12.jpg"
imgs2[0].srcset = "//d2r9epyceweg5n.cloudfront.net/stores/001/702/414/rte/Virulana_BMobile_17-12.jpg" 
window.setTimeout(()=>{
for(let i =0; i < imgs2.length ; i++){
imgs2[i].src = "//d2r9epyceweg5n.cloudfront.net/stores/001/702/414/rte/Virulana_BMobile_17-12.jpg"
imgs2[i].srcset = "//d2r9epyceweg5n.cloudfront.net/stores/001/702/414/rte/Virulana_BMobile_17-12.jpg"
imgs2[i].currentSrc = "//d2r9epyceweg5n.cloudfront.net/stores/001/702/414/rte/Virulana_BMobile_17-12.jpg"
}
let swipperBullet = document.querySelectorAll('.swiper-pagination-bullet')

let arrBullet = [...swipperBullet]

arrBullet.map(elm => elm.addEventListener('touchend', (e)=>{bannerMobile()}))
},400)*/
}
/*----------------COOKIES ANNOUNCE-----------------*/
if( currentUrl == 'https://www.virulana.com.ar/' || currentUrl == 'https://virulana.com.ar/'){
/*
let containerDiv= document.createElement('div')
containerDiv.className += 'container--cookies'
let containerAnnounce = document.createElement('div')
containerAnnounce.className += 'container--announce'
let textAnnounce = document.createElement('p')
let buttonAnnounce = document.createElement('button')
buttonAnnounce.innerText='Aceptar todos los cookies'
buttonAnnounce.setAttribute('id', 'btn__cookies')
buttonAnnounce.setAttribute('type', 'button')
textAnnounce.innerText='Este sitio web utiliza cookies para mejorar la experiencia del usuario y para analizar el comportamiento y el tráfico de nuestro sitio web. Nosotros también compartimos información sobre el uso de nuestro sitio en nuestras páginas sociales, publicidad y analíticos. Para más información sobre nuestra declaración de privacidad de cookies, '
let ancleAnnounce = document.createElement('a')
ancleAnnounce.innerText = 'hacer clic aquí'
ancleAnnounce.href='https://privacy.newellbrands.com/cookie_es.html'
ancleAnnounce.target='_blank'
textAnnounce.appendChild(ancleAnnounce)
containerAnnounce.appendChild(textAnnounce)
containerAnnounce.appendChild(buttonAnnounce)
containerDiv.appendChild(containerAnnounce)
document.getElementsByTagName('body')[0].appendChild(containerDiv)
document.getElementById('btn__cookies').addEventListener('click', () => {containerDiv.remove()})
*/
let cookiesText = document.querySelector('.js-notification-cookie-banner .mb-4')
cookiesText.innerHTML = 'Este sitio web almacena datos, tales como <strong>cookies</strong>, para garantizar el funcionamiento básico del sitio, así como marketing, personalización y análisis, <a href="https://privacy.newellbrands.com/cookie_es.html" class="link-politics" target="_blank">Políticas de cookies</a>'

/*------------------LABEL INCLUDES------------------------*/
/*
let productsContainer = document.querySelectorAll('.js-product-container')
let divLabelsContainer = document.createElement('div')
divLabelsContainer.className += 'js-labels-group labels'
let divLabel = document.createElement('div')
divLabel.className += ' js-offer-label label label-accent'
divLabel.innerText = 'Envío gratis'
divLabelsContainer.appendChild(divLabel)
for(let i = 0; i<productsContainer.length; i++){
if(productsContainer[i].innerText.includes('Rotomop + Repuesto')){
let elm = productsContainer[i].querySelector('.item-image>div')
elm.insertAdjacentElement('beforeend', divLabelsContainer)
}
}
*/
/*-----------------VALIDACIÓN MOBILE BANNER-------------------*/
mobile = window.matchMedia("(max-width: 768px)").matches
if(mobile){
bannerMobile()
let swipper=document.querySelector('.swiper-wrapper')
swipper.addEventListener('touchend',(e)=>{bannerMobile()}, false)
}
}
/*-----------SUBMENU CONFIG------------*/
document.querySelector('header .desktop-list-subitems ul').style.display = 'none'
let mobileUlContainer = document.querySelector('#nav-hamburger .js-pages-accordion')
mobileUlContainer.querySelectorAll('ul .nav-item')[1].style.display = 'none'

//ul .item-with-subitems .js-pages-accordion .nav-item')[1]

/*--------FOOTER CONFIG------*/
$(".footer-legal div.d-md-inline-block.mr-md-2:contains('Copyright Virulana')").html("Copyright Newell Co. " + (new Date).getFullYear() + " - Todos los derechos reservados.");

let newElement = document.createElement('div')
let newTitle = document.createElement('h4')
newTitle.classList.add('h3')
let newText = document.createTextNode('Envíos a todo el país')
newTitle.appendChild(newText)
newElement.appendChild(newTitle)
let containerAdjacent = document.getElementsByClassName('footer-payments-shipping-logos')
containerAdjacent[0].appendChild(newElement)

let footerContainer = document.querySelector('footer')
footerContainer.querySelector('.contact-info').style.display = 'none'
footerContainer.querySelectorAll('h4')[4].style.display ='none'

/*-------------------URL's----------------------*/
let loginUrl = "https://www.virulana.com.ar/account/login/"
let loginUrl2 = "https://virulana.com.ar/account/login/"
let signupUrl ="https://www.virulana.com.ar/account/register/"
let signupUrl2 ="https://virulana.com.ar/account/register/"

/*-------------------CHECKBOX MAILING----------------------*/
let containerCheckbox = document.createElement('div')
containerCheckbox.className+= 'form-group mt-2 d-flex'
let checkboxElem = document.createElement('input')
checkboxElem.setAttribute('name', 'extra[mailing]')
checkboxElem.setAttribute('type', 'checkbox')
checkboxElem.setAttribute('class', 'checkmailing')
let labelCheck = document.createElement('label')
labelCheck.setAttribute('for', 'extra[mailing]')
labelCheck.innerText ='Deseo recibir correos electrónicos de marketing y/o promocionales de Virulana'
containerCheckbox.appendChild(checkboxElem)
containerCheckbox.appendChild(labelCheck)
let linkTag= document.createElement('link')
linkTag.setAttribute('rel','stylesheet')
linkTag.setAttribute('type','text/css')
linkTag.setAttribute('href','https://optin.myperfit.com/res/css/virulana/leAAF5oM.css')
document.getElementsByTagName('head')[0].appendChild(linkTag)

/*-----------------TEXTO EN NEWSLETTER------------------*/
let politicsContainer = document.createElement('div')
let politicsTextTag = document.createElement('p')
let anclePolitics = document.createElement('a')
let ancleText = document.createTextNode("Declaración de Privacidad")
anclePolitics.appendChild(ancleText)
anclePolitics.href ="https://privacy.newellbrands.com/index_es.html"
anclePolitics.target="_blank"
anclePolitics.classList.add('link-politics')
politicsText1= document.createTextNode("Al enviarme, confirmo que he leído y acepto su ")
politicsText2= document.createTextNode(" y me gustaría recibir correos electrónicos de marketing y / o promocionales de Virulana")
politicsTextTag.appendChild(politicsText1)
politicsTextTag.appendChild(anclePolitics)
politicsTextTag.appendChild(politicsText2)
politicsContainer.classList.add('my-3')
politicsTextTag.classList.add('text-politics')
politicsContainer.appendChild(politicsTextTag)
let newsLetterContainer = document.querySelector('footer .js-newsletter')
newsLetterContainer.appendChild(politicsContainer)

/*-----------------TEXTO EN FORMS------------------*/
let anclePoliticsCloned = anclePolitics.cloneNode(true)
let politicsContainerForms = document.createElement('div')
let politicsTextTagForms = document.createElement('p')
let anclePolitics2 = document.createElement('a')
let ancleText2= document.createTextNode("Términos y Condiciones")
anclePolitics2.appendChild(ancleText2)
anclePolitics2.href ="https://www.virulana.com.ar/informacion-legal/"
anclePolitics2.target="_blank"
anclePolitics2.classList.add('link-politics')
let politicsText4= document.createTextNode("Al enviarme, confirmo que he leído y acepto sus ")
let politicsText5= document.createTextNode(" y la ")
politicsTextTagForms.appendChild(politicsText4)
politicsTextTagForms.appendChild(anclePolitics2)
politicsTextTagForms.appendChild(politicsText5)
politicsTextTagForms.appendChild(anclePoliticsCloned)
politicsContainerForms.appendChild(politicsTextTagForms)
politicsContainerForms.classList.add('my-3')
politicsTextTagForms.classList.add('text-politics')

let adjacentInCart= document.querySelector('#modal-cart .js-cart-total-container')
let checkboxContainerCloned = containerCheckbox.cloneNode(true)
adjacentInCart.insertAdjacentElement('afterend', checkboxContainerCloned)
adjacentInCart.insertAdjacentElement('afterend', politicsContainerForms)
document.getElementById('modal-cart').insertAdjacentHTML('beforeend','<div id="optin-leAAF5oM" data-type="inline"></div>')

/*-----------------VALIDACIÓN SIGNUP-LOGIN------------------*/
if(window.location.href == signupUrl || window.location.href == signupUrl2){
let scriptTag = document.createElement('script')
scriptTag.setAttribute('type', 'text/javascript')
scriptTag.setAttribute('src', 'https://optin.myperfit.com/res/js/virulana/XHaqiPQV.js')
document.querySelector('body').appendChild(scriptTag)
let politicsContainerFormsCloned = politicsContainerForms.cloneNode(true)
document.querySelector('.g-recaptcha').insertAdjacentElement('beforebegin',politicsContainerFormsCloned)
let selectedElm = document.querySelector('#login-form')
selectedElm.insertAdjacentHTML('afterend','<div id="optin-XHaqiPQV" data-type="inline"></div>')
selectedElm.insertAdjacentElement('afterend',containerCheckbox)
} else if(window.location.href == loginUrl || window.location.href == loginUrl2 ) {
let scriptTag = document.createElement('script')
scriptTag.setAttribute('type', 'text/javascript')
scriptTag.setAttribute('src', 'https://optin.myperfit.com/res/js/virulana/XHaqiPQV.js')
document.querySelector('body').appendChild(scriptTag)
let politicsContainerFormsCloned = politicsContainerForms.cloneNode(true)
let loginForm = document.getElementById('login-form')
containerCheckbox.classList.add('my-3')
loginForm.appendChild(containerCheckbox)
loginForm.appendChild(politicsContainerFormsCloned)
loginForm.insertAdjacentHTML('afterend','<div id="optin-XHaqiPQV" data-type="inline"></div>')
}

/*-------------------DETECT IPHONE----------------------*/
let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

let screenWidth = window.matchMedia("(max-width:768px)").matches
if(isIOS && screenWidth){
let cartHover = document.querySelector('.cart-summary-detail')
let buttons = cartHover.querySelectorAll('.col-6')
cartHover.style.width = '90vw'
for(let i = 0; i < buttons.length; i++){
buttons[i].classList.remove("col-6")
buttons[i].classList.add("col-12")
}
}

/*<script type="text/javascript" src="https://optin.myperfit.com/res/js/virulana/leAAF5oM.js"></script>*/

/*------------TOGGLE DISPLAY LOGIN/SIGNUP FORM------*/
let checkArr = document.getElementsByClassName('checkmailing')
let arr = [...checkArr]
let loginUrl = "https://www.virulana.com.ar/account/login/"
let loginUrl2 = "https://virulana.com.ar/account/login/"
let signupUrl ="https://www.virulana.com.ar/account/register/"
let signupUrl2 ="https://virulana.com.ar/account/register/"

if((window.location.href === loginUrl || window.location.href === signupUrl)||(window.location.href === loginUrl2 || window.location.href === signupUrl2)){
const toggleDisplay = () => {
document.getElementById('optin-leAAF5oM').classList.toggle('d-block')
}
const toggleDisplay2 = () => {
document.getElementById('optin-XHaqiPQV').classList.toggle('d-block')
}
arr[0].addEventListener('change', toggleDisplay)
arr[1].addEventListener('change', toggleDisplay2)
} else {

const toggleDisplay = () => {
document.getElementById('optin-leAAF5oM').classList.toggle('d-block')
}
arr[0].addEventListener('change', toggleDisplay)
}

let currentlyUrl = window.location.href

/*---------------WITHOUT OUTSTOCK LABEL-----------------*/
let regexUrl = /https:\/{2}w{3}\.virulana\.com\.ar\/[\w\-?\/?]+/
let regexInProductUrl = /https:\/{2}w{3}\.virulana\.com\.ar\/productos\/[\w\-?\/?]+/
const hideLabel = () => {
let labelsOutStock = document.querySelectorAll('.js-product-container>.item-image>.p-relative .labels')
for(let i = 0; i < labelsOutStock.length ; i++){
if(labelsOutStock[i].innerText === "SIN STOCK"){
labelsOutStock[i].style.display = "none"
}
}
}
const hideLabelInProduct = () => {
let outStockInProduct = document.querySelector('.js-product-container .label')
if(outStockInProduct.innerHTML === "Sin stock"){
outStockInProduct.style.display = "none"
}
}

const changeNameWhitoutStock = () => {
let submitBtn = document.getElementsByClassName('js-addtocart')[0]
if(submitBtn.defaultValue === 'Consultar precio'){
submitBtn.defaultValue= 'Consultá donde adquirir'
submitBtn.style.fontSize='14px'
submitBtn.style.padding= '15px 15px'
}
}

if((regexUrl.test(currentlyUrl) && currentlyUrl !== 'https://www.virulana.com.ar/informacion-legal/' && currentlyUrl !== 'https://www.virulana.com.ar/account/login/') || currentlyUrl === 'https://www.virulana.com.ar/'){
hideLabel()
window.addEventListener('scroll', (e) => {hideLabel()})
if(regexInProductUrl.test(currentlyUrl)){
hideLabelInProduct()
changeNameWhitoutStock()
}
}

/*
let divLabelsContainer = document.createElement('div')
divLabelsContainer.className += 'js-labels-group labels'
let divLabel = document.createElement('div')
divLabel.className += ' js-offer-label label label-accent'
divLabel.innerText = 'Envío gratis'
divLabelsContainer.appendChild(divLabel)

if(currentlyUrl.includes('productos/')){*/
/*------------------LABEL INCLUDES------------------------*/
/*
let productsContainer = document.querySelectorAll('.js-product-container')
for(let i = 0; i<productsContainer.length; i++){

if(productsContainer[i].innerText.includes('Rotomop + Repuesto')){
let elm = productsContainer[i].querySelector('.item-image>div')
elm.insertAdjacentElement('beforeend',divLabelsContainer)
} else if (productsContainer[i].innerText.includes('ROTOMOP + REPUESTO')) {
let elm = productsContainer[i].querySelector('.js-swiper-product')
elm.insertAdjacentElement('afterbegin',divLabelsContainer)
}

}*/
/*------------------'Hasta' INCLUDES------------------------*/
/*
document.getElementsByClassName('installment-amount')[0].insertAdjacentHTML('afterbegin','Hasta ')
}
*/

if(currentlyUrl ==='https://www.virulana.com.ar/mopas-y-mopy-sets/'){
let boxUniqueProduct = document.querySelector('[data-product-id = "90801074"] .js-item-name')
boxUniqueProduct.style.webkitLineClamp ='initial'
}

/* <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M7H9LD7');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7H9LD7"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) --> */

window.__lo_site_id = 317861;

(function() {
var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
wa.src = 'https://d10lpsik1i8c69.cloudfront.net/w.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
 })();

(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "9gf6syah47");

/* COMO USAR TU ROTOMOP PAGE */

if (window.location.href === 'https://www.virulana.com.ar/como-usar-tu-rotomop/') {
     const userContent = document.querySelector('.user-content');
     const rotomopContainer = userContent.querySelector('.container');
     rotomopContainer.classList.add('rotomop-video-container')
}

