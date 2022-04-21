function resolve(process, colleague) {

    var userList = new java.util.ArrayList();

    let pais = "Aprovadores_" + hAPI.getCardValue('pais') + "_NovoPontoComercial_VINICIUS";

    userList.add("Pool:Group:" + pais);

    return userList;

}