var config = {
    type: Phaser.AUTO,
    width: 360,
    height: 640,
    backgroundColor: 'FFCCE5',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('silly', 'assests/silly.jpeg');
    this.load.image('love', 'assests/love.jpeg');
    this.load.image('cool', 'assests/cool.jpeg');
    this.load.image('neutral', 'assests/neutral.png');
}

function create ()
{
    
    var silly = this.add.sprite(100, 100, 'silly');
    silly.setScale(0.15);
    silly.setInteractive();
    this.input.setDraggable(silly);
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
    var love = this.add.sprite(150, 150, 'love');
    love.setScale(0.15);
    love.setInteractive();
    this.input.setDraggable(love);
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });

    var cool = this.add.sprite(200, 200, 'cool');
    cool.setScale(0.15);
    cool.setInteractive();
    this.input.setDraggable(cool);
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
    var neutral = this.add.sprite(250, 250, 'neutral');
    neutral.setScale(0.05);
    neutral.setInteractive();
    this.input.setDraggable(neutral);
    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });
}
