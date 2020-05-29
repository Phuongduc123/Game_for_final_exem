class Controller extends Phaser.Scene{
    constructor(){
        super({key:"Controller"});
    }
    preload ()
    {
        this.load.image('rabbit', 'pictures/rabbit.png');
    }
    
    create ()
    {
        var rabbit1 = this.add.sprite(200, 300, 'rabbit').setInteractive();
    
        rabbit1.on('pointerover', function () {
    
            this.setTint(0x00ff00);
    
        });
    
        rabbit1.on('pointerout', function () {
    
            this.clearTint();
    
        });
    
        this.input.setDraggable(rabbit1);
    
        this.input.on('dragstart', function (pointer, gameObject) {
    
            gameObject.setTint(0xff0000);
    
        });
    
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    
            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });
    
        this.input.on('dragend', function (pointer, gameObject) {
    
            gameObject.clearTint();
    
        });
    }
    
}