function setup() {
  createCanvas(600, 400); //Tamany de l'area del dibuix
  // el primer numero es l'amplada en pixels i el segon numero es l'alçada en pixels. 
}

function draw() {
  let sinus=sin(frameCount*0.01)*90;
  let cosinus=cos(frameCount*0.01)*900;
  let sinuscolor=sin(frameCount*0.01)*255;
  //sinus es una variable, es un nom que conte numeros que canvien,
  //es a dir una variable numèrica on guardem numeros que provenen 
  //de la funció sinus que genera numeros entre -1 i +1.
  //si els numeros entre -1 i +1 es transformaran en numeros entre -20 i +20,no seràn aleatoris sino que aniràn augmentant i disminuint sempre. Aquesta variable la puc sumar, multiplicar, dividir, o canviar en qualsevol parametre de les funcions següents
  background(254,sinuscolor,255-sinuscolor); //color del fons
  // el primer numero es el nivel de vermell de vermell 'R' el segon, es el nivell de verd 'G' i el tercer, 'G' per tant RGB en htm. Dintre de background o fons
   fill(224+sinus,172+sinus,105+sinus); //color de la cara exterior
  //en el cas del fill sera el mateix pero el que es fa omplir de color en la figura següent que son dos ellipses.
  ellipse(300,200,200,250); //forma cara exterior
  // El primero numero es la  posicó x  del sentre de l'ellipsevdesde la cantonada superior esquerra que es al '0.0, el segon numero es la posicio y o alçada del centre de l'ellipse i el terçer numero es l'amplada de la elipse, i el cuart es l'amplada
  fill(255, 255, 255) //color dels ulls
  ellipse(250+sinus,160,35,25); // forma de l'ull dret perque x=250
  ellipse(350+cosinus,160,35,25); // forma de l'ull esquerra perque x=350
  fill(255,110,110) //color de la boca
  arc(300,225+sinus,75,50,0,PI); //forma de la boca
}
