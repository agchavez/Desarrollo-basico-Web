  var regisro=[];
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
    {campo:'city', valido:false}
  ];
  function registrarUsuario() {
    for(i = 0; i<campos.length; i++)
        campos[i].valido = comprobar(campos[i].campo);

    if (document.getElementById('email').value != ''){
        let validar = validarEmailEnLinea(document.getElementById('email').value);
        if (!validar)
        document.getElementById('error-email').innerHTML = "Correo Inválido";
        return;
    }
    for (let i=0;i<campos.length;i++)
        if (!campos[i].valido) return;
        
    var persona = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        password: document.getElementById('password').value,
        nameuser : document.getElementById('nameuser').value
    }
    regisro.push(persona);
    guardar(persona);
    
}

function validarEmailEnLinea(email){
    console.log(email);
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let resultado =  re.test(email);
    marcarInput('email',resultado);
    
    return resultado;
}

function comprobar(id){
    let resultado = (document.getElementById(id).value=='')?false:true;
    marcarInput(id, resultado);
   
    return resultado;
}
function marcarInput(id,valido){
  console.log(valido + "-->"+id);
  if (valido){
      document.getElementById(`invalid-${id}`).innerHTML = "";
      document.getElementById(id).classList.remove('is-invalid');
      document.getElementById(id).classList.add('is-valid');
  } else{
      document.getElementById(`invalid-${id}`).innerHTML = "Campo obligatorio";
      document.getElementById(id).classList.remove('is-valid');
      document.getElementById(id).classList.add('is-invalid');        
  }
}





function addphone(n){
    document.getElementById('numberphone').innerHTML += `<div class="input-group-prepend" ><input type="text" class="form-control formphone mr-3 mt-3" id="numero${n+1}" placeholder="Numero ${n+2}" required=""><img class="img mt-3" src="img/icomas.png" id="addnumber${n+1}" onclick="addphone(${n+1})" data-toggle="tooltip" data-placement="right" title="Agregar numero de telefono"></div>`;
    document.getElementById(`addnumber${n}`).remove();

}
function addsocial(n){
    document.getElementById('social').innerHTML +=`<div class="input-group-prepend" >
    <input type="url" class="form-control formsocial mr-3 mt-3" id="redsocial${n+1}" placeholder="url" required="">
    <img class="img mt-3" src="img/icomas.png" id="addsocial${n+1}" onclick="addsocial(${n+1})" data-toggle="tooltip" data-placement="right" title="Agregar red social">
  </div>`
  document.getElementById(`addsocial${n}`).remove();

}
function insertar(value){
  console.log(value);
  document.getElementById('label-banner').innerHTML = value;
}