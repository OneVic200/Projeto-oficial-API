const pessoa = '{"nome": "Hana Song", "idade": "19", "afiliacao": "Overwatch", "funcao": "Tanque", "link": "https://youtu.be/zlEWKEQsgeQ"}'
const pessoa2 = '{"nome": "Mei-Ling Zhou", "idade": "31", "afiliacao": "Overwatch", "funcao": "Dano", "link": "https://youtu.be/RPCItVuXMkI"}'
const pessoa3 = '{"nome": "Kiriko Kamori", "idade": "19", "afiliacao": "Overwatch", "funcao": "Suporte", "link": "https://youtu.be/C0rJJceoO_0"}'
const pessoa4 = '{"nome": "Siebren de Kuiper", "idade": "62", "afiliacao": "Talon", "funcao": "Tanque", "link": "https://youtu.be/j2fT2HI0_g4"}'
const pessoa5 = '{"nome": "Akande Ogundimu", "idade": "45", "afiliacao": "Talon", "funcao": "Tanque", "link": "https://youtu.be/BeLZAq9LV_I"}'
const pessoa6 = '{"nome": "Amélie Lacroix", "idade": "33", "afiliacao": "Talon", "funcao": "Dano", "link": "https://youtu.be/amKzjdlonZU"}'
const a = document.querySelector("#link")

const json = JSON.parse(pessoa);
const json2 = JSON.parse(pessoa2);
const json3 = JSON.parse(pessoa3);
const json4 = JSON.parse(pessoa4);
const json5 = JSON.parse(pessoa5);
const json6 = JSON.parse(pessoa6);


document.getElementById("botao").addEventListener("click", function () {
    document.getElementById("pessoas").innerHTML = "<b>Nome: </b>" + json.nome + "<br>" + "<b>Idade: </b>" + json.idade + "<br>" + "<b>Afiliação: </b>" + json.afiliacao + "<br>" + "<b>Função: </b>" + json.funcao + "<br>" ;
    document.getElementById("imagem").src = "imagens/dva.jpg";
    document.getElementById("descricao").innerHTML ="<b><h3>História de origem:</h3></b><br>" + "Hana Song, mais conhecida pelo artístico “D.Va”, é a número 1. Como ex-jogadora profissional, D.Va usa suas habilidades para pilotar um mecha e defender a Coreia do Sul. Ela e os outros pilotos, conhecidos como Esquadrão MEKA, são a linha de defensa entre o país e os Kishin invasores, uma ameaça mecânica das profundezas.";
    a.href = json.link;
});

document.getElementById("botao2").addEventListener("click", function () {
    document.getElementById("pessoas").innerHTML = "<b>Nome: </b>" + json2.nome + "<br>" + "<b>Idade: </b>" + json2.idade + "<br>" + "<b>Afiliação: </b>" + json2.afiliacao + "<br>" + "<b>Função: </b>" + json2.funcao + "<br>";
    document.getElementById("imagem").src = "imagens/mei.jpg";
    document.getElementById("descricao").innerHTML ="<b><h3>História de origem:</h3></b><br>" + "A equipe de Mei-Ling Zhou, uma climatologista sem igual estabelecida no Ecoponto: Antártica, foi forçada a entrar em congelamento criogênico durante uma tempestade turbulenta. Infelizmente, o congelamento durou mais tempo do que o pretendido e Mei despertou nove anos depois como a única sobrevivente da estação danificada. Com a ajuda de seu companheiro robô, Bola de Neve, ela inventou uma nova tecnologia para fugir da Antártica e se unir à nova Overwatch.";
    a.href = json2.link;
});

document.getElementById("botao3").addEventListener("click", function () {
    document.getElementById("pessoas").innerHTML = "<b>Nome: </b>" + json3.nome + "<br>" + "<b>Idade: </b>" + json3.idade + "<br>" + "<b>Afiliação: </b>" + json3.afiliacao + "<br>" + "<b>Função: </b>" + json3.funcao + "<br>";
    document.getElementById("imagem").src = "imagens/kiriko.jpg";
    document.getElementById("descricao").innerHTML ="<b><h3>História de origem:</h3></b><br>" + "Kiriko aprendeu a arte letal do ninjútsu com a mãe, Asa. Quando o clã Shimada caiu, os rivais, Hashimoto, fizeram o pai de Kiriko refém. Por segurança, Kiriko foi morar com a avó, que a ensinou a arte da cura. Anos depois, ela voltou à sua cidade natal para libertar a comunidade das garras cruéis dos Hashimoto.";
    a.href = json3.link;
});

document.getElementById("botao4").addEventListener("click", function () {
    document.getElementById("pessoas").innerHTML = "<b>Nome: </b>" + json4.nome + "<br>" + "<b>Idade: </b>" + json4.idade + "<br>" + "<b>Afiliação: </b>" + json4.afiliacao + "<br>" + "<b>Função: </b>" + json4.funcao + "<br>";
    document.getElementById("imagem").src = "imagens/sigma.jpg";
    document.getElementById("descricao").innerHTML ="<b><h3>História de origem:</h3></b><br>" + "A vida de Siebren de Kuiper, o famoso astrofísico, mudou para sempre quando um experimento falhou e lhe deu o poder de controlar a gravidade, mas dividiu sua mente. Agora, ele luta para manter sua conexão com a realidade, alheio ao fato de estar sendo manipulado pela Talon para os próprios fins.";
    a.href = json4.link;
});

document.getElementById("botao5").addEventListener("click", function () {
    document.getElementById("pessoas").innerHTML = "<b>Nome: </b>" + json5.nome + "<br>" + "<b>Idade: </b>" + json5.idade + "<br>" + "<b>Afiliação: </b>" + json5.afiliacao + "<br>" + "<b>Função: </b>" + json5.funcao + "<br>";
    document.getElementById("imagem").src = "imagens/doomfist.jpg";
    document.getElementById("descricao").innerHTML ="<b><h3>História de origem:</h3></b><br>" + "Um lutador exímio e líder nato, Akande Ogundimu perdeu o braço direito durante a Crise Ômnica e depois se uniu à Talon. Galgando escalões, ele matou seu chefe, o Doomfist anterior, e tomou a arma e título de mesmo nome. Agora, está determinado a lançar o mundo em um novo conflito por seus próprios fins misteriosos.";
    a.href = json5.link;
});

document.getElementById("botao6").addEventListener("click", function () {
    document.getElementById("pessoas").innerHTML = "<b>Nome: </b>" + json6.nome + "<br>" + "<b>Idade: </b>" + json6.idade + "<br>" + "<b>Afiliação: </b>" + json6.afiliacao + "<br>" + "<b>Função: </b>" + json6.funcao + "<br>";
    document.getElementById("imagem").src = "imagens/widowmaker.jpg";
    document.getElementById("descricao").innerHTML ="<b><h3>História de origem:</h3></b><br>" + "Há muito tempo, Amélie Lacroix, esposa de um agente da Overwatch, foi sequestrada pela Talon. Pouco depois de voltar para casa, ela matou o marido e desapareceu. Agora, “Widowmaker” é a arma mais eficiente da Talon, uma agente paciente e implacável que quase nunca demonstra emoção ou remorso, e só sente prazer no momento do abate.";
    a.href = json6.link;
});

console.log(json);
console.log(json2);
console.log(json3);
console.log(json4);
console.log(json5);
console.log(json6);