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
                                    <h3>Mision: <br> </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rerum.</p>
                                </div>
                                <div class="col-6 mt-3">
                                    <h3>Vision: <br></h3>
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
                                                <span class="eliminar" onclick="infoproducto()"><i class="far fa-trash-alt"></i> Informacion</span>
                                            </div>
                                        </div>
                                       
                                </div>
                                <hr class="mt-3 mb-3">
                                <div class="from-btn mt-3">
                                <button class="btn boton btn-secondary my-2 my-sm-0" onclick="addsucursal()" type="submit"><i class="far fa-plus-square"></i> Agregar Sucursal</button>
                                </div>
                        
                </div> `);
            break;
    }
   
}
function eliminarproducto(n){

}

function editarproducto(n){
    $('#modal').html(`

    `);
}
function infoproducto(){
    console.log('entro');
    $('#modals').html(`
    <div class="modal fade bd-example-modal-lg" id="examplemodals" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
        <div class="text-center mt-3 mb-3">
            <h3>Informacion del producto</h3>
        </div>
        <div>
            <hr>
        </div>
        <div class="container mt-3">
            <div class="row">
                <div class="col-12">
                    <p><b>Nombre del producto: </b> name1</p>
                </div>
                <div class="col-6 mt-3">
                    <div class="row">
                        <div class="col-12 mt-3">
                            <img class="w-100" src="img/New.png" alt="">
                        </div>
                        <div class="col-4 mt-3">
                            <img class="w-100" src="img/cumputadoras.png" alt="">
                        </div>
                        <div class="col-4 mt-3"></div>
                        <div class="col-4 mt-3"></div>
                        <div class="col-4 mt-3"></div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-12 mt-3">
                            <p><b>Descripcion:<br></b></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, suscipit?</p>
                            <hr>
                        </div>
                        <div class="col-12 mt-3">
                            <p><b>Puntuacion: </b>5 estrellas</p>
                            <hr>
                        </div>
                        <div class="col-12 mt-3">
                            <p><b>Fecha de expiracion: </b> 12/05/2019</p>
                            <hr>
                        </div>
                        <div class="col-12 mt-3">
                                <p><b>Precio: </b> 300 Lps.</p>
                                <hr>
                            </div>
                        <div class="col-12 mt-3">
                            <p><b>Ventas: </b> 45</p>
                            <hr>
                        </div>
                        <div class="col-12 mt-3">
                                <p><b>Cantidad: </b> 18</p>
                                <hr>
                            </div>
                        <div class="col-12 mt-3">
                                <p><b>Categoria: </b> Mujeres</p>
                                <hr>
                            </div>
                    </div>
                </div>
                
                <div class="col-12 mt-3">
                    <hr>
                    <div class="row">
                        <div class="col-6">
                            <div class="row">
                                <div class="col-12 mt-3">
                                    <h5><b>Detalles: </b><br></h5>
                                </div>
                                <div class="col-12">
                                    <p><b>Modelo: </b></p>
                                    <p>665955</p>
                                </div>
                                <div class="col-12">
                                    <p><b>Talla: </b></p>
                                    <p>4587</p>
                                </div>
                                <div class="col-12">
                                    <p><b>Color: </b></p>
                                    <p>cafe/morado</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <div class="col-12 mt-3">
                                    <h5><b>Comentarios: </b><br></h5>
                                </div>
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-2">
                                            <img class="w-100" src="img/usuariohombre.png" alt="">
                                        </div>
                                    
                                    <div class="col-10">
                                        <p><b>Name user</b></p>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, consectetur!</p>
                                    </div>
                                </div>
                                </div>
                                <div class="col-12">
                                        <div class="row">
                                                <div class="col-2">
                                                    <img class="w-100" src="img/usuariohombre.png" alt="">
                                                </div>
                                           
                                            <div class="col-10">
                                                <p><b>Name user</b></p>
                                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                            </div>
                                        </div>
                                </div>
                                <div class="col-12">
                                        <div class="row">
                                                <div class="col-2">
                                                    <img class="w-100" src="img/usuariomujer.png" alt="">
                                                </div>
                                            
                                            <div class="col-10">
                                                <p><b>Name user</b></p>
                                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-3 ">
                    <div class="ml-auto mb-3">
                            <button type="button" style="width: 20%" class="btn boton" onclick="eliminarproducto()"><i class="far fa-trash-alt"></i> Eliminar</button>
                            <button type="button" style="width: 20%" class="btn boton" onclick="editarproducto()"><i class="far fa-edit"></i mb-3> Editar</button>
                        
                    </div>   
                </div>
            </div>
        </div>
    </div>
  </div>
</div>`);
    $('#examplemodals').modal('show');
}

function addsucursal(){
    
}