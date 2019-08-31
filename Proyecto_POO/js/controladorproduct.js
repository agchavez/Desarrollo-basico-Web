function prueba(){
    console.log("Si funciona");
}
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
function addmodal(){
    $('#modals').html(` <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
             <div>
          <h5 class="modal-title" id="exampleModalLabel">Agregar Comentario</h5>
         
          <p>Name User</p>
          </div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="d-flex mb-3">
              <div>
                  <img src="img/fondo.jpg" class="imgusermodal" alt="">
              </div>
              <div class="namemodal mt-3">
              <p><b>Articulo1</b></p>
              </div>

              <div id="valoracion" style="margin-left: 150px" class=" mb-3 mt-3">
                    <p>Valore el Producto</p>
                    <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i> 
                      <i class="far fa-star"></i>
  
                </div>
          </div>
          <hr>
          <div id="newcomen">
              <textarea name="" id="" cols="55" rows="4">Agregar comentario</textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
          <button type="button" class="btn btn-primary">Agregar comentario</button>
        </div>
      </div>
    </div>
  </div>`)
    $('#exampleModal').modal('show');
}
