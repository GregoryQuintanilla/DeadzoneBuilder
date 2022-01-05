DZ.GCPS = {};
DZ.GCPS.Units = [];

//create the base profile
DZ.GCPS.Ranger = new DZ.Profile("Ranger",[1,2],5,5,5,1,2,1,25);
DZ.GCPS.Ranger.Keywords.push(DZ.Keywords.AerialDeployment());
DZ.GCPS.Ranger.Keywords.push(DZ.Keywords.JumpPack());

//Create a new option
//LAser Carbine Option
RangerLaserCarbineOption = new DZ.Option("Ranger","Troop",2,14);
//Create a weapon profile for the option
RangerLaserCarbine = new DZ.Weapon("Laser Carbine",6,0);
RangerLaserCarbine.Keywords.push(DZ.Keywords.RapidFire());
RangerLaserCarbine.Keywords.push(DZ.Keywords.WeightofFire(1));
//Add the weapon to the profile option
RangerLaserCarbineOption.Weapons.push(RangerLaserCarbine);
//add the option to the base profile
DZ.GCPS.Ranger.Options.push(RangerLaserCarbineOption);

//Ranger Flamethrower Option
RangerFlamerOption = new DZ.Option("Ranger","Troop",2,14);
RangerFlamer = new DZ.Weapon("Flamethrower",2,0);
RangerFlamer.Keywords.push(DZ.Keywords.ItBurns());
RangerFlamerOption.Weapons.push(RangerFlamer);
DZ.GCPS.Ranger.Options.push(RangerFlamerOption);

//Ranger Laser carbine & Thermal Mines Option
RangerLaserCarbineThermalMineOption = new DZ.Option("Ranger","Specialist",2,16);
RangerLaserCarbineThermalMineOption.Weapons.push(RangerLaserCarbine);
RangerThermalMines = new DZ.Weapon("Thermal Mines",0,3);
RangerLaserCarbineThermalMineOption.Weapons.push(RangerThermalMines);
DZ.GCPS.Ranger.Options.push(RangerLaserCarbineThermalMineOption);
//Ranger Accutek LW-AWP Option
RangerAccutekLWAWPOption = new DZ.Option("Ranger",3,19);
RangerAccutekLWAWP = new DZ.Weapon("Accutek LW-AWP",10,0);
RangerAccutekLWAWP.Keywords.push(DZ.Keywords.SniperScope());
RangerAccutekLWAWPOption.Weapons.push(RangerAccutekLWAWP);
DZ.GCPS.Ranger.Options.push(RangerAccutekLWAWPOption);
//Ranger Thermal Rifle Option
RangerThermalRifleOption = new DZ.Option("Ranger",2,16);
RangerThermalRifle = new DZ.Weapon("Thermal Rifle",4,2);
RangerThermalRifleOption.Weapons.push(RangerThermalRifle);
DZ.GCPS.Ranger.Options.push(RangerThermalRifleOption);



DZ.GCPS.Units.push(DZ.GCPS.Ranger);
