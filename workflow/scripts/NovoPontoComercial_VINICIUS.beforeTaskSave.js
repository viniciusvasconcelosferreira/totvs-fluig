function beforeTaskSave(colleagueId, nextSequenceId, userList) {
	let anexos = hAPI.listAttachments(); //Pega os anexos do processo
	let temAnexos = false;

	for (let i = 0; i < anexos.size(); i++) {
		let anexoAtual = anexos.get(i);

		if (anexoAtual.getDocumentDescription() == "Proposta Comercial.pdf") {
			temAnexos = true;
		}
	}

	if (temAnexos == false) {
		throw "Proposta Comercial não foi anexada.";
	}
}