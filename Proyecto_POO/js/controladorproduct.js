(function(){
    var html ='';
    $('#principalimg').html(``);
    for (let i = 0; i < 2; i++) {
        html += `<div class="col-3" onclick="imagen(${direcimagen})">
        <img class="w-100" src="${direcimagen}" alt="">
    </div>` 
    }
    $('#secundariasimg').html(html);
    $('#nombre').html(`<h3><b>${nombre}</b></h3><a class="ml-3" href="company_promerca.html">(${empresa})</a>`);
    $('#descripcion').html(`${descripcion}`);
    html = '';
    for (let i = 0; i < 5; i++) {
        if(calificacion<i)$('#valoracion').append(`<i class="fas fa-star"></i>`);
        else $('#valoracion').append(`<i class="far fa-star"></i>`);
    }
    if(calificacion >=3) $('#valoracion').addClass('text-success')
    else $('#valoracion').addClass('text-danger')

    $('#valor').html(`L. ${precio}`);
    if(pructossimilares){
        for (let i = 0; i < array.length; i++) {
            $('#similares').append(`<div class="col-lg-12 col-sm-4 col-4">
            <div class="imagenoters">
                <img style="width: 80%" src="${imgsimilar[i]}" alt="">
            </div>
            <p><b>${preciosimilar[i]}</b></p>
        </div>`);
        }
    }
    $('#compas').html(`${vendidos}`)
})();

function seleccionado(n){
    console.log('value'+n)
    switch (n){
        case 0:
            $('#descripcion').addClass("seleccionado");
            $('#detalle').removeClass("seleccionado");
            $('#cometarios').removeClass("seleccionado");
            $('#contenidoinfe').html(`<h3 class="text-center">Caracteristicas Principales</h3>
            <div class="row">
                <div class="col-lg-6">
                    <img id="imagprincipal" class="w-100" src="img/New.png" alt="">
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div id="caracteristicas-izquierda" class="col-lg-6">
                            <p><b>Os:</b> Androi</p>
                        </div>
                        <div id="caracteristicas-derecha" class="col-lg-6">
                            <p><b>Os:</b> Androi</p>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="col-12 text-center">
                        <h3>Imagenes del producto</h3>
                </div>
                <div class="col-6 mt-3">
                    <img class="img-thumbnail" src="img/New.png" alt=""> 
                </div>
                <div class="col-6 mt-3">
                        <img class="img-thumbnail" src="img/New.png" alt="">   
                    </div>
    
            </div>`);
            break;
        case 1:
            $('#descripcion').removeClass("seleccionado");
            $('#detalle').removeClass("seleccionado");
            $('#cometarios').addClass("seleccionado");
            $('#contenidoinfe').html(`<div class="row">
            <div class="col-12 d-flex mt-3">
                <div>
                    <img src="img/cvv.png" class="userimg mr-3"alt="">
                </div>
                <div class="mr-3 nuser">
                <h5><b>Nombre Usuario</b></h5>
                </div>
            </div>
            <div class="col-12 mt-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, impedit.</p>
                <hr>
            </div>
            <div class="col-12 d-flex mt-3">
                    <div>
                        <img src="img/cvv.png" class="userimg mr-3"alt="">
                    </div>
                    <div class="mr-3 nuser">
                    <h5><b>Nombre Usuario<br></b></h5>
                    <p>Valoracion:
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i> 
                    <i class="far fa-star"></i>
                    </p>
                    </div>
                </div>
                <div class="col-12 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, impedit.</p>
                    <hr>
                </div>
                <div class="col-12 d-flex mt-3">
                        <div>
                            <img src="img/cvv.png" class="userimg mr-3"alt="">
                        </div>
                        <div class="mr-3 nuser">
                        <h5><b>Nombre Usuario</b></h5>
                        </div>
                    </div>
                    <div class="col-12 mt-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, impedit.</p>
                        <hr>
                    </div>
        </div>`);
        break;
        case 2:
                $('#descripcion').removeClass("seleccionado");
                $('#detalle').addClass("seleccionado");
                $('#cometarios').removeClass("seleccionado");
    }
}
function comentario(){
    var estrellas = ``;

    $('#modals').html(` <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
             <div>
          <h5 class="modal-title" id="exampleModalLabel">Agregar Comentario</h5>
         
          <p>${nombreusuario}</p>
          </div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="d-flex mb-3">
              <div>
                  <img src="${direeconimg}" class="imgusermodal" alt="">
              </div>
              <div class="namemodal mt-3">
              <p><b>${nombre}</b></p>
              </div>

              <div id="valoracion" style="margin-left: 150px" class=" mb-3 mt-3">
                    <p>Valore el Producto</p>
                    ${estrellas}
  
                </div>
          </div>
          <hr>
          <div id="newcomen">
              <textarea name="" id="" cols="45" rows="4">Agregar comentario</textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
          <button type="button" class="btn btn-primary" onclick="addcomentario()">Agregar comentario</button>
        </div>
      </div>
    </div>
  </div>`)
    $('#exampleModal').modal('show');
}

function imagen(value){
    $('#principalimg').html(`<img style="width: 90%" src="${value}" alt="">`)
}

function modal(){
  console.log('entro')
    var html;
    html += `<div class="carousel-item active">
    <img class="d-block imgproducmodal" src="img/fondo.jpg" alt="First slide">
    </div>`;
        $('#modals').html(`<div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
       <div class="modal-content">
        <div class="modal-header text-center">
          <h5 class="modal-title" id="exampleModalLabel">${nombre}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                        ${html}
                        </div>
                        <a class="carousel-control-prev colorblack" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next colorblack" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
        </div>
      </div>
    </div>
  </div>`);
  $('#exampleModal').modal('show');
}

function addcomentario(){

}