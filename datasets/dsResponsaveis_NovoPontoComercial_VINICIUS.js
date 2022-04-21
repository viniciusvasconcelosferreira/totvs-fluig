function defineStructure() {

}

function onSync(lastSyncDate) {

}

function createDataset(fields, constraints, sortFields) {
    let ds = DatasetBuilder.newDataset();
    ds.addColumn("login");
    ds.addColumn("nome");

    //CAMPO - VALOR INICIAL - VALOR FINAL - TIPO
    let filtroGrupo = DatasetFactory.createConstraint("colleagueGroupPK.groupId", "Responsaveis_NovoPontoComercial_VINICIUS", "Responsaveis_NovoPontoComercial_VINICIUS", ConstraintType.MUST);
    //NOME DO DATASET - CAMPOS - CONSTRAINTS(FILTRO) - ORDEM(ORDENAÇÃO)
    let datasetGrupo = DatasetFactory.getDataset("colleagueGroup", null, new Array(filtroGrupo), null);

    for (let i = 0; i < datasetGrupo.rowsCount; i++) {

        let colabGrupo = datasetGrupo.getValue(i, "colleagueGroupPK.colleagueId");

        //PEGAR OS DADOS DOS COLABORADORES
        let datasetColaborador = DatasetFactory.getDataset("colleague", null, null, null);

        for (let j = 0; j < datasetColaborador.rowsCount; j++) {
            let colabCol = datasetColaborador.getValue(j, "colleaguePK.colleagueId");
            let colabNome = datasetColaborador.getValue(j, "colleagueName");
            if (colabCol == colabGrupo) {
                ds.addRow(new Array(colabCol, colabNome));
            }
        }
    }

    return ds;

}

function onMobileSync(user) {

}