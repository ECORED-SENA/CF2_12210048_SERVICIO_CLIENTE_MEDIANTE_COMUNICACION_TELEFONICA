<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Reclamaciones del cliente

    p.mb-3 En el entorno empresarial actual, las reclamaciones y quejas de los clientes no solo deben considerarse inevitables, sino también estratégicas. En una era donde la reputación de una marca puede construirse o destruirse en línea, estas manifestaciones representan una oportunidad clave para mejorar procesos, productos y servicios.

    //- Contenido Introducturio.
    .row.justify-content-center.align-items-stretch.mb-5        
      .col-lg-9(data-aos="fade-right")                
        .row.g-0.align-items-stretch.mb-4          
          .col-md-5
            figure.mb-0
              img(src='@/assets/curso/tema1/1.png', alt='Mujer gritando').w-100         
          .col-md-7.bg-color-1
            .p-4.h-100.d-flex.align-items-center
              p.mb-0 Según Claus Moller (2005), quejarse tradicionalmente ha tenido una connotación negativa, asociada al desagrado o la inconformidad. Sin embargo, hoy se reconoce que una queja bien gestionada puede fortalecer la relación con el cliente y generar confianza.        
        .row          
          p.mb-0 Actualmente, muchas empresas utilizan canales como redes sociales, chats en vivo, formularios digitales y aplicaciones móviles para gestionar las reclamaciones. Por tanto, los asesores deben contar con habilidades no solo comunicativas, sino también digitales, emocionales y analíticas.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure.h-100.mb-0
          img(src='@/assets/curso/tema1/2.png', alt='Asesora de servicio', style="height: 100%; object-fit: cover;").w-100
    //- Fin Contenido Introducturio.

    separador

    //- Inicio Tema1.1
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Pautas de acción ante una reclamación

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
