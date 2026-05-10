function toggleTheme(){

  document.body.classList.toggle("light-mode");

}

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

let count = 10;

setInterval(()=>{

  document.getElementById("countdown").innerText =
    count;

  count--;

  if(count < 0){

    count = 10;

  }

},1000);

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

function chatbot(){

  let input =
    document.getElementById("chatInput")
    .value
    .toLowerCase();

  let response = "";

  if(input.includes("moon")){

    response =
      "Moon missions include Apollo 11 and Chandrayaan.";

  }

  else if(input.includes("mars")){

    response =
      "Mars missions include Mangalyaan.";

  }

  else{

    response =
      "Space exploration is amazing 🚀";

  }

  document.getElementById("chatResponse")
    .innerText = response;

}
#tracker{

  text-align:center;
  padding:60px;

}

#tracker iframe{

  border:none;
  border-radius:15px;
  margin-top:20px;

}

#chatbot{

  text-align:center;
  padding:60px;

}

#chatbot input{

  width:320px;
  padding:14px;
  border-radius:8px;
  border:none;

}

#chatbot button{

  padding:14px 20px;
  background:#2563eb;
  color:white;
  border:none;
  border-radius:8px;
  margin-left:10px;
  cursor:pointer;

}

#chatResponse{

  margin-top:30px;
  background:#111827;
  padding:25px;
  border-radius:12px;
  width:70%;
  margin-left:auto;
  margin-right:auto;
  font-size:18px;

}
