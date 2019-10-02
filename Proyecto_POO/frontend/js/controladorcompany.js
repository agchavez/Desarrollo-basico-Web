(function(){
    $('#Perfil').addClass("seleccionado");
        $('#contenido').html(`
        <div class="shadow-sm p-3 mb-5 mr-3 borde">
                            <div class="row">
                                
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
                            <button class="btn boton btn-secondary my-2 my-sm-0" >Editar</button>
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
                                        <div class="col-12">
                                            <div class="col-lg-6 col-sm-12 text-center">
                                                <img src="img/cumputadoras.png" class="w-100 border" alt="">
                                                <span class="eliminar" onclick="infoproducto()"><i class="far fa-trash-alt"></i> Informacion</span>
                                            </div>
                                        </div>
                                       
                                </div>
                                
                                <hr class="mt-3 mb-3">
                                <div class="from-btn mt-3">
                                <button class="btn boton btn-secondary my-2 my-sm-0" id="botonagregarproducto" onclick="newproducto()"><i class="far fa-plus-square"></i> Agregar productos</button>
                                </div>
                                <div class="row" id="addproducto">
                    
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

function newproducto(){
    $('#addproducto').html(`<div class="col-12 text-center">
    <h2><b>Nuevo producto</b></h2>
    </div>
    <div class="col-12 mt-3">
    <label for="example">Titulo del Producto</label>
    <input type="text" class="form-control" id="tituloproducto" placeholder="Example">
    <div class="invalid" id="invalid-tituloproducto">

    </div>
    </div>
    <div class="col-12 mt-3">
    <label for="example">Descripcion corta del producto</label>
    <input type="text" class="form-control" placeholder="Descripcion" id="descripcion">
    <div id="invalid-descripcion">

    </div>
    </div>
    <div class="col-12">
    <label for="example">Descripcion detallada del producto</label>
    <div><textarea class="from-control" name="" id="descripciondetallada " cols="90" rows="4" placeholder="descripcion"></textarea>
    </div>

    <div class="invalid-descripciondetallada"></div>
    </div>
    <div class="col-12 mt-3" id="imagenesdelproducto">
    <label for="example">Imagenes del producto <p class="text-info">12 maximo</p></label>
    <div class="custom-file ">
        <input type="file" class="custom-file-input form-control" id="imagenesdelproducto" name="file[]" value="" multiple>
        <label class="custom-file-label" for="inputGroupFile01" id="label-banner">Archivo</label>
    </div>

    <div class="invalid-imagenproducto"></div>
    </div>
    <div class="col-sm-2 col-12 mt-3">
    <label for="example">Precio del producto</label>
    <input type="text" id="precioproducto"  class="form-control" placeholder="Lps.">
    <div id="invalid-precioproducto"></div>
    </div>
    <div class="col-sm-2 col-12 mt-3">
    <label for="example" >Cantidad</label>
    <input type="text"  class="form-control" id="precioproducto">
    <div id="invalid-precioproducto"></div>
    </div>
    <div class="col-sm-4 col-12 mt-3">
    <label for="example">Categoria</label>
    <select name="" id="categoriasproducto"  class="form-control">
    <option value="">Seleccionar</option>
    </select>
    </div>
    <div class="col-sm-4 col-12 mt-3">
    <label for="example" >Fecha limite</label>
    <input type="date"  class="form-control" id="fechalimite">
    <div id="invalid-fechalimite"></div>
    </div>

    <div class="col-12 mt-3">
    <div class="row" id="destalle/descripcion">
    <div class="col-12 mb-3">
        <h5>Informacion adicional sobre el producto</h5>
    </div>
    <div class="col-sm-4 col-12 mt-3">
            <label for="example">Caracteristica</label>
            <input type="text"  class="form-control" id="caracteristica0" placeholder="Estado">
            <div id="invalid-caracteristica"></div>
    </div>
    <div class="col-sm-5 col-10 mt-3">
            <label for="example">Detalle de Caracteristica</label>
            <input type="text"  class="form-control" id="detallecaracteristica0" placeholder="Usado/Nuevo">
            <div id="invalid-detallecaracteristica"></div>

    </div>
    <div class="col-1 mt-3">
            <img class="imgadd" src="img/icomas.png" id="adddecripcion0" onclick="adddescripcion(0)" data-toggle="tooltip" data-placement="right" title="Agregar detalles del producto">
    </div>
    </div>
    </div>    
    <div class="col-12">
    <div class="botonesadd mt-3">
            <button class="btn botonproducto btn-secondary my-2 my-sm-0" onclick="addnuevoproducto()" type="submit"><i class="far fa-plus-square"></i> Agregar</button>
            <button class="btn botonproducto btn-secondary my-2 my-sm-0" onclick="Cancelar()" type="submit"><i class="far fa-plus-square"></i> Cancelar</button>
        </div>

    </div>`);
    $('#botonagregarproducto').css("display", "none");

}

function Cancelar(){
    $('#botonagregarproducto').css("display", "block");
    $('#addproducto').html('');
}
function adddescripcion(n){
    console.log('enrtro');
    document.getElementById('destalle/descripcion').innerHTML += `<div class="col-sm-4 col-12 mt-3">
    <label for="example">Caracteristica</label>
    <input type="text"  class="form-control" id="caracteristica${n+1}">
    <div id="invalid-caracteristica"></div>
</div>
<div class="col-sm-5 col-11 mt-3">
    <label for="example">Detalle de Caracteristica</label>
    <input type="text"  class="form-control" id="detallecaracteristica${n+1}">
    <div id="invalid-detallecaracteristica"></div>

</div>
<div class="col-1 mt-3">
    <img class="imgadd " src="img/icomas.png" id="adddecripcion${n+1}" onclick="adddescripcion(${n+1})" data-toggle="tooltip" data-placement="right" title="Agregar detalles al producto">
</div>`;
    document.getElementById(`adddecripcion${n}`).remove();

}