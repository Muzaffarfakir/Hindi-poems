  let add = document.getElementById("add")
let addAmout = document.getElementById("ad")

let con = document.querySelector(".con")
let count = document.getElementById("count")
let c=0;
///////////Add event listing////////
add.addEventListener("click", (e) => {
  // request to user for waiting 
alert("Plzz wait for 10 seconds")

// fetching api of poem
  fetch('https://hindi-poem-api.herokuapp.com/poet_data').then((res) => res.json().then((data) => {
    ///for loop///
     for (var i = 1; i < 100; i++) {
       // add
    con.innerHTML += `<div style="margin: 10px; border:2px solid; border-radius:7px; display: flex;flex-direction: column;margin-top:30px; " class="container">
          <h4 id='count' style="text-align: center;">Poem no-:${c++} </h4>
              ${data[0].poem_array[i + 1].poem}

        
        
        </div>
        `


     }


  }))

})

//////////end//////end/////////////
