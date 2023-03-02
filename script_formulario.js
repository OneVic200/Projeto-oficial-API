function guardaFormulario(){
    var formCliente = new Object();

    formCliente.nome = document.getElementById("nome").value
    formCliente.sobrenome = document.getElementById("sobrenome").value
    formCliente.idade = document.getElementById("idade").value
    formCliente.cpf = document.getElementById("cpf").value
    formCliente.celular = document.getElementById("celular").value
    formCliente.bairro = document.getElementById("bairro").value
    formCliente.rua = document.getElementById("rua").value
    formCliente.numero = document.getElementById("numero").value

    var json = JSON.stringify("formCliente");
    document.getElementById("nomeImprimir").innerHTML = "<h3>Suas informações: </h3><br>" +  "Nome: " + formCliente.nome;
    document.getElementById("sobrenomeImprimir").innerHTML = "Sobrenome: " + formCliente.sobrenome;
    document.getElementById("idadeImprimir").innerHTML = "Idade: " + formCliente.idade;
    document.getElementById("cpfImprimir").innerHTML = "CPF: " + formCliente.cpf;
    document.getElementById("celularImprimir").innerHTML = "Calular: " + formCliente.celular;
    document.getElementById("bairroImprimir").innerHTML = "Bairro: " + formCliente.bairro;
    document.getElementById("ruaImprimir").innerHTML = "Rua: " + formCliente.rua;
    document.getElementById("numeroImprimir").innerHTML = "N°: " + formCliente.numero;

    console.log(json);

    console.log(formCliente.valueOf())

}