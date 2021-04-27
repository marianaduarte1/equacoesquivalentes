var telaatual = "menu"
let img;
let img_jogo1;
let img_jogo2;
let img_jogo3;
let img_jogo4;
var pontos = 0
var fase1 = "primeira"



function mouseClicked() {
  if (telaatual === "menu") { 
    if (mouseX >= 250 && mouseX <= 370 && mouseY >= 180 && mouseY <= 220) {
      telaatual = "cred" 
    }
    
    if (mouseX >= 250 && mouseX <= 370 && mouseY >= 120 && mouseY <= 160) {
      telaatual = "jogo"  
    } 
    if(mouseX >= 250 && mouseX <= 370 && mouseY >= 240 && mouseY <= 280){
      telaatual = "info"  
    }
    
  } else if (telaatual === "cred") { 
    if (mouseX >= 10 && mouseX <= 90 && mouseY >= 50 && mouseY <= 70) {
      telaatual = "menu"
    }
  } else if (telaatual === "jogo") { 
    // botao voltar
    if (mouseX >= 10 && mouseX <= 90 && mouseY >= 30 && mouseY <= 50) {      
      telaatual = "menu"
    }
    // primeira questao
    else if(fase1 == "primeira"){
    if (mouseX >= 60 && mouseX <= 145 && mouseY >= 230 && mouseY <= 270){
      fase1 = "segunda"
      pontos++
    }
    if(mouseX >= 200 && mouseX <= 285 && mouseY >=230 && mouseY <= 270){ 
    fase1 = "segunda"
    }
    
    if(mouseX >= 330 && mouseX <=415 && mouseY >= 230 && mouseY <= 270){  
    fase1 = "segunda"
      
    }
    if(mouseX >= 460 && mouseX <= 545 && mouseY >= 230 && mouseY <= 270){ 
    fase1 = "segunda"
      
    }
    }
    // segunda questao
    else if(fase1 == "segunda"){
     if (mouseX >= 60 && mouseX <= 145 && mouseY >= 230 && mouseY <= 270){
      fase1 = "terceira"
    }
    if(mouseX >= 200 && mouseX <= 285 && mouseY >=230 && mouseY <= 270){ 
    fase1 = "terceira"
    }
    
    if(mouseX >= 330 && mouseX <=415 && mouseY >= 230 && mouseY <= 270){  
    fase1 = "terceira"
       pontos++
    }
    if(mouseX >= 460 && mouseX <= 545 && mouseY >= 230 && mouseY <= 270){ 
    fase1 = "terceira"
      
    }
    }
    // terceira questão
    else if(fase1 == "terceira"){
     if (mouseX >= 60 && mouseX <= 145 && mouseY >= 230 && mouseY <= 270){
      fase1 = "quarta"
    }
    if(mouseX >= 200 && mouseX <= 285 && mouseY >=230 && mouseY <= 270){ 
    fase1 = "quarta"
    pontos++
    }
    
    if(mouseX >= 330 && mouseX <=415 && mouseY >= 230 && mouseY <= 270){  
    fase1 = "quarta"

    }
    if(mouseX >= 460 && mouseX <= 545 && mouseY >= 230 && mouseY <= 270){ 
    fase1 = "quarta"
      
    }
    }
    // quarta questao
    else if(fase1 == "quarta"){
     if (mouseX >= 60 && mouseX <= 145 && mouseY >= 250 && mouseY <= 280){
      fase1 = "quinta"
    }
    if(mouseX >= 200 && mouseX <= 285 && mouseY >=250 && mouseY <= 280){ 
    fase1 = "quinta"
    }
    
    if(mouseX >= 330 && mouseX <=415 && mouseY >= 250 && mouseY <= 280){  
    fase1 = "quinta"

    }
    if(mouseX >= 460 && mouseX <= 545 && mouseY >= 250 && mouseY <= 280){ 
    fase1 = "quinta"
    pontos++
    }
    }
    // quinta questao
        else if(fase1 == "quinta"){
     if (mouseX >= 60 && mouseX <= 145 && mouseY >= 230 && mouseY <= 270){
      fase1 = "sexta"
       pontos++
    }
    if(mouseX >= 200 && mouseX <= 285 && mouseY >=230 && mouseY <= 270){ 
    fase1 = "sexta"
    }
    
    if(mouseX >= 330 && mouseX <=415 && mouseY >= 230 && mouseY <= 270){  
    fase1 = "sexta"

    }
    if(mouseX >= 460 && mouseX <= 545 && mouseY >= 230 && mouseY <= 270){ 
    fase1 = "sexta"
      
    }
    }
    
    
  }
  
  else {
    telaatual = "menu"
  }
  
}

function preload() {
  img = loadImage('assets/foto.jpg');
  img_jogo1 = loadImage ('assets/lampada.png')
  img_jogo2 = loadImage('assets/caixas.png')
  img_jogo3 = loadImage ('assets/pizza.png')
  img_jogo4 = loadImage ('assets/bolo.png')
  img_info = loadImage ('assets/teladeinfo.png')
  img_telainicial = loadImage ('assets/telainicial.png')
}

function setup() {
  createCanvas(600, 400);

}
function get_menu () {
  
  pontos = 0 
  fase1 = "primeira"
  fill(255)
  rect(250, 120, 120, 40,15);
  rect(250, 180, 120, 40,15);
  rect(250, 240, 120, 40,15)
  textAlign(CENTER, CENTER);
  fill(0)
  textSize(22)
  text("Jogar", 250, 120, 120, 40);
  text("Créditos", 250, 180, 120, 40);
  textSize(20)
  text("Informações", 252, 240, 120, 40);
  image(img_telainicial,10, 10, 170, 370)
}


function get_cred(){
  textAlign(LEFT, TOP);
  text("Estudante do curso Ciências e \nTecnologia da Universidade Federal do Rio Grande do Norte.", 150, 100, 200, 250);
  image(img, 150 - img.width / 10 - 10, 90, img.width / 10, img.height / 10);
  fill(255)
  rect(10, 50, 80, 20,10);
  textAlign(CENTER, CENTER)
  fill(0)
  textSize(12)
  text("Voltar", 10, 50, 80, 20);
}


function get_jogo(){
  fill(255)
  rect(10, 30, 80, 20,20);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(12)
  text("Voltar", 10, 30, 80, 20);

  
  if(fase1 == "primeira"){
    textSize(22)
    text("Pontos: " + pontos, 450, 40);
    textSize(22)
    text("Marque a fração equivalente aos blocos:",300,100);

    fill(131,111,255);
    rect(190,150,55,55)
    rect(245,150,55,55)
    fill(250);
    rect(300,150,55,55)
    rect(355,150,55,55)

    fill(255);
    rect(60,230,85,40,20);
    rect(200,230,85,40,20);
    rect(330,230,85,40,20);
    rect(460,230,85,40,20);


    fill(0)
    textAlign(CENTER,CENTER)
    text("a.6/12",100,250)
    text("b.1/5",240,250)
    text("c.3/8",370,250)
    text("d.4/12",500,250)
  }
  else if(fase1 == "segunda"){
    textSize(22)
    text("Pontos: " + pontos, 450, 40);
    textSize(22)
    text("Marque a fração equivalente as lâmpadas:",300,75);
    image (img_jogo1, 400 - img_jogo1.width / 7 - 7, 100, img_jogo1.width / 7, img_jogo1.height / 7)
    
    fill(255);
    rect(60,230,85,40,20);
    rect(200,230,85,40,20);
    rect(330,230,85,40,20);
    rect(460,230,85,40,20);


    fill(0)
    textAlign(CENTER,CENTER)
    text("a.5/8",100,250)
    text("b.4/5",240,250)
    text("c.2/5",370,250)
    text("d.4/8",500,250)
    
  }
  
  
  else if(fase1 == "terceira"){
    textSize(22)
    text("Pontos: " + pontos, 450, 40);
    textSize(22)
    text("Marque a fração equivalente as caixas abertas:",300,100);
    image (img_jogo2, 100 , 150, 400, 60)
    
    fill(255);
    rect(60,230,85,40,20);
    rect(200,230,85,40,20);
    rect(330,230,85,40,20);
    rect(460,230,85,40,20);


    fill(0)
    textAlign(CENTER,CENTER)
    text("a.9/2",100,250)
    text("b.6/12",240,250)
    text("c.7/2",370,250)
    text("d.1/12",500,250)
    
  }
  
   else if(fase1 == "quarta"){
    textSize(22)
    text("Pontos: " + pontos, 450, 40);
    textSize(19)
    text("Marque a fração equivalente a pizza:",300,70);
    image (img_jogo3, 400 - img_jogo3.width / 2 - 2 , 84, img_jogo3.width / 2, img_jogo3.height / 2)
    
    fill(255);
    rect(60,250,85,40,20);
    rect(200,250,85,40,20);
    rect(330,250,85,40,20);
    rect(460,250,85,40,20);


    fill(0)
    textAlign(CENTER,CENTER)
    text("a.9/2",100,270)
    text("b.6/12",240,270)
    text("c.7/2",370,270)
    text("d.20/24",500,270)
    
  }
  
    else if(fase1 == "quinta"){
    textSize(22)
    text("Pontos: " + pontos, 450, 40);
    textSize(22)
    text("Marque a fração equivalente ao bolo:",300,90);
    image (img_jogo4, 380 - img_jogo4.width / 1 - 1 , 120, img_jogo4.width / 1, img_jogo4.height / 1)
    
    fill(255);
    rect(60,230,85,40,20);
    rect(200,230,85,40,20);
    rect(330,230,85,40,20);
    rect(460,230,85,40,20);


    fill(0)
    textAlign(CENTER,CENTER)
    text("a.70/90",100,250)
    text("b.2/3",240,250)
    text("c.22/32",370,250)
    text("d.1/9",500,250)  
  }
  else{
    get_telafinal();
    
  }
}

function get_telafinal(){
  fill(255);
  rect(200,145,200,50,20)
  textAlign(CENTER,CENTER)
  fill(0)
  textSize(32)
  text("FIM",200,145,200,50)
  textSize(22)
  text("Pontuação Final: "+pontos,200,205,200,50)
  if(pontos>=3){
    text("PARABÉNS!",200,250,200,50)
  }
  else{
    text("NÃO DESISTA,TENTE NOVAMENTE!",180,250,240,50)
    
  }
    
}

function get_info(){
  fill(255)
  rect(10, 30, 80, 20,20);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(12)
  text("Voltar", 10, 30, 80, 20);
  
  textSize(32)
  text("Informações",200,70,200,50)
  fill(0)
  textSize(20)
  text("Objetivo do Jogo: reconhecer a representação fracionária das imagens apresentadas.",100,145,420,50)
  image(img_info,200 , 220, 200, 65);
  
  
}


function draw() {
  background(255,255,0);
  if (telaatual == "menu") {
    get_menu();

  } else if (telaatual == "cred") {
    get_cred();

  } else if (telaatual == "jogo") {
    get_jogo(); 
  }
  else if(telaatual == "info"){
    get_info();
  }
}