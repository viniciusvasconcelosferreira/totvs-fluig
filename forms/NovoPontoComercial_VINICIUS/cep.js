$('#cep').blur(function () {
		$.getJSON("https://viacep.com.br/ws/"+$('#cep').val()+"/json/",function (response) {
			$('#logradouro').val(response.logradouro);
			$('#bairro').val(response.bairro);
			$('#cidade').val(response.localidade);
			$('#estado').val(response.uf);
		});
	});