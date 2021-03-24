'use strict';

const quoteButton = document.getElementById('quote-button');

const quotes = [
    'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.<br><span>― Marilyn Monroe</span>',
    'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.<br><span>― Albert Einstein</span>',
    'If you can\'t explain it to a six year old, you don\'t understand it yourself.<br><span>― Albert Einstein</span>',
    'If you only read the books that everyone else is reading, you can only think what everyone else is thinking.<br><span>― Haruki Murakami</span>',
    'Sometimes the questions are complicated and the answers are simple.<br><span>― Dr. Seuss</span>',
    'Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.<br><span>― Mark Twain</span>',
    'When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.<br><span>― Paulo Coelho</span>',
    'We\'re all human, aren\'t we? Every human life is worth the same, and worth saving.<br><span>- J.K. Rowling</span>',
    'Being a woman is a terribly difficult trade since it consists principally of dealings with men.<br><span>― Joseph Conrad</span>'
]

function newQuote() {
    const randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote-text').innerHTML = quotes[randomNumber];
}

function hexColor() {
    const colorHex = `#${Math.floor(Math.random()*16777590).toString(16)}`;
    const siteBackground = document.querySelector('body');
    const quoteText = document.getElementById('quote-text');
    const socialIcon = document.getElementById('social-icon');
    const quoteMark = document.getElementById('quote-mark');
    siteBackground.setAttribute('style', `background-color: ${colorHex}`);
    quoteText.setAttribute('style', `color: ${colorHex}`);
    quoteButton.setAttribute('style', `background-color: ${colorHex}`);
    socialIcon.setAttribute('style', `color: ${colorHex}`);
    quoteMark.setAttribute('style', `color: ${colorHex}`);
}

quoteButton.addEventListener('click', newQuote);
quoteButton.addEventListener('click', hexColor);