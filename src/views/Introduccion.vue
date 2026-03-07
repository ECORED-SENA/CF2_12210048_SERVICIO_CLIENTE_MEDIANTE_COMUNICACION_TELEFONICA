<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-3 En el entorno empresarial actual, la atención al cliente se ha convertido en un factor determinante para el éxito de una organización. Las reclamaciones, lejos de ser vistas como amenazas, representan una valiosa fuente de información que permite identificar errores, mejorar procesos y fortalecer la relación con los clientes. Saber gestionarlas adecuadamente contribuye a la fidelización y a la reputación positiva de la empresa.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El personal encargado de la atención telefónica debe desarrollar habilidades comunicativas, empatía y control emocional para manejar situaciones difíciles, especialmente cuando se trata de clientes insatisfechos o molestos. La forma en que se responde a una queja puede convertir una experiencia negativa en una oportunidad para generar confianza y lealtad. Por ello, es clave contar con procedimientos claros y herramientas efectivas en la gestión de reclamaciones.
    
    p.mb-3 Además, el <i>telemarketing</i> ha surgido como una técnica esencial para ampliar mercados, captar nuevos clientes y reforzar la presencia comercial de las empresas. Al integrar estrategias de comunicación directa con una atención personalizada, el <i>telemarketing</i> permite no solo ofrecer productos o servicios, sino también escuchar activamente al cliente, anticiparse a sus necesidades y brindar soluciones inmediatas.


</template>

<script>
export default {
  name: 'Introduccion',
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
