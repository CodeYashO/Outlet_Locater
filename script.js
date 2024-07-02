const map = L.map("map").setView([21.04349121680354, 79.00686308216842], 5); //////first coordinates is for first view of map/////////////////

// navigator.geolocation(() =>  {} , () => {});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

/////MUMBAI///////
let marker1 = L.marker([18.97902595325528, 73.03255361337307])
  .addTo(map)
  .bindPopup(
    L.popup({
      maxWidth: 250,
      minWidth: 100,
      className: "running-popup",
      autoClose: false,
    })
  )
  .setPopupContent(`BMW OUTLET-02`)
  .openPopup();

///////KANPUR///////
let marker2 = L.marker([26.4, 80.36])
  .addTo(map)
  .bindPopup(
    L.popup({
      maxWidth: 250,
      minWidth: 100,
      className: "running-popup",
      autoClose: false,
    })
  )
  .setPopupContent(` BMW OUTLET-01`)
  .openPopup();

//////BENGALURU//////////
let marker3 = L.marker([12.85464890558895, 77.68900069934591])
  .addTo(map)
  .bindPopup(
    L.popup({
      maxWidth: 250,
      minWidth: 100,
      className: "running-popup",
      autoClose: false,
    })
  )
  .setPopupContent(`BMW OUTLET-04`)
  .openPopup();

/////// KOLKATA//////////
let marker4 = L.marker([22.51255695405145, 88.49547223849054])
  .addTo(map)
  .bindPopup(
    L.popup({
      maxWidth: 250,
      minWidth: 100,
      className: "running-popup",
      autoClose: false,
    })
  )
  .setPopupContent(`BMW OUTLET-03`)
  .openPopup();

/////////VISHAKHAPATNAM/////////////////
let marker5 = L.marker([17.72939370116502, 83.29519700412095])
  .addTo(map)
  .bindPopup(
    L.popup({
      maxWidth: 250,
      minWidth: 100,
      className: "running-popup",
      autoClose: false,
    })
  )
  .setPopupContent(`BMW OUTLET-05`)
  .openPopup();

let { lat, lng } = marker2._latlng;
let position = [lat, lng];
console.log(lat, lng);
console.log(marker2);
console.log(marker2._latlng);

//   let movefunction = function(){
//     map.setView(position, 13);
// }

/////////----FOR FLYING ANIMATION AND ZOOM------/////////////
let fly = function (coordinates) {
  map.flyTo(coordinates, 13, {
    animate: true,
    duration: 3,
  });
};

//////for taking the coordinates of place //////////
map.on("click", function (mape) {
  console.log(mape);
  let { lat, lng } = mape.latlng;
  let position_1 = [lat, lng];
  console.log(position_1);
  //  movefunction();
  //  fly();
});

const outlet = document.querySelectorAll(".outlet");
const maindiv = document.querySelector(".maindiv");
const outlets = document.querySelector(".outlets");
const mapdiv = document.querySelector("#map");

maindiv.addEventListener("click", function () {
  mapdiv.classList.toggle("hidden");
  outlets.classList.toggle("hidden");
});

outlet.forEach((e) => {
  e.addEventListener("click", function (event) {
    let clicked = event.target.closest(".outlet");
    let clickedname = clicked.getAttribute("class");
    console.log(clickedname);

    if (clickedname === "outlet outlet-1") {
      let co1 = obj_1.coordinates;
      fly(co1);
      console.log(co1);
    }
    if (clickedname === "outlet outlet-2") {
      let co2 = obj_2.coordinates;
      fly(co2);
      console.log(co2);
    }
    if (clickedname === "outlet outlet-3") {
      let co3 = obj_3.coordinates;
      fly(co3);
      console.log(co3);
    }
    if (clickedname === "outlet outlet-4") {
      let co4 = obj_4.coordinates;
      fly(co4);
      console.log(co4);
    }
    if (clickedname === "outlet outlet-5") {
      let co5 = obj_5.coordinates;
      fly(co5);
      console.log(co5);
    }
  });
});

// let request = fetch(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`);
// console.log(request);
