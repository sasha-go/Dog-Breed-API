'use strict';

function getDogImage(dogBreed) {
    dogBreed = dogBreed.toLowerCase().trim();
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
        .then(response => response.json())
        .then(responseJson => {
            if (responseJson.status === 'success') {
                displayResults(responseJson);
            } else {
                return alert('Sorry, no spirit animal for you! Please try another dog breed.');
            }
        });
    }


function displayResults(responseJson) {
    console.log(responseJson);
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`)
    $('.results').removeClass('hidden');
}  

function watchForm() {
    $('form').submit(e => {
        e.preventDefault()
        let dogBreed = $('#dogBreedInput').val();
        getDogImage(dogBreed);
    }); 
}


$(function() {
    console.log('App loaded! Waiting for submit!')
    watchForm();
})