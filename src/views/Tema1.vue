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
            img(src='@/assets/curso/tema1/6.png', alt='')
    
    
    p(data-aos="fade-left") La diferencia es que ahora un solo comentario negativo puede alcanzar a miles de personas en poco tiempo.
    
    .row.justify-content-center.mb-5     
      //- Tarjeta 1
      .col-md-6.col-lg-5.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema1/card2_01.png', alt='')          
          .text-center.bg-color-3.p-4.flex-grow-1
            h4.mb-3 Comentario entre conocidos
            p.mb-0.fw-normal Publicación pública, disponible para miles o millones de usuarios.

      //- Tarjeta 2
      .col-md-6.col-lg-5(data-aos="fade-left")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema1/card2_02.png', alt='')          
          .text-center.bg-color-3.p-4.flex-grow-1
            h4.mb-3 Daño de reputación limitado
            p.mb-0.fw-normal Posible crisis de marca si no se gestiona adecuadamente.



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


      //- Imagen con titulo
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto Rol del asesor telefónico ante una reclamación
      //- Fin Imagen con titulo


      .bg-color-2.p-md-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p.mb-4 Las reclamaciones representan un momento crítico para cualquier empresa, especialmente en los canales de atención no presencial como el teléfono. En este contexto, el asesor o asesora telefónica debe ser capaz de:
            ul.lista-ul.mb-0
              li.d-flex.mb-3
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 Escuchar activamente sin interrumpir.
              li.d-flex.mb-3
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 Mostrar empatía, sin tomar la queja como algo personal.
              li.d-flex
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 Comunicar con claridad y sin lenguaje técnico innecesario.
              li.d-flex
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 Mantener la calma, incluso si el cliente está alterado.
              li.d-flex
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 Utilizar sus habilidades personales y profesionales para buscar una solución que beneficie a ambas partes.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/7.png', alt='')

      p(data-aos="fade-left") Una respuesta adecuada no solo puede resolver el problema, sino también recuperar la confianza del cliente y reforzar la reputación de la empresa.




      //- Imagen con titulo
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto Aspectos que se deben evitar al atender una reclamación
      //- Fin Imagen con titulo

      p(data-aos="fade-left") Al gestionar una reclamación, el comportamiento del personal de atención al cliente es crucial. Una respuesta inadecuada puede agravar la situación o deteriorar aún más la relación con el cliente. Integralia (2014) destaca una serie de prácticas que deben evitarse durante el proceso de atención. Estos errores, aunque comunes, pueden impedir una resolución satisfactoria y afectar la percepción del cliente sobre la empresa:


    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide1_01.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Tomarse la queja como algo personal
                    p Puede generar una reacción emocional, lo que dificulta la objetividad y puede llevar a un conflicto innecesario.
                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide1_02.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Tomar partido
                    p Es fundamental mantener una postura neutral, sin emitir juicios que afecten al cliente o comprometan la imagen de la empresa.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide1_03.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Interrumpir al cliente
                    p Cortar al cliente puede hacerle sentir que no está siendo escuchado. Es necesario escuchar activamente y esperar a que termine antes de responder.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide1_04.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Restar importancia al problema
                    p Minimizar la queja reduce la confianza del cliente. Todas las reclamaciones deben tratarse con seriedad y respeto, sin importar su complejidad.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide1_05.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Prometer lo que no se puede cumplir
                    p Genera falsas expectativas y mayor insatisfacción. Si no se puede resolver en el momento, se debe explicar el proceso y, si es posible, derivar con el contacto adecuado.

    p(data-aos="fade-left") Adoptar una actitud profesional, empática y honesta es clave para transformar una experiencia negativa en una oportunidad de mejora para la empresa y de recuperación del cliente.
    //- Fin Tema1.1


    //- Inicio Tema1.2
    .row.mt-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2	Tratamiento de reclamaciones

  
    .row.mb-10
      
      .col-lg-10
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 La forma en que una empresa gestiona sus reclamaciones influye directamente en su reputación, en la fidelización de sus clientes y en su estabilidad comercial. Un manejo eficaz de estos casos representa no solo una oportunidad de corregir errores, sino también una vía concreta para reforzar la lealtad del cliente y proyectar una imagen de compromiso y responsabilidad.
        .row.mt-3.align-items-start.mb-10.bg-color-2(data-aos="fade-left")  
            p.p-4(data-aos="fade-left") Según Camuñas (2016), el tratamiento adecuado de las reclamaciones es esencial para preservar la buena salud empresarial, ya que permite detectar puntos de mejora y construir relaciones más sólidas con los consumidores.

      .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/8.svg", data-aos="zoom-in")



    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Factores clave valorados por los clientes
    //- Fin Imagen con titulo

    
    p(data-aos="fade-left") López Fresno (2010) identifica los factores que más valoran los clientes cuando presentan una reclamación y esta es gestionada por la empresa:

    .row.justify-content-center.mb-5     
      //- Tarjeta 1
      .col-md-4.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema1/card2_01.png', alt='')          
          .text-center.bg-color-2.p-4.flex-grow-1
            h4.mb-3 Satisfacción con la solución
            p.mb-0.fw-normal El cliente espera una respuesta que resuelva su problema de forma real, no solo con disculpas.

      //- Tarjeta 2
      .col-md-4.col-lg-4(data-aos="fade-left")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema1/card2_02.png', alt='')          
          .text-center.bg-color-2.p-4.flex-grow-1
            h4.mb-3 Rapidez en la atención
            p.mb-0.fw-normal Cuanto más rápido se gestione la reclamación, mayor será la percepción de eficiencia.

      //- Tarjeta 3
      .col-md-4.col-lg-4(data-aos="fade-left")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema1/card2_02.png', alt='')          
          .text-center.bg-color-2.p-4.flex-grow-1
            h4.mb-3 Información constante
            p.mb-0.fw-normal El cliente valora ser informado del avance del proceso, evitando la sensación de abandono.

      
      
    .row.justify-content-center.mb-5.mt-5
      .col-lg-12(data-aos="fade-up")        
        .p-4.bg-color-3.br-15.shadow-sm
          .row.align-items-center        
            .col-auto
              figure.mb-0
                img(src='@/assets/curso/tema1/icon.svg', alt='', style="width: 70px;")                   
            .col
              p.mb-0 Cuando un cliente recibe una <b>solución satisfactoria y rápida</b>, no solo es más probable que continúe comprando, sino que además <b>reconoce la importancia que tiene para la empresa.</b> Esta percepción genera confianza y refuerza la relación comercial.

    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Valor de la gestión de la información
    //- Fin Imagen con titulo

    p(data-aos="fade-left") La gestión de reclamaciones también depende de cómo una empresa <b>organiza y utiliza la información</b> relacionada con estos procesos. Un adecuado tratamiento de datos permite:




    .bg-color-5.p-md-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0          
          ul.lista-ul.mb-0
            li.d-flex.mb-3
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Medir la calidad del servicio y detectar fallos recurrentes.
            li.d-flex.mb-3
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Optimizar tiempos de respuesta.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Implementar mejoras preventivas, evitando futuras quejas similares.
            li.d-flex
              i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
              p.mb-0 Capacitar al personal en base a casos reales.


        .col-lg-5
          figure
            img(src='@/assets/curso/tema1/9.png', alt='')

    
    p.text-center.mb-5(data-aos="fade-left") Una empresa que aprende de sus reclamaciones y responde con eficacia no solo corrige errores, sino que crece con ellos.

    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Valor de la gestión de la información
    //- Fin Imagen con titulo


    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 El proceso de gestión de una reclamación comienza desde el momento en que esta es recibida por la empresa, hasta que se evalúa el nivel de satisfacción del cliente y se aprovecha la información obtenida para mejorar los procesos internos.
        .row.mt-3.align-items-start.mb-10.bg-color-2(data-aos="fade-left")  
            p.p-4(data-aos="fade-left") López Fresno (2010) plantea que todo debe iniciar con una planificación estratégica, que defina claramente los canales de comunicación, las herramientas a utilizar y la estrategia de atención al cliente. A partir de ahí, se desarrolla una serie de fases operativas que aseguran una atención profesional, coherente y orientada a la mejora continua.


    .bg-full-width.bg-fondo-slider.mb-3.mt-5
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_01.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Recepción de la reclamación
                    p Disponer de canales adecuados (teléfono, correo, redes, <i>chatbots</i>, etc.) que permitan al cliente comunicar su reclamación fácilmente y sin barreras.
                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_02.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Codificación y registro
                    p Crear una base de datos organizada con códigos que clasifiquen las reclamaciones. Esta información es esencial para su posterior análisis y toma de decisiones.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_03.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Acuse de recibo
                    p Notificar al cliente que su reclamación ha sido recibida. Si la solución no puede ser inmediata, debe mantenerse informado del avance. Objetivos:
                    ul.lista-ul.mb-0
                      li.d-flex.mb-3
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Confirmar la recepción del reclamo.
                      li.d-flex.mb-3
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Mostrar interés y empatía.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Disculparse por el inconveniente.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Obtener información adicional si es necesario.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Ganar tiempo para una respuesta adecuada.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_04.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Identificación de la solución
                    p Una vez recopilada toda la información, se debe diseñar una solución concreta. Antes de comunicarla, considerar: 
                    ul.lista-ul.mb-0
                      li.d-flex.mb-3
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 ¿Se necesita ofrecer alguna compensación?
                      li.d-flex.mb-3
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 ¿Cuál es el mensaje clave que se quiere transmitir?

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_05.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Respuesta al cliente
                    p Responder solo cuando se tenga claro el diagnóstico del problema. La respuesta debe ser: 
                    ul.lista-ul.mb-0
                      li.d-flex.mb-3
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Personalizada (evitar respuestas genéricas).
                      li.d-flex.mb-3
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Clara y transparente.
                      li.d-flex.mb-3
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Ajustada a los plazos prometidos.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_06.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Evaluación y mejora
                    p Medir la satisfacción del cliente tras el proceso. Utilizar la información para: 
                    ul.lista-ul.mb-0
                      li.d-flex.mb-3
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Identificar errores recurrentes.
                      li.d-flex.mb-3
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Mejorar procedimientos.
                      li.d-flex.mb-3
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Evitar futuras reclamaciones.

    p(data-aos="fade-left") Una gestión estructurada y profesional de las reclamaciones <b>no solo resuelve problemas inmediatos</b>, sino que también permite a la empresa <b>aprender de sus errores, prevenir fallos y construir relaciones duraderas</b> con sus clientes.

    //- Fin Tema1.2

    //- Inicio Tema1.3
    .row.mt-5
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 ¿Qué hacer una vez resuelta la reclamación?

    p(data-aos="fade-left") Una vez que una reclamación ha sido gestionada y resuelta de manera adecuada, <b>el trabajo no termina ahí</b>. Existen acciones adicionales que pueden <b>marcar una diferencia significativa</b> en la percepción del cliente y transformar una experiencia negativa en una oportunidad de fidelización.

      //- Imagen con titulo
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto Ofrecer “algo más”
      //- Fin Imagen con titulo

    p(data-aos="fade-left") Luego de resolver un incidente, el asesor o asesora telefónica tiene la posibilidad de preguntar al cliente si puede ofrecerle “algo más” como gesto de compensación por las molestias ocasionadas. Este tipo de acciones pueden incluir:


    .row.justify-content-center.mb-5     
      //- Tarjeta 1
      .col-md-4.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema1/card4_01.png', alt='')          
          .text-center.bg-color-2.p-4.flex-grow-1
            h4.mb-3 Tiempo adicional de servicio sin costo 
            p.mb-0.fw-normal Revaloriza el trato recibido y suaviza la experiencia negativa.

      //- Tarjeta 2
      .col-md-4.col-lg-4(data-aos="fade-left")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema1/card4_02.png', alt='')          
          .text-center.bg-color-2.p-4.flex-grow-1
            h4.mb-3 Descuentos especiales o cupones
            p.mb-0.fw-normal Refuerzan la percepción de justicia y atención personalizada.

      //- Tarjeta 3
      .col-md-4.col-lg-4(data-aos="fade-left")
        .tarjeta.bg-color-white.h-100.shadow-sm.d-flex.flex-column
          figure.mb-0
            img(src='@/assets/curso/tema1/card4_03.png', alt='')          
          .text-center.bg-color-2.p-4.flex-grow-1
            h4.mb-3 Acceso prioritario a ciertos servicios
            p.mb-0.fw-normal Hace sentir al cliente apreciado y recompensado por su paciencia y comprensión.

    
    p(data-aos="fade-left") Ofrecer algo más permite superar las expectativas del cliente, generando una buena impresión, y en algunos casos, logrando que el cliente olvide momentáneamente el problema inicial y se enfoque en la solución positiva.


      //- Imagen con titulo
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto Agradecer al cliente
      //- Fin Imagen con titulo




    
    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-4 El agradecimiento sincero es una herramienta poderosa. Agradecer al cliente por:

        .row.align-items-center.mb-4
          .col-auto.d-none.d-md-block
            figure
              img(src='@/assets/curso/tema1/11.svg', alt='', style="width: 80px;")         
          
          .col
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 Su comprensión ante los errores cometidos.
              li.d-flex.mb-2
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 La paciencia durante el proceso de solución.
              li.d-flex
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 La información valiosa que ha compartido, útil para mejorar los servicios.
        
        p.mb-0 Este acto de cortesía fortalece la relación y transmite una cultura empresarial centrada en el respeto y la mejora continua.
      
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/12.svg', alt='')

      //- Imagen con titulo
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto Relizar seguimiento
      //- Fin Imagen con titulo

    p(data-aos="fade-left") Una vez resuelta la reclamación, es recomendable contactar nuevamente al cliente, siempre que sea posible, para verificar si:
    
    .row
      .col-sm-6.col-lg-4.mb-4.d-flex
        .tarjeta.bg-color-2.p-4.bordes.rounded.h-100.d-flex.flex-column.w-100
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema1/13.svg', alt='')          
          p.text-center La solución fue efectiva.


      .col-sm-6.col-lg-4.mb-4.d-flex
        .tarjeta.bg-color-2.p-4.bordes.rounded.h-100.d-flex.flex-column.w-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/13.svg', alt='')
          p.text-center Se siente satisfecho con el trato recibido


      .col-sm-6.col-lg-4.mb-4.d-flex
        .tarjeta.bg-color-2.p-4.bordes.rounded.h-100.d-flex.flex-column.w-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/13.svg', alt='')
          p.text-center  Existen nuevas dudas o sugerencias.

    p.text-center(data-aos="fade-left") Este seguimiento post-reclamación convierte una situación negativa en una experiencia positiva, al demostrar compromiso y responsabilidad.


      //- Imagen con titulo
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto Reclamar es una oportunidad para mejorar
      //- Fin Imagen con titulo


    

    
    .row.justify-content-center.align-items-center.mb-5    
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-4 Cada reclamación bien gestionada debe verse como una oportunidad para:

        .row.align-items-center.mb-4
          
          .col
            ul.lista-ul.mb-0
              li.d-flex.mb-2
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 Aprender de los errores
              li.d-flex.mb-2
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 Mejorar procesos
              li.d-flex
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 Prevenir futuras inconformidades.
              li.d-flex
                i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                p.mb-0 Consolidar una cultura de servicio centrada en el cliente.
        
        p.mb-0 La reclamación no es el final de la relación comercial, sino una nueva oportunidad para fortalecerla.
      
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/14.png', alt='')

    //- Fin Tema1.3

    //- Inicio Tema1.4
    .row.mt-5
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Tratamiento de un interlocutor enfadado


    .row.mb-10
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/15.svg", data-aos="zoom-in")
          .col-lg-8
            .row.mt-3.align-items-start.mb-10.bg-color-2
                p.p-4 Atender a un cliente enfadado es uno de los mayores retos en la atención telefónica. En estas situaciones, se ponen a prueba todas las habilidades del asesor o asesora: escucha activa, control emocional, empatía, comunicación clara y resolución de conflictos.
            .row.align-items-start.mb-3(data-aos="fade-left")
              .col-lg
              p.mt-4 La paciencia, como habilidad transversal, resulta fundamental para <b>superar obstáculos emocionales</b> y ayudar al cliente a salir de un estado de frustración hacia uno más racional, donde sea posible <b>dialogar y buscar soluciones.</b>
            



    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto La curva de hostilidad
    //- Fin Imagen con titulo

    p(data-aos="fade-left") Las reacciones hostiles de los clientes suelen seguir un patrón emocional conocido como <b>curva de hostilidad</b>. Esta curva permite comprender que la ira <b>no es constante</b>, sino que pasa por una serie de <b>etapas previsibles</b>. Conocerlas ayuda al asesor o asesora a intervenir en el momento adecuado y con las herramientas apropiadas.



    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Etapas de la curva de hostilidad
    //- Fin Imagen con titulo

    p(data-aos="fade-left") A continuación, se presenta un video que explica, de manera estructurada y clara, las distintas etapas de la curva de hostilidad y su aplicación en la gestión estratégica de conflictos con clientes.


    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Claves para tratar a un interlocutor enfadado
    //- Fin Imagen con titulo

    p(data-aos="fade-left") Una vez comprendido este proceso emocional, el asesor o asesora debe aplicar ciertas estrategias específicas para abordar correctamente al cliente molesto:


      .carousel-bg
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-12.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-md-4 col-xl-4")
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema1/iconcard1_01.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Escuchar sin interrumpir
                p.card-text.text-center
                  | Permite que el cliente libere tensión y se sienta valorado.

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema1/iconcard1_02.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Mantener un tono de voz calmado y neutral
                p.card-text.text-center
                  | Ayuda a desescalar la situación emocional.

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema1/iconcard1_03.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center No tomar el reclamo como algo personal
                p.card-text.text-center
                  | Favorece el control emocional del asesor y evita respuestas defensivas.

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema1/iconcard1_04.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Mostrar empatía sin justificar el error
                p.card-text.text-center
                  | Demuestra comprensión sin asumir culpas innecesarias.

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema1/iconcard1_05.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center No reaccionar al ataque o provocación
                p.card-text.text-center
                  | Mantiene el foco en la solución y no en el conflicto.

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema1/iconcard1_06.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Esperar el momento oportuno para intervenir
                p.card-text.text-center
                  | Evita reactivar la hostilidad. Se debe actuar cuando el cliente esté más receptivo.

              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                img(src='@/assets/curso/tema1/iconcard1_07.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                h4.card-title.text-center Orientar la conversación hacia la solución
                p.card-text.text-center
                  | Redirige la energía del cliente hacia un resultado positivo.


    .row.justify-content-center.mb-5.mt-5
      .col-lg-12(data-aos="fade-up")        
        .p-4.bg-color-3.br-15.shadow-sm
          .row.align-items-center        
            .col-auto
              figure.mb-0
                img(src='@/assets/curso/tema1/icon.svg', alt='', style="width: 70px;")                   
            .col
              p.mb-0 Tratar con un cliente enfadado no es simplemente una tarea de contención, sino una oportunidad para demostrar profesionalismo y transformar una experiencia conflictiva en una muestra de excelencia en la atención. Comprender la curva de hostilidad y actuar estratégicamente permite al asesor no solo calmar al cliente, sino también recuperar su confianza.

    //- Fin Tema1.4


    //- Inicio Tema1.5
    .row.mt-5
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Cómo interactuar con un interlocutor enfadado

    p(data-aos="fade-left") Cuando un cliente expresa enfado durante una llamada, es fundamental que el asesor o asesora telefónica <b>mantenga el control emocional y utilice técnicas de comunicación efectivas.</b> El objetivo no es solo calmar al interlocutor, sino también <b>restablecer el diálogo</b> y trabajar juntos en la solución del problema. A continuación, se presentan las acciones clave que el personal debe aplicar durante esta interacción:

    .bg-full-width.bg-fondo-slider.mb-3.mt-5
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide3_01.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Esperar el momento adecuado para intervenir
                    p No se debe interrumpir al cliente en plena expresión de enojo. Hay que esperar a que se calme.
                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide3_02.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Escuchar con atención y concentración
                    p Transmite seguridad y demuestra respeto por lo que el cliente está diciendo.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide3_03.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Mostrar empatía y controlar el contexto
                    p Ayuda a crear un ambiente de calma y disposición para el diálogo.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide3_04.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Pedir disculpas en nombre de la empresa
                    p Reduce la tensión emocional y abre la puerta a una conversación más tranquila.
                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide3_05.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Mantener el control emocional propio
                    p El asesor debe conservar un tono de voz bajo, tranquilo y profesional, aunque el cliente no lo haga.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide3_06.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Mantener la calma en todo momento
                    p Es el factor más importante. La calma del asesor influye directamente en la del cliente.                 

    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Descender la curva de enfado
    //- Fin Imagen con titulo

    p(data-aos="fade-left") Una vez que el cliente ha liberado parte de su enojo y está más calmado, es posible guiar la conversación hacia un terreno más racional. Este es el punto de inflexión en el que se puede comenzar a construir una solución en conjunto. Para lograrlo:

    container.tarjeta.p-4.p-md-5

          TabsA.color-acento-botones
            .tarjeta.p-5.bg-color-5(titulo="Demostrar comprensión")
              h4 Demostrar comprensión:
              p Capacidad de asumir y resolver las quejas del cliente de forma eficaz.


            .tarjeta.p-5.bg-color-5(titulo="Validar sus emociones")
              h4 Validar sus emociones
              p Libertad para tomar decisiones dentro de ciertos límites, utilizando el criterio adecuado.

            
            .tarjeta.p-5.bg-color-5(titulo="Resumir brevemente su situación")
              h4 Resumir brevemente su situación
              p Esto demuestra atención y asegura que se ha interpretado correctamente el problema.

    
    p(data-aos="fade-left") Este es el momento ideal para comenzar a trabajar juntos en la solución, generando confianza y una experiencia positiva dentro de un contexto inicialmente negativo.

        


    //- Fin Tema1.5

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
