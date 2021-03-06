class Game{
    constructor(){}

    getState(){
        var gsref = database.ref('gameState');
        gsref.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        });
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();

        }
    }
    play(){
        form.hide();
        textSize(30)
        text("gameStart",200,200)
        Player.getPlayerInfo();
        if (allPlayers !== undefined) {
            var ypos = 120;
            for( var plr in allPlayers){
                ypos = ypos + 20;
                textSize(15);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance,120,ypos);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 50;
            player.update();
        }
    }

}