window.addEventListener("load", showMandag);

/*var wn = new Date().getWeekNumber()*/



currentDate = new Date();
startDate = new Date(currentDate.getFullYear(), 0, 1);
let days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));
 
let weekNumber = Math.ceil(days / 7);
 
// Display the calculated result       
console.log("Week number of " + currentDate +
    " is :   " + weekNumber);

document.getElementById("uge_nr").innerHTML =  weekNumber;

function showMandag(){
    console.log("showMandag")
    document.querySelector("#tirsdag_skema").classList.add("hide");
    document.querySelector("#onsdag_skema").classList.add("hide");
    document.querySelector("#torsdag_skema").classList.add("hide");
    document.querySelector("#fredag_skema").classList.add("hide");
    document.querySelector("#lordag_skema").classList.add("hide");
    document.querySelector("#sondag_skema").classList.add("hide");

    document.querySelector("#mandag_skema").classList.remove("hide");

    document.querySelector("#man_sprite").classList.add("larger");
    document.querySelector("#tir_sprite").classList.remove("larger");
    document.querySelector("#ons_sprite").classList.remove("larger");
    document.querySelector("#tor_sprite").classList.remove("larger");
    document.querySelector("#fre_sprite").classList.remove("larger");
    document.querySelector("#lor_sprite").classList.remove("larger");
    document.querySelector("#son_sprite").classList.remove("larger");
  
    document.querySelector("#man_sprite").addEventListener("click", showMandag)
    document.querySelector("#tir_sprite").addEventListener("click", showTirsdag)
    document.querySelector("#ons_sprite").addEventListener("click", showOnsdag)
    document.querySelector("#tor_sprite").addEventListener("click", showTorsdag)
    document.querySelector("#fre_sprite").addEventListener("click", showFredag)
    document.querySelector("#lor_sprite").addEventListener("click", showLordag)
    document.querySelector("#son_sprite").addEventListener("click", showSondag) 

  }

  function showTirsdag(){
    console.log("showTirsdag")
    document.querySelector("#mandag_skema").classList.add("hide")
    document.querySelector("#onsdag_skema").classList.add("hide");
    document.querySelector("#torsdag_skema").classList.add("hide");
    document.querySelector("#fredag_skema").classList.add("hide");
    document.querySelector("#lordag_skema").classList.add("hide");
    document.querySelector("#sondag_skema").classList.add("hide");

    document.querySelector("#tirsdag_skema").classList.remove("hide");

    document.querySelector("#man_sprite").classList.remove("larger");
    document.querySelector("#tir_sprite").classList.add("larger");
    document.querySelector("#ons_sprite").classList.remove("larger");
    document.querySelector("#tor_sprite").classList.remove("larger");
    document.querySelector("#fre_sprite").classList.remove("larger");
    document.querySelector("#lor_sprite").classList.remove("larger");
    document.querySelector("#son_sprite").classList.remove("larger");
  
    document.querySelector("#man_sprite").addEventListener("click", showMandag)
    document.querySelector("#tir_sprite").addEventListener("click", showTirsdag)
    document.querySelector("#ons_sprite").addEventListener("click", showOnsdag)
    document.querySelector("#tor_sprite").addEventListener("click", showTorsdag)
    document.querySelector("#fre_sprite").addEventListener("click", showFredag)
    document.querySelector("#lor_sprite").addEventListener("click", showLordag)
    document.querySelector("#son_sprite").addEventListener("click", showSondag)
  }

  function showOnsdag(){
    console.log("showOnsdag")
    document.querySelector("#mandag_skema").classList.add("hide")
    document.querySelector("#tirsdag_skema").classList.add("hide");
    document.querySelector("#torsdag_skema").classList.add("hide");
    document.querySelector("#fredag_skema").classList.add("hide");
    document.querySelector("#lordag_skema").classList.add("hide");
    document.querySelector("#sondag_skema").classList.add("hide");

    document.querySelector("#onsdag_skema").classList.remove("hide");

    document.querySelector("#man_sprite").classList.remove("larger");
    document.querySelector("#tir_sprite").classList.remove("larger");
    document.querySelector("#ons_sprite").classList.add("larger");
    document.querySelector("#tor_sprite").classList.remove("larger");
    document.querySelector("#fre_sprite").classList.remove("larger");
    document.querySelector("#lor_sprite").classList.remove("larger");
    document.querySelector("#son_sprite").classList.remove("larger");
  
    document.querySelector("#man_sprite").addEventListener("click", showMandag)
    document.querySelector("#tir_sprite").addEventListener("click", showTirsdag)
    document.querySelector("#ons_sprite").addEventListener("click", showOnsdag)
    document.querySelector("#tor_sprite").addEventListener("click", showTorsdag)
    document.querySelector("#fre_sprite").addEventListener("click", showFredag)
    document.querySelector("#lor_sprite").addEventListener("click", showLordag)
    document.querySelector("#son_sprite").addEventListener("click", showSondag) 
  }

  function showTorsdag(){
    console.log("showTorsdag")
    document.querySelector("#mandag_skema").classList.add("hide")
    document.querySelector("#tirsdag_skema").classList.add("hide");
    document.querySelector("#onsdag_skema").classList.add("hide");
    document.querySelector("#fredag_skema").classList.add("hide");
    document.querySelector("#lordag_skema").classList.add("hide");
    document.querySelector("#sondag_skema").classList.add("hide");

    document.querySelector("#torsdag_skema").classList.remove("hide");

    document.querySelector("#man_sprite").classList.remove("larger");
    document.querySelector("#tir_sprite").classList.remove("larger");
    document.querySelector("#ons_sprite").classList.remove("larger");
    document.querySelector("#tor_sprite").classList.add("larger");
    document.querySelector("#fre_sprite").classList.remove("larger");
    document.querySelector("#lor_sprite").classList.remove("larger");
    document.querySelector("#son_sprite").classList.remove("larger");
  
    document.querySelector("#man_sprite").addEventListener("click", showMandag)
    document.querySelector("#tir_sprite").addEventListener("click", showTirsdag)
    document.querySelector("#ons_sprite").addEventListener("click", showOnsdag)
    document.querySelector("#tor_sprite").addEventListener("click", showTorsdag)
    document.querySelector("#fre_sprite").addEventListener("click", showFredag)
    document.querySelector("#lor_sprite").addEventListener("click", showLordag)
    document.querySelector("#son_sprite").addEventListener("click", showSondag) 
    
  }

  function showFredag(){
    console.log("showFredag")
    document.querySelector("#mandag_skema").classList.add("hide")
    document.querySelector("#tirsdag_skema").classList.add("hide");
    document.querySelector("#onsdag_skema").classList.add("hide");
    document.querySelector("#torsdag_skema").classList.add("hide");
    document.querySelector("#lordag_skema").classList.add("hide");
    document.querySelector("#sondag_skema").classList.add("hide");

    document.querySelector("#fredag_skema").classList.remove("hide");

    document.querySelector("#man_sprite").classList.remove("larger");
    document.querySelector("#tir_sprite").classList.remove("larger");
    document.querySelector("#ons_sprite").classList.remove("larger");
    document.querySelector("#tor_sprite").classList.remove("larger");
    document.querySelector("#fre_sprite").classList.add("larger");
    document.querySelector("#lor_sprite").classList.remove("larger");
    document.querySelector("#son_sprite").classList.remove("larger");
  
    document.querySelector("#man_sprite").addEventListener("click", showMandag)
    document.querySelector("#tir_sprite").addEventListener("click", showTirsdag)
    document.querySelector("#ons_sprite").addEventListener("click", showOnsdag)
    document.querySelector("#tor_sprite").addEventListener("click", showTorsdag)
    document.querySelector("#fre_sprite").addEventListener("click", showFredag)
    document.querySelector("#lor_sprite").addEventListener("click", showLordag)
    document.querySelector("#son_sprite").addEventListener("click", showSondag) 
  }

  function showLordag(){
    console.log("showLordag")
    document.querySelector("#mandag_skema").classList.add("hide")
    document.querySelector("#tirsdag_skema").classList.add("hide");
    document.querySelector("#onsdag_skema").classList.add("hide");
    document.querySelector("#torsdag_skema").classList.add("hide");
    document.querySelector("#fredag_skema").classList.add("hide");
    document.querySelector("#sondag_skema").classList.add("hide");

    document.querySelector("#lordag_skema").classList.remove("hide");

    document.querySelector("#man_sprite").classList.remove("larger");
    document.querySelector("#tir_sprite").classList.remove("larger");
    document.querySelector("#ons_sprite").classList.remove("larger");
    document.querySelector("#tor_sprite").classList.remove("larger");
    document.querySelector("#fre_sprite").classList.remove("larger");
    document.querySelector("#lor_sprite").classList.add("larger");
    document.querySelector("#son_sprite").classList.remove("larger");
  
    document.querySelector("#man_sprite").addEventListener("click", showMandag)
    document.querySelector("#tir_sprite").addEventListener("click", showTirsdag)
    document.querySelector("#ons_sprite").addEventListener("click", showOnsdag)
    document.querySelector("#tor_sprite").addEventListener("click", showTorsdag)
    document.querySelector("#fre_sprite").addEventListener("click", showFredag)
    document.querySelector("#lor_sprite").addEventListener("click", showLordag)
    document.querySelector("#son_sprite").addEventListener("click", showSondag) 
  }

  function showSondag(){
    console.log("showSondag")
    document.querySelector("#mandag_skema").classList.add("hide")
    document.querySelector("#tirsdag_skema").classList.add("hide");
    document.querySelector("#onsdag_skema").classList.add("hide");
    document.querySelector("#torsdag_skema").classList.add("hide");
    document.querySelector("#fredag_skema").classList.add("hide");
    document.querySelector("#lordag_skema").classList.add("hide");

    document.querySelector("#sondag_skema").classList.remove("hide");

    document.querySelector("#man_sprite").classList.remove("larger");
    document.querySelector("#tir_sprite").classList.remove("larger");
    document.querySelector("#ons_sprite").classList.remove("larger");
    document.querySelector("#tor_sprite").classList.remove("larger");
    document.querySelector("#fre_sprite").classList.remove("larger");
    document.querySelector("#lor_sprite").classList.remove("larger");
    document.querySelector("#son_sprite").classList.add("larger");
  
    document.querySelector("#man_sprite").addEventListener("click", showMandag)
    document.querySelector("#tir_sprite").addEventListener("click", showTirsdag)
    document.querySelector("#ons_sprite").addEventListener("click", showOnsdag)
    document.querySelector("#tor_sprite").addEventListener("click", showTorsdag)
    document.querySelector("#fre_sprite").addEventListener("click", showFredag)
    document.querySelector("#lor_sprite").addEventListener("click", showLordag)
    document.querySelector("#son_sprite").addEventListener("click", showSondag) 
  }