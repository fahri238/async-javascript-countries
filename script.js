'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const population =
    data.population > 1000000
      ? `${(data.population / 1000000).toFixed(2)} Milion`
      : `${(data.population / 1000).toFixed(1)} Thousand`;
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${population} People</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
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

const getJSON = function (url, errMessage) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errMessage} ${response.status}`);

    return response.json();
  });
};

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

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Loteery drow is happening...');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You are Win💰'); // fulfilled promise
//     } else {
//       reject(new Error('You Lost your money🐶')); // rejected promise
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // real world example
// const wait = second =>
//   new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });

// wait(3)
//   .then(() => {
//     console.log('wait for 3 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('wait for 4 seconds'));

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

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 seconds passed');
//   });

// // resolve & reject immedietely
// Promise.resolve('hai it is resolved').then(res => console.log(res))
// Promise.reject(new Error('hai it is rejected')).then(res => console.error(res));

////////////////////////////////////////
// PROMISYFING THE GEOLOCATION API
// navigator.geolocation.getCurrentPosition(
//   posisition => console.log(posisition),
//   err => console.error(err),
// );

// console.log("Getting position... ");

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   posisition => resolve(posisition),
//     //   err => reject(err),
//     // );

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then(pos => console.log('your location', pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       //fullfilled
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//       );
//     })

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
//       renderCountry(data[0]);
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
//   whereAmI();

//   e.currentTarget.classList.add('hidden');
// });

//////////////////////////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some 
stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. 
This function returns a promise which creates a new image 
(use document.createElement('img')) and sets the .src attribute to 
the provided image path. When the image is done loading, append it to 
the DOM element with the 'images' class, and resolve the promise. 
The fulfilled value should be the image element itself. In case there 
is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the 
wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display 
to 'none'), and load a second image (HINT: Use the image element returned 
by the createImage promise to hide the current image. You will need a global 
variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. 
Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too 
fast.

GOOD LUCK 😀
*/
// btn.classList.add('hidden');
// const imageEl = document.querySelector('.images');
// const createImage = imgPath => {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', () => {
//       imageEl.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', () => {
//       reject(new Error("Can't find the image"));
//     });
//   });
// };

// const wait = second =>
//   new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });

// let currentImage;
// createImage('/img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log('img-1 displayed');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('/img/img-2.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     console.log('img-2 displayed');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   });

///////////////////////////////////////////////////////
//RETURNING VALUES FROM ASYNC FUNCTIONS

// small example
// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmi = async function () {
//   try {
//     const pos = getPosition();
//     const { latitude: lat, longitude: lng } = pos;

//     // oldway
//     // fetch(
//     //   `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//     // ).then(res => res)

//     const resGeo = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//     );
//     if (!resGeo.ok)
//       throw new Error(`Problem getting location data ${resGeo.status}`);

//     // geolocation data
//     const dataGeo = await resGeo.json();

//     // render country from current position
//     // country data
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.countryName}`,
//     );
//     if (!res.ok) throw new Error(`Problem getting Country ${res.status}`);
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);

//     return `you are in ${dataGeo.city}, ${dataGeo.countryName}`;
//   } catch (err) {
//     renderError(`💥 ${err.message}`);

//     throw err;
//   }
// };

// console.log('1: will get location');
// // const data = whereAmi()
// // console.log(data.then(res => `${res}`));

// // whereAmi()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err}`))
// //   .finally(() => console.log('3: Finsihed getting location'));

// (async function () {
//   try {
//     const city = await whereAmi();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err}`);
//   } //finally, always gonna be executed
//   console.log('3: Finsihed getting location');
// })();

///////////////////////////////////////////////
// RUNNING PROMISE IN PARALEL
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log  (data1.capital, data2.capital, data3.capital);

    // if one promise rejected then all of the other promise will reject also
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(country => country[0].capital));
  } catch (error) {
    console.error(error.message);
  }
};

get3Countries('indonesia', 'portugal', 'usa');

///////////////////////////////////////////////
// PROMISE COMBINATORS: RACE, ALLSETTLED AND ANY

// promise.race
(async function () {
  // executed the fastest promise fetch no matter if it's fullfilled or rejected
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/indonesia`),
    getJSON(`https://restcountries.com/v2/name/usa`),
    getJSON(`https://restcountries.com/v2/name/canada`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/malaysia`),
  timeout(0.1),
])
  .then(data => console.log(data[0]))
  .catch(err => console.error(err));

// Promise.allSettled
// executed all of the promises and not stop until all of them has been executed
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));
// this combinator never getting to catch

// Promise.any [ES2021]
// opposite of Promise.all, this return fulfilled the first of the Element and ignore the rejected
Promise.any([
  Promise.resolve('success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));
