//document.addEventListener('DOMContentLoaded', function(){
//    document.getElementById('btn-buscar-cep').addEventListener('click',function() {
    //Ajax - asynchronous JavaScript and XML
//      const xhttp = new XMLHttpRequest();
//      const cep = document.getElementById('cep').value;
//      const endpoint = `https://viacep.com/ws/${cep}/json`;

//        xhttp.open('GET', endpoint);
//        xhttp.send();

// https://viacep.com/ws/123123132/json
//   })
//})



$(document).ready(function() {
    $('#cep').mask("00000-000");

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com/ws/${cep}/json`;
        const botao =$(this);
        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(respota) {
            const logradouro = respota.logradouro;
            const bairro = respota.bairro;
            const cidade = respota.localidade;
            const estado = respota.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco)

            setTimeout(function() {
                $(botao).find('i').removeClassClass('d-none');
                $(botao).find('span').addClassClass('d-none');
            },2000);
        })
    })
})