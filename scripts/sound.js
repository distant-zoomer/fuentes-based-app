"use strict";

// Sound buttons
let basedSoundButton = document.getElementById( 'based-button' )
let helloBasedButton = document.getElementById( 'hello-based-button' )
let basedAndRedpilledButton = document.getElementById( 'based-and-redpilled-button' )

// BASED
basedSoundButton.addEventListener( 'click', function() {
  // let sound = new Audio( '../sounds/based.wav' )

  // Necessary for github pages to work
  let sound = new Audio( 'https://raw.githubusercontent.com/distant-zoomer/fuentes-based-app/master/sounds/based.wav' )
  sound.play()
  sound.currentTime = 0
}, false )

// Hello? Based?
helloBasedButton.addEventListener( 'click', function() {
  // let sound = new Audio( '../sounds/based-department.wav' )
  
  // Necessary for github pages to work
  let sound = new Audio( 'https://raw.githubusercontent.com/distant-zoomer/fuentes-based-app/master/sounds/based-department.wav' )
  sound.play()
  sound.currentTime = 0
}, false )

// Based and Redpilled
basedAndRedpilledButton.addEventListener( 'click', function() {
  // let sound = new Audio( '../sounds/based-and-redpilled.wav' )
  
  // Necessary for github pages to work
  let sound = new Audio( 'https://raw.githubusercontent.com/distant-zoomer/fuentes-based-app/master/sounds/based-and-redpilled.wav' )
  sound.play()
  sound.currentTime = 0
}, false )