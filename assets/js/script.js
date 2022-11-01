let API_KEY = config.my_KEY;

let mainarea = document.querySelector("#mainarea");
let selectCentury = document.querySelector("#century");
let selectTechnique = document.querySelector("#technique");
let selectclassification = document.querySelector("#classification");

// normal fetch on page load

fetch(
  `https://api.harvardartmuseums.org/object?apikey=${API_KEY}&sort=random`
)
  .then((response) => response.json())
  .then((data) => {
    data.records.forEach((record) => {
      let imageURL = record.primaryimageurl;
      let title = record.title;

      if (imageURL != "" && imageURL != "undefined" && imageURL != null) {
        let container = document.createElement("div");
        mainarea.appendChild(container);
        container.innerHTML = `<img src="${imageURL}" alt="">`;

        let titleText = document.createElement("h2");
        container.appendChild(titleText);
        titleText.innerText = `${title}`;
      }
    });
  });

// fetches for select options

fetch(`https://api.harvardartmuseums.org/century?apikey=${API_KEY}&size=100`)
.then((response) => response.json())
.then((data) => {
    data.records.forEach((record) => {
        let centuryName = record.name;
        if (centuryName != "Unidentified century" && centuryName != "(not assigned)") {
            let centuryOptions = document.createElement("option");
            selectCentury.appendChild(centuryOptions);
            centuryOptions.innerText = `${centuryName}`;
            centuryOptions.value = `${centuryName}`;
        }
    })
})

fetch(`https://api.harvardartmuseums.org/technique?apikey=${API_KEY}&size=100`)
.then((response) => response.json())
.then((data) => {
    data.records.forEach((record) => {
        let techniqueName = record.name;
            let techniqueOptions = document.createElement("option");
            selectTechnique.appendChild(techniqueOptions);
            techniqueOptions.innerText = `${techniqueName}`;
            techniqueOptions.value = `${techniqueName}`;
    })
})

fetch(`https://api.harvardartmuseums.org/classification?apikey=${API_KEY}&size=100`)
.then((response) => response.json())
.then((data) => {
    data.records.forEach((record) => {
        let classificationName = record.name;
            let classificationOptions = document.createElement("option");
            selectclassification.appendChild(classificationOptions);
            classificationOptions.innerText = `${classificationName}`;
            classificationOptions.value = `${classificationName}`;
    })
})

// submit button to filter by text and select options (optional)

let submitbutton = document.querySelector("#submit");
submitbutton.addEventListener("click", function () {
  let textinput = document.querySelector("#textinput").value;
  let selectedCentury = selectCentury.value;
  let selectedTechnique = selectTechnique.value;
  let selectedclassification = selectclassification.value;
  mainarea.innerHTML = "";
  fetch(
    `https://api.harvardartmuseums.org/object?apikey=${API_KEY}&century=${selectedCentury}&classification=${selectedclassification}&technique=${selectedTechnique}&q=${textinput}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.records.forEach((record) => {
        let imageURL = record.primaryimageurl;
        let title = record.title;

        if (imageURL != "" && imageURL != "undefined" && imageURL != null) {
          let container = document.createElement("div");
          mainarea.appendChild(container);
          container.innerHTML = `<img src="${imageURL}" alt="">`;

          let titleText = document.createElement("h2");
          container.appendChild(titleText);
          titleText.innerText = `${title}`;
        }
      });
    });
});

// load more items into the page, also based on the filters/text already entered

let loadbutton = document.querySelector("#load");
loadbutton.addEventListener("click", function () {
  let textinput = document.querySelector("#textinput").value;
  let selectedCentury = selectCentury.value;
  let selectedTechnique = selectTechnique.value;
  let selectedclassification = selectclassification.value;
  fetch(
    `https://api.harvardartmuseums.org/object?apikey=${API_KEY}&century=${selectedCentury}&classification=${selectedclassification}&technique=${selectedTechnique}&q=${textinput}&sort=random`
  )
    .then((response) => response.json())
    .then((data) => {
      data.records.forEach((record) => {
        let imageURL = record.primaryimageurl;
        let title = record.title;

        if (imageURL != "" && imageURL != "undefined" && imageURL != null) {
          let container = document.createElement("div");
          mainarea.appendChild(container);
          container.innerHTML = `<img src="${imageURL}" alt="">`;

          let titleText = document.createElement("h2");
          container.appendChild(titleText);
          titleText.innerText = `${title}`;
        }
      });
    });
});

selectCentury.addEventListener("change", function () {
  mainarea.innerHTML = "";
  let selectedCentury = selectCentury.value;
  fetch(
    `https://api.harvardartmuseums.org/object?apikey=${API_KEY}&century=${selectedCentury}&sort=random`
  )
    .then((response) => response.json())
    .then((data) => {
      data.records.forEach((record) => {
        let imageURL = record.primaryimageurl;
        let title = record.title;

        if (imageURL != "" && imageURL != "undefined" && imageURL != null) {
          let container = document.createElement("div");
          mainarea.appendChild(container);
          container.innerHTML = `<img src="${imageURL}" alt="">`;

          let titleText = document.createElement("h2");
          container.appendChild(titleText);
          titleText.innerText = `${title}`;
        }
      });
    });
});


selectTechnique.addEventListener("change", function () {
  mainarea.innerHTML = "";
  let selectedTechnique = selectTechnique.value;
  fetch(
    `https://api.harvardartmuseums.org/object?apikey=${API_KEY}&technique=${selectedTechnique}&sort=random`
  )
    .then((response) => response.json())
    .then((data) => {
      data.records.forEach((record) => {
        let imageURL = record.primaryimageurl;
        let title = record.title;

        if (imageURL != "" && imageURL != "undefined" && imageURL != null) {
          let container = document.createElement("div");
          mainarea.appendChild(container);
          container.innerHTML = `<img src="${imageURL}" alt="">`;

          let titleText = document.createElement("h2");
          container.appendChild(titleText);
          titleText.innerText = `${title}`;
        }
      });
    });
});


selectclassification.addEventListener("change", function () {
  mainarea.innerHTML = "";
  let selectedclassification = selectclassification.value;
  fetch(
    `https://api.harvardartmuseums.org/object?apikey=${API_KEY}&classification=${selectedclassification}&sort=random`
  )
    .then((response) => response.json())
    .then((data) => {
      data.records.forEach((record) => {
        let imageURL = record.primaryimageurl;
        let title = record.title;

        if (imageURL != "" && imageURL != "undefined" && imageURL != null) {
          let container = document.createElement("div");
          mainarea.appendChild(container);
          container.innerHTML = `<img src="${imageURL}" alt="">`;

          let titleText = document.createElement("h2");
          container.appendChild(titleText);
          titleText.innerText = `${title}`;
        }
      });
    });
});
