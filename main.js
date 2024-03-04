const movieName = document.querySelector("#movieName");
const category = document.querySelector("#category");
const year = document.querySelector("#year");
const image = document.querySelector("#image");
const btn = document.querySelector("#btn");
const aleart = document.querySelector("#aleart");
const form = document.querySelector("#form");
const thanks = document.querySelector("#thanks");
var myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("content-type", "application/json");
myHeaders.append("user-agent", "GuzzleHttp/7");




btn.addEventListener("click" , (e)=>{
    e.preventDefault()
    console.log(movieName.value , category.value , year.value , image.value )
    btn.setAttribute("disabled" ,"disabled")
    movieName.value
    if ( !movieName.value || !category.value || !year.value || !image.value){
        console.log("error")
        aleart.style.display = "block"
        btn.removeAttribute("disabled" )
            setTimeout(()=> aleart.style.display = "none"  , 3000)
        return
    }
    btn.innerText = "plz wait"
    var raw = JSON.stringify({
        "data": {
            "name": movieName.value ,
            "category": category.value,
            "year": year.value,
            "image" :image.value,
        }
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://v1.slashapi.com/java-team/google-sheets/PK1gimkQMB/tete", requestOptions)
        .then(response => response.text())
        .then(result =>{
            form.style.display = "none"
            thanks.style.display = "block"

        })
        .catch(error => console.log('error', error));
})

