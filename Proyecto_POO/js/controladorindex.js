function user(){
    location.href='login_promerca.html';
}
function categorias(categoria){
    $('.contenido').html('');
    $('.contenido').html(`
    <div class="container">
        <div class="row" id="conteidocategoria">
            <div class="col-12">
            <h3>Electrodomesticos</h3>
            </div>
        </div>
                          </div>`);
        for(i=0;i<5;i++){
            var num = Math.floor(Math.random() * ((categoria.length+1) - 0) + 0);
            $('#conteidocategoria').append(`
            <div class="col-12">
            <div class="shadow-sm p-3 mb-5  bg-white populares">
                <div class="row" id="contenidocategorias">
                    <div class="col-12 text-center">
                    <h4><b>${nombre}</b></h4>
                    </div>
                    
                </div>
            </div>
        </div>`);
            for (let j = 0; j < array.length; j++) {
                var num2 = Math.floor(Math.random() * ((categoria[num].length+1) - 0) + 0);
                $('#contenidocategorias').append(`
                <div class="col-lg-3 col-sm-3">
                            <div class="">
                                <div class="">
                                <img class="imgnew" class="imgprod " src="img/fondo.jpg" alt="">
                                </div>
                                <div class="mt-3 d-flex">
                                <h5><b>Nombre</b></h5>
                                <p class="ml-3"><b>L. 2000</b></p>
                                </div>
                                <div>
                                    <div class="valoracion mb-3 ">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i> 
                                        <i class="far fa-star"></i>
                                </div>
                                </div>
                                <a href="#">Saber mas</a>
                            </div>
                            </div>
                `)
            }
        }
}