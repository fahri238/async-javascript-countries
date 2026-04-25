'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const population =
//         data.population > 1000000
//           ? `${(data.population / 1000000).toFixed(2)} Milion`
//           : `${(data.population / 1000).toFixed(1)} Thousand`;
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${population} People</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };
//////////////////////////////////////////////
// FIRST AJAX XMLHttpRequest
/*
const getCountry = function (country) {
  const btn = document.querySelector('.btn-country');
  const countriesContainer = document.querySelector('.countries');

  // NEW COUNTRIES API URL (use instead of the URL shown in videos):
  // https://restcountries.com/v2/name/portugal

  // NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
  // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

  // URL of the API
  // https://countries-api-836d.onrender.com/countries/
  ///////////////////////////////////////

  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  // console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    console.log(data);

    const html = `
  <article class="country">
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
  });
};

getCountry('indonesia');
getCountry('usa');
getCountry('russia');
getCountry('japan');
*/
//////////////////////////////////////////////
// CALLBACK HELL
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

// URL of the API
// https://countries-api-836d.onrender.com/countries/
///////////////////////////////////////

// // console.log(request.responseText);
// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
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
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX CALL 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   //AJAX Country 1
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);

//     renderCountry(data);

//     //get neighbor country
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     // AJAX CALL 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('france');

// // callback hell / nested callback
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//////////////////////////////////////////////
// PROMISES

// const getCountryData = function (country) {
//   // promise
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       response => {
//         console.log(response);

//         // immediately reject
//         if (!response.ok)
//           throw new Error(`Country not found ${response.status}`);

//         return response.json();
//       },
//       // err => alert(err),
//     )
//     .then(data => {
//       renderCountry(data[0]);

//       // const neighbour = data[0].borders?.[0];
//       const neighbour = `nothing`;
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(
//       response => {
//         if (!response.ok)
//           throw new Error(`Country not found ${response.status}`);
//         return response.json();
//       },
//       // err => alert(err),
//     )
//     .then(data => {
//       renderCountry(data[0], 'neighbour');

//       const neighbour2 = data[0].borders?.[1];
//       if (!neighbour2) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour2}`).then(
//         response =>
//           response.json().then(data => renderCountry(data[0], 'neighbour')),
//       );
//     })
//     .catch(err => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

//////////////////////////////////////////////////////////
// THROWING ERROR

// const getJSON = function (url, errMessage) {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errMessage} ${response.status}`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // promise
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];
//       console.log(data[0].borders);
//       // const neighbour = `nothing`;
//       if (!neighbour) throw new Error('No Neighbour found');

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found',
//       );
//     })
//     .then(data => {
//       renderCountry(data[0], 'neighbour');

//       const neighbour2 = data[0].borders?.[1];
//       if (!neighbour2) throw new Error('No Neighbour found');

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour2}`,
//         'Country not Found',
//       ).then(data => renderCountry(data[0], 'neighbour'));
//     })
//     .catch(err => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', e => {
//   getCountryData('france');
//   // getCountryData('noCountry');
//   e.currentTarget.classList.add('hidden');
// });

////////////////////////////////////////////////////////////
// CODING CHALLENGE #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//   )
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.countryName}`);

//       // const countryName = data.countryName;
//       return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       // console.log(
//         // `You're in ${data[0].name}, the population is about ${population} People, the language is called ${data[0].languages[0].nativeName}`,
//       // );

//        renderCountry(data[0]);
//     })
//     .catch(err => {
//       (countriesContainer.insertAdjacentText(
//         'beforeend',
//         `Something went wrong ${err.message} try again!!`,
//       ),
//         console.log(err.message));
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', e => {
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);

//   e.currentTarget.classList.add('hidden')
// })

//////////////////////////////////////////////
// THE EVENT LOOP

// console.log('test start');
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000; i++) {
//     console.log(res);
//   }
// });
// console.log('test end');

//////////////////////////////////////////////
// BUILDING SIMPLE PROMISE

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Loteery drow is happening...');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You are Win💰'); // fulfilled promise
    } else {
      reject(new Error('You Lost your money🐶')); // rejected promise
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// real world example
const wait = second =>
  new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });

wait(3)
  .then(() => {
    console.log('wait for 3 seconds');
    return wait(1);
  })
  .then(() => console.log('wait for 4 seconds'));

// solve callback hell with promise
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 seconds passed');
  });

// resolve & reject immedietely
Promise.resolve('hai it is resolved').then(res => console.log(res))
Promise.reject(new Error('hai it is rejected')).then(res => console.error(res))