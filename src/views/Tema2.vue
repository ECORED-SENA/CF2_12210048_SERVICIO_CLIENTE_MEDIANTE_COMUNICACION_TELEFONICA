<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Telemarketing

    p.mb-3 En la actualidad, el uso de <b>herramientas tecnológicas</b> ha transformado profundamente la forma en que las empresas desarrollan sus actividades comerciales. Las formas tradicionales de captación han sido complementadas (e incluso reemplazadas) en ciertos contextos por <b>métodos modernos de comunicación</b>, más directos y eficaces.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Uno de estos métodos es el <i>telemarketing</i>, una de las responsabilidades principales que puede asumir un asesor o asesora telefónica. Esta técnica representa un activo estratégico para las empresas que buscan optimizar sus ventas y alcanzar a clientes potenciales de forma efectiva.

    
    //- Inicio Tema2.1
    .row.mt-5
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 ¿Qué es el telemarketing?
    
    p.mb-3(data-aos="fade-left") El telemarketing es un método de comercialización de productos y servicios a través de distintos canales de comunicación, como el teléfono, el email o plataformas digitales.
    

    .bg-color-2.p-md-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0
          p.mb-4 Actualmente, esta técnica ha evolucionado significativamente. Ya no se limita únicamente a hacer llamadas telefónicas para vender, sino que forma parte de <b>estrategias más amplias de <i>marketing directo</i></b>, apoyadas por herramientas tecnológicas avanzadas. Estas permiten a las empresas <b>llegar a clientes potenciales de forma segmentada, ágil y personalizada,</b> utilizando múltiples canales como redes sociales, aplicaciones de mensajería, <i>chatbots</i> y servicios de atención omnicanal.
          
        .col-lg-5
          figure
            img(src='@/assets/curso/tema2/2.png', alt='')


    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Origen y evolución
    //- Fin Imagen con titulo

    p.mb-3(data-aos="fade-left") El uso del teléfono como herramienta comercial data desde sus primeros años, pero fue en 1962 cuando la marca Ford realizó una exitosa campaña telefónica, marcando el inicio formal del telemarketing como estrategia empresarial.

    
    .row.justify-content-center.mb-5     
      //- Tarjeta 1
      .col-md-4.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/card1_01.png', alt='')          
          .text-center.bg-color-2.p-4.flex-grow-1
            h4.mb-3 Tele
            p.mb-0.fw-normal Prefijo que significa “a distancia” o “lejos”.


      //- Tarjeta 2
      .col-md-4.col-lg-4(data-aos="fade-left")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/card1_02.png', alt='')          
          .text-center.bg-color-2.p-4.flex-grow-1
            h4.mb-3 Marketing
            p.mb-0.fw-normal Conjunto de acciones dirigidas a satisfacer al cliente mediante el diseño del producto, fijación de precios, elección de canales de distribución y técnicas de comunicación.

    p.mb-3(data-aos="fade-left") Por lo tanto, <i>telemarketing</i> es la aplicación de las técnicas del <i>marketing</i> directo a distancia, utilizando canales como el teléfono o medios digitales.


    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto <i>Telemarketing</i> como parte del marketing directo
    //- Fin Imagen con titulo

    p.mb-3(data-aos="fade-left") Según Hernández (2016), el <i>marketing</i> directo es un conjunto de técnicas que facilitan el contacto inmediato y personalizado con compradores potenciales, previamente segmentados. En esta línea, Alet (2011), en su obra <i>Marketing</i> Directo e Interactivo, afirma que el <i>telemarketing</i> es el medio más importante dentro del <i>marketing</i> directo.

      //- Titulo nivel 4 purpura
      .bg-full-width.mt-4
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")                     
            h3.titulo-purpura Formas de marketing directo            
      //- Titulo nivel 4 purpura
    
    p.mb-3(data-aos="fade-left") El <i>telemarketing</i> forma parte de un conjunto más amplio de estrategias de <i>marketing</i> directo que permiten a las empresas conectar con sus clientes de forma personalizada:


      .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Ventas en persona")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/pestana1_01.png', alt='')
              .col-md-6.mb-4.mb-md-0
                h4 Ventas en persona
                p Interacción cara a cara con el cliente.                     

          .py-3.py-md-4(titulo="Marketing por correo directo")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/pestana1_02.png', alt='')
              .col-md-6
                h4 Marketing por correo directo
                p Envío de mensajes promocionales al domicilio o correo electrónico del cliente.

          .py-3.py-md-4(titulo="Marketing por catálogo")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/pestana1_03.png', alt='')
              .col-md-6
                h4 Marketing por catálogo
                p Envío de catálogos físicos o digitales con productos ofertados.

          .py-3.py-md-4(titulo="Telemarketing")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/pestana1_04.png', alt='')
              .col-md-6
                h4 Telemarketing
                p Llamadas o contactos directos por teléfono u otros canales remotos.


      .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Marketing por televisión de respuesta directa")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/tema2/pestana2_01.png', alt='')
              .col-md-6.mb-4.mb-md-0
                h4 Marketing por televisión de respuesta directa
                p Comerciales que incluyen medios de contacto inmediato como líneas telefónicas.                   

          .py-3.py-md-4(titulo="Marketing en quioscos")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/pestana2_02.png', alt='')
              .col-md-6
                h4 Marketing en quioscos
                p Promoción de productos mediante pantallas o módulos interactivos.

          .py-3.py-md-4(titulo="Nuevas tecnologías digitales")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/pestana2_03.png', alt='')
              .col-md-6
                h4 Nuevas tecnologías digitales
                p Uso de dispositivos inteligentes y asistentes virtuales.

          .py-3.py-md-4(titulo="Marketing en línea")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema2/pestana2_04.png', alt='')
              .col-md-6
                h4 Marketing en línea
                p Estrategias en internet como email <i>marketing</i>, <i>ads</i> y redes sociales.

    p.mb-3(data-aos="fade-left") El telemarketing es una herramienta clave en el entorno empresarial moderno. Su correcta aplicación permite no solo incrementar las ventas, sino también construir relaciones más sólidas con los clientes, adaptándose a sus necesidades y preferencias de comunicación

      //- Titulo nivel 4 purpura
      .bg-full-width.mt-4
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")                     
            h3.titulo-purpura Organización del servicio telefónico         
      //- Titulo nivel 4 purpura

    p.mb-3(data-aos="fade-left") Según Alet (2011), cuando una empresa decide implementar un servicio telefónico comercial (como el <i>telemarketing</i>), debe elegir entre dos alternativas estratégicas:

   
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-12    
        .row.g-0.br-20.overflow-hidden.shadow-sm
          .col-md-6.bg-color-7.p-5.rounded-4
            .row.align-items-center.mb-4
              .col-auto
                figure.mb-0
                  img(src='@/assets/curso/tema2/icono-tarjeta.svg', alt='', style="width: 100px;")
              .col
                h3.text-white.mb-0 Desarrollo interno
            p.text-white.mb-0.ps-2 Crear e integrar el servicio dentro de la estructura de la empresa.
          .col-md-6.bg-color-1.p-5.rounded-4
            .row.align-items-center.mb-4
              .col-auto
                figure.mb-0
                  img(src='@/assets/curso/tema2/icono-tarjeta.svg', alt='', style="width: 100px;")
              .col
                h3.mb-0 Servicio externo (outsourcing)
            p.mb-0.ps-2 Contratar a una empresa especializada que ofrezca el servicio de forma externa.

    //- Titulo nivel 4 purpura
    .bg-full-width.mt-5.mb-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen(data-aos="fade-right")                     
          h3.titulo-purpura Dificultades del desarrollo interno       
    //- Titulo nivel 4 purpura

    p.mb-3(data-aos="fade-left") Implementar <i>telemarketing</i> desde el interior de la empresa <b>no es sencillo ni económico</b> debido al desconocimiento o falta de preparación en aspectos clave como:

    
    

       
    .bg-color-fondo-resaltado.p-4.p-md-5.mb-2
      .row.align-items-center.justify-content-center
        .col-auto.col-md-10.col-lg-5.mb-4.mb-lg-0
          figure          
            img(src='@/assets/curso/tema2/3.svg', alt='Ilustración de un agente de call center trabajando frente a su laptop')       
        .col-12.col-md-12.col-lg-7          
          ul.lista-ul.mb-0        
            li.d-flex        
              i.fas.fa-check-circle.color-icono-check.me-3(style="color:#AD9721")
              p.mb-0 Selección y formación del personal idóneo.         
            li.d-flex
              i.fas.fa-check-circle.color-icono-check.me-3(style="color:#AD9721")
              p.mb-0 Manejo de diferencias horarias según zonas geográficas.         
            li.d-flex
              i.fas.fa-check-circle.color-icono-check.me-3(style="color:#AD9721")
              p.mb-0 Disponibilidad de infraestructura logística y tecnológica.
            li.d-flex
              i.fas.fa-check-circle.color-icono-check.me-3(style="color:#AD9721")
              p.mb-0 Coordinación con otros departamentos internos.
            li.d-flex
              i.fas.fa-check-circle.color-icono-check.me-3(style="color:#AD9721")
              p.mb-0 Definición de políticas claras de costos y objetivos de #[i marketing].


    p.mb-3(data-aos="fade-left") Por estas razones, muchas empresas optan por <b>externalizar este servicio</b> mediante el uso de <i>outsourcing.</i>

    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto ¿Qué es el <i>outsourcing?</i>
    //- Fin Imagen con titulo


    p.mb-3(data-aos="fade-left") Valdivia (2015) define el <i>outsourcing</i> como un proceso en el cual una empresa externaliza parte de su actividad, delegándola a otra empresa especializada. En el caso del <i>telemarketing</i>, esta externalización ha dado origen a estructuras como los <i>call centers y contact centers.</i>


    //- Titulo nivel 4 purpura
    .bg-full-width.mt-5.mb-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen(data-aos="fade-right")                     
          h3.titulo-purpura Call center y contact center      
    //- Titulo nivel 4 purpura

    p.mb-3(data-aos="fade-left") Según Carrasco (2014), tanto los call centers como los <i>contact centers</i> son organizaciones que se especializan en realizar y recibir comunicaciones en nombre de empresas contratantes. Pueden cubrir funciones como:
     
    .bg-color-fondo-resaltado.mb-5.br-20.overflow-hidden      
      .row.g-0.align-items-stretch.justify-content-center
        //- Columna de texto
        .col-12.col-lg-5.bg-color-2.p-4.p-lg-5.pe-lg-0
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Atención al cliente
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Gestión de reclamaciones
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Soporte técnico
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Venta telefónica
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Encuestas
            li.d-flex
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Campañas de #[i telemarketing]

        .col-lg-5.d-none.d-lg-flex
          img.img-fluid(src='@/assets/curso/tema2/4.png', alt='Checklist', style="width: 100%; object-fit: cover; object-position: left center;")


    p.mb-5(data-aos="fade-left") A continuación, se presentan dos conceptos clave que permiten comprender la evolución de los servicios de atención y gestión de llamadas en las organizaciones.



    .row.justify-content-center.mb-5     
      //- Tarjeta 1
      .col-md-4.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/card2_01.png', alt='')          
          .text-center.bg-color-3.p-4.flex-grow-1
            h4.mb-3 <i>Call center</i>
            p.mb-0.fw-normal Centro de llamadas que opera principalmente por teléfono. Su función es recibir o emitir llamadas de forma directa y eficiente.


      //- Tarjeta 2
      .col-md-4.col-lg-4(data-aos="fade-left")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/card2_02.png', alt='')          
          .text-center.bg-color-3.p-4.flex-grow-1
            h4.mb-3 <i>Contact center</i>
            p.mb-0.fw-normal Evolución del <i>call center</i>. Utiliza múltiples canales: llamadas, correos electrónicos, <i>chats</i> en línea, redes sociales, fax, etc. También se conoce como sistema de <b>comunicaciones unificadas.</b>


    //- Titulo nivel 4 purpura
    .bg-full-width.mt-5.mb-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen(data-aos="fade-right")                     
          h3.titulo-purpura Ventajas del outsourcing en telemarketing     
    //- Titulo nivel 4 purpura

    p.mb-5(data-aos="fade-left") Carrasco (2014) resalta los beneficios de contratar servicios especializados:


    
    .container-fluid.p-0.overflow-hidden    
      .row.justify-content-center.align-items-stretch.g-4.mb-5(data-aos="fade-up")        
        //- Tarjeta 1
        .col-12.col-sm-6.col-md-4.col-lg-3.d-flex
          .tarjeta.bg-color-6.p-4.br-15.h-100.d-flex.flex-column.justify-content-center.w-100.shadow-sm
            p.mb-0.text-center <b>Alta especialización del personal (teleoperadores).</b>
        //- Tarjeta 2
        .col-12.col-sm-6.col-md-4.col-lg-3.d-flex
          .tarjeta.bg-color-6.p-4.br-15.h-100.d-flex.flex-column.justify-content-center.w-100.shadow-sm
            p.mb-0.text-center <b>Objetividad en los resultados, al estar separados del equipo interno.</b>
        //- Tarjeta 3
        .col-12.col-sm-6.col-md-4.col-lg-3.d-flex
          .tarjeta.bg-color-6.p-4.br-15.h-100.d-flex.flex-column.justify-content-center.w-100.shadow-sm
            p.mb-0.text-center <b>Uso de recursos externos, sin necesidad de inversiones permanentes.</b>
        //- Tarjeta 4
        .col-12.col-sm-6.col-md-4.col-lg-3.d-flex
          .tarjeta.bg-color-6.p-4.br-15.h-100.d-flex.flex-column.justify-content-center.w-100.shadow-sm
            p.mb-0.text-center <b>Flexibilidad, ideal para campañas temporales o específicas.</b>

    p.mb-5(data-aos="fade-left") Las empresas especializadas en <i>telemarketing</i> cuentan con toda la <b>infraestructura, experiencia y personal capacitado,</b> lo cual asegura mayor eficiencia y menores riesgos operativos.



    //- Titulo nivel 4 purpura
    .bg-full-width.mt-5.mb-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen(data-aos="fade-right")                     
          h3.titulo-purpura Ventajas y desventajas del telemarketing 
    //- Titulo nivel 4 purpura

    p.mb-5(data-aos="fade-left") Conocer los beneficios y limitaciones del <i>telemarketing</i> permite a las empresas <b>tomar decisiones más estratégicas</b> respecto a su uso.


    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span  Ventajas y desventajas del telemarketing
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th(style="width: 40%") Ventajas
                th(style="width: 60%") Desventajas / Inconvenientes
            tbody
              tr
                td Método directo, flexible e interactivo.	.
                td No permite interacción visual con el producto (el cliente no lo puede ver o tocar)..
              tr
                td Costes relativamen te bajos frente a otros canales.
                td Riesgo de saturación del cliente por exceso de llamadas.
              tr
                td Posibilidad de lanzar campañas en corto plazo..
                td Algunas empresas lo utilizan de forma agresiva o poco ética.
              tr
                td Permite personalizar el mensaje según el perfil del cliente.
                td Falta de datos confiables o actualizados de los clientes potenciales.
              tr
                td Capacidad para cubrir amplios mercados.
                td Bajo nivel de compromiso inicial por parte del cliente.

    //- Titulo nivel 4 purpura
    .bg-full-width.mt-5.mb-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen(data-aos="fade-right")                     
          h3.titulo-purpura Enfoque estratégico 
    //- Titulo nivel 4 purpura

    p.mb-5(data-aos="fade-left") Valdivia (2015) destaca que el <i>telemarketing,</i> cuando se combina con campañas de <i>mailing</i>, fuerza de ventas y publicidad en medios masivos, se convierte en una herramienta poderosa que:

    .row.justify-content-center.mb-5     
          //- Tarjeta 1
          .col-md-4.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
            .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
              figure.mb-0
                img(src='@/assets/curso/tema2/card3_01.png', alt='')          
              .text-center.bg-color-2.p-4.flex-grow-1
                h4.mb-3 Optimiza recursos.

          //- Tarjeta 2
          .col-md-4.col-lg-4(data-aos="fade-left")
            .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
              figure.mb-0
                img(src='@/assets/curso/tema2/card3_02.png', alt='')          
              .text-center.bg-color-2.p-4.flex-grow-1
                h4.mb-3 Potencia los resultados comerciales.


          //- Tarjeta 3
          .col-md-4.col-lg-4(data-aos="fade-left")
            .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
              figure.mb-0
                img(src='@/assets/curso/tema2/card3_03.png', alt='')          
              .text-center.bg-color-2.p-4.flex-grow-1
                h4.mb-3 Aumenta la productividad de forma rentable.
    p.mb-5(data-aos="fade-left") La principal ventaja competitiva del <i>telemarketing</i> es su capacidad de llegar a más clientes con bajo costo, mientras que su mayor limitación es la imposibilidad de mostrar el producto directamente durante el contacto.

    //- Fin Tema2.1


    //- Inicio Tema2.2
    .row.mt-5
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Funciones del telemarketing
    p.mb-3(data-aos="fade-left") El <i>telemarketing</i> cumple funciones clave que están directamente alineadas con los objetivos comerciales y de marketing de una empresa. Según Carrasco (2014), estas funciones no solo permiten mejorar los resultados económicos, sino también fortalecer el posicionamiento de la marca, captar nuevos clientes y fidelizar los actuales. Las principales funciones del <i>telemarketing</i> son: 



      .bg--img_03.mt-5
      .row.justify-content-center
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Generar beneficios (incremento de ventas)")
                p.mb-4 El telemarketing permite realizar numerosos contactos en poco tiempo y con bajo costo, lo que optimiza recursos y aumenta la captación de clientes, impactando directamente en las ventas.                
                
            .row(titulo="Dar a conocer la empresa, productos o servicios")
                p.mb-4 Tiene mayor capacidad de penetración en hogares y negocios que otras técnicas tradicionales, facilitando una presentación detallada de lo que ofrece la empresa.

            .row(titulo="Ampliar mercado en otros segmentos")
                p.mb-4 Facilita la expansión hacia nuevos públicos, ya que puede segmentar audiencias y adaptar el mensaje según sus características, generando nuevas oportunidades de negocio.

            .row(titulo="Fidelizar a los clientes actuales")
                p.mb-4 A través del contacto directo y periódico, fortalece la relación con clientes existentes, aumentando la lealtad y la retención en el tiempo.

            .row(titulo="Restar clientes a la competencia")
                p.mb-4 La facilidad para acceder a nuevos segmentos y ofrecer propuestas atractivas puede llevar a que clientes insatisfechos con la competencia decidan cambiar de proveedor.
              
        .col-lg-4 
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/5.png", alt="").img400.m-auto


    p.mb-5(data-aos="fade-left") El <i>telemarketing</i> es mucho más que una herramienta de ventas: es un <b>instrumento estratégico</b> que permite a las empresas comunicarse de forma directa, personalizada y eficiente con su público objetivo. Su versatilidad lo convierte en un recurso ideal para:


    .bg-color-fondo-resaltado.mb-5.br-20.overflow-hidden      
      .row.g-0.align-items-stretch.justify-content-center
        //- Columna de texto
        .col-12.col-lg-5.bg-color-2.p-4.p-lg-5.pe-lg-0
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Captar nuevos clientes.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Fortalecer la relación con los actuales.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Mejorar la imagen y visibilidad de la empresa.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Ganar terreno frente a la competencia.
            

        .col-lg-5.d-none.d-lg-flex
          img.img-fluid(src='@/assets/curso/tema2/6.png', alt='Checklist', style="width: 100%; object-fit: cover; object-position: left center;")

        p.mb-5.mt-2.text-center(data-aos="fade-left") Una estrategia de <i>telemarketing</i> bien planificada puede ser clave para el crecimiento sostenido de una organización.

    //- Fin Tema2.2

    //- Inicio Tema2.3
    .row.mt-5
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Elementos del telemarketing
    p.mb-3(data-aos="fade-left") Las estrategias de <i>telemarketing</i> se sustentan en tres elementos fundamentales que trabajan en conjunto para lograr sus objetivos. Según Carrasco (2014), estos elementos permiten ejecutar campañas efectivas, generar confianza en los clientes y mejorar los resultados comerciales: 
    
    
    //- Carrusel
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide1_01.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Ficheros (base de datos)
                    p Un fichero de clientes o base de datos permite registrar y organizar la información relevante de clientes actuales y potenciales. Esta herramienta facilita el seguimiento comercial personalizado, incrementando las oportunidades de venta.
                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide1_02.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Servicios técnicos y logísticos
                    p El <i>telemarketing</i> se apoya en una infraestructura tecnológica especializada, que permite a los asesores prestar un servicio eficiente, ordenado y profesional. 

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide1_03.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Teleoperador/a (equipo humano)
                    p El asesor o asesora telefónica es la voz e imagen de la empresa ante el cliente. Además de buenas habilidades comunicativas, debe tener capacidad de persuasión para conectar con el cliente, despertar interés y cerrar ventas.


    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Recursos técnicos y logísticos necesarios
    //- Fin Imagen con titulo


    p.mb-5.mt-5(data-aos="fade-left") Para que el servicio de <i>telemarketing</i> funcione con eficacia, se requiere una serie de <b>equipos, sistemas y herramientas tecnológicas</b> que aseguren un entorno de trabajo funcional y orientado a resultados.


    .bg-color-fondo-resaltado.mb-5.br-20.overflow-hidden      
      .row.g-0.align-items-stretch.justify-content-center
        //- Columna de texto
        .col-12.col-lg-5.bg-color-2.p-4.p-lg-5.pe-lg-0
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Estación de trabajo adecuada (mobiliario ergonómico)
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Computador en red y software especializado
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Diadema telefónica y equipo de telecomunicaciones avanzados
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Número de grupo y línea gratuita (LADA 800)
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 ACD (Automatic Call Distributor)
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Mensaje de espera / monitoreo silencioso
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Grabación de llamadas / estadísticas de llamadas
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 VRU (Voice Response Unit) / PDS (Predictive Dialing System)
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Herramientas de CRM y sistemas de respuesta automática
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Espejo (para mejorar la expresión facial y tono en llamadas)

        .col-lg-5.d-none.d-lg-flex
          img.img-fluid(src='@/assets/curso/tema2/7.png', alt='Checklist', style="width: 100%; object-fit: cover; object-position: left center;")


    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto  El factor humano: el teleoperador/a
    //- Fin Imagen con titulo


    p.mb-5.mt-5(data-aos="fade-left") El teleoperador es quien asume la responsabilidad de llamar, responder e interactuar con el cliente. Su rol es decisivo, ya que representa directamente la imagen de la empresa. Según González (2015), la clave para vender está en convencer al cliente de que el producto que se ofrece es la solución a sus necesidades. Para ello, el asesor debe:


    .row.justify-content-center.mb-5     
          //- Tarjeta 1
          .col-md-4.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
            .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
              figure.mb-0
                img(src='@/assets/curso/tema2/card4_01.png', alt='')          
              .text-center.bg-color-2.p-4.flex-grow-1
                h4.mb-3 Conocer y creer en el producto y la empresa.


          //- Tarjeta 2
          .col-md-4.col-lg-4(data-aos="fade-left")
            .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
              figure.mb-0
                img(src='@/assets/curso/tema2/card4_02.png', alt='')          
              .text-center.bg-color-2.p-4.flex-grow-1
                h4.mb-3 Identificar el problema o necesidad del cliente.



          //- Tarjeta 3
          .col-md-4.col-lg-4(data-aos="fade-left")
            .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
              figure.mb-0
                img(src='@/assets/curso/tema2/card4_03.png', alt='')          
              .text-center.bg-color-2.p-4.flex-grow-1
                h4.mb-3 Tener una voz segura y una actitud sincera.

    p.mb-5(data-aos="fade-left") El proceso de persuasión puede seguir <b>dos enfoques complementarios:</b>


    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-12    
        .row.g-0.br-20.overflow-hidden.shadow-sm
          .col-md-6.bg-color-7.p-5.rounded-4
            .row.align-items-center.mb-4
              .col-auto
                figure.mb-0
                  img(src='@/assets/curso/tema2/icono-tarjeta.svg', alt='', style="width: 100px;")
              .col
                h3.text-white.mb-0 Racional
            p.text-white.mb-0.ps-2 Apela a la lógica, argumentos objetivos.

          .col-md-6.bg-color-1.p-5.rounded-4
            .row.align-items-center.mb-4
              .col-auto
                figure.mb-0
                  img(src='@/assets/curso/tema2/icono-tarjeta.svg', alt='', style="width: 100px;")
              .col
                h3.mb-0 Emocional
            p.mb-0.ps-2 Apela a sentimientos, valores y empatía.


    //- Fin Tema2.3

    //- Inicio Tema2.4
    .row.mt-5
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Elementos del telemarketing
    p.mb-3(data-aos="fade-left") González (2015) identifica cuatro pasos clave para lograr una venta efectiva por vía telefónica. Estos pasos requieren una preparación previa, capacidad de análisis, escucha activa y habilidad para generar confianza.
    


    //- Titulo nivel 4 purpura
    .bg-full-width.mt-4
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-2(data-aos="fade-right")                     
          h3.titulo-purpura a. Abordaje          
    //- Titulo nivel 4 purpura
    
    p.mb-3(data-aos="fade-left") Muchos errores ocurren cuando el vendedor intenta cerrar una venta demasiado pronto. En esta etapa, el objetivo no es vender, sino <b>crear interés</b> y abrir la puerta al diálogo.



    .bg-color-5.p-md-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-5
          figure
            img(src='@/assets/curso/tema2/8.png', alt='')
        
        .col-lg-7.mb-4.mb-lg-0
          p.mb-4 Consejos para un buen abordaje:
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 EInvestigar previamente al cliente.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 	Iniciar con un tema que capte la atención.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Planificar la llamada y sus posibles respuestas.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Revisar el historial del cliente y los productos ya adquiridos.

    //- Titulo nivel 4 purpura
    .bg-full-width.mt-4
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-2(data-aos="fade-right")                     
          h3.titulo-purpura b. Identificación de necesidades          
    //- Titulo nivel 4 purpura
    
    p.mb-3(data-aos="fade-left") Esta etapa permite conocer lo que el cliente realmente necesita, lo que da pie a un argumento de venta más sólido y enfocado.


    //- Pestanas tarjetas
    container.tarjeta.p-4.p-md-5

          TabsA.color-acento-botones
            .tarjeta.p-5.bg-color-5(titulo="Directa")
              h4 Directa
              p ¿Prefiere la entrega esta semana?/ ¿Cerramos el trato?

            .tarjeta.p-5.bg-color-5(titulo="Indirecta")
              h4 Indirecta
              p ¿Qué opina sobre este modelo?” / ¿La máquina es electrónica?

    p.mb-5(data-aos="fade-left") Las preguntas directas son ideales tanto en la <b>fase de identificación</b> como en el <b>cierre</b>. Las indirectas permiten descubrir más sobre el cliente sin presionarlo.



    //- Titulo nivel 4 purpura
    .bg-full-width.mt-4
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-2(data-aos="fade-right")                     
          h3.titulo-purpura c. Tratamiento de objeciones        
    //- Titulo nivel 4 purpura
    
    p.mb-3(data-aos="fade-left") Las objeciones no deben tomarse como obstáculos, sino como oportunidades para aclarar dudas y fortalecer el argumento de venta.


      .carousel-bg
        .row.justify-content-center.mb-1.align-items-center
          .col-lg-12.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-md-4 col-xl-4")
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema2/iconcard1_01.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Repetir la objeción
                p.card-text.text-center
                  | Entiendo que le preocupa el precio…

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema2/iconcard1_02.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Técnica del sí, pero
                p.card-text.text-center
                  | Sí, es costosa, pero su durabilidad compensa la inversión.
              
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema2/iconcard1_03.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Técnica del por qué
                p.card-text.text-center
                  | ¿Con qué producto lo está comparando?

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema2/iconcard1_04.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Aplazamiento
                p.card-text.text-center
                  | Le responderé más adelante, pero antes permítame comentarle que…

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema2/iconcard1_05.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Negativa directa
                p.card-text.text-center
                  | No, el producto no es de mala calidad.

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema2/iconcard1_06.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Técnica del boomerang
                p.card-text.text-center
                  | Es más cara, pero ofrece más beneficios.

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema2/iconcard1_07.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Redirección con otro enfoque
                p.card-text.text-center
                  | Mirándolo desde otra perspectiva…

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema2/iconcard1_08.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Técnica preventiva
                p.card-text.text-center
                  | Usted podría preguntarse si tiene garantía… y sí, incluye 2 años.    

    p.mb-3(data-aos="fade-left") La clave está en <b>escuchar atentamente</b>, no discutir, dejar participar al cliente y responder con argumentos seguros.                                                  

    //- Titulo nivel 4 purpura
    .bg-full-width.mt-4
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-2(data-aos="fade-right")                     
          h3.titulo-purpura d. Cierre de la venta     
    //- Titulo nivel 4 purpura
    
    p.mb-3(data-aos="fade-left") El cierre es el momento decisivo en el que se concretan los acuerdos. Existen diferentes formas de cerrar, según el tipo de cliente y el desarrollo de la conversación.


    //- Pestanas tarjetas
    container.tarjeta.p-4.p-md-5

          TabsA.color-acento-botones
            .tarjeta.p-5.bg-color-5(titulo="Cierre directo")
              h4 Cierre directo
              p El cliente no presenta objeciones. Ej.: “Perfecto, entonces procesamos el pedido.”


            .tarjeta.p-5.bg-color-5(titulo="Cierre alternativo")
              h4 Cierre alternativo
              p Se ofrecen dos opciones. Ej.: “¿Prefiere recibirlo el lunes o el martes?”


    .bg-color-5.p-md-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center    
        
        .col-lg-7.mb-4.mb-lg-0
          p.mb-4 El cierre debe ser <b>natural, oportuno y claro</b>, sin forzar al cliente ni dejar ambigüedades. El <i>telemarketing</i> es una herramienta poderosa del marketing directo, siempre que se utilicen adecuadamente sus tres pilares:
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Ficheros organizados y actualizados.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Infraestructura técnica de calidad.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Asesores o teleoperadores capacitados, empáticos y persuasivos.

        .col-lg-5
          figure
            img(src='@/assets/curso/tema2/9.png', alt='')

    
    .row.justify-content-center.mb-5.mt-5.overflow-hidden    
      .col-12(data-aos="fade-up")        
        .p-4.bg-color-3.br-15.shadow-sm.rounded-4    
          .row.align-items-center.g-0        
            .col-auto.pe-4
              figure.mb-0
                img(src='@/assets/curso/tema2/icontel.svg', alt='', style="width: 80px;")                   
            .col
              p.mb-0 Integrando estas bases con técnicas de persuasión, tratamiento efectivo de objeciones y estrategias de cierre, se obtienen resultados comerciales tangibles y sostenibles. El éxito del <i>telemarketing</i> radica en saber escuchar, adaptar el mensaje y actuar con estrategia.

    //- Fin Tema2.4


    //- Inicio Tema2.5
    .row.mt-5
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Tipos de telemarketing
    p.mb-3(data-aos="fade-left") El <i>telemarketing</i> es una técnica que permite la comunicación inmediata, directa y bidireccional entre un asesor o asesora telefónica y un cliente. Esta interacción puede tener múltiples objetivos, como informar, vender, fidelizar o investigar el mercado. El tipo de <i>telemarketing</i> se determina a partir de quién inicia el contacto. A partir de ello, se establecen dos grandes modalidades:
 

    .row.justify-content-center.mb-5     
      //- Tarjeta 1
      .col-md-4.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/card5_01.png', alt='')          
          .text-center.bg-color-8.p-4.flex-grow-1
            h4.mb-3 <i>Telemarketing</i> de entrada (<i>inbound</i>)
            p.mb-0.fw-normal El cliente


      //- Tarjeta 2
      .col-md-4.col-lg-4(data-aos="fade-left")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema2/card5_02.png', alt='')          
          .text-center.bg-color-8.p-4.flex-grow-1
            h4.mb-3 <i>Telemarketing</i> de salida (<i>outbound</i>)
            p.mb-0.fw-normal La empresa

    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto  Telemarketing de entrada (inbound)
    //- Fin Imagen con titulo


    p.mb-3.bg-color-1.p-4.rounded-2(data-aos="fade-left") Cuando una empresa habilita un sistema de atención al cliente, generalmente gratuito, como una línea 018000, ofrece un canal para que las personas puedan comunicarse para resolver dudas, presentar reclamaciones o formular sugerencias. Esta dinámica no solo busca atender necesidades inmediatas, sino también permite a la organización obtener información valiosa.


    .bg-color-fondo-resaltado.mb-5.br-20.overflow-hidden      
      .row.g-0.align-items-stretch.justify-content-center
        .col-lg-5.d-none.d-lg-flex
          img.img-fluid(src='@/assets/curso/tema2/10.png', alt='Checklist', style="width: 100%; object-fit: cover; object-position: left center;")

        .col-12.col-lg-7.bg-color-2.p-5.p-lg-5.pe-lg-0
          p El contacto iniciado por el cliente representa una oportunidad estratégica para mejorar la relación comercial y optimizar procesos. A través de estas interacciones, la empresa puede:
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Identificar errores o debilidades en sus productos o servicios.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Recoger sugerencias que conduzcan al rediseño de ofertas.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Construir bases de datos segmentadas según intereses y necesidades reales.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Diferenciarse en el mercado gracias a un servicio al cliente eficiente y bien gestionado.
         
    p.mb-3(data-aos="fade-left") Contar con un canal de atención no garantiza buenos resultados por sí solo. Lo más importante es <b>cómo se gestiona</b> este canal. Por ello, muchas empresas han optado por fortalecer internamente sus departamentos de atención o bien externalizarlos a través de <i>call centers</i> especializados.

    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto  Telemarketing de salida (outbound)
    //- Fin Imagen con titulo

    p.mb-3(data-aos="fade-left") En este caso, es la empresa la que toma la iniciativa y se pone en contacto con los clientes. Esta modalidad se utiliza para distintos fines comerciales, como:


    .container-fluid.p-0.overflow-hidden    
      .row.justify-content-center.align-items-stretch.g-4.mb-5(data-aos="fade-up")        
        //- Tarjeta 1
        .col-12.col-sm-6.col-md-4.col-lg-3.d-flex
          .tarjeta.bg-color-6.p-4.br-15.h-100.d-flex.flex-column.justify-content-center.w-100.shadow-sm
            p.mb-0.text-center <b>Realizar ventas directas.</b>
        //- Tarjeta 2
        .col-12.col-sm-6.col-md-4.col-lg-3.d-flex
          .tarjeta.bg-color-6.p-4.br-15.h-100.d-flex.flex-column.justify-content-center.w-100.shadow-sm
            p.mb-0.text-center <b>Concertar entrevistas.</b>
        //- Tarjeta 3
        .col-12.col-sm-6.col-md-4.col-lg-3.d-flex
          .tarjeta.bg-color-6.p-4.br-15.h-100.d-flex.flex-column.justify-content-center.w-100.shadow-sm
            p.mb-0.text-center <b>Explorar nuevos mercados (prospección).</b>
        //- Tarjeta 4
        .col-12.col-sm-6.col-md-4.col-lg-3.d-flex
          .tarjeta.bg-color-6.p-4.br-15.h-100.d-flex.flex-column.justify-content-center.w-100.shadow-sm
            p.mb-0.text-center <b>Actualizar o depurar bases de datos.</b>

    .bg-color-fondo-resaltado.mb-5.br-20.overflow-hidden      
      .row.g-0.align-items-stretch.justify-content-center        
        .col-12.col-lg-7.bg-color-2.p-5.p-lg-5.pe-lg-0
          p Esta forma de telemarketing se ha consolidado como una alternativa eficaz frente a métodos tradicionales como las ventas puerta a puerta, ya que permite mayor cobertura geográfica, ahorro en recursos y una ejecución más ágil de las campañas. Las ventajas del <i>outbound telemarketing</i> son: 
          ul.lista-ul.mb-0
            li.d-flex.mb-2        
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Reducción de costos operativos.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Ampliación del mercado objetivo.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 Incremento de la productividad comercial.
            li.d-flex.mb-2
              i.fas.fa-check-circle.me-3(style="color:#AD9721")
              p.mb-0 La eficiencia del teleoperador y la correcta segmentación de los contactos son factores determinantes para el éxito de este enfoque.
     

        .col-lg-5.d-none.d-lg-flex
                  img.img-fluid(src='@/assets/curso/tema2/11.png', alt='Checklist', style="width: 100%; object-fit: cover; object-position: left center;")

    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto  Telemarketing de entrada (inbound)
    //- Fin Imagen con titulo


    p.mb-3(data-aos="fade-left") A continuación, se presenta un pódcast que analiza las múltiples utilidades del <i>telemarketing</i> en el entorno empresarial actual:


    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-2             
            .row.justify-content-center.align-items-stretch            
              .col-lg-8.mb-4.mb-lg-0
                .p-4.bg-color-dark-purple.br-15.h-100.d-flex.align-items-center.text-black
                  .row.align-items-center.w-100
                    .col-md-4.text-center
                      img(src="@/assets/curso/tema2/podcast.svg" style="width: 150px;")
                    .col-md-8
                      TarjetaAudio.color-primario(
                        texto="Utilidades del telemarketing"
                        :audio="require('@/assets/componentes/audios/podcast1.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorTarjetaAudio")

            
              .col-lg-4
                figure.h-100
                  img.h-100.w-100.br-10(src='@/assets/curso/tema2/12.png', alt='', style="object-fit: cover;")


    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 El <i>telemarketing</i>, ya sea de entrada o de salida, se ha convertido en una herramienta clave dentro del <i>marketing</i> directo. Su versatilidad permite adaptarlo a diferentes objetivos comerciales, tanto en campañas de captación como en fidelización o análisis.
        .row.mt-3.align-items-start.mb-10.bg-color-1(data-aos="fade-left")  
            p.p-4(data-aos="fade-left") La clave de su eficacia está en saber usar el canal adecuado según el objetivo, aplicar buenas prácticas y contar con equipos humanos y tecnológicos preparados para interactuar con el cliente de forma estratégica. Dominar los distintos tipos y utilidades del <i>telemarketing</i> permite a las empresas mejorar su competitividad y fortalecer la relación con sus públicos.
    




    //- Fin Tema2.5




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
