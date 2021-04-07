var canvas = new fabric.Canvas("myCanvas");
var player_object = "";

block_img_width = 50;
block_img_height = 50;

player_x = 250;
player_y = 50;

function playerupdate() {
    fabric.Image.fromURL("Baby-Groot.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(500);
        player_object.scaleToHeight(600);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
        
}

playerupdate();

function new_image(get_image) {
    fabric.Image.fromURL (get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_img_width);
    block_image_object.scaleToHeight(block_img_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });

    canvas.add(block_image_object)

    });
}

new_image("")