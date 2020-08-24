"use strict";

// Sound buttons
let basedSoundButton = document.getElementById( 'based-button' )
let helloBasedButton = document.getElementById( 'hello-based-button' )

// BASED
basedSoundButton.addEventListener( 'click', function() {
  let sound = new Audio( '../sounds/based.wav' )
  sound.play()
  sound.currentTime = 0
}, false )

// Hello? Based?
helloBasedButton.addEventListener( 'click', function() {
  let sound = new Audio( '../sounds/based-department.wav' )
  sound.play()
  sound.currentTime = 0
}, false )
