document.addEventListener("DOMContentLoaded", () => {})

  const formulario = document.getElementById("formulario");
 
  // SECCION BOTONES SUPERIORES
  const seccionBntsSuperiores = document.querySelector("#sec-btns-superiores");
  const botonesObra = document.querySelector("#btns-obra");
  const botonesFonograma = document.querySelector("#btns-fonograma");

  //SECCION INGRESAR DATOS
  const seccionIngresarDatos = document.querySelector("#sec-ingresar-datos");
  const seccionDatosObra = document.getElementById("datos-obra");
  const seccionDatosCompositores =
    document.getElementById("datos-compositores");
  const contCompositor1 = document.getElementById("Compositor1");
  const seccionListaCompositores = document.getElementById(
    "porcentajes-composicion"
  );
  const seccionDatosFonograma = document.getElementById("datos-fonograma");
  const seccionDatosMasterOwner = document.getElementById("datos-master-owner");
  const seccionListaMasterOwners = document.getElementById(
    "porcentajes-master-owner"
  );

  //SECCION BOTONES INFERIORES
  const seccionBtnsInferiores = document.querySelector("#sec-btns-inferiores");
  const btnGuardarObra = document.getElementById("guardar-obra");
  const btnsSeccionCompositor = document.getElementById(
    "btns-inferiores-compositores");
  const btnGuardarCompositor = document.getElementById("guardar-compositor");
  const btnAgregarCompositor = document.getElementById("agregar-compositor");
  const btnFinSecCompositores = document.getElementById("fin-compositores");

  const btnGuardarPorcentajesObra = document.getElementById(
    "guardar-porcentajes-obra"
  );
  const btnGuardarFonograma = document.getElementById("guardar-fonograma");
  const btnAgregarMasterOwner = document.getElementById("agregar-master-owner");
  const btnGuardarMasterOwner = document.getElementById("guardar-owner");
  const btnGuardarPorcentajeOwner = document.getElementById(
    "guardar-porcentajes-owner"
  );

  let datosObra = [];
  let contadorCompositores = 1;
  let datosCompositores = [];
  let datosFonograma = {};
  let contadorOwners = 1;
  let datosMasterOwners = [];

  class Obra {
  constructor(tituloObra, aka, iswc, derechoAutor){
    this.tituloObra = tituloObra,
    this.aka = aka,
    this.iswc = iswc,
    this.derechoAutor = derechoAutor
  }
}
  class Compositor {
    constructor(nombre, apellido, rol, celular, email, social, pro, ipi) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.rol = rol;
      this.celular = celular;
      this.email = email;
      this.social = social;
      this.pro = pro;
      this.ipi = ipi;
    }
  }

  class Owner {
    constructor(nombre, apellido, rol, email, celular, social) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.rol = rol;
      this.celular = celular;
      this.email = email;
      this.social = social;
    }
  }
  //SECCION OBRA
  btnGuardarObra.addEventListener("click", comprobarRequeridosObra);

  function comprobarRequeridosObra() {
    const tituloObra = document.getElementById("titulo-obra");
    const akaObra = document.getElementById("aka");
    const iswc = document.getElementById("iswc");
    const derechoAutor = document.getElementById("derecho-autor");
    // Comprueba si todos los campos requeridos están llenos
    if (
      tituloObra.value &&
      akaObra.value &&
      iswc.value && derechoAutor.value
    ) {obtenerDatosObra(tituloObra, akaObra, iswc, derechoAutor);
      
    } else {
      alert( 
        "Por favor, complete todos los campos requeridos antes de continuar."
      );
    }
  }
    function obtenerDatosObra(valor1, valor2, valor3, valor4){
      let nuevoTituloObra = valor1.value;
      let nuevoakaObra = valor2.value;
      let nuevoIswc = valor3.value;
      let nuevoDerechoAutor = valor4.value;
      guardarDatosObra(nuevoTituloObra, nuevoakaObra, nuevoIswc, nuevoDerechoAutor);
    }

    function guardarDatosObra(valor1, valor2, valor3, valor4) {
      let nuevaObra = new Obra(valor1, valor2, valor3, valor4);
      datosObra.push(nuevaObra);
      console.log(datosObra[0])

       ocultarMostrarSecciones(
         seccionDatosObra,
         btnGuardarObra,
         seccionDatosCompositores,
         btnsSeccionCompositor
       );
    }
  

  function ocultarMostrarSecciones(seccionOcultar, btnOcultar, secionMostrar, btnMostrar){
    seccionOcultar.style.display = 'none';
    btnOcultar.style.display = 'none';
    secionMostrar.style.display = 'block'
    btnMostrar.setAttribute("class", "btnInferiores");
  }

  //SECCION AGREGAR NUEVO COMPOSITOR
  btnGuardarCompositor.addEventListener("click", comprobarCamposRequeridosCompositor)

  btnAgregarCompositor.addEventListener("click", nuevoComposerInput);

  btnFinSecCompositores.addEventListener("click", finSectCompositores);

   btnAgregarCompositor.style.display = "none";
   btnFinSecCompositores.style.display = "none";

  function comprobarCamposRequeridosCompositor() {
    const nombre = document.querySelector("#nombre-compositor");
    const apellido = document.querySelector("#apellido");
    const akaCompositor = document.querySelector("#aka-compositor");
    const rol = document.querySelector("#rol");
    const celular = document.querySelector("#celular");
    const email = document.querySelector("#email");
    const pro = document.querySelector("#pro");
    const ipi = document.querySelector("#ipi");

    if (
      nombre.value &&
      apellido.value &&
      akaCompositor.value &&
      rol.value &&
      celular.value &&
      email.value &&
      pro.value &&
      ipi.value
    ) {
      obtenerValoresCompositor(
        nombre,
        apellido,
        akaCompositor,
        rol,
        celular,
        email,
        ipi,
        pro
      );
    } else {
      alert("Por favor complete todos los datos requeridos del compositor");
    }
  }

  function obtenerValoresCompositor(valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8) {
     let nuevoNombre = valor1.value;
     let nuevoApellido = valor2.value;
     let nuevoAkaCompositor = valor3.value;
     let nuevoRol = valor4.value;
     let nuevoCelular = valor5.value;
     let nuevoEmail = valor6.value;
     let nuevoIpi = valor7.value;
     let nuevoPro = valor8.value
   crearNuevoCompositor(nuevoNombre, nuevoApellido, nuevoAkaCompositor, nuevoRol, nuevoCelular, nuevoEmail, nuevoIpi, nuevoPro)
  }

  function crearNuevoCompositor(
    valor1,
    valor2,
    valor3,
    valor4,
    valor5,
    valor6,
    valor7,
    valor8
  ) {
    let nuevoCompositor = new Compositor(
      valor1,
      valor2,
      valor3,
      valor4,
      valor5,
      valor6,
      valor7,
      valor8
    );
   datosCompositores.push(nuevoCompositor)
   console.log(datosCompositores[0])
    btnGuardarCompositor.style.display = "none";
    btnAgregarCompositor.style.display = "block";
    btnFinSecCompositores.style.display = "block";


  }

  function nuevoComposerInput(){
     contCompositor1.style.display = "none";
     contadorCompositores++;
    seccionDatosCompositores.innerHTML = `<div id='compositor${contadorCompositores}'> <h3>Compositor/autor ${contadorCompositores}</h3>
                    <label for="nombre-compositor">Nombre</label>
                    <input id="nombre-compositor" type="text" name="nombre-compositor">
            
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" autocomplete="on" required>
                    <br>
            
                    <label for="aka-compositor">AKA, apodo o nombre artístico</label>
                    <input id="aka-compositor" type="text" name="aka-compositor" autocomplete="on">
                    <br>
            
                    <label for="rol">Rol</label>
                    <select id="rol" name="rol" required>
                        <option value="compositor">Compositor</option>
                        <option value="autor" selected>Autor</option>
                        <option value="autor-compositor" selected>Autor y Compositor</option>
                    </select>
                    <br>
            
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" autocomplete="on" required>
                    <br>
            
                    <label for="celular">Celular</label>
                    <input type="tel" id="celular" name="celular" required>
                    <br>
            
                    <label for="pro">PRO</label>
                    <p class="complemento">💡 Sociedad de gestion de gestión colectiva (Ejemplo: SAYCO)</p>
                    <input type="text" id="pro" name="pro" value="ex. SAYCO" autocomplete="on" required>
            
                    <label for="ipi">Número IPI/CAE</label>
                    <p class="complemento">💡 Se obtiene contactando a la PRO 👆🏼</p>
                    <input type="number" id="ipi" name="ipi" autocomplete="on">
    </div>`
   
    btnGuardarCompositor.style.display = "block";
    btnAgregarCompositor.style.display = "none";
    btnFinSecCompositores.style.display = "none";

  }

  function finSectCompositores () {
     ocultarMostrarSecciones(
       seccionDatosCompositores,
       btnAgregarCompositor,
       seccionListaCompositores,
       btnGuardarPorcentajesObra
     );
    console.log("fin sect compositores")
  }




