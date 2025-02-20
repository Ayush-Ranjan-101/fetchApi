const url = "https://cat-fact.herokuapp.com/facts";

const catFacts = async () => {
    console.log("Getting data......");
    let rps = await fetch(url);
    console.log("Status:",rps.status);
    console.log("Status:",rps.ok); // Gives a boolean result
    console.log("Object returned:",rps);
    let fact = await rps.json();

    console.log("Facts:",fact);
    factPoints(fact);
}

function factPoints(fact){
    let ol = document.querySelector("ol");
    for(let i=0 ; i<fact.length ; i++){
        let li = document.createElement("li");
        li.textContent = fact[i].text;
        ol.appendChild(li);
    }
}

catFacts();