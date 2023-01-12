// function fetchFunction() {
//   fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
//     method: "GET",
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       console.log(data.bpi.USD);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// fetchFunction();

let getDrinkData = () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log("RESPONSE ERROR");
      }
    })
    .then((data) => {
      // console.log(data);
      displayData(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

getDrinkData();

function displayData(data) {
  const coctail = data.drinks[0];
  console.log(coctail.strDrink);

  const coctailName = document.createElement("h2");
  coctailName.innerHTML = coctail.strDrink;
  const coctailImage = document.createElement("img");
  coctailImage.src = coctail.strDrinkThumb;
  coctailImage.width = "200";
  coctailImage.height = "200";

  const container = document.getElementById("content");
  container.insertBefore(coctailImage, container.firstChild);
  container.insertBefore(coctailName, container.firstChild);
}
