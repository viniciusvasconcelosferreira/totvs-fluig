function validateForm(form) {

    var msg = '';
    /* Requisitante */
    if (form.getValue('nome') == '') {
        msg += 'Campo Nome não foi preenchido.<br>';
    }
    if (form.getValue('email') == '') {
        msg += 'Campo Email não foi preenchido.<br>';
    }
    if (form.getValue('telefone') == '') {
        msg += 'Campo Telefone não foi preenchido.<br>';
    }
    if (form.getValue('documentoIdentidade') == '') {
        msg += 'Campo Documento de Identidade não foi preenchido.<br>';
    }
    if (form.getValue('dataNascimento') == '') {
        msg += 'Campo Data de Nascimento não foi preenchido.<br>';
    }
    /* Ponto Comercial */
    if (form.getValue('pais') == '' || form.getValue('pais') == null) {
        msg += 'Campo País não foi selecionado.<br>';
    }
    if (form.getValue('tipoPonto') == '') {
        msg += 'Campo Tipo de Ponto não foi selecionado.<br>';
    }
    if (form.getValue('cep') == '') {
        msg += 'Campo Cep não foi preenchido.<br>';
    }
    if (form.getValue('logradouro') == '') {
        msg += 'Campo Logradouro não foi preenchido.<br>';
    }
    if (form.getValue('bairro') == '') {
        msg += 'Campo Bairro não foi preenchido.<br>';
    }
    if (form.getValue('cidade') == '') {
        msg += 'Campo Cidade não foi preenchido.<br>';
    }
    if (form.getValue('estado') == '') {
        msg += 'Campo Estado não foi preenchido.<br>';
    }
    if (form.getValue('numero') == '') {
        msg += 'Campo Numero não foi preenchido.<br>';
    }
    if (form.getValue('domingo') != "on" && form.getValue('segunda') != "on" && form.getValue('terca') != "on" && form.getValue('quarta') != "on" && form.getValue('quinta') != "on" && form.getValue('sexta') != "on" && form.getValue('sabado') != "on") {
        msg += 'Campo Dias de Funcionamento não foi selecionado.<br>';
    }
    /* Financeiro */
    if (form.getValue('valor') == '') {
        msg += 'Campo Valor não foi preenchido.<br>';
    }
    /* Responsáveis */
    let responsaveis = form.getChildrenIndexes('responsaveisTabela');
    if (responsaveis.length == 0) {
        msg += 'Campo Responsáveis não foi informado.<br>'
    }
    if (msg != '') {
        throw msg;
    }
}