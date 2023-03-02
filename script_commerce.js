// Metodo fetch() para buscar o  arquivo dados.json ou qualquer API, transformando o resultado em um objeto usando o método response.json.

fetch('dados.json')
    .then(response => response.json())
    .then(corpo => {
        //teclado
        document.getElementById('imagem').innerHTML = corpo.teclado.image;
        document.getElementById('nome').innerHTML = corpo.teclado.name;
        document.getElementById('descricao').innerHTML = corpo.teclado.description;
        document.getElementById('preco').innerHTML = corpo.teclado.price;
        
        //mouse
        document.getElementById('imagem2').innerHTML = corpo.mouse.image;
        document.getElementById('nome2').innerHTML = corpo.mouse.name;
        document.getElementById('descricao2').innerHTML = corpo.mouse.description;
        document.getElementById('preco2').innerHTML = corpo.mouse.price;

         //monitor
         document.getElementById('imagem3').innerHTML = corpo.monitor.image;
         document.getElementById('nome3').innerHTML = corpo.monitor.name;
         document.getElementById('descricao3').innerHTML = corpo.monitor.description;
         document.getElementById('preco3').innerHTML = corpo.monitor.price;

         //placa de vídeo
         document.getElementById('imagem4').innerHTML = corpo.placa.image;
         document.getElementById('nome4').innerHTML = corpo.placa.name;
         document.getElementById('descricao4').innerHTML = corpo.placa.description;
         document.getElementById('preco4').innerHTML = corpo.placa.price;
    });