function toggleTheme(){

  document.body.classList.toggle("light-mode");

}

// LOGIN

function login(){

  let username =
    document.getElementById("username").value;

  let password =
    document.getElementById("password").value;

  if(username !== "" && password !== ""){

    document.getElementById("welcome").innerText =
      "Welcome " + username + " 🚀";

  }

  else{

    alert("Enter username and password");

  }

}

// COUNTDOWN

let count = 10;

setInterval(()=>{

  document.getElementById("countdown").innerText =
    count;

  count--;

  if(count < 0){

    count = 10;

  }

},1000);

// NASA API

async function getNASAData(){

  let url =
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

  let response = await fetch(url);

  let data = await response.json();

  document.getElementById("nasaImage").src =
    data.url;

  document.getElementById("nasaTitle").innerText =
    data.title;

  document.getElementById("nasaDesc").innerText =
    data.explanation;

}

getNASAData();

// MISSION DETAILS

function showMission(name){

  let details =
    document.getElementById("missionDetails");

  if(name === "Chandrayaan-3"){

    details.innerHTML = `

      <h2>🌕 Chandrayaan-3</h2>

      <p>
      ISRO's successful Moon landing mission.
      </p>

      <img
      src="https://www.isro.gov.in/media_isro/image/index/Chandrayaan3/Ch3_landing.png"
      width="300">

    `;

  }

  else if(name === "Mangalyaan"){

    details.innerHTML = `

      <h2>🔴 Mangalyaan</h2>

      <p>
      India's first Mars mission.
      </p>

      <img
      src="https://www.isro.gov.in/media_isro/image/index/MarsOrbiterMission.jpg"
      width="300">

    `;

  }

  else if(name === "Apollo 11"){

    details.innerHTML = `

      <h2>🚀 Apollo 11</h2>

      <p>
      First human Moon landing mission.
      </p>

      <img
      src="https://www.nasa.gov/wp-content/uploads/2023/03/as11-40-5874orig.jpg"
      width="300">

    `;

  }

  else if(name === "James Webb"){

    details.innerHTML = `

      <h2>🛰 James Webb Telescope</h2>

      <p>
      Deep space telescope by NASA.
      </p>

      <img
      src="https://www.nasa.gov/wp-content/uploads/2023/03/webb.png"
      width="300">

    `;

  }

}

// AI CHATBOT

function chatbot(){

  let input =
    document.getElementById("chatInput")
    .value
    .toLowerCase();

  let response = "";

  if(input.includes("moon")){

    response =
      "🌕 Moon missions include Apollo 11 and Chandrayaan-3.";

  }

  else if(input.includes("mars")){

    response =
      "🔴 Mars missions include Mangalyaan.";

  }

  else if(input.includes("nasa")){

    response =
      "🚀 NASA is the United States space agency.";

  }

  else if(input.includes("isro")){

    response =
      "🇮🇳 ISRO is India's Space Research Organisation.";

  }

  else{

    response =
      "🤖 Ask about Moon, Mars, NASA or ISRO.";

  }

  document.getElementById("chatResponse")
    .innerHTML = response;

}
