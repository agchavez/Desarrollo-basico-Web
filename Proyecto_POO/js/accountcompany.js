  
  var cuentascompany =[];
  var campos = [
    {campo:'name', valido:false},
    {campo:'email', valido:false},
    {campo:'descrip', valido:false},
    {campo:'redsocial0', valido:false},
    {campo:'address', valido:false},
    {campo:'phone0', valido:false},
    {campo:'longitud', valido:false},
    {campo:'latitud', valido:false},
    {campo:'logo', valido:false},
    {campo:'banner', valido:false},
    {campo:'contry', valido:false},
    {campo:'password', valido:false},
    {campo:'mision', valido:false},
    {campo:'vision', valido:false},
    {campo:'redes', valido:false},
    {campo:'city', valido:false}
  ];
  function registrarEmpresa() {
    for(i = 0; i<campos.length; i++)
        campos[i].valido = comprobar(campos[i].campo);

    if (document.getElementById('email').value != ''){
        let validar = validarEmailEnLinea(document.getElementById('email').value);
        if (!validar)return;
    }
    for (let i=0;i<campos.length;i++)
        if (!campos[i].valido) return;
    if(verificarexistencia())return;

    var persona = {
      name : $('#name').val(),
      email : $('#email').val(),
      descrip : $('#descrip').val(),
      redsocial0 : $('#redsocial0').val(),
      address : $('#address').val(),
      phone0 : $('#phone0').val(),
      longitud : $('#longitud').val(),
      latitud : $('#latitud').val(),
      logo : $('#logo').val(),
      banner : $('#banner').val(),
      contry : $('#contry').val(),
      password : $('#password').val(),
      mision : $('#mision').val(),
      vision : $('#vision').val(),
      redes : $('#redes').val(),
      city : $('#city').val()
    }
    guardar(persona);
    
}

function validarEmailEnLinea(email){
    console.log(email);
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let resultado =  re.test(email);
    marcarInput('email',resultado,"correo invalido");
    return resultado;
}

function comprobar(id){
    let resultado = (document.getElementById(id).value=='')?false:true;
    marcarInput(id, resultado,"campo obligatorio");
   
    return resultado;
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





function addphone(n){
    document.getElementById('numberphone').innerHTML += `<div class="input-group-prepend" ><input type="text" class="form-control formphone mr-3 mt-3" id="numero${n+1}" placeholder="Numero ${n+2}" required=""><img class="img mt-3" src="img/icomas.png" id="addnumber${n+1}" onclick="addphone(${n+1})" data-toggle="tooltip" data-placement="right" title="Agregar numero de telefono"></div>`;
    document.getElementById(`addnumber${n}`).remove();

}
function pasword(value){
  password=document.getElementById("password");
  if(value){
      password.type = 'text';
      $('#mopasword').attr('onclick','pasword(false)');
      $('#mopasword').html('<i class="iconopas fas icono fa-eye-slash"></i>');
  } 
  else {
      password.type = 'password';
      $('#mopasword').attr('onclick','pasword(true)');
      $('#mopasword').html('<i class="iconopas fas icono fa-eye"></i>');
  }
}
function addsocial(n){
    document.getElementById('social').innerHTML +=`<div class="d-flex mt-3">
    <select class="custom-select selectred" required="">
      <option value="">Seleccionar</option>
      <option value="facebook">Facebook</option>
      <option value="Instagram">Instagram</option>
      <option value="Pinters">Pinter</option>
      <option value="Twiter">Twiter</option>
    </select>
    <input type="url" class="form-control inputsocial mr-3 w-100" id="redsocial0" placeholder="url" required="">
    <img class="img" src="img/icomas.png" id="addsocial${n+1}" onclick="addsocial(${n+1})" data-toggle="tooltip" data-placement="right" title="Agregar numero de telefono">
  </div>`
  document.getElementById(`addsocial${n}`).remove();

}
function guardar(value){

}
function verificarexistencia(){
  for (let i = 0; i < cuentascompany.length; i++) {
        if(cuentascompany[i].email == $('#email').val())
          return true;
  }
  return false;
}