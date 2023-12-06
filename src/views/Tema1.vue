<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Modelos de Mejoramiento

    .row.justify-content-center(data-aos="fade-down") 
      .col-lg-10
        .bg-5.br-21
          .row.align-items-center
            .col-lg-4.py-0.img-1
              img(src='@/assets/curso/temas/t1/img.png', alt='')
            .col-lg-8
              p.mb-0.p-4 La gestión del mejoramiento continuo de los procesos se ha vuelto una actividad destacada dentro de las organizaciones. Generalmente, es aliada de las jefaturas de procesos e ingeniería. Esta gestión ha permitido identificar oportunidades de mejora a través del análisis de indicadores y, asimismo, darles tratamiento implementando estrategias que eliminan sistemáticamente la causa raíz de los problemas.


    // TEMA 1.1

    .row.fondo2-t1.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          Separador
          #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade")
            h2 1.1 Gestión de procesos

          .col-lg-7.mb-4(data-aos="fade-right")
            p Según la norma ISO 9000 (2015), un proceso es “Un conjunto de actividades mutuamente relacionadas o que interactúan, que utilizan las entradas para proporcionar un resultado previsto”. Es así como las empresas se han organizado y estructurado en procesos para facilitar la toma de decisiones, eliminando actividades que no agregan valor y priorizando la satisfacción de las necesidades de los clientes. La gestión de procesos ha sido el tema más recurrente y el que ha despertado mayor conciencia en las empresas, ya que la ineficiencia de estos puede traducirse en pérdidas monetarias significativas o incluso en el cierre definitivo de las mismas.
            p En una organización, cada uno de los procesos cuenta con parámetros específicos que facilitan la validación de modelos y herramientas de mejoramiento continuo. Entre estos parámetros se destacan el costo, la calidad, el servicio y la rapidez en la respuesta. Es crucial reconocer que los procesos en las organizaciones se clasifican, principalmente, en tres tipos:
          .col-lg-5.col-8.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img2.svg', alt='')
    
    .row.fondo3-t1.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          TabsB.color-acento-botones.mb-5(data-aos="fade-down")
            .bg-8.py-4.py-md-5(titulo="Procesos Estratégicos" :icono="require('@/assets/curso/temas/t1/tab-ico.svg')")
              .row.justify-content-center
                .col-md-5.mb-4.mb-md-0
                  h4.t-acento-contenido Procesos Estratégicos
                  p Este conjunto de actividades, que implementa la planeación estratégica y se enfoca en la realización de metas y objetivos (el núcleo de la estrategia), incluye procesos detallados y visibles en los mapas de procesos de las organizaciones. Generalmente, estas actividades están asociadas con áreas de direccionamiento estratégico, comunicaciones, planeación y gestión de calidad, entre otras.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/tab-img1.png', alt='')
            .bg-8.py-4.py-md-5(titulo="Procesos Clave o Misionales" :icono="require('@/assets/curso/temas/t1/tab-ico.svg')")
              .row.justify-content-center
                .col-md-5.mb-4.mb-md-0
                  h4.t-acento-contenido Procesos Clave o Misionales
                  p Estos procesos comprenden las actividades principales de una organización, esenciales para su propósito y razón de ser. Son los responsables de convertir las necesidades de los clientes o partes interesadas en satisfacción y valor agregado. En términos más específicos, estos procesos transforman la materia prima en productos finales o generan actividades que agregan valor en el caso de que se ofrezca un servicio.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/tab-img2.png', alt='')
            .bg-8.py-4.py-md-5(titulo="Procesos de Apoyo o de Soporte" :icono="require('@/assets/curso/temas/t1/tab-ico.svg')")
              .row.justify-content-center
                .col-md-5.mb-4.mb-md-0
                  h4.t-acento-contenido Procesos de Apoyo o de Soporte
                  p Contemplan los procesos que ayudan a la operación o los procesos misionales, encargándose de las actividades como la gestión de recursos financieros, humanos, tecnológicos, entre otros.
                .col-md-5
                  img(src='@/assets/curso/temas/t1/tab-img3.png', alt='')

          .col-lg-4.col-9.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/t1/img3.svg', alt='')
          .col-lg-7.mb-4(data-aos="fade-left")
            h5.mb-4 En la gestión de los procesos se deben tener en cuenta los siguientes parámetros:
            ol.lista-ol--cuadro.fa-ul
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold a
                | Cuando se habla de costo como parámetro, cada estrategia o acción que se realice debe tener como objetivo principal mantener o disminuir el costo, teniendo en cuenta los elementos que podrían hacer parte de la producción de un bien o la generación de un servicio sostenible.
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold b
                | En la gestión, las estrategias como parámetro deben garantizar, mantener o incrementar la calidad actual del producto o servicio ofertado.
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold c
                | El servicio, debe estar valorado cualitativamente por parte del cliente, y que en la gestión de procesos se deberá hacer esfuerzos con el fin de mejorar la percepción de este y así incrementar la satisfacción del cliente.
              li 
                .lista-ol--cuadro__vineta
                  span.fw-bold d
                | La rapidez en la respuesta es un parámetro que la gestión de procesos debe mejorar, facilitando la comunicación con el cliente y con las partes interesadas, y apoyándose últimamente en herramientas tecnológicas.

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-lg-11
        .bg-10.br-21
          .row.align-items-center
            .col-lg-9
              p.mb-0.p-4 Pero para gestionar adecuadamente los procesos, es inicialmente necesario contar con información que permita identificar las oportunidades de mejora y determinar en qué procesos se deben implementar los modelos de mejoramiento. Esta información proviene de datos históricos y actuales de cada una de las áreas, donde se puede visualizar el comportamiento de las variables que intervienen en los procesos. Por ejemplo, al gestionar un proceso de fabricación de zapatos, se debe validar la información correspondiente a datos históricos de indicadores de eficiencia, productividad, desperdicios, productos defectuosos, entre otros. Estos datos permitirán analizar en qué parte del proceso se deben concentrar los esfuerzos de gestión. Sin embargo, para esto, existen técnicas de análisis y planeación de procesos.
            .col-lg-3.py-0.img-2
              img(src='@/assets/curso/temas/t1/img4.png', alt='')
       
    .bg-7.w-fit.px-3.py-2.mb-4(data-aos="fade") 
      h4.mb-0 Técnicas de análisis

    p.mb-4(data-aos="fade") Para el análisis existen diferentes técnicas que ayudar a analizar y por ende determinar cuáles pueden ser las oportunidades de mejora de algún proceso bien sea administrativo o productivo:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris p-4 px-lg-5" data-aos="fade-down")
      .row.justify-content-center(titulo="Matriz DOFA")
        .cajon-b.color-primario.t1-1.p-3.mb-4
          .row.align-items-center
            .col-lg-1.col-md-2.col-3
              img(src='@/assets/curso/temas/t1/acord-ico1.svg', alt='')
            .col-lg-11.col-md-10.col-9
              p.mb-0 La primera herramienta de análisis es conocida como la Matriz DOFA, la cual permite identificar las Debilidades, Oportunidades, Fortalezas y Amenazas. De este modo, es posible comprender el contexto productivo o el entorno en el cual la empresa está involucrada.
        p.mb-4 El siguiente video ofrece una visión clara sobre las ventajas de aplicar esta herramienta DOFA
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video.  
      .row.justify-content-center(titulo="Técnica 5W2H")
        p.mb-4 Por sus letras iniciales de las preguntas en inglés, ¿What?, ¿Where?, ¿Who?, ¿When?, ¿Why?, ¿How?, y ¿How Many?, que traducen, ¿qué?, ¿dónde?, ¿cuándo?, ¿quién?, ¿por qué?, ¿cómo?, y ¿cuánto?, en este sentido, esta técnica 5W2H consiste en responder a cuestionamientos que comienzan con estas palabras, dentro de muchos otros cuestionamientos que permiten estudiar y detectar posibles fallas del proceso; algunas preguntas de ejemplo son las que se muestran en la siguiente figura 1:
        .col-lg-9
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 1.] Ejemplo cuestionamientos técnica 5W2H
          figure.mb-3
            img(src='@/assets/curso/temas/t1/fig1.svg', alt='La figura presenta un diagrama "5W2H", empleado en análisis y resolución de problemas, que plantea preguntas clave en inglés y español. Además, con preguntas sobre un proceso productivo, abarcando desde los elementos producidos hasta la tecnología usada y la medición del proceso.')
          .bg-3.p-4
            .row
              .col-md-4
                p.mb-0 ¿Qué se produce?
                p.mb-0 ¿Con qué se produce?
                p.mb-0 ¿Cómo se produce?
                p.mb-0 ¿Quiénes lo producen?
                p.mb-0 ¿Cuánto producen?
                p.mb-0 ¿Dónde se produce?
              .col.md-8
                p.mb-0 ¿Qué tecnología se utiliza?
                p.mb-0 ¿Cuándo inicia y cuándo termina el proceso?
                p.mb-0 ¿Por qué es necesario el proceso?
                p.mb-0 ¿Por qué se produce de esa forma actualmente?
                p.mb-0 ¿Cómo se mide el proceso?
      .row.justify-content-center(titulo="VSM (<em>Visual Stream Mapping</em>)")
        p Se puede utilizar la herramienta Visual Stream Mapping (Mapa de Flujo de Valor) para mapear procesos. Esta técnica permite visualizar todo el proceso, facilitando la validación de las entradas, salidas, procesos de transformación y la planeación. Proporciona datos relevantes como los tiempos de ciclo, tiempos de alistamiento, tiempos muertos y la cantidad de personas participando en cada proceso. Además, ayuda a determinar los procesos que son restricciones. Generalmente se usa en la implementación de herramientas de manufactura esbelta y optimización de procesos, facilitando el análisis de cada parte del proceso.
        p.mb-4 Como se muestra en la figura 2, el mapa de flujo de valor permite conocer los detalles del proceso y las oportunidades de mejora, en donde se podrá intervenir con las herramientas que se consideren convenientes:
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 2.] Ejemplo de VSM aplicado a una empresa de confección 
          figure
            img.mb-3(src='@/assets/curso/temas/t1/fig2.png', alt='La figura es un Value Stream Mapping (VSM) de una empresa de confección muestra el flujo del proceso productivo, desde la compra de materiales hasta la entrega de unidades mensuales al cliente. Incluye etapas como corte, confección, control de calidad y empaquetado, con datos de tiempos de ciclo y producción.')
            figcaption Nota. Adaptado de Criosostomo M. y Sánchez A. (2018). 
      .row.justify-content-center(titulo="Diagrama Causa Efecto")
        p También conocido como diagrama de Ishikawa, en honor a su creador, esta herramienta ayuda en la identificación de las causas de un problema específico que se haya detectado. Consiste en analizar la situación desde diferentes perspectivas para llegar a la causa raíz. Así, al identificar estas causas, es posible trabajar en soluciones que aborden directamente la problemática principal.
        p.mb-4 Como se observa en el diagrama, la problemática se sitúa en el costado derecho, y las causas están clasificadas en 5 ramificaciones principales: el método o la forma de trabajar, los medios o maquinaria utilizada, la materia prima, el medio ambiente o entorno de trabajo y, por último, la mano de obra (ver figura 3):
        .col-lg-9
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 3.] Diagrama Causa Efecto
          figure
            img.mb-3(src='@/assets/curso/temas/t1/fig3.png', alt='La figura muestra un diagrama de causa y efecto, comúnmente conocido como diagrama de Ishikawa o de espina de pescado, que identifica factores que contribuyen a un “Problema de calidad” en una organización')
            figcaption Nota. Adaptada de Gillet Goinard, F. (2015).  
      .row.justify-content-center(titulo="Diagrama de Pareto")
        p Otras herramientas también facilitan el análisis cuantitativo de los problemas. Un ejemplo es el diagrama de Pareto, una herramienta estadística y de calidad. Este diagrama, básicamente un gráfico de barras, ordena de mayor a menor las frecuencias de los defectos o causas de problemas detectados, permitiendo así enfocar la gestión de procesos en las áreas más críticas.
        p.mb-4 Como se puede ver en el diagrama, en el proceso de producción y envasado de tequila, el problema identificado según la recolección de datos estadísticos es la colocación incorrecta de la etiqueta. Por lo tanto, el equipo de trabajo se enfocará en actividades para solucionar esta causa específica (ver figura 4)
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 4.] Diagrama de Pareto
          figure
            img(src='@/assets/curso/temas/t1/fig4.png', alt='El Diagrama de Pareto muestra las diferentes causas de problemas en el proceso de envasado de tequila.')
      .row.justify-content-center(titulo="Diagrama de Gantt")
        p En la planificación de la gestión de procesos, que a menudo se convierte en proyectos de mejoramiento, es esencial el uso de herramientas que faciliten el control del desempeño de las actividades. Una de estas herramientas es el Diagrama de Gantt, que ilustra el orden de las actividades, la proyección del tiempo máximo que requerirá cada tarea y los responsables de su ejecución. Esta herramienta ha evolucionado desde su uso manual hasta el control digital, permitiendo medir el desempeño de cada persona responsable en la ejecución del proyecto.
        p.mb-4 En este diagrama, las actividades o tareas se enumeran en orden en el lado izquierdo, mientras que la proporción de tiempo necesario se indica al lado derecho (ver figura 5): 
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 5.] Representación de un diagrama de Gantt
          figure
            img(src='@/assets/curso/temas/t1/fig5.png', alt='La figura muestra un diagrama de Gantt. Las diferentes tareas están enumeradas a la izquierda, con barras horizontales de distintos colores que se extienden a lo largo de un calendario para indicar la duración de cada tarea')
      .row.justify-content-center(titulo="Árboles de Decisión")
        p.mb-4 Los árboles de decisión se centran en representar las actividades a realizar de manera cronológica y secuencial. Además, estos árboles ayudan a determinar una jerarquía entre los procesos administrativos. En este caso, se realiza un mapeo de los procesos y se establecen las relaciones entre ellos.
        .col-lg-5
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 6.] Árbol de Decisión
          figure
            img(src='@/assets/curso/temas/t1/fig6.png', alt='La imagen muestra un árbol de decisión. Esta estructura gráfica se compone de nodos y ramas que representan decisiones y sus posibles consecuencias, incluyendo resultados de eventos aleatorios, costos y utilidad.')
      .row.justify-content-center(titulo="Método de la ruta crítica")
        p.mb-4 La ruta crítica es uno de los métodos de planificación que mejor se adapta a los proyectos, ya que permite planear, ejecutar, programar y controlar cada una de las actividades o tareas involucradas. Este método considera el tiempo como un elemento fundamental para mejorar el desempeño de las personas involucradas en el proyecto, ayudando a evitar problemas de plazos y obstáculos en el proceso (ver figura 7).
        .col-lg-8
          .titulo-sexto.color-acento-contenido.mb-3
            p.mb-0 #[b Figura 7.] Ejemplo de diagrama de la Ruta Crítica
          figure
            img(src='@/assets/curso/temas/t1/fig7.png', alt='La imagen representa un diagrama de flujo de proyecto, comenzando con un nodo Inicio y ramificándose en tareas A a H, cada una con su duración en días. Las tareas están interconectadas, mostrando secuencias y dependencias.')

    p.mb-4(data-aos="fade") Los procesos que se gestionan se miden mediante indicadores, los cuales permiten identificar si están mejorando o no. Estos indicadores, actualizados en tiempo real, facilitan la toma de decisiones asertivas sobre el proceso y permiten reaccionar ante las variables que puedan surgir. También representan un insumo clave para diagnosticar de manera cuantitativa el proceso. Tras implementar las mejoras, estos indicadores permiten evaluar si se ha generado el impacto deseado. En la siguiente tabla 1, se puede observar la definición de cada uno de los indicadores, así como su fórmula, con el fin de comprender por qué es necesario recolectar y hacer seguimiento de esta información

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Tabla 1.] Indicadores Claves de desempeño en una planta industrial
        .tabla-b.color-secundario.mb-5
          .tabla-b__header
            h5.mb-0 Definición y fórmula
          table
            tr
              td OEE (#[em Overall Equipment Effectiveness]) Eficacia Global o General del Equipo
              td Es el indicador más estricto de la manufactura. Es el porcentaje de tres valores multiplicados: 
                p.mb-1 OEE = % Calidad * % Tiempo de Actividad * % Rendimiento  
                ul.lista-ul.fa-ul.circle.ps-3
                  li 
                    i.fas.fa-circle
                    | % Calidad = (Piezas buenas / piezas totales)
                  li 
                    i.fas.fa-circle
                    | Tiempo de Actividad = Es el porcentaje de la máquina que está agregando valor
                  li 
                    i.fas.fa-circle
                    | EFF= Eficiencia Operativa
                p.mb-0 El tiempo de actividad y Eficiencia Operativa se definen más adelante. 
            tr
              td.text-center Salida
              td Es el porcentaje que indica el cumplimiento a plan de producción en piezas.
                p.mb-0 Salida = Piezas producidas / Plan de piezas  
            tr
              td.text-center Colaboración
              td Es el porcentaje de paros clasificados, es decir, que tienen identificado la causa del tiempo muerto.
                p.mb-0 Colaboración = paros clasificados / total tiempos muertos
            tr
              td.text-center Tiempo de actividad
              td Es el porcentaje de la máquina que está agregando valor.
                p.mb-0 Tiempo Actividad = Tiempo produciendo / Tiempo total que la máquina tiene que producir
            tr
              td.text-center Eficiencia Operativa (EFF)
              td Es el porcentaje del tiempo trabajado con relación al tiempo planeado para producir.
                p.mb-0 EFF= tiempo trabajado / el tiempo planeado
            tr
              td.text-center Causas de paro
              td Es el Pareto o top de causas por lo que la planta para en minutos, horas o días.
            tr
              td.text-center Disponibilidad (AVL)
              td Es el porcentaje que la máquina funciona sin problemas de mantenimiento.  
            tr
              td.text-center Piezas producidas
              td Es el número total de piezas producidas por turno, día, semana o mes (incluye buenas y malas). 
            tr
              td.text-center Piezas producidas
              td Es el tiempo resultante de la siguiente formula:Tiempo Ciclo = total de piezas producidas / periodo de tiempo Ejemplo: Se realizaron 60 piezas en una hora = 1 minuto de tiempo ciclo.
            tr
              td #[em Mean Time Between Failures] (MTBF) Tiempo medio entre fallas
              td Es el tiempo que se tarda una máquina u operación en fallar, se calcula con la fórmula:
                p.mb-0 MTBF = número de fallas / tiempo total de operación.
                p.mb-0 Entre más alto mejor (solo aplica para temas de mantenimiento).
            tr
              td #[em Mean Time To Repair] (MTTR). Tiempo medio de reparación
              td Es el tiempo que se tarda una máquina u operación en volver a trabajar, se calcula con la fórmula:
                p.mb-0 MTTR = número de fallas / tiempo total muerto. 
                p.mb-0 Entre más bajo mejor (Solo aplica para temas de mantenimiento). 
            tr
              td.text-center Tiempo de  paro (#[em Shutdown])
              td Es el tiempo en minutos, horas, días en que una máquina está sin agregar valor (parada).
            tr
              td.text-center Hora de arranque
              td Es el promedio de horas de arranque, en cada una de las estaciones por turno. 
            tr
              td.text-center Hora de término
              td Es el promedio de horas de Término, en cada una de las estaciones por turno. 
            tr
              td.text-center Día más productivo
              td Es el día de la semana que se tuvo mayor Tiempo de Actividad.
            tr
              td.text-center Turno más productivo
              td Es el día de la semana que se tuvo menor Tiempo de Actividad.
            tr
              td.text-center Máquina más productiva
              td Es la máquina que tuvo mayor Tiempo de Actividad de la semana.
            tr
              td.text-center Máquina menos productiva
              td Es la máquina que tuvo menor Tiempo de Actividad de la semana.

    p(data-aos="fade") Un ejemplo del uso de indicadores en la gestión de procesos se observa cuando se interviene en el área de mantenimiento para minimizar el tiempo de reparación de las máquinas. Esta intervención se reflejará en el indicador Mean Time To Repair (MTTR), o Tiempo Medio de Reparación, que, al disminuir, incrementará inmediatamente la disponibilidad de las máquinas usadas en la planta y, como consecuencia, aumentará la eficiencia global.
 
    p(data-aos="fade") Generalmente, estos indicadores son considerados a diario en las organizaciones que se enfocan en la gestión de procesos e implementación de herramientas de manufactura esbelta, automatización o metodologías Seis Sigma.

    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Mejoramiento continuo
    
    .row.fondo4-t1.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          p.mb-4(data-aos="fade") La gestión de procesos se ha convertido en un esfuerzo diario para empresas de todos los sectores. En este sentido, las actividades dedicadas a optimizar los procesos son conocidas como mejoramiento continuo. Este enfoque se centra en un flujo constante de pequeñas mejoras, basándose en métricas permanentes para validar si se han logrado transformaciones.

          .col-lg-10.mb-5(data-aos="fade-down")
            .tarjeta-avatar-b
              .tarjeta-avatar-b__img(style="max-width: 11%; min-width: 11%;")
                img(src='@/assets/curso/temas/t1/ico.svg' alt='')
              .tarjeta.bg-acento-contenido
                .p-4.position-relative
                  p.text-white.mb-0 La mejora continua es sinónimo de supervisar, controlar, documentar e intervenir cuando los procesos lo requieren. Este concepto tiene sus orígenes en Japón, en la filosofía Kaizen, y fue Toyota la empresa que lo aplicó y replicó en muchas organizaciones, convirtiéndolo en un modelo a seguir. La mejora continua, como tal, se basa en el concepto de “hoy mejor que ayer y mañana mejor que hoy”.
                  img.deco-tarjb(src='@/assets/curso/temas/t2/deco-tarjb.svg' alt='')

          p.mb-4(data-aos="fade") Asumir una 
            span.t-acento-contenido.fw-bold cultura Kaizen 
            | implica adoptar una filosofía de mejora continua, enfocada en identificar los puntos débiles de los procesos que generan desperdicios de tiempo y dinero. También se centra en identificar las áreas que requieren intervención prioritaria y en implementar una serie de herramientas específicas:

          .row.justify-content-around.mb-5(data-aos="fade-down")
            .col-lg-3
              ul.lista-ul--color.lista-ul--separador.check-color.fa-ul
                li 
                  i.fas.fa-check
                  h4.mb-0 Orientación al cliente.  
                li 
                  i.fas.fa-check
                  h4.mb-0 Calidad total.
                li 
                  i.fas.fa-check
                  h4.mb-0 Automatización.
                li 
                  i.fas.fa-check
                  h4.mb-0 Círculos de calidad.
                li 
                  i.fas.fa-check
                  h4.mb-0 Sistemas de sugerencias.
            .col-lg-4
              ul.lista-ul--color.lista-ul--separador.check-color.fa-ul
                li 
                  i.fas.fa-check
                  h4.mb-0 Mantenimiento total productivo.
                li 
                  i.fas.fa-check
                  h4.mb-0 Kanban.
                li 
                  i.fas.fa-check
                  h4.mb-0 Mejoramiento de la calidad.
                li 
                  i.fas.fa-check
                  h4.mb-0 Justo a tiempo.
                li 
                  i.fas.fa-check
                  h4.mb-0 Cero defectos.
            .col-lg-4
              ul.lista-ul--color.lista-ul--separador.check-color.fa-ul
                li 
                  i.fas.fa-check
                  h4.mb-0 Actividades en grupos pequeños.
                li 
                  i.fas.fa-check
                  h4.mb-0 Desarrollo de nuevos productos.
                li 
                  i.fas.fa-check
                  h4.mb-0 Cooperación de trabajadores y dirección.
                li 
                  i.fas.fa-check
                  h4.mb-0 Mejoramiento de la productividad.

          .row.align-items-center.justify-content-center.mb-2
            .col-lg-3.col-6.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t1/img5.svg', alt='')
            .col-lg-9.mb-4(data-aos="fade-left")
              p.mb-0 Actualmente, se han implementado eventos Kaizen con el objetivo de abordar un problema específico y solucionarlo en un plazo máximo de una semana. Estos eventos representan proyectos enfocados en lograr mejoras que pueden transformar sustancialmente los procesos. Por ello, es crucial que tengan un objetivo claro, así como actividades y responsables bien definidos. En su aplicación, estos proyectos pueden orientarse a disminuir la tasa de defectos de un producto específico o a reducir los errores en las entregas de un producto.

          p.mb-4(data-aos="fade") Un componente esencial de esta filosofía es el Gemba Kaizen. Para comprender más profundamente este enfoque, se recomienda revisar la siguiente infografía:

          .col-lg-10
            img(src='@/assets/curso/temas/t1/infografia.svg', alt='')


    p.mb-4(data-aos="fade") 
      span.t-acento-contenido.fw-bold El mejoramiento continuo
      | , dentro de su metodología, utiliza herramientas de control de calidad basadas en el manejo de datos numéricos y descriptivos. Por lo tanto, estas herramientas facilitan la organización y el análisis de los datos. Es preferible analizar una gráfica o un diagrama en lugar de una extensa lista de datos:

    .row.justify-content-center.mb-4
      .col-lg-5.br-5.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/tarj-ico1.svg', alt='')
        .bg-8.p-4
          h4.ps-4 DATOS NUMÉRICOS 
          ul.lista-ul--color.check-color.fa-ul
            li 
              i.fas.fa-check
              | Temperatura. 
            li 
              i.fas.fa-check
              | Presión. 
            li 
              i.fas.fa-check
              | Medición de satisfacción de un cliente. 
            li 
              i.fas.fa-check
              | Los tiempos de un proceso.
      .col-lg-5.br-5.mb-3(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/tarj-ico2.svg', alt='')
        .bg-9.p-4
          h4.ps-4 DATOS DESCRIPTIVOS 
          ul.lista-ul--color.check-color.fa-ul
            li 
              i.fas.fa-check
              | Ideas. 
            li 
              i.fas.fa-check
              | Opiniones.
            li 
              i.fas.fa-check
              | Descripciones.
            li 
              i.fas.fa-check
              | Reflexiones.

    p.mb-4(data-aos="fade") 
      span.t-acento-contenido.fw-bold El uso de herramientas de calidad 
      | facilita la toma de decisiones dentro de la organización. Para los datos numéricos, se utilizan herramientas estadísticas, mientras que para los datos descriptivos se aplican herramientas administrativas. En este contexto, nos enfocaremos en las herramientas estadísticas, que se han clasificado en tres etapas de mejora: identificación, análisis y control.

    .row.fondo-bg5.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          p.mb-4(data-aos="fade") La siguiente infografía interactiva explica en más detalle el uso de las herramientas de calidad según las etapas de los procesos de mejoramiento continuo:  

          .col-lg-7.mb-4(data-aos="fade-right")
            .bg-2.br-10.p-4.p-lg-5
              h5.mb-4 Herramienta de calidad por etapa de proceso de mejoramiento continuo
              ImagenInfografica.color-acento-botones(data-aos="fade-down")
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/t1/img-infog.svg', alt='')
                .tarjeta.bg-1.p-3(x="47%" y="17%" numero="+")
                  h5.mb-1 Hojas de registro y verificación
                  p.mb-0 Son formatos que permiten recolectar información relevante de un proceso; dependiendo de las condiciones del proceso, se van evidenciando cuáles son las formas de clasificar o estratificar la información; por ejemplo, si por turno, por máquina, por operario, por producto, por línea entre otras formas.
                .tarjeta.bg-1.p-3(x="47%" y="34.5%" numero="+")
                  h5.mb-1 Diagrama de Pareto 
                  p.mb-0 Es una manera visual para identificar y tomar decisiones, generalmente se usa para definir los defectos o fallas más frecuentes y enfocarse en aquella que se detectó con mayor recurrencia. 
                .tarjeta.bg-1.p-3(x="47%" y="52.5%" numero="+")
                  h5.mb-1 Diagrama causa efecto
                  p.mb-0 En la etapa de análisis se usa comúnmente el Diagrama de Causa Efecto o diagrama Ishikawa, que permite tomar una problemática y analizar en equipo cuales podrían ser las posibles causas.
                .tarjeta.bg-1.p-3(x="47%" y="62%" numero="+")
                  h5.mb-1 Gráfico de dispersión
                  p.mb-0 Funciona para buscar relaciones numéricas entre variable o factores y los impactos; por ejemplo, los datos de temperatura de la ciudad en grados centígrados versus la venta de helados en cantidad.
                .tarjeta.bg-1.p-3(x="47%" y="72%" numero="+")
                  h5.mb-1 Histograma 
                  p.mb-0 El histograma agrupa los datos en forma de barras y ayuda a visualizar como se distribuyen los datos de una misma variable.  
                .tarjeta.bg-1.p-3(x="47%" y="92%" numero="+")
                  h5.mb-1 Gráficos de control
                  p.mb-0 Los gráficos de control son herramientas estadísticas utilizadas en el control de calidad para monitorear y controlar un proceso. Permiten determinar si un proceso está en estado de control estadístico.
          .col-lg-5.col-6.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img6.svg', alt='')

    .row.align-items-center.justify-content-center.mb-2
      .col-lg-2.col-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/ico2.svg', alt='')
      .col-lg-10.mb-4(data-aos="fade-left")
        p.mb-0 En el ejercicio de la gestión de procesos, otro modelo interesante es el de la calidad total. Si bien este modelo integra muchas de las herramientas mencionadas anteriormente, posee características distintivas, como el hecho de abarcar todas las actividades de la empresa. Además, se enfoca en la satisfacción del cliente e incluye el término de mejora continua dentro del concepto de calidad total. Las estrategias de este modelo de calidad total incluyen:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.               


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.3 Normatividad específica

    .row.fondo-bg2.align-items-center.pt-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="fade-right")
            img.mtn-15(src='@/assets/curso/temas/t1/img7.svg', alt='')
          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
            p.mb-0 La ISO, Organización Internacional de Normalización, tiene como objetivo principal estandarizar normas de productos y seguridad para empresas públicas y privadas a nivel internacional. El comité técnico de la ISO desarrolló la norma ISO 9000, enfocada en los Sistemas de Gestión de la Calidad. Esta norma, con 34 años de historia desde su primera versión en 1987, tiene actualmente vigente su quinta versión publicada en 2015. La norma ISO 9000 recopila los principios básicos del sistema a través de normas como:

    h4.t-acento-contenido(data-aos="fade") Norma ISO 9001

    .row.mb-3
      .col-lg-10.mb-4(data-aos="fade-right")
        p Certifica el cumplimiento de los requisitos para gestionar continuamente la calidad en toda la empresa y para identificar áreas de mejora.
        p El sistema de gestión de la calidad utiliza el ciclo PHVA (Planear, Hacer, Verificar y Actuar). El siguiente gráfico interactivo muestra el modelo de administración del sistema dentro de la organización. Cada uno de los requisitos de la norma está inmerso en este proceso, enfocado principalmente en la satisfacción de las partes interesadas a través del cumplimiento de requisitos y en cubrir las necesidades y expectativas de los clientes:
      .col-lg-2.d-none.d-lg-block.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img8.png', alt='')

    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-down")
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t1/img-infog2.svg', alt='')
          .tarjeta.bg-1.p-3(x="61.5%" y="19%" numero="+")
            h4.mb-1 Apoyo-operación
            p.mb-0 Analizar el contexto de la organización y crear la documentación de la política de la empresa.
          .tarjeta.bg-1.p-3(x="35.5%" y="29%" numero="+")
            h4.mb-1 Planeación
            p.mb-0 Realizar la planeación del cómo se van a ejecutar los procesos estratégicos, clave y de apoyo.
          .tarjeta.bg-1.p-3(x="41%" y="70%" numero="+")
            h4.mb-1 Evaluación del desempeño
            p.mb-0 Evaluar el desempeño de la organización a través de indicadores.
          .tarjeta.bg-1.p-3(x="65.5%" y="71%" numero="+")
            h4.mb-1 Mejora
            p.mb-0 Realizar procesos de mejora basados en los resultados obtenidos.
      
    .row.fondo-bg3.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          h4.t-acento-contenido(data-aos="fade") Norma ISO 19011 versión 2018. Directrices para la auditoría de los sistemas de gestión.

          .col-lg-9(data-aos="fade-right")
            p.mb-4 Esta norma detalla los requisitos para llevar a cabo auditorías internas y externas de los sistemas de gestión de la calidad, basándose en la norma ISO 9001 versión 2015. El trabajo del auditor debe reflejar objetividad, pertinencia y suficiencia, siendo crucial para la efectividad del sistema de gestión de la calidad. Con el objetivo de reflejar el estado real de la empresa, esta norma se fundamenta en principios de:
            .row.justify-content-evenly
              .col-lg-4
                ul.lista-ul--color.lista-ul--separador.check-color.fa-ul
                  li 
                    i.fas.fa-check
                    | Integridad.
                  li 
                    i.fas.fa-check
                    | Presentación imparcial. 
                  li 
                    i.fas.fa-check
                    | Ser profesional. 
              .col-lg-4
                ul.lista-ul--color.lista-ul--separador.check-color.fa-ul
                  li 
                    i.fas.fa-check
                    | Confidencialidad.
                  li 
                    i.fas.fa-check
                    | Independiente
                  li 
                    i.fas.fa-check
                    | Enfoque basado en la evidencia.
          .col-lg-3.d-none.d-lg-block.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img9.svg', alt='')

    h4.t-acento-contenido(data-aos="fade") Norma ISO 14001 

    p.mb-4(data-aos="fade") Esta normativa está enfocada en la mejora continua y solicita a las organizaciones desarrollar un plan ambiental que incluya políticas, objetivos y metas. Estos deben estar dirigidos a controlar los aspectos ambientales y cumplir con los requisitos legales relacionados con el medio ambiente. Los aspectos que este sistema considera incluyen residuos, emisiones, vertidos y consumos generados por el proceso productivo, desde la adquisición de la materia prima hasta los servicios posventa. Al igual que la norma ISO 9001, la norma ISO 14001 establece un conjunto de buenas prácticas que cualquier empresa puede certificar voluntariamente. Los beneficios de implementar estas normas son

    .row.align-items-center.mb-2
      .col-lg-4.col-8.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img10.svg', alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        .row.mb-3
          .col-md-2.col-3.pe-0
            .bg-7.h-100.p-2.d-flex.align-items-center
              img.m-auto(src='@/assets/curso/temas/t1/tarj2-ico1.svg', alt='', style="width: 70px;")
          .col-md-10.col-9.ps-0
            .bg-6.p-4.h-100.d-flex.align-items-center
              p.mb-0 Asegura el cumplimiento de los requisitos legales.
        .row.mb-3
          .col-md-2.col-3.pe-0
            .bg-7.h-100.p-2.d-flex.align-items-center
              img.m-auto(src='@/assets/curso/temas/t1/tarj2-ico2.svg', alt='', style="width: 70px;")
          .col-md-10.col-9.ps-0
            .bg-6.p-4.h-100.d-flex.align-items-center
              p.mb-0 Previenen los incidentes ambientales que se puedan generar: daños al aire, el agua, el suelo, los recursos naturales, la flora, la fauna y los seres humanos.
        .row.mb-3
          .col-md-2.col-3.pe-0
            .bg-7.h-100.p-2.d-flex.align-items-center
              img.m-auto(src='@/assets/curso/temas/t1/tarj2-ico3.svg', alt='', style="width: 70px;")
          .col-md-10.col-9.ps-0
            .bg-6.p-4.h-100.d-flex.align-items-center
              p.mb-0 Proporciona una mejor percepción por parte de los clientes, el saber que la organización está certificada con dicha norma.

    .row.fondo-bg4.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center
          
          h4.t-acento-contenido(data-aos="fade") Norma ISO 45001
          
          .col-lg-10.mb-4.mb-lg-0(data-aos="fade-right")
            p Esta norma actúa como un sistema de gestión para la seguridad y salud en el trabajo, centrándose en la prevención de lesiones, accidentes de trabajo y enfermedades laborales. Su objetivo es proporcionar a los trabajadores un ambiente de trabajo seguro y saludable.
            .bg-2.p-3
              p.mb-0 Asimismo, al igual que las normas ISO 9001 e ISO 14001, este sistema adopta el ciclo de mejora continua PHVA (Planear, Hacer, Verificar, Actuar). En este caso, los beneficios que aporta son similares a los de la ISO 14001.
          .col-lg-2.col-6.mb-4.mb-lg-0(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img11.png', alt='')

    h4.t-acento-contenido(data-aos="fade") Sistema integrado de gestión

    p.mb-4(data-aos="fade") Este sistema representa la implementación conjunta de los requisitos de las normas de calidad, medio ambiente, y seguridad y salud en el trabajo. Su objetivo es satisfacer las necesidades y expectativas de los clientes, minimizar el impacto ambiental y reducir los riesgos laborales. En lugar de cumplir con las normas ISO 9001, 14001 y 45001 de forma individual, se adopta un único sistema al que se pueden alinear otras normas relacionadas con la seguridad de la información, la seguridad alimentaria, entre otros aspectos que se deseen implementar. Los beneficios de implantar un sistema integrado son:

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img12.png', alt='')
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
        ul.lista-ul--color.color-secundario.fa-ul.ps-3
          li 
            i.fas.fa-check-circle
            | Alineación de la política de la organización, con las políticas de calidad, medio ambiente y seguridad y salud en el trabajo. 
          li 
            i.fas.fa-check-circle
            | Incremento de la eficacia en la gestión, debido a una mayor integración. 
          li 
            i.fas.fa-check-circle
            | Simplificación en la documentación y de los procesos para la certificación. 
          li 
            i.fas.fa-check-circle
            | Reducción de costos en la implementación, por la optimización de los recursos utilizados en la implementación. 
          li 
            i.fas.fa-check-circle
            | Mejora en la coordinación de los procesos y trabajo en equipo de las áreas involucradas. 
          li 
            i.fas.fa-check-circle
            | Mejora la confianza de los clientes.

    .row.fondo8-t1.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center
          
          h4.t-acento-contenido(data-aos="fade") Norma ISO 17025
          p.mb-4(data-aos="fade") Esta norma está enfocada en laboratorios de ensayo y calibración. Acredita la confianza en los procedimientos y en los equipos técnicos, es decir, garantiza la competencia técnica hacia los clientes que requieren sus servicios para el análisis de sus productos. La norma asegura la calidad y la seguridad de los ensayos y calibraciones ante los usuarios de entidades o empresas, como laboratorios de inspección y certificación de productos.

          .row.align-items-center.justify-content-center
            .col-lg-4.col-8.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t1/img13.png', alt='')
            .col-lg-8.mb-4(data-aos="fade-left")
              .bg-4.p-3.mb-4
                p.mb-0 En comparación con la norma ISO 9001, que es aplicable a todo tipo de empresas con requisitos más generales, la ISO 17025 es específica para laboratorios, con requisitos más detallados como:
              p Mantener de forma correcta los equipos y materiales y documentar los procedimientos de mantenimiento, para esto se deberá:
              ul.lista-ul--color.color-secundario.fa-ul.ps-3
                li 
                  i.fas.fa-check-circle
                  | Tener registro de los equipos, nombre, identificación del proveedor, ficha técnica, historial de daños, estado de recepción del equipo. 
                li 
                  i.fas.fa-check-circle
                  | Realizar trazabilidad de las mediciones con el objetivo de asegurar la validez y exactitud, realizando calibración y verificación de los equipos. 
                li 
                  i.fas.fa-check-circle
                  | Realizar un muestreo, basándose en métodos estadísticos y de registro. 
                li 
                  i.fas.fa-check-circle
                  | Realizar una adecuada manipulación de los ítems de ensayo y calibración con el objetivo de proteger su integridad y las características a medir. 
                li 
                  i.fas.fa-check-circle
                  | Asegurar la calidad de los resultados de ensayo y calibración. 
                li 
                  i.fas.fa-check-circle
                  | Realizar informe de los resultados asegurando que los datos son exactos, claros, objetivos, conforme a los procedimientos.

          .row.align-items-center.justify-content-center
            .col-lg-7.mb-4(data-aos="fade-right")
              p Finalmente, las normativas relacionadas con las #[b Buenas Prácticas de Manufactura (BPM)] consisten en un conjunto de lineamientos cuyo objetivo es garantizar la producción de alimentos en condiciones sanitarias adecuadas, asegurando así un consumo seguro para el cliente. Estas prácticas son aplicables a negocios de todos los tamaños, desde pequeños establecimientos hasta grandes empresas, y deben ser seguidas tanto en la manipulación manual de alimentos como en la que se realiza con máquinas. Estas Buenas Prácticas de Manufactura abarcan aspectos de la producción como:
              .row.justify-content-center.px-4
                .col-md-6.col-lg-6.mb-3.mb-lg-0
                  .tarjeta-avatar.t1-3
                    img(src='@/assets/curso/temas/t1/tarj3-ico1.svg' alt='')
                    .tarjeta.bg-6.br-10
                      .p-4.text-center
                        p.mb-0 La adecuación y control de instalaciones y equipos, requisitos de proveedores, materias primas e insumos, aplicando controles de calidad en cada parte del proceso.
                .col-md-6.col-lg-6.mb-3.mb-lg-0
                  .tarjeta-avatar.t1-3
                    img(src='@/assets/curso/temas/t1/tarj3-ico2.svg' alt='')
                    .tarjeta.bg-6.br-10
                      .p-4.text-center
                        p.mb-0 Tener criterios claros para el almacenamiento, transporte y distribución, entre otros.
            .col-lg-5.col-8.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/t1/img14.png', alt='')


    .row.fondo-acento-contenido.align-items-center.py-3(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center
          .col-lg-2.col-md-2.col-4.mb-3.mb-md-0
            img.m-auto(src='@/assets/curso/temas/t1/anuncio.svg' alt='' style="width: 130px;")
          .col-lg-9.col-md-10
            p.mb-0.text-white Es crucial que todos estos lineamientos estén documentados con protocolos claros y que su aplicabilidad sea conocida y seguida en toda la organización o empresa. El beneficio más importante de implementar las Buenas Prácticas de Manufactura (BPM) es garantizar clientes seguros y satisfechos, demostrando así un compromiso real hacia ellos.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
