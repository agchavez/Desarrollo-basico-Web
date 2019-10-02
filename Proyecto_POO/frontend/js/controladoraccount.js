function account(){
    let temp = document.getElementById('usuario').value;
    if (temp == 2){
        location.href='accountcompany_promerca.html';
    }else if(temp ==1){
        location.href='accountclient_promerca.html';
    }
}