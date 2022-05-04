'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


// steps
//1.User stories are a desciption of the applications fumctionality from the users perspective
//common format
//As a [type of user], I want[an action] so that[a benefit]

//As a user,i want to log my running workout with location,distance ,pace and steps/ minute, sio i can keep a log of my all my running.