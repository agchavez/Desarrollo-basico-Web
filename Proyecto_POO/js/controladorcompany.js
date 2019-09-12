(function(){
    $('#Perfil').addClass("seleccionado");
        $('#contenido').html(`
        <div class="shadow-sm p-3 mb-5 mr-3 borde">
                            <div class="row">
                                <div class="col-12">
                                    <h2 class="mt-3">Perfil</h2>
                                    <p>Hola bienvenidos a su perfil</p>
                                </div>
                                <div class="logoempresa d-flex">
                                    <img class="w-100 imagenlog" src="img/logo.png" alt="">
                                    <div class="editar">
                                        <i class="far fa-edit"></i mb-3>
                                    </div>
                                    
                                </div>
                            </div>
                            <hr class="mt-3">
                            <div class="col-12 mt-3">
                                <h3>Descripcion<br></h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quis aspernatur quod accusamus perspiciatis culpa facilis, sunt dolorem accusantium odit id quibusdam nesciunt quos quia magnam laboriosam esse quae eveniet?</p>
                            </div>
                            <hr class="mt-3">
                            <div class="col-12 d-flex">
                                <div class="col-6 mt-3">
                                    <h3>Mision<br> </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rerum.</p>
                                </div>
                                <div class="col-6 mt-3">
                                    <h3>Vision<br></h3>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor non illum?</p>
                                </div>
                            </div>
                        <hr>
                        <div class="col-12 text-center">
                                <div class="redessociales">
                                        <i class="fab fa-pinterest-square iconored mr-3"></i>
                                        <i class="fab fa-instagram iconored mr-3"></i>
                                        <i class="fab fa-facebook-square iconored mr-3"></i>
                                        <i class="fab fa-twitter-square iconored mr-3"></i>
                                </div>
                        </div>
                        <div class="col-12">
                            <div class=" mt-3">
                                <h3 class="text-center">Donde encontrarnos</h3>
    
                            </div>
                        </div>
                        <hr>
                        <div class="col-12 mt-3">
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <h3 class="text-center">Nosotros</h3>
                                </div>
                                <div class="col-6">
                                    <img src="img/cumputadoras.png" class="w-100 border" alt="">
                                </div>
                                <div class="col-6">
                                    <img src="img/fondo.jpg" class="w-100 border" alt="">
                                </div>
                        </div>
                        </div>
                    <div class="from-btn">
                            <button class="btn boton btn-secondary my-2 my-sm-0" type="submit">Editar</button>
                        </div>
    
                </div>`);
}());

function seleccionado(n){
    $('#contenido').html("");
    switch (n){
        case 0:
                $('#Perfil').addClass("seleccionado");
                $('#Sucursales').removeClass("seleccionado");
                $('#Estadisticas').removeClass("seleccionado");
                $('#Productos').removeClass("seleccionado");
                $('#contenido').html(`
                <div class="shadow-sm p-3 mb-5 mr-3 borde">
                                    <div class="row">
                                        <div class="col-12">
                                            <h2 class="mt-3">Perfil</h2>
                                            <p>Hola bienvenidos a su perfil</p>
                                        </div>
                                        <div class="logoempresa d-flex">
                                            <img class="w-100 imagenlog" src="img/logo.png" alt="">
                                            <div class="editar">
                                                <i class="far fa-edit"></i mb-3>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <hr class="mt-3">
                                    <div class="col-12 mt-3">
                                        <h3>Descripcion<br></h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quis aspernatur quod accusamus perspiciatis culpa facilis, sunt dolorem accusantium odit id quibusdam nesciunt quos quia magnam laboriosam esse quae eveniet?</p>
                                    </div>
                                    <hr class="mt-3">
                                    <div class="col-12 d-flex">
                                        <div class="col-6 mt-3">
                                            <h3>Mision<br> </h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rerum.</p>
                                        </div>
                                        <div class="col-6 mt-3">
                                            <h3>Vision<br></h3>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor non illum?</p>
                                        </div>
                                    </div>
                                <hr>
                                <div class="col-12 text-center">
                                        <div class="redessociales">
                                                <i class="fab fa-pinterest-square iconored mr-3"></i>
                                                <i class="fab fa-instagram iconored mr-3"></i>
                                                <i class="fab fa-facebook-square iconored mr-3"></i>
                                                <i class="fab fa-twitter-square iconored mr-3"></i>
                                        </div>
                                </div>
                                <div class="col-12">
                                    <div class=" mt-3">
                                        <h3 class="text-center">Donde encontrarnos</h3>
            
                                    </div>
                                </div>
                                <hr>
                                <div class="col-12 mt-3">
                                    <div class="row">
                                        <div class="col-12 mb-3">
                                            <h3 class="text-center">Nosotros</h3>
                                        </div>
                                        <div class="col-6">
                                            <img src="img/cumputadoras.png" class="w-100 border" alt="">
                                        </div>
                                        <div class="col-6">
                                            <img src="img/fondo.jpg" class="w-100 border" alt="">
                                        </div>
                                </div>
                                </div>
                            <div class="from-btn">
                                    <button class="btn boton btn-secondary my-2 my-sm-0" type="submit">Editar</button>
                                </div>
            
                        </div>`);
                        break;
        case 1:
                $('#Perfil').removeClass("seleccionado");
                $('#Sucursales').addClass("seleccionado");
                $('#Estadisticas').removeClass("seleccionado");
                $('#Productos').removeClass("seleccionado");
                $('#contenido').html(`<div class="shadow-sm p-3 mb-5 mr-3 borde">
                <div class="row">
                        <div class="col-12">
                            <h2 class="mt-3">Sucursales</h2>
                        </div>
                        <div class="logoempresa d-flex">
                            <img class="w-100 imagenlog" src="img/logo.png" alt="">
                        </div>
                        <div class="col-12">
                            <div class="row">   
                                <div class="col-12 text-center mt-3">
                                    
                                    <h3>Sucursal 1</h3>
                                    <hr class="mt-3 mb-3">
                                </div>
                                <div class="col-6">
                                    <h4>Direccion<br></h4>
                                    <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ratione!</p>
                                </div>
                                <div class="col-6">
                                    <h5>Contactanos<br></h5>
                                    <p> 2774-3914 <i class="fas fa-phone"></i><br></p>
                                    <p> 2774-3914 <i class="fas fa-phone"></i></p>
                                </div>
                                <div class="col-12">
                                        <div class=" mt-3">
                                            <h4  class="text-center">Donde encontrarnos</h4  >
                                            
                                        </div>
                                    </div>
                                <div class="col-12 mt-3">
                                        <div class="row">
                                            <div class="col-12 mb-3">
                                                <h4 class="text-center">Nosotros</h4>
                                            </div>
                                            <div class="col-12">
                                                <img src="img/cumputadoras.png" class="w-100 border" alt="">
                                            </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-6 d-flex ml-auto">
                                            <div>
                                                <button class="btn boton btn-secondary my-2 my-sm-0" type="submit"><i class="far fa-plus-square"></i> Agregar Sucursal</button>
                                            </div>
                                            <div>
                                                <button class="btn boton btn-secondary my-2 my-sm-0 ml-3" type="submit"><i class="far fa-trash-alt"></i> Eliminar Sucursal</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                </div>
            </div>`);
                break;
        case 2:
                $('#Perfil').removeClass("seleccionado");
                $('#Sucursales').removeClass("seleccionado");
                $('#Estadisticas').addClass("seleccionado");
                $('#Productos').removeClass("seleccionado");
                break;
        case 3:
            $('#Perfil').removeClass("seleccionado");
            $('#Sucursales').removeClass("seleccionado");
            $('#Estadisticas').removeClass("seleccionado");
            $('#Productos').addClass("seleccionado");
            $('#contenido').html(`
            <div class="shadow-sm p-3 mb-5 mr-3 borde">
                                <div class="row">
                                        <div class="col-12">
                                            <h2 class="mt-3">Productos</h2>
                                        </div>
                                        <div class="logoempresa d-flex">
                                            <img class="w-100 imagenlog" src="img/logo.png" alt="">
                                        </div>
                                        <div class="col-12">
                                            <div class="col-lg-6 col-sm-12 text-center">
                                                <img src="img/cumputadoras.png" class="w-100 border" alt="">
                                                <span class="eliminar" onclick="eliminarproducto()"><i class="far fa-trash-alt"></i> Eliminar</span>
                                            </div>
                                        </div>
                                </div>
                        </div>`);
            break;
    }
   
}
function eliminarproducto(n){

}