'use strict';
//////////////////////////////////////////////
// FIRST AJAX XMLHttpRequest
// const getCountry = function (country) {
//   const btn = document.querySelector('.btn-country');
//   const countriesContainer = document.querySelector('.countries');

//   // NEW COUNTRIES API URL (use instead of the URL shown in videos):
//   // https://restcountries.com/v2/name/portugal

//   // NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
//   // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

//   // URL of the API
//   // https://countries-api-836d.onrender.com/countries/
//   ///////////////////////////////////////

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   // console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(data.population / 10000000).toFixed(1)} People</p>
//       <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
//       <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountry('indonesia');
// getCountry('usa');
// getCountry('russia');
// getCountry('japan');

//////////////////////////////////////////////

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

// URL of the API
// https://countries-api-836d.onrender.com/countries/
///////////////////////////////////////

// console.log(request.responseText);
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(data.population / 10000000).toFixed(1)} People</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
      <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX CALL 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  //AJAX Country 1
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    console.log(data);

    renderCountry(data);

    //get neighbor country
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    // AJAX CALL 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('france');

// callback hell / nested callback
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
