// THEME

function toggleTheme(){

  document.body.classList.toggle("light-mode");

}

// LOGIN

function login(){

  let username =
    document.getElementById("username").value;

  let password =
    document.getElementById("password").value;

  if(username && password){

    document.getElementById("welcome").innerHTML =
      "Welcome " + username + " 🚀";

  }

  else{

    alert("Enter Username & Password");

  }

}

// COUNTDOWN

let count = 10;

setInterval(()=>{

  document.getElementById("countdown").innerHTML =
    count;

  count--;

  if(count < 0){

    count = 10;

  }

},1000);

// NASA API IMAGE

async function getNASAData(){

  try{

    let response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
    );

    let data = await response.json();

    document.getElementById("nasaTitle")
      .innerHTML = data.title;

    document.getElementById("nasaImage")
      .src = data.url;

    document.getElementById("nasaDesc")
      .innerHTML = data.explanation;

  }

  catch(error){

    console.log(error);

  }

}

getNASAData();

// MISSION DATABASE

const missions = {

  "Chandrayaan-3":{

    title:"🌕 Chandrayaan-3",

    desc:
    "ISRO Moon mission that successfully landed near the south pole of Moon.",

    launch:"14 July 2023",

    agency:"ISRO",

    img:
    "https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/Ch3_landing.png"

  },

  "Mangalyaan":{

    title:"🔴 Mangalyaan",

    desc:
    "India's first Mars Orbiter Mission.",

    launch:"5 November 2013",

    agency:"ISRO",

    img:
    "https://www.isro.gov.in/media_isro/image/index/MarsOrbiterMission.jpg"

  },

  "Apollo 11":{

    title:"🚀 Apollo 11",

    desc:
    "NASA mission that landed first humans on Moon.",

    launch:"16 July 1969",

    agency:"NASA",

    img:
    "https://www.nasa.gov/wp-content/uploads/2023/03/as11-40-5874orig.jpg"

  },

  "James Webb":{

    title:"🛰 James Webb Telescope",

    desc:
    "Most advanced deep space telescope.",

    launch:"25 December 2021",

    agency:"NASA",

    img:
    "https://www.nasa.gov/wp-content/uploads/2023/03/webb.png"

  }

};

// SHOW MISSION DETAILS

function showMission(name){

  let mission = missions[name];

  document.getElementById("missionDetails")
    .innerHTML = `

    <div class="card">

      <h2>${mission.title}</h2>

      <p>${mission.desc}</p>

      <br>

      <h3>Launch Date:</h3>
      <p>${mission.launch}</p>

      <h3>Agency:</h3>
      <p>${mission.agency}</p>

      <br>

      <img
      src="${mission.img}"
      width="350">

    </div>

  `;

}

// AI SPACE BOT

function chatbot(){

  let input =
    document.getElementById("chatInput")
    .value
    .toLowerCase()
    .trim();

  let response = "";

  if(input.includes("moon")){

    response = `
      🌕 Moon is Earth's natural satellite.

      <br><br>

      Famous Moon Missions:
      <ul>
        <li>Apollo 11</li>
        <li>Chandrayaan-3</li>
        <li>Artemis Mission</li>
      </ul>
    `;

  }

  else if(input.includes("mars")){

    response = `
      🔴 Mars is known as the Red Planet.

      <br><br>

      Famous Mars Missions:
      <ul>
        <li>Mangalyaan</li>
        <li>Perseverance Rover</li>
      </ul>
    `;

  }

  else if(input.includes("nasa")){

    response = `
      🚀 NASA is the United States space agency.
      <br><br>
      Founded in 1958.
    `;

  }

  else if(input.includes("isro")){

    response = `
      🇮🇳 ISRO is India's Space Research Organisation.
      <br><br>
      Headquarters: Bengaluru
    `;

  }

  else if(input.includes("satellite")){

    response = `
      🛰 Satellites help in communication,
      weather forecasting and GPS navigation.
    `;

  }

  else{

    response = `
      🤖 Try asking:
      <br><br>

      • Moon
      <br>
      • Mars
      <br>
      • NASA
      <br>
      • ISRO
      <br>
      • Satellite
    `;

  }

  document.getElementById("chatResponse")
    .innerHTML = response;

}
