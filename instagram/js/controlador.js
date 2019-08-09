var regisro = [];
var campos =[
    {campo:'name',valido:false},
    {campo:'email',valido:false},
    {campo:'password',valido:false},
    {campo:'nameuser',valido:false}
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
    if (valido){
        document.getElementById(`error-${id}`).innerHTML = "";
        document.getElementById(id).classList.remove('is-invalid');
        document.getElementById(id).classList.add('is-valid');
    } else{
        document.getElementById(`error-${id}`).innerHTML = "Campo obligatorio";
        document.getElementById(id).classList.remove('is-valid');
        document.getElementById(id).classList.add('is-invalid');        
    }
}
function comprobar_existencia(persona){
    for(let i=0;i<localStorage.length;i++){
        let noticia = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(persona.email==noticia.email){
            marcarInput('email',false);
            document.getElementById('error-email').innerHTML = "Correo existente";
            
            return false;

        }else{
            return true;
             
        }
    }
    return true;

}
function guardar(persona){
    
    if(comprobar_existencia(persona)){
        var localstorages = window.localStorage;
    var j = 0;
    for(let i=0;i<localStorage.length;i++){
        j++;
    }
    localstorages.setItem(j,JSON.stringify(persona));
    console.log("Cuenta creada exitosamente");
    }
    }
    
   