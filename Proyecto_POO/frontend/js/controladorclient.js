

var campos = [
    {campo:'firstName', valido:false},
    {campo:'email', valido:false},
    {campo:'lastName', valido:false},
    {campo:'address', valido:false},
    {campo:'number', valido:false},
    {campo:'codepostal', valido:false},
    {campo:'contry', valido:false},
    {campo:'password', valido:false},
    {campo:'genero', valido:false},
    {campo:'city', valido:false}
  ];
var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiempre','Octubre','Nombiembre','Diciembre'];

for (let i = 0; i < meses.length; i++)
    $('#meses').append(`<option value="${i}">${meses[i]}</option>`)
for (let i = 2019; i < 2030; i++) 
    $('#anios').append(`<option value="${i}">${i}</option>`)



$('#mopasword').click();
console.log('entro');

function pasword(value){
    password=document.getElementById("password");
    if(value){
        password.type = 'text';
        $('#mopasword').attr('onclick','pasword(false)');
        $('#mopasword').html('<i class="fas icono fa-eye-slash"></i>');
    } 
    else {
        password.type = 'password';
        $('#mopasword').attr('onclick','pasword(true)');
        $('#mopasword').html('<i class="fas icono fa-eye"></i>');
    }
}

function crearcuenta(){
    validarcampos();
    for (let i=0;i<campos.length;i++)
        if (!campos[i].valido) return;
    if(!validartargeta())return;

    var persona = {
        firstName: $('#firstName').val(),
        email: $('#email').val(),
        lastName: $('#lastName').val(),
        address: $('#address').val(),
        number: $('#number').val(),
        codepostal: $('#codepostal').val(),
        contry: $('#contry').val(),
        password: $('#password').val(),
        genero: $('#genero').val(),
        city: $('#city').val()
      }
      $.ajax({
        url:'../../backend/ajax/usuarios/',
        method:'POST',
        data:persona,//La informacion que se envia al servidor, URLEncoded
        dataType:'json',
        success:function(res){
            console.log(res);
        },
        error:function(error){
            console.error(error);
        }
    });

}
 function validarcampos(){
    for(i = 0; i<campos.length; i++){
        console.log('entro');
        let resultado = (document.getElementById(campos[i].campo).value=='')?false:true;
        campos[i].valido = resultado;
        marcarInput(campos[i].campo, resultado,"Campo Obligatorio");
    }

 }
 function validartargeta(){

     return;

 }
 function marcarInput(id,valido,comentario){
    console.log(valido + "-->"+id);
    if (valido){
        document.getElementById(`invalid-${id}`).innerHTML = "";
        document.getElementById(id).classList.remove('is-invalid');
        document.getElementById(id).classList.add('is-valid');
    } else{
        document.getElementById(`invalid-${id}`).innerHTML = `${comentario}`;
        document.getElementById(id).classList.remove('is-valid');
        document.getElementById(id).classList.add('is-invalid');        
    }   
  }