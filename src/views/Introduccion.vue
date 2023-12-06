<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.fondo-bg1.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
            p.mb-0 El análisis de procesos facilita la identificación de puntos clave de oportunidad, en los cuales se pueden implementar modelos de mejoramiento que contribuyan al incremento de la productividad. Esto se logra mediante la validación de la información proporcionada por cada área operativa. Los modelos de mejoramiento se aplican con el fin de aumentar la calidad y la productividad, y a la vez mantener motivado y enfocado al talento involucrado en los procesos. Este componente formativo aborda estos temas a través de dos unidades principales: la primera expone los diferentes modelos de mejoramiento y la segunda, los métodos para recolectar información que permita analizar cuál área o punto crítico del proceso requiere intervención, así como medir el impacto de las herramientas implementadas.
          .col-lg-4.col-8(data-aos="fade-left")
            img(src='@/assets/curso/temas/intro/img.svg', alt='')

    p.mb-4(data-aos="fade") En el siguiente video, se presentan las temáticas que abordaremos durante este componente:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.  
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
