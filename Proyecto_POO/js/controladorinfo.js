
var comentarios = [
    {pregunta: '¿Quienes somos?', descripcion: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum voluptates ad praesentium eius nemo`},
    {pregunta: '¿Mision?', descripcion: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum voluptates ad praesentium eius nemo.`},
    {pregunta: '¿Vision?', descripcion: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum voluptates ad praesentium eius nemo.`},
    {pregunta: '¿Cuales son nuestras politicas?', descripcion: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum voluptates ad praesentium eius nemo.`},
    {pregunta: '¿Como puedo comprar un producto?', descripcion: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum voluptates ad praesentium eius nemo.`},
    {pregunta: '¿Que tan confiable es la compra de un producto?', descripcion: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum voluptates ad praesentium eius nemo.`},
    {pregunta: 'Quiero vender un produto ¿Como lo hago?', descripcion: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum voluptates ad praesentium eius nemo.`},
    {pregunta: '¿Quiero agregar una empresa?', descripcion: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum voluptates ad praesentium eius nemo.`},
    {pregunta: '¿Mi compra llego en mal estado?', descripcion: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum voluptates ad praesentium eius nemo.`},
    {pregunta: '¿Compras fallidas?', descripcion: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum voluptates ad praesentium eius nemo.`},
    {pregunta: '¿Reportar error?', descripcion: `
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos illum voluptates ad praesentium eius nemo.`}

];

    for (let i = 0; i < comentarios.length; i++) {
        $('#contenido').append(`
        <div class="col-12" id="pregunta">
            <h4><b><i class="fas fa-angle-double-right"></i></b>${comentarios[i].pregunta}</h4>
        </div>
        <div class="col-12 ml-3"> 
            <hr>
            <p>${comentarios[i].descripcion}</p>
        </div>
        `);
        
    }
