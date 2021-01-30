class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton("Play")
        this.greeting = createElement('h3')
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h2')
        title.html("car racing game")
        title.position (200,200)
       
        this.input.position (300,300)
        this.button.position (350,350)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount = playerCount+1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);
            this.greeting.position(150,150);
        })
    }
}