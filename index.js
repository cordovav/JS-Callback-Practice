const inventory = newInventory()
move(inventory).to(0, 0)

//adding movement to our character by including x,y and direction

const character = newImage('assets/green-character/static.gif')
let direction = null;
let x = 100;
let y = 250;
move(character).to(100, 250)

if (direction === 'west'){
    x = x-1
}
if (direction === 'north'){
    x = x+1
}
if (direction === 'east'){
    x = x+1
}
if (direction === 'south'){
    x = x-1
}



move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)