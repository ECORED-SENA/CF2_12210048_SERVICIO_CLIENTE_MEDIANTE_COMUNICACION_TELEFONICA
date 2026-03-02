<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Reclamaciones del cliente

    p.mb-3(data-aos="fade-left") En el entorno empresarial actual, las reclamaciones y quejas de los clientes no solo deben considerarse inevitables, sino también estratégicas. En una era donde la reputación de una marca puede construirse o destruirse en línea, estas manifestaciones representan una oportunidad clave para mejorar procesos, productos y servicios.

    //- Contenido Introducturio.
    .row.justify-content-center.align-items-stretch.mb-5        
      .col-lg-9               
        .row.g-0.align-items-stretch.mb-4          
          .col-md-5
            figure.mb-0
              img(src='@/assets/curso/tema1/1.png', alt='').w-100         
          .col-md-7.bg-color-1
            .p-4.h-100.d-flex.align-items-center
              p.mb-0 Según Claus Moller (2005), quejarse tradicionalmente ha tenido una connotación negativa, asociada al desagrado o la inconformidad. Sin embargo, hoy se reconoce que una queja bien gestionada puede fortalecer la relación con el cliente y generar confianza.        
        .row          
          p.mb-0 Actualmente, muchas empresas utilizan canales como redes sociales, chats en vivo, formularios digitales y aplicaciones móviles para gestionar las reclamaciones. Por tanto, los asesores deben contar con habilidades no solo comunicativas, sino también digitales, emocionales y analíticas.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure.h-100.mb-0
          img(src='@/assets/curso/tema1/2.png', alt='', style="height: 100%; object-fit: cover;").w-100
    //- Fin Contenido Introducturio.

    separador

    //- Inicio Tema1.1
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Pautas de acción ante una reclamación

    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 Antes de abordar las pautas de acción, es esencial entender el significado moderno de una queja. Según QAEC (2016), se define como una expresión de insatisfacción dirigida a una organización con respecto a un producto o servicio, generalmente acompañada de la expectativa de una compensación.                
        .row.mt-3.align-items-start.mb-10.bg-color-2(data-aos="fade-left")  
            p.p-4(data-aos="fade-left") Hoy en día, una queja puede llegar por múltiples vías: correo electrónico, redes sociales, reseñas en línea o llamadas telefónicas. <b>No recibir quejas no significa tener clientes satisfechos</b>; muchas personas prefieren irse en silencio y compartir su experiencia negativa en plataformas públicas.            
    p(data-aos="fade-left") Aunque a nadie le gusta recibir quejas, son una fuente directa de aprendizaje. Las empresas que saben escucharlas y actuar con rapidez tienen una ventaja competitiva clara.
  
    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Expectativa moderna del cliente
    //- Fin Imagen con titulo

    p(data-aos="fade-left") Cada vez que un cliente se comunica con la empresa, espera una atención rápida, personalizada y empática. Convertir una reclamación en una <b>experiencia positiva</b> puede no solo resolver el problema, sino también aumentar la lealtad.
   
    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-7(data-aos="fade-right")
        .bg-color-3.p-4.p-md-5.h-100
          p.mb-4 La gestión eficaz de reclamaciones incluye:          
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Escucha activa y sin interrupciones.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Respuestas claras y sin tecnicismos innecesarios.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Uso de herramientas CRM <i>(Customer Relationship Management)</i> para dar seguimiento.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Agilidad en la solución del problema.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/4.png', alt='Personal de servicio al cliente trabajando')
          
      //- Imagen con titulo
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto ¿Cómo reacciona el cliente actual ante la atención recibida?
      //- Fin Imagen con titulo

    p(data-aos="fade-left") El comportamiento del consumidor ha cambiado con el auge de la tecnología. Hoy, el cliente puede opinar, influenciar y viralizar experiencias en minutos. Por ello, una mala gestión puede tener consecuencias mayores que en el pasado.

        
    .row.justify-content-center.mb-5     
      .col-md-6.col-lg-5.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.bg-color-white.h-100.shadow-sm
          figure.mb-0
            img(src='@/assets/curso/tema1/card1_01.png', alt='')
          .p-4.text-center.bg-color-3
            h4.mb-3 Cliente satisfecho
            p Recomienda la marca en redes, deja valoraciones positivas.      
      .col-md-6.col-lg-5(data-aos="fade-left")
        .tarjeta.bg-color-white.h-100.shadow-sm
          figure.mb-0
            img(src='@/assets/curso/tema1/card1_02.png', alt='')
          .p-4.text-center.bg-color-3
            h4.mb-3 Cliente insatisfecho
            p Publica reseñas negativas, abandona la marca, influye a otros.

    
    .bg-color-5.p-4.p-md-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center        
        .col-lg-7.mb-4.mb-lg-0
          h4.mb-4 Por cada 10 clientes descontentos:          
          ul.lista-ul.mb-4
            li.d-flex.mb-2
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Solo 1 realiza una queja formal.
            li.d-flex.mb-2
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 9 no dicen nada a la empresa, pero lo comentan con su entorno.
            li.d-flex.mb-2
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 7 u 8 dejan de comprar sin aviso previo.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 6 o más comparten la experiencia en redes sociales o plataformas de reseñas.          
          p.mt-4 Un cliente que no se queja directamente puede dañar la imagen de la empresa si no se siente escuchado.        
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/5.png', alt='Mujer con megáfono haciendo señal de alto')


    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto El poder del boca a boca digital
    //- Fin Imagen con titulo

    p(data-aos="fade-left") Sánchez (2014) ya advertía sobre el peligro del comentario negativo tradicional. En la actualidad, ese riesgo se ha multiplicado debido al entorno digital. El boca a boca se ha transformado en:


    
    .bg-color-2.p-md-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0
          p.mb-4 Sánchez (2014) ya advertía sobre el peligro del comentario negativo tradicional. En la actualidad, ese riesgo se ha multiplicado debido al entorno digital. El boca a boca se ha transformado en:          
          ul.lista-ul.mb-0
            li.d-flex.mb-3
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Comentarios en plataformas como Google, Facebook, Instagram, X (antes Twitter), o TikTok.
            li.d-flex.mb-3
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Videos en YouTube o <i>reviews virales.</i>
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Opiniones en <i>marketplaces</i> como Amazon o Mercado Libre.    
        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/6.png', alt='Iconos de redes sociales flotando sobre un dispositivo móvil')
    
    
    p(data-aos="fade-left") La diferencia es que ahora un solo comentario negativo puede alcanzar a miles de personas en poco tiempo.
    
    .row.justify-content-center.mb-5     
      .col-md-6.col-lg-5.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.bg-color-white.h-100.shadow-sm
          figure.mb-0
            img(src='@/assets/curso/tema1/card2_01.png', alt='')
          .p-4.text-center.bg-color-3
            h4.mb-3 Comentario entre conocidos
            p Publicación pública, disponible para miles o millones de usuarios.
      .col-md-6.col-lg-5(data-aos="fade-left")
        .tarjeta.bg-color-white.h-100.shadow-sm
          figure.mb-0
            img(src='@/assets/curso/tema1/card2_02.png', alt='')
          .p-4.text-center.bg-color-3
            h4.mb-3 Daño de reputación limitado
            p Posible crisis de marca si no se gestiona adecuadamente.

    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Efectos de la satisfacción del cliente en la empresa
    //- Fin Imagen con titulo


    p(data-aos="fade-left") La forma en que una empresa gestiona la experiencia del cliente puede generar <b>efectos positivos o negativos</b>, según el nivel de satisfacción alcanzado. Esta dinámica influye directamente en la imagen de la marca, la fidelización y la rentabilidad. A continuación se comparan los principales impactos:


      .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Clientes satisfechos – Beneficios para la empresa")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/pestana1_01.png', alt='')                 

              .col-md-6.mb-4.mb-md-0
                h4 Clientes satisfechos – Beneficios para la empresa
                
                ul.lista-ul.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 La empresa puede recibir felicitaciones que motivan al personal.
                  li.d-flex.mb-3
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 La marca es recomendada a amigos, familiares y colegas.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Se intensifican las ventas con clientes actuales y se genera recompra.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Aumenta el grado de fidelización del cliente.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Se mejora la imagen y la reputación de la empresa.


          .py-3.py-md-4(titulo="Clientes insatisfechos – Efectos negativos para la empresa")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana1_02.png', alt='')

              .col-md-6
                h4 Clientes insatisfechos – Efectos negativos para la empresa
                ul.lista-ul.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 El personal puede recibir quejas directas, lo que desmotiva.
                  li.d-flex.mb-3
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Los clientes pueden advertir a otros sobre el mal servicio.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 El cliente puede decidir no volver a comprar.  
                  li.d-flex.mb-3
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 Puede haber reclamos formales o solicitudes de compensación.
                  li.d-flex.mb-3
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 El cliente puede recurrir a organismos de defensa del consumidor.
                  li.d-flex
                    i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                    p.mb-0 En casos extremos, pueden emprenderse acciones legales. 

    p(data-aos="fade-left") Esta comparación evidencia la importancia de una gestión eficaz de la experiencia del cliente, especialmente ante situaciones de reclamo.


    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Claves para resolver reclamaciones de forma efectiva
    //- Fin Imagen con titulo


    p(data-aos="fade-left") Según Krasovitzky (2011), una empresa puede atender con éxito las reclamaciones de sus clientes si empodera adecuadamente a su personal. Para ello, es necesario otorgar a los empleados tres elementos clave:
    container.tarjeta.p-4.p-md-5

      TabsA.color-acento-botones
        .tarjeta.p-5.bg-color-5(titulo="Responsabilidad")
          h4 Responsabilidad
          p Capacidad de asumir y resolver las quejas del cliente de forma eficaz.


        .tarjeta.p-5.bg-color-5(titulo="Autonomía controlada")
          h4 Autonomía controlada
          p Libertad para tomar decisiones dentro de ciertos límites, utilizando el criterio adecuado.

        
        .tarjeta.p-5.bg-color-5(titulo="Marco de actuación")
          h4 Marco de actuación
          p Guía clara con los pasos a seguir durante el proceso de atención, que asegure coherencia y consistencia en todas las respuestas.

    

    p(data-aos="fade-left") Estas condiciones son esenciales para que el personal pueda actuar con seguridad y profesionalismo, incluso en situaciones difíciles o tensas.




    //- Fin Tema1.1

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
