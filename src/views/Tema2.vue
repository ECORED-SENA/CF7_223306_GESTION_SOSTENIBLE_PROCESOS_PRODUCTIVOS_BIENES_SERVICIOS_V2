<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Metodologías para obtención de datos

    .row.fondo-t2.align-items-center.pt-4.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-4.col-8.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/t2/img.svg', alt='')
          .col-lg-8.mb-4(data-aos="fade-left")
            p La gestión de procesos requiere la implementación de métodos de investigación para obtener la información necesaria para el análisis de datos y, así, reaccionar adecuadamente ante las circunstancias que puedan surgir.
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/t2/ico.svg' alt='')
              .tarjeta.bg-acento-contenido
                .p-4.position-relative
                  p.text-white.mb-0 Durante el proceso productivo, desde su inicio hasta su finalización, se generan datos constantemente. En un proceso llevado a cabo de manera artesanal, la necesidad de recolectar esta información puede ser menor. Sin embargo, en un entorno industrial, la cantidad de información se incrementa significativamente, lo que hace más importante el uso de herramientas informáticas para procesar y visualizar estos datos.
                  img.deco-tarjb(src='@/assets/curso/temas/t2/deco-tarjb.svg' alt='')


          Separador
          #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade")
            h2 2.1 Gestión de la información 

          .row.align-items-center.justify-content-center
            .col-lg-1.col-md-2.col-4.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t2/ico2.svg', alt='')
            .col-lg-11.col-md-10.mb-4(data-aos="fade-left")
              p.mb-0 La gestión del proceso implica obtener información para su posterior análisis. En este sentido, es crucial administrar y gestionar la información, que consiste básicamente en el proceso a través del cual los datos se capturan y almacenan de manera ordenada para convertirse en información útil. Esto se ilustra en el siguiente gráfico interactivo:

          .col-lg-10(data-aos="fade-down")
            ImagenInfografica.color-acento-botones(data-aos="fade-down")
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/t2/img-infog.svg', alt='')
              .tarjeta.bg-1.p-3(x="27.5%" y="29%" numero="+")
                h5.mb-1 Datos
                p.mb-0 El modelo de gestión de información tendrá en cuenta en primer lugar al Dato que es la unidad mínima de información, el conjunto de datos describe un registro.
              .tarjeta.bg-1.p-3(x="58.5%" y="29%" numero="+")
                h5.mb-1 Proceso
                p.mb-0 Es el medio que se utiliza para la recolección y almacenamiento del dato; utilizando diferentes técnicas como: entrevistas, cuestionarios, sondeos, técnica Delphi, Focus Group, entre otros.
              .tarjeta.bg-1.p-3(x="89%" y="29%" numero="+")
                h5.mb-1 Información
                p.mb-0 A través de informes, gráficas y tablas, las cuales mostrarán la información en forma de bases de datos, que pueden ser consultadas y analizadas para la toma de decisiones.

    .row.fondo2-t2.align-items-center.py-4.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .bg-2.br-21.p-4.mb-4(data-aos="fade-down")
            .row.align-items-center.justify-content-center
              .col-lg-2.col-4
                img(src='@/assets/curso/temas/t2/img2.svg', alt='')
              .col-lg-10
                p.mb-0 Generalmente, en los procesos administrativos y de mejora continua, los formatos son el medio más confiable para recolectar información del proceso. Estos actúan como un medio de comunicación estandarizada, directamente relacionado con un proceso operativo, y su objetivo principal es registrar un evento en el momento en que ocurre. La captura de datos en tiempo real es crucial, ya que el registro posterior puede generar mayores costos, errores y reprocesos. Posteriormente, un ordenamiento adecuado de los datos facilita su flujo, procesamiento y análisis.

          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
            p.mb-4 Al diseñar estos formatos para la recolección de información, se deben tener en cuenta varios aspectos:
            ol.lista-ol--cuadro.lista-ol--separador.fa-ul
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold 1
                | Uno de ellos es el perfil de la persona que lo va a diligenciar, es decir quiénes son los clientes objetivo, con el fin de contar con la información necesaria.
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold 2
                | Se debe evitar información innecesaria, o información que probablemente la persona no conozca.
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold 3
                | Evitar información que sea dispendiosa de diligenciar y espacios que no sean suficientes para dar toda la información.
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold 4
                | Los formatos deben estar diseñados para diligéncialos de forma sencilla y ágil, por ende debe apoyarse de ítems de selección y poco texto.
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold 5
                | Dentro de la misma organización se deben evitar los formatos que pidan la misma información en diferentes formas y en diferentes departamentos, ya que será desagradable para el usuario que diligencia la información.
          .col-lg-4.col-8(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/img3.svg', alt='')

    p(data-aos="fade") Dentro de los tipos de formatos habilitados para recolectar información, encontramos los formatos abiertos, donde el usuario tiene la oportunidad de responder libremente a lo solicitado. En estos casos, la recolección de información es mayormente descriptiva, lo que implica la necesidad de mecanismos avanzados para su análisis. Por otro lado, los formatos cerrados incluyen casillas, círculos y respuestas predeterminadas, lo cual facilita la recolección de información más específica y concreta.

    p.mb-4(data-aos="fade") Por otro lado, la gestión de la información requiere recursos humanos y tecnológicos que tengan un mismo objetivo:

    .row.justify-content-center
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarj-ico1.svg' alt='')
          .tarjeta.bg-3.br-5
            .p-4.px-lg-5
              .bg-white.br-21.w-fit.m-auto.px-4.mb-4
                h4.text-center.py-2 El talento humano
              p.mb-4 Requiere que tenga las habilidades para usar medios de procesamiento de información.
      .col-md-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarj-ico2.svg' alt='')
          .tarjeta.bg-3.br-5
            .p-4.px-lg-5
              .bg-white.br-21.w-fit.m-auto.px-4.mb-4
                h4.text-center.py-2 Los recursos tecnológicos
              p.mb-4 Requiere software para captura y almacenamiento de esos datos.


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.2  Recolección y sintetización de la información

    p(data-aos="fade") Los formatos son el medio para recolectar la información, sin embargo, existen diferentes técnicas que, como la observación, entrevista, encuesta, técnica Delphi o el Focus Group, entre otros, permiten tener acceso a información relevante de la organización.
    p.mb-4(data-aos="fade") Algunas de estas técnicas de recolección de la información son:

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-5.col-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img4.svg', alt='')
      .col-lg-7.mb-4(data-aos="fade-left")
        .bg-5.br-10.p-4.pt-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-11
                h4 La observación
                p Una técnica primordial para la recolección de información es la observación. En este contexto, se podría utilizar una guía de observación y emplear un formato para describir los hechos que ocurren en un evento específico. Adicionalmente, se pueden usar listas de chequeo, matrices de análisis o incluso un registro anecdótico.
            .row.justify-content-center
              .col-11
                h4 La encuesta
                p La encuesta es una técnica que se realiza a través de la realización de formatos y estos serán diligenciados por personas que tienen relación directa con el objetivo de la investigación, se puede realizar en forma de cuestionario, lista de chequeo, test, prueba, o una escala de evaluación.
            .row.justify-content-center
              .col-11
                h4 La entrevista
                p La entrevista puede ser estructurada o no estructurada. Generalmente, se utiliza un guion que facilita indagar en las áreas de investigación relevantes al tema y objetivo perseguido. En una entrevista estructurada, se debe seguir un guion rígido con preguntas predefinidas. En cambio, en una entrevista no estructurada, se cuenta con una guía de posibles preguntas, sin la obligación de abordarlas todas, y pueden surgir preguntas adicionales durante la entrevista
            .row.justify-content-center
              .col-11
                h4 La técnica #[em Delphi]
                p Esta técnica de recolección de información se basa en la experiencia de personas expertas en un tema específico, donde interactúan y llegan a un consenso guiado. Generalmente, este proceso es sistemático y se seleccionan expertos de diferentes jerarquías en el tema. Posteriormente, se elabora un cuestionario, se tabula la información y se repite el proceso, hasta obtener la información necesaria y acordada.

    .cajon-b.color-primario.t2-2.p-3.mb-5(data-aos="fade-down")
      .row.align-items-center
        .col-lg-1.col-md-2.col-3
          img(src='@/assets/curso/temas/t2/ico3.svg', alt='')
        .col-lg-11.col-md-10.col-9
          p.mb-0 Así como es importante la recolección de información, también lo es sistematizarla y resumirla para su presentación a través de estadísticas y/o gráficas, facilitando así su análisis. Entre las herramientas estadísticas utilizadas para sistematizar la información recogida se encuentran:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris p-4 px-lg-5" data-aos="fade-down")
      .row(titulo="La tabla de frecuencias")
        .col-md-6.mb-4.mb-md-0
          p Una de las maneras de sistematizar la información es mediante tablas de distribución de frecuencias, donde se registran las observaciones por ítem evaluado. Estas tablas muestran la cantidad de veces que se presenta cada observación.
          p Por ejemplo, según una tabla de una planta de producción, se puede resumir la información de las actividades de un colaborador en un día. En este caso, se observó que el operador realizó actividades productivas 28 veces y actividades improductivas 9 veces durante una jornada laboral.
        .col-md-6
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 8.] Tabla de frecuencia de las actividades de un operador durante una jornada
          figure.mb-5(data-aos="fade-down")
            img(src='@/assets/curso/temas/t2/fig8.png', alt='')
      .row(titulo="El gráfico circular")
        .col-md-6.mb-4.mb-md-0
          p El gráfico circular, también conocido como gráfico de sectores, representa una serie de cantidades mediante un círculo dividido en varios sectores. El tamaño de cada sector depende directamente de la proporción o frecuencia de la variable estudiada en la investigación. La información representada en este tipo de gráfico se puede resumir de la siguiente manera.
        .col-md-6
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 9.] Gráfico circular de las actividades de un operador por jornada
          figure.mb-5(data-aos="fade-down")
            img(src='@/assets/curso/temas/t2/fig9.png', alt='')
      .row(titulo="El gráfico de barras")
        .col-md-6.mb-4.mb-md-0
          p Este gráfico utiliza barras rectangulares, cuya altura (o longitud, en el caso de barras horizontales) representa la frecuencia correspondiente a cada categoría o variable.
        .col-md-6
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 10.] Gráfico de barras de las actividades de un operador por jornada.
          figure.mb-5(data-aos="fade-down")
            img(src='@/assets/curso/temas/t2/fig10.png', alt='')

    .row.fondo-acento-contenido.align-items-center.py-3.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center
          .col-lg-2.col-md-2.col-4.mb-3.mb-md-0
            img.m-auto(src='@/assets/curso/temas/t2/img5.svg' alt='' style="width: 185px;")
          .col-lg-9.col-md-10
            p.mb-0.text-white Finalmente, la recolección y sintetización de la información va a depender directamente del tipo de investigación a realizar, teniendo presente que entre más clara, exacta y veraz sea, se podrán tomar decisiones de forma asertiva; así mismo si esta información se obtiene en un tiempo prudente se puede reaccionar ante la situación que se evidencia, por ejemplo, validar de qué manera se pueden minimizar las actividades improductivas de un operador.

    p.mb-4(data-aos="fade") El siguiente video sobre la recolección de datos permite profundizar en el análisis de datos:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. 


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.3  Toma de decisiones

    .row.align-items-center.justify-content-center
      .col-lg-4.col-8.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img6.png', alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        p A lo largo del día se toman múltiples decisiones. Este proceso de pensamiento se define como la capacidad de elegir un curso de acción entre varias alternativas posibles. Para tomar una decisión efectiva, es esencial preguntarse cuál es el punto de partida, con qué herramientas se cuenta y cuál es el objetivo a alcanzar. En los procesos de gestión, se toman decisiones diariamente en cada proceso, ya sea estratégico, clave o de apoyo, y estas decisiones impactan significativamente en los resultados de la organización.
        p Los tipos de decisiones pueden ser:
        .row.justify-content-center
          .col-md-4.mb-3
            .bg-4.br-10.h-100.p-4.text-center
              img.m-auto.mb-3(src='@/assets/curso/temas/t2/tarj2-ico1.svg', alt='', style="width: 100px;")
              p.mb-0 Decisiones a #[b nivel estratégico], son decisiones de riesgo y que impactan a toda la organización.
          .col-md-4.mb-3
            .bg-4.br-10.h-100.p-4.text-center
              img.m-auto.mb-3(src='@/assets/curso/temas/t2/tarj2-ico2.svg', alt='', style="width: 100px;")
              p.mb-0 Decisiones #[b operativas], generalmente estas son más de tipo rutinario, que se toman día a día.
          .col-md-4.mb-3
            .bg-4.br-10.h-100.p-4.text-center
              img.m-auto.mb-3(src='@/assets/curso/temas/t2/tarj2-ico3.svg', alt='', style="width: 100px;")
              p.mb-0 Decisiones #[b individuales o grupales], estás ultimas se pondrán en contexto y se votará por la opción más asertiva.

    p.mb-4(data-aos="fade") Para tomar decisiones, es importante contar con las herramientas que se han mencionado anteriormente. Sin embargo, también existen otras que facilitan la toma de decisiones a nivel gerencial, como el Balanced Scorecard o cuadro de mando integral:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.  


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
