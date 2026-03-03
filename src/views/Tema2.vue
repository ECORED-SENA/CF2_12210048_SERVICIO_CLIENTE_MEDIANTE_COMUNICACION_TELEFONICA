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
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
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
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
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

    //- Fin Tema2.1


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
