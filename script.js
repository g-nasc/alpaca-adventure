const chao = document.getElementById('chao');
let posicaoChao = 0;
let velocidade = 3;
let jogoRodando = true;
let tempo = 0;

function moverChao(){
    tempo++;
    if (tempo % 800 === 0) {
    velocidade += 0.35;
    }
   
    if (!jogoRodando) return;
    posicaoChao -= velocidade;
    chao.style.backgroundPositionX = `${posicaoChao}px`
    requestAnimationFrame(moverChao);
}
moverChao();

//Area de pulo

const alpaca = document.getElementById('alpaca');
let posicaoY = 0;
let velocidadeY = 0;
const gravidade = 0.25;
const impulso = 9.75;
const chaoY = 0;
let pulando = false;

function atualizarPulo() {
    if(pulando) {
        velocidadeY -= gravidade;
        posicaoY += velocidadeY;

        if(posicaoY <= chaoY) {
            posicaoY = chaoY;
            velocidadeY = 0;
            pulando = false;
            alpaca.style.backgroundImage = "url('assets/alpaca.gif')";
        }
        alpaca.style.bottom = `${32 + posicaoY}px`
    }
    requestAnimationFrame(atualizarPulo)
}

document.addEventListener('keydown', function(event){
    if(event.code === 'Space' && !pulando){
        pulando = true;
        velocidadeY = impulso;
        alpaca.style.backgroundImage = "url('assets/alpaca-pulando.png')";
    }

});
atualizarPulo();

const cacto = document.getElementById('cacto');
let posicaoCacto = 800;
const larguraTela = 800;
const espacamento = 600;

const hitboxAlpaca = document.getElementById('hitbox-alpaca');
const hitboxCacto = document.getElementById('hitbox-cacto');

function moverCacto() {
    posicaoCacto -= velocidade;
    if (posicaoCacto < -200) {
        posicaoCacto = larguraTela + espacamento;
    }

    cacto.style.left = `${posicaoCacto}px`;
    if (detectarColisao()) {
        console.log("Colisão!!")
        jogoRodando = false;
        return;
    }
    requestAnimationFrame(moverCacto);
}
moverCacto();


function detectarColisao() {
  const rectA = hitboxAlpaca.getBoundingClientRect();
  const rectB = hitboxCacto.getBoundingClientRect();

  return (
    rectA.left < rectB.right &&
    rectA.right > rectB.left &&
    rectA.top < rectB.bottom &&
    rectA.bottom > rectB.top
  );
}

const reset = document.getElementById('reset')
reset.addEventListener("click", reseta)

function reseta() {
    location.reload();
}


const fundo = document.getElementById('fundo');
let posicaoFundo = 0;

function moverCenario() {
    if (!jogoRodando) return;

    posicaoFundo -= velocidade * 0.05;

    fundo.style.backgroundPositionX = `${posicaoFundo}px`;

    requestAnimationFrame(moverCenario);
}
moverCenario();

const nuvens = document.getElementById('nuvens');
let posicaoNuvens = 0;

function moverNuvens() {
    if (!jogoRodando) return;

    posicaoNuvens -= velocidade * 0.0125;

    nuvens.style.backgroundPositionX = `${posicaoNuvens}px`;

    requestAnimationFrame(moverNuvens);
}
moverNuvens();