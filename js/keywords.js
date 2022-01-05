DZ.Keyword = function(name = "", description = "", dieRollModifier = 0, level = 0){
    this.Name = name;
    this.Description = description;
    this.DieRolleModifier = dieRollModifier;
    this.Level = level;
}

DZ.Keywords = {};
DZ.Keywords.AerialDeployment = function(){
    return new DZ.Keyword("Aerial Deployment","A model with this keyword may choose to make an aerial deployment. If it does so, do not deploy it with the rest of your Strike Team. Once both players have deployed their teams, but before any Scout or Recon moves, a model using aerial deployment may be deployed in any cube not containing an iobjective and provided it is at least tow cubes away from the nearest enemy model. If there are multiple cubes in a stack, it must deploy on the higest level.\nA model may always aerially deploy into the player's own deployment zone (if cube size limits allow it) but may never aerially deploy in the enemy's dpeloyment zone. If both players have models with aerial deployment then alternate aerial deployments starting with the player with the Initiative. If thi smeans that a model cannot be deployed legally then that model will have to instead be deployed within your deployment zone.",0,0);
}
DZ.Keywords.ItBurns = function(){
    return new DZ.Keyword("It Burns!","",0,0);
}
DZ.Keywords.JumpPack = function(){
    return new DZ.Keyword("Jump Pack","Short distance aeronautical gravitation devices can allow rapod movement around the battlefield.\nA model that has the Jump Pack keyword takes no damage and is not Pinned by falling.\n In addition, a model with a Jump Pack can:\n- Move up or down levels without needing a wall to climb.\n- jump over solid full cube height walls on the same level counting as a single cube of movement.\n- Jump over gaps in the floor of the same level (up to one cube wide), provided it has enough cubes of movement to do so.",0,0);
}
DZ.Keywords.RapidFire = function(){
    return new DZ.Keyword("Rapid Fire","",0,0);
}
DZ.Keywords.SniperScope = function(){
    return new DZ.Keyword("Sniper Scope","",0,0);
}
DZ.Keywords.WeightofFire = function(x=1){
    return new DZ.Keyword("Weight of Fire","",0,x);
}