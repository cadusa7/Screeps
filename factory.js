var factory = {

    run: function(){

var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    //console.log('Harvesters: ' + harvesters.length);

var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    //console.log('Upgraders: ' + upgraders.length);

var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);

if(harvesters.length < 4) {
    var newName = 'Harvester' + Game.time;
    console.log('Spawning new harvester: ' + newName);
    Game.spawns['CadusaBase'].spawnCreep([WORK,CARRY,MOVE], newName, {memory: {role: 'harvester'}});
    };
    
if(upgraders.length < 1) {
        var newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['CadusaBase'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'upgrader'}});
    }

    if(builders.length < 2) {
        var newName = 'Builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['CadusaBase'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'builder'}});
    }


    if(Game.spawns['CadusaBase'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['CadusaBase'].spawning.name];
        Game.spawns['CadusaBase'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['CadusaBase'].pos.x + 1, 
            Game.spawns['CadusaBase'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
}

};

module.exports = factory;