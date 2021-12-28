'use strict';

// DOM Selector

let headerArea = document.querySelector('header');

// Create Function

let dayNight = ()=>{
    let body = document.body;
    let github = document.querySelector('.fa-github');
    let nightMode = document.querySelectorAll('.nightMode');
    nightMode.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.className = 'fas fa-sun dayMode';
            item.textContent = ' Day';
            item.style.color = '#fff';
            github.style.color = '#fff';
            body.style.color = '#fff';
            body.style.background = '#000';
        })
    })

    let dayMode = document.querySelectorAll('.dayMode');
    dayMode.forEach((item)=>{
        item.addEventListener('click', ()=>{
            item.className = 'fas fa-moon nightMode';
            item.textContent = ' Night';
            item.style.color = '#000';
            github.style.color = '#000';
            body.style.color = '#000';
            body.style.background = '#fff';
        })
    })

    
}

// Event Listener
headerArea.addEventListener('click', dayNight);