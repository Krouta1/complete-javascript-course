'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const lang =
    data.languages[`${data.cca3.toLowerCase()}`] === undefined
      ? data.languages[`${data.cioc.toLowerCase()}`]
      : data.languages[`${data.cca3.toLowerCase()}`];
  console.log(data.currencies);
  const html = `
            <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫${(
                  +data.population / 1000000
                ).toFixed(1)}</span> people</p>
                <p class="country__row"><span>🗣️${lang}</span></p>
                <p class="country__row"><span>💰${
                  data.currencies['EUR'].name
                }</span></p>
            </div>
            </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///Lesson 249: XMLHttpRequest
// const getCountryData = (country) => {
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load',function(){
//         const [data] = JSON.parse(this.responseText)
//         const lang = data.languages[`${data.cca3.toLowerCase()}`] === undefined ? data.languages[`${data.cioc.toLowerCase()}`] : data.languages[`${data.cca3.toLowerCase()}`]
//         console.log(data.currencies)
//         const html= `
//             <article class="country">
//             <img class="country__img" src="${data.flags.png}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name.common}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫${(+data.population/1000000).toFixed(1)}</span> people</p>
//                 <p class="country__row"><span>🗣️${lang}</span></p>
//                 <p class="country__row"><span>💰${data.currencies['EUR'].name}</span></p>
//             </div>
//             </article>
//         `
//         countriesContainer.insertAdjacentHTML('beforeend',html)
//         countriesContainer.style.opacity = 1
//     })
// }

// getCountryData('germany')
// getCountryData('portugal')

//Lesson 252: Promises and the Fetch API

// const request = fetch('https://restcountries.com/v3.1/name/germany');

// console.log(request);

//Lesson 253: Consuming Promises

const getCountryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          renderCountry(data[0], 'neighbour');
        });
    });
};
getCountryData('portugal');
