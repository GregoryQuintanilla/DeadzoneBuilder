var tableStatArr = ["SP","RA","FI","SV","AR","HP","SZ","Base"];
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

        unitProfile.Options.forEach(optionProfile => {
          var unitOptionSpan = document.createElement("span");
          var unitOptionRadio = document.createElement("input");
          unitOptionRadio.type="radio";
          var inputName ="";
          var unitNameArr = unitProfile.Name.split(' ');
          for(var i = 0; i < unitNameArr.length - 1; i+=2){
            inputName = inputName + unitNameArr[i]+ "-";
            inptuName = inputName + unitNameArr[i]


          }
          unitNameArr.forEach(str =>{
            inputName = inputName + "-" + str
          });
          unitOptionRadio.name = inputName;
          console.log(unitOptionRadio.name);
        });
        var brk = document.createElement("br");
        profileDiv.appendChild(profDiv);
        profileDiv.appendChild(brk);
        profileDiv.appendChild(kwSpan);
        profileDiv.appendChild(profStatTable);
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
    faction = document.getElementById("factionselector").value;
    console.log(faction);
    buildFactionSelect(faction);
}

function loadUnits(armyList){

}