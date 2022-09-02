const spinners = (spinner) => {
  if (spinner === 1) {
    document.getElementById("spinners").classList.remove("hidden");
  } else {
    document.getElementById("spinners").classList.add("hidden");
  }
};

// TODO things to do start

const displayCard = (data) => {
  //   console.log(data);
};

const searchDrinks = async (keyword) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCard(data.drinks);
};
// TODO things to do end

// hero section mainFetchFunction("");

const heroSection = async () => {
  //   spinners(1);
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
  const res = await fetch(url);
  const data = await res.json();
  const drinks = data.drinks;

  const drink2 = data.drinks[2];
  const image = drink2.strDrinkThumb;
  const heroSectionImage = document.getElementById("hero-section-image");
  const div = document.createElement("div");
  div.innerHTML = `
    <img class="object-cover object-center rounded h-75" alt="hero" src="${image}">
    `;
  heroSectionImage.appendChild(div);

  const headerText = drink2.strDrink;
  const subHeaderText = drink2.idDrink;

  document.getElementById("hero-header-text").innerHTML = headerText;
  document.getElementById("hero-header-text-sub").innerHTML = subHeaderText;

  // random user function

  const randomUser = async (n) => {
    const url = `https://randomuser.me/api/`;
    const res = await fetch(url);
    const data = await res.json();
    const thumbnail = data.results[0].picture.thumbnail;
    document.getElementById("navbar-thumbnail").src = `${thumbnail}`;
    const name = data.results[0].name;

    // console.log(data.results[0]);

    const fullName = name.title + " " + name.first + " " + name.last;
    const location =
      data.results[0].location.city + ", " + data.results[0].location.country;
    // console.log(location);
    const nameId = `reviewer-name-${n}`;
    const countryId = `reviewer-country-${n}`;
    const imageId = `reviewer-image-${n}`;
    document.getElementById(nameId).innerHTML = fullName;
    document.getElementById(countryId).innerHTML = location;
    document.getElementById(imageId).src = data.results[0].picture.thumbnail;
  };

  randomUser(1);
  randomUser(2);
  randomUser(3);
  randomUser(4);

  // random user function end

  //  drinks displaying section

  for (const drink of drinks) {
    
  }

  spinners(0);
};

heroSection();

const randomQuotes = async (n) => {
  const url = `https://strangerthings-quotes.vercel.app/api/quotes/4`;
  const res = await fetch(url);
  const data = await res.json();
  let quotes = "";
  for (const q of data) {
    quotes += q.quote + " ";
  }
  const review = `review-${n}`;
  //   console.log(typeof review);
  document.getElementById(review).innerHTML = quotes;
};

randomQuotes(1);
randomQuotes(2);
randomQuotes(3);
randomQuotes(4);
// console.log(quotes);
