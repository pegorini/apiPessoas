 $('#CadastraPessoas').on('submit', function (e) {

    if (document.getElementById("CadastraPessoas").checkValidity()) {
        e.preventDefault();
        var data = $("input[name=dataNascimento]").val();
        var dataFormatada = data.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1');

        $.ajax({
                type: "POST",
                url: "/pessoas",
                data: JSON.stringify({
	                "nome":$("input[name=nome]").val(),
	                "sexo": $("#CadastraPessoas input[type='radio']:checked").val(),
	                "cpf": $("input[name=cpf]").val(),
	                "email" : $("input[name=email]").val(),
	                "dataNascimento" : dataFormatada,
	                "naturalidade" : $("input[name=naturalidade]").val(),
	                "nacionalidade" : $("input[name=nacionalidade]").val()
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(data){
                    $("#sucesso").show();
                    setTimeout(function () {
                                    $('#sucesso').fadeOut(1500);
                                }, 5000);
                    $('#CadastraPessoas input').val("");
               },
                error: function (response) {
                    $("#erro").text(response.responseJSON.Erro);
                    $("#erro").show();
                    setTimeout(function () {
                           $('#erro').fadeOut(1500);
                    }, 5000);
                    

                    }
        });
    }
    return false;
});