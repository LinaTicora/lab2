var Container= document.getElementById("demo");
var btn = document.getElementById("Botton").addEventListener("click",a);
function a()
{
  var Numero = document.getElementById("NumeritoPro").value;
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then((res) => {
    return res.json();
  })
  .then((post)=>
  {
    Container.innerHTML =  `<div class="ContID">ID</div>
                          <div class ="ContID">Name</div>
                          <div class ="imagen">imagen</div> `
    for(let index=0; index<Numero;index++){
      Container.innerHTML += `<hr>
                           <div class="Cont">
                            <div class="ContID">${post[index].id}</div> 
                            <div class="ContTitle">${post[index].title}</div>
                            <img class="imagen"src="${post[index].thumbnailUrl}"></img>
                            
                            </div>
                          </hr>
                          `
    }
  }
  )
}
