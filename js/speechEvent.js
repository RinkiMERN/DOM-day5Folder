window.SpeechRecognition=window.SpeechRecognition || webkitSpeechRecognition;
let recognition = new SpeechRecognition();
//add an event to the dom
// recognition.addEventListener("result", e=>{
//     // return [...e.results].map(voice =>{
//     //     return [...voice].map(x => console.log(x.transcript));
//     // })
//     let transcript = e.results[0][0].transcript;
//     console.log(transcript);
// })

//start speech
// recognition.start();

let p=document.createElement("p");
let template=document.querySelector("#template");
template.appendChild(p);

//add an event to the dom
recognition.addEventListener("result", e=>{
    let transcript=e.results[0][0].transcript;
    p.textContent=transcript;
    document.body.style.background=transcript;
    if(e.results[0].isFinal===true)
    {
       
            p=document.createElement("p");
            p.textContent=transcript;
            template.appendChild(p);
        
    }
    console.log(transcript);
});
recognition.addEventListener("end",recognition.start);
recognition.start();

