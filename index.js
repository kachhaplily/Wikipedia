let myarray = [];
fetchfun = (searchtext) => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${searchtext}`).then(y => y.json()).
        then(y => display(y))


    display = (y) => {
        for (const key in y) {
            let a = (y[key])
            for (const key in a) {
                if (key == "search") {
                    myarray = a[key];
                    datadisplay(myarray);
                }

            }

        }
    }
}
Search = () => {
    let searchtext = document.getElementById("searchtext").value;
    if (searchtext.length == 0) {
        alert("type something!")
    }
    else {

        fetchfun(searchtext);


    }
}
datadisplay = (myarray) => {
    document.getElementById('showdata').innerHTML = myarray.map((element) => {
        return ` <div class="card" >
  <div class="card-body">
    <h5 class="card-title"> ${element.title}</h5>
    <p class="card-text">${element.snippet}</p>
    
  </div>
</div>
        `

    }).join("");
}
