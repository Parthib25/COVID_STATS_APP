const submit = document.querySelector(".sub");
const cod = document.querySelector(".code");
const cou = document.querySelector(".country");
const conf = document.querySelector(".confirmed");
const recov = document.querySelector(".recovered");
const dea = document.querySelector(".deaths");
const cri = document.querySelector(".critical");
const lastch = document.querySelector(".lastchanged");
const lastu = document.querySelector(".lastupdate");
const concode = document.querySelector(".country-code");
const git = document.querySelector(".git");

let val;
submit.onclick = function fun() {
  val = concode.value;

  fetch(
    `https://covid-19-data.p.rapidapi.com/country/code?code=${val}&format=json`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "c26c578cb9msh5fceae647f2f91bp1e5eb7jsn82aba666d7c9",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data1) => {
      const {
        code,
        country,
        confirmed,
        recovered,
        deaths,
        critical,
        lastChange,
        lastUpdate,
      } = data1[0];
      cod.innerHTML = `CODE:${code}`;
      cou.innerHTML = `COUNTRY:${country}`;
      conf.innerHTML = `CONFIRMED:${confirmed}`;
      recov.innerHTML = `RECOVERED:${recovered}`;
      dea.innerHTML = `DEATHS:${deaths}`;
      cri.innerHTML = `CRITICAL:${critical}`;
      lastch.innerHTML = `LAST-CHANGED:${lastChange}`;
      lastu.innerHTML = `LAST-UPDATED:${lastUpdate}`;
    })
    .catch((err) => {
      console.error(err);
    });
};
git.onclick = function () {
  window.open("https://github.com/Parthib25");
};

const body = document.querySelector(".bod");
var colors1 = ["#F4DFBA", "#EEC373", "#CA965C", "#876445"];
var colors2 = ["#EA5C2B", "#FF7F3F", "#F6D860", "#95CD41"];
var currentIndex = 0;
setInterval(function () {
  body.style.backgroundImage = `linear-gradient(${colors1[currentIndex]},${colors2[currentIndex]})`;

  if (!(colors1[currentIndex] && colors2[currentIndex])) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
}, 300);
