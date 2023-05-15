
let defaultImg="https://images.unsplash.com/photo-1680484702376-ce814193208f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80";
// let mainimg="https://images.unsplash.com/photo-1680484702376-ce814193208f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80";

  let imgDOM1= document.getElementById("imagetodisplay");
  imgDOM1.src=defaultImg;


let DOMTitle = document.getElementById("title");
let DOMDate = document.getElementById("date");
let DOMExplanation = document.getElementById("explanation");


function LoadNASADAta(){
    let buttonDOM1= document.getElementById("ButtonToLoadImg");
    
   
    
    let endpointForNasaApod= "https://api.nasa.gov/planetary/apod?api_key=2wwGNLPXcWV8qNAx7rtaLB6acfoYhbrdcAUEtkXs";
  
    fetch(endpointForNasaApod).then((response) => 
     response.json()
    ).then((json) =>{
    
    console.log(json) 

    imgDOM1.src=json.url;
    DOMTitle.innerHTML=json.title;
    DOMDate.innerHTML=json.date;
    DOMExplanation.innerHTML=json.explanation;
}
    ).catch( (error) =>
    console.log(error)
    )

}

