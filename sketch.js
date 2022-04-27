function preload(){
  BIMG = loadImage("Bunny.png")
  T1 = loadImage("Top1.png")
  T2 = loadImage("Top2.png")
  T3 = loadImage("Top3.png")
  T4 = loadImage("Top4.png")
  T5 = loadImage("Top5.png")
  T6 = loadImage("Top6.png")
  T7 = loadImage("Top7.png")
  B1 = loadImage("Bottom1.png")
  B2 = loadImage("Bottom2.png")
  B3 = loadImage("Bottom3.png")
  B4 = loadImage("Bottom4.png")
  B5 = loadImage("Bottom5-removebg-preview.png")
  B6 = loadImage("Bottom6.png")
  B7 = loadImage("Bottom7-removebg-preview.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  Bunny = createSprite(width/2,height/2)
  Bunny.addImage(BIMG)
  Bunny.scale = 0.5

  Top1 = createSprite(100,200)
  Top1.addImage(T1)
  Top1.scale = 0.4
  Top1.debug = false
  Top1.setCollider("rectangle",0,80,150,150)

  Top2 = createSprite(235,210)
  Top2.addImage(T2)
  Top2.scale = 0.6
  Top2.debug = false
  Top2.setCollider("rectangle",0,40,150,100)

  Top3 = createSprite(370,210)
  Top3.addImage(T3)
  Top3.scale = 0.6
  Top3.debug = false
  Top3.setCollider("rectangle",-10,40,100,100)
  
  Top4 = createSprite(80,320)
  Top4.addImage(T4)
  Top4.scale = 0.6
  Top4.debug = false
  Top4.setCollider("rectangle",-10,40,100,100)
  
  Top5 = createSprite(200,305)
  Top5.addImage(T5)
  Top5.scale = 0.6
  Top5.debug = false
  Top5.setCollider("rectangle",-10,40,100,100)
  
  Top6 = createSprite(320,315)
  Top6.addImage(T6)
  Top6.scale = 0.6
  Top6.debug = false
  Top6.setCollider("rectangle",-10,40,100,100)

  Top7 = createSprite(420,315)
  Top7.addImage(T7)
  Top7.scale = 0.6
  Top7.debug = false
  Top7.setCollider("rectangle",-10,40,100,100)

  Bottom1 = createSprite(870,160)
  Bottom1.addImage(B1)
  Bottom1.scale = 0.6
  Bottom1.debug = false
  Bottom1.setCollider("rectangle",-20,150,100,150)

  Bottom2 = createSprite(990,160)
  Bottom2.addImage(B2)
  Bottom2.scale = 0.4
  Bottom2.debug = false
  Bottom2.setCollider("rectangle",-20,200,100,150)

  Bottom3 = createSprite(1100,200)
  Bottom3.addImage(B3)
  Bottom3.scale = 0.4
  Bottom3.debug = false
  Bottom3.setCollider("rectangle",-30,100,100,100)
  
  Bottom4 = createSprite(800,315)
  Bottom4.addImage(B4)
  Bottom4.scale = 0.4
  Bottom4.debug = false
  Bottom4.setCollider("rectangle",-20,130,100,100)

  Bottom5 = createSprite(930,350)
  Bottom5.addImage(B5)
  Bottom5.scale = 0.4
  Bottom5.debug = false
  Bottom5.setCollider("rectangle",0,0,100,150)

  Bottom6 = createSprite(1050,315)
  Bottom6.addImage(B6)
  Bottom6.scale = 0.45
  Bottom6.debug = false
  Bottom6.setCollider("rectangle",0,130,100,100)

  Bottom7 = createSprite(1160,355)
  Bottom7.addImage(B7)
  Bottom7.scale = 0.4
  Bottom7.debug = false
  Bottom7.setCollider("rectangle",0,0,100,150)

  SL = createSprite(width/2,height/2)
  SL.addImage("T1", T1)
  SL.addImage("T2", T2)
  SL.addImage("T3", T3)
  SL.addImage("T4", T4)
  SL.addImage("T5", T5)
  SL.addImage("T6", T6)
  SL.addImage("T7", T7)

  SL.visible = false

  SR = createSprite(width/2,height/2)
  SR.addImage("B1", B1)
  SR.addImage("B2", B2)
  SR.addImage("B3", B3)
  SR.addImage("B4", B4)
  SR.addImage("B5", B5)
  SR.addImage("B6", B6)
  SR.addImage("B7", B7)

  SR.visible = false

}
function draw() {
  background("pink");  
if(mousePressedOver(Top1)){
  SL.visible = true
  SL.changeImage("T1")
  SL.scale = 0.5
}
if(mousePressedOver(Top2)){
  SL.visible = true
  SL.changeImage("T2")
  SL.scale = 0.5
  SL.x = width/2 - 0.5
}
if(mousePressedOver(Top3)){
  SL.visible = true
  SL.changeImage("T3")
  SL.scale = 0.5
}
if(mousePressedOver(Top4)){
  SL.visible = true
  SL.changeImage("T4")
  SL.x = width/2 + 2
  SL.scale = 0.6
}
if(mousePressedOver(Top5)){
  SL.visible = true
  SL.changeImage("T5")
  SL.scale = 0.5
  SL.x = width/2 + 0.7
}
if(mousePressedOver(Top6)){
  SL.visible = true
  SL.changeImage("T6")
  SL.scale = 0.5
}
if(mousePressedOver(Top7)){
  SL.visible = true
  SL.changeImage("T7")
  SL.scale = 0.6
  SL.x = width/2 + 1.2
  SL.y = height/2 - 0.8
}
if(mousePressedOver(Bottom1)){
  SR.visible = true
  SR.changeImage("B1")
  SR.scale = 0.5
  SR.x = width/2
  SR.y = height/2
}
if(mousePressedOver(Bottom2)){
  SR.visible = true
  SR.changeImage("B2")
  SR.scale = 0.5
  SR.x = width/2
  SR.y = height/2
}
if(mousePressedOver(Bottom3)){
  SR.visible = true
  SR.changeImage("B3")
  SR.scale = 0.5
  SR.x = width/2
  SR.y = height/2
}
if(mousePressedOver(Bottom4)){
  SR.visible = true
  SR.changeImage("B4")
  SR.scale = 0.5
  SR.x = width/2
  SR.y = height/2
}
if(mousePressedOver(Bottom5)){
  SR.visible = true
  SR.changeImage("B5")
  SR.scale = 0.5
  SR.y = height/2+80
  SR.x = width/2-8
}
if(mousePressedOver(Bottom6)){
  SR.visible = true
  SR.changeImage("B6")
  SR.scale = 0.5
  SR.x = width/2
  SR.y = height/2
}
if(mousePressedOver(Bottom7)){
  SR.visible = true
  SR.changeImage("B7")
  SR.scale = 0.47
  SR.y = height/2+80
  SR.x = width/2-7
}

  drawSprites();
}