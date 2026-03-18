<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mt-2.text-left.font-weight-bold(style="font-size: 1.2rem;") <b>Servicio al cliente mediante la comunicación telefónica</b>
    

    p.mt-2
      strong Síntesis:
      |  Gestión de las reclamaciones y <i>telemarketing</i> en la atención telefónica.
    

    p.mt-5 A continuación, se presenta a manera de síntesis un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.

    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis sobre la gestión de reclamaciones y <i>telemarketing</i> en la atención telefónica que organiza temas como la importancia de las quejas, pautas ante reclamaciones, manejo de interlocutores enojados, tipos y funciones del telemarketing, técnicas de venta telefónica y sus utilidades, incluyendo encuestas, análisis de mercado y cierre de ventas. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
