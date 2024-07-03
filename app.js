
let btn = document.querySelector("button");
let apiKey = "7614cad55dcc4766257da1674b0497f1";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

async function checkWhether(){
    try{
        let value= document.querySelector("input").value;
        let res = await axios.get(apiUrl + `q=`+value +`&appid=${apiKey}`); 
        console.log(res);
        let data = res.data;

            let temparature = document.querySelector("h1");
            temparature.innerText = Math.round(data.main.temp)+"°c";

            let cityName = document.querySelector("h2");
            cityName.innerText = data.name;

            let humidity = document.querySelector(".humidity .temp");
            humidity.innerText = data.main.humidity + "%";

            let windSpeed = document.querySelector(".wind-speed .wind");
            windSpeed.innerText = data.wind.speed + "km/h";

            let clouds = document.querySelector("#cloud");

            if(data.weather[0].main == "Clouds"){
                clouds.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                clouds.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                clouds.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Rain"){
                clouds.src = "images/rain.png";   
            }

            document.querySelector(".whether").style.display = "block";
            document.querySelector(".wrong").style.display = "none";
            
            

}
catch(e){
    console.log("server error");
    let para = document.querySelector(".wrong");
    para.innerHTML = "you enter <b>wrong</b> city!";
    para.style.color = "red";
    document.querySelector(".whether").style.display = "none";
    document.querySelector(".wrong").style.display = "block";
    
}
}
btn.addEventListener("click", ()=>{
     checkWhether();
});



// let latitude;
// let longitude;
// document.querySelector(".curr-loc").addEventListener("click",()=>{
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition((position)=>{
//             latitude=position.coords.latitude;
//             longitude = position.coords.longitude;
//             console.log(latitude + " " + longitude);
//             getcurr();

//             let para = document.createElement("p");
//             para.innerText = `latitude : ${latitude} & longitude : ${longitude}`;
//             document.querySelector(".card").appendChild(para);
//         },(error) =>{
//             console.log(error);
//         })

//     }
// })

// async function getcurr(){
//     let res = await axios.get(apiUrl + `lat=${latitude}&lon=${latitude}`+`&appid=${apiKey}`);
//     console.log(res);
// }
