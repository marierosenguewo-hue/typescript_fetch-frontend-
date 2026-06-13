const btn = document.querySelector<HTMLButtonElement>("#btn4")
btn?.addEventListener("click", async() => { 

    const response = await fetch(
"http://localhost:8080/tasks",
{
method: "GET",

}
);
// Récupère les données transmises par le serveur (si nécessaire)
if(response.ok)
{
const data = await response.json(); //transforme le corps de la réponse en fichier json

console.log(data)
}  

})

    const in1 = document.querySelector<HTMLInputElement>("#in1")    
    const btn2 = document.querySelector<HTMLButtonElement>("#btn1")

    btn2?.addEventListener("click", async() => { 
    const val1 = in1?.value
const response = await fetch(
"http://localhost:8080/tasks",
{
method: "POST",
headers: {"content-type": "application/json"},
body: JSON.stringify({content:`${val1}`}),

}
)

// Récupère les données transmises par le serveur (si nécessaire)
if(response.ok)
{
const data = await response.json(); //transforme le corps de la réponse en fichier json

console.log(data)

}  

}
);
   
   
    const in2 = document.querySelector<HTMLInputElement>("#in2")
    const val2= in2 ?.value
    const btn3 = document.querySelector<HTMLButtonElement>("#btn2")
    btn3?.addEventListener("click", async() => { 
const response = await fetch(
"http://localhost:8080/tasks/{taskId}",
{

method: "PUT",
body: "val2",

}
)

// Récupère les données transmises par le serveur (si nécessaire)
if(response.ok)
{
const data = await response.json(); //transforme le corps de la réponse en fichier json

console.log(data)

}  

}
);

