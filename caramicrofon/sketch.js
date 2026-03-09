let mic;//crea una variable pel micròfon
function setup() {
  createCanvas(600, 400); //Tamany de l'area del dibuix
  // el primer numero es l'amplada en pixels i el segon numero es l'alçada en pixels.
  mic=new p5.AudioIn ();//el microfon es una entrada de audio amb p5
  mic.start();//activa el microfon
}

function draw() {
  
let vol=mic.getLevel();
  let h=map(vol,0,1,0,20000);
  background(254,196,255); //color del fons
  // el primer numero es el nivel de vermell de vermell 'R' el segon, es el nivell de verd 'G' i el tercer, 'G' per tant RGB en htm. Dintre de background o fons
   fill(224,172,105); //color de la cara exterior
  //en el cas del fill sera el mateix pero el que es fa omplir de color en la figura següent que son dos ellipses.
  ellipse(300,200,200,250); //forma cara exterior
  // El primero numero es la  posicó x  del sentre de l'ellipsevdesde la cantonada superior esquerra que es al '0.0, el segon numero es la posicio y o alçada del centre de l'ellipse i el terçer numero es l'amplada de la elipse, i el cuart es l'amplada
  fill(255, 255, 255) //color dels ulls
  ellipse(250,160,35,25); // forma de l'ull dret perque x=250
  ellipse(350,160,35,25); // forma de l'ull esquerra perque x=350
  fill(255-h*1.5,0,0) //color de la boca
  arc(300,225,75,50+h,0,PI); //forma de la boca
}
