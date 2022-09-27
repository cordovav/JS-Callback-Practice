const inventory = newInventory();
move(inventory).to(0, 0);

//adding movement to our character by including x,y and direction

const character = newImage("assets/green-character/static.gif");

//changed the to into witharrowkeys so the charcter canbe controlled by arrowkeys
move(character).withArrowKeys(100, 250, handleDirectionChange);

//wrap the if statement into a function
//added the event listner for the keypad to control the character  
//function moveCharacter()

function handleDirectionChange(direction){
    if(direction === null)
    {character.src = 'assets/green-character/static.gif'}

    if(direction === 'west')
    {character.src = 'assets/green-character/west.gif'}
    
    if(direction === 'north')
    {character.src = 'assets/green-character/north.gif'}

    if(direction === 'east')
    {character.src = 'assets/green-character/east.gif'}

    if(direction === 'south')
    {character.src = 'assets/green-character/south.gif'}
}



move(newImage("assets/tree.png")).to(200, 450);
move(newImage("assets/pillar.png")).to(350, 250);
move(newImage("assets/pine-tree.png")).to(450, 350);
move(newImage("assets/crate.png")).to(150, 350);
move(newImage("assets/well.png")).to(500, 575);
move(newItem("assets/sword.png")).to(500, 555);
move(newItem("assets/shield.png")).to(165, 335);
move(newItem("assets/staff.png")).to(600, 250);
