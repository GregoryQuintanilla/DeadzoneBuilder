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
    }
}
function displayFactionUnits(){
    faction = document.getElementById("factionselector").value;
    console.log(faction);
    buildFactionSelect(faction);
}

function loadUnits(armyList){

}