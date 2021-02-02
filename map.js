const actor = [
    {id: 12, name: 'Omar Sunni'},
    {id: 13, name: 'Manna'},
    {id: 14, name: 'Moyuri'},
    {id: 15, name: 'Dipjol'}
];
const actorName = [];
for(let i = 0; i < actor.length; i++){
    const name = actor[i].name;
    actorName.push(name);
}

console.log(actorName);

// map actor
const mapName = actor.map((element)=>{
    return element.name;
});
console.log(mapName);

// filter actor
const filterActor = actor.filter((element)=>{
    return element.id > 13;
})
console.log(filterActor);

// find actor 
const findActor = actor.find((element)=>{
    return element.id > 13;
});

console.log(findActor);