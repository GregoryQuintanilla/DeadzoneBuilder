var tableStatArr = ["SP","RA","FI","SV","AR","HP","SZ","Base"];
//helper funtion to add breaks to DOM
function createBreak(){
  return document.createElement("br");
}
function clearUnitEntries(){
  var unitEntries = document.getElementById("unit-entries");
  while(unitEntries.firstChild){
    unitEntries.removeChild(unitEntries.firstChild);
  }
}
function buildFactionSelect(faction){
    var unitList = null;
    switch(faction){
        case "asterians":
            alert("TODO: Asterian.js");
            break;
        case "enforcers":
            alert("TODO: enforcers.js");
            break;
        case "forgefathers":
            alert("TODO: forgefather.js");
            break;
        case "gcps":
            unitList = DZ.GCPS.Units;
            break;
        case "marauders":
            alert("TODO: marauder.js");
            break;
        case "mazonlabs":
            alert("TODO: mazonlabs.js");
            break;
        case "nameless":
            alert("TODO: nameless.js");
            break;
        case "rebs":
            alert("TODO: rebs.js");
            break;
        case "plauge":
            alert("TODO: plauge.js");
            break;
        case "veermyn":
            alert("TODO: veermyn.js");
            break;
    }
    if(unitList !== null){
      var profileDiv = document.createElement("div");
      profileDiv.class="unit-entry";


      //Begin Populating Profiles
      unitList.forEach( unitProfile =>{
        var profDiv = document.createElement("span")
        profDiv.textContent = unitProfile.Name;

        //Begin Creating Table
        var profStatTable = document.createElement("table");
        var header = profStatTable.createTHead();
        var body = profStatTable.createTBody();
        var hrow = header.insertRow(0); 
        var brow = body.insertRow(0);
        tableStatArr.forEach(stat =>{
          var hcell = hrow.insertCell();
          var bcell = brow.insertCell();
          hcell.innerHTML = stat;
          bcell.innerHTML = unitProfile.Stats[stat];
        }) 
        //end Stat Table Creation

        //Special Rules
        var kwSpan = document.createElement("span");
        var kwRuleStr = ""
        unitProfile.Keywords.forEach(kw =>{
          kwRuleStr = kwRuleStr + kw.Name +'-'; //LEFT OFF, radio name
        });
        kwSpan.textContent = kwRuleStr; 
        //End Keywords

        var unitNameArr = unitProfile.Name.split(' ');
        var inputName ="";
        var i = 0;
        while(i < unitNameArr.length-1){
          inputName = inputName + unitNameArr[i]+ "-";
          i++;
        }
        inputName = inputName + unitNameArr[i];

        //var brk = document.createElement("br");
        profileDiv.appendChild(profDiv);
        profileDiv.appendChild(createBreak());
        profileDiv.appendChild(kwSpan);
        profileDiv.appendChild(profStatTable);

        unitProfile.Options.forEach(optionProfile => {
          var unitOptionSpan = document.createElement("span");
          var unitOptionRadio = document.createElement("input");
          unitOptionRadio.setAttribute('type','radio');
          unitOptionRadio.setAttribute('name',inputName);
          unitOptionSpan.textContent = optionProfile.Type + " - " + optionProfile.Name + " for " + optionProfile.Cost;
          console.log(optionProfile);
          profileDiv.appendChild(unitOptionSpan);
          profileDiv.appendChild(unitOptionRadio);
          profileDiv.appendChild(createBreak());
        });
      });

      var listDiv = document.getElementById("unit-entries");
      listDiv.appendChild(profileDiv);
    }
    /*
    if(unitList !== null){
      // Drop down menu isn't user friendly. The Box with check boxes is much much better.
        console.log(unitList);
        var parentSelect = document.createElement("select");
        unitList.forEach(unitProfile =>{
            unitProfile.Options.forEach(optionProfile => {
                var curOption = document.createElement("OPTION");
                curOption.value = optionProfile.Name;
                curOption.appendChild(document.createTextNode(unitProfile.Name));
                parentSelect.appendChild(curOption);
            });
        });
        document.body.appendChild(parentSelect);
    } */
}
function displayFactionUnits(){
    var faction = document.getElementById("factionselector").value;
    clearUnitEntries();
    console.log(faction);
    buildFactionSelect(faction);
}

function loadUnits(armyList){

}