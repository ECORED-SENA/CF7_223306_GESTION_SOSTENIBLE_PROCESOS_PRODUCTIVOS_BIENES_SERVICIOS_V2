export default {
  global: {
    componenteFormativo: 'Obtención y valoración de datos y modelos',
    descripcionCurso:
      'La gestión de procesos integra a toda la organización a través de una cadena de valor en donde fluye información, de ahí la importancia de los datos que se recolectan en cada uno de las áreas y la tecnología que apoya cada proceso. En este componente se conocerán modelos de gestión aplicados al mejoramiento continuo y metodologías de obtención de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Modelos de Mejoramiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Gestión de procesos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Mejoramiento continuo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Normatividad específica',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Metodologías para obtención de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Gestión de la información',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Recolección y sintetización de la información',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Toma de decisiones',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1. Gestión de Procesos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2021). Matriz DOFA. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=84fuGpQeYg0',
    },
    {
      tema: '2.2 Recolección y sistematización de la información',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2021). Recolección de datos. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=84fuGpQeYg0',
    },
  ],
  glosario: [
    {
      termino: '<em>Balanced Scorecard</em>',
      significado:
        'cuadro de mando integral utilizado como herramienta para tomar decisiones, teniendo en cuenta cuatro perspectivas: enfoque financiero, enfoque a clientes, enfoque a procesos internos, y enfoque de aprendizaje y crecimiento.',
    },
    {
      termino: 'Gestión de Procesos',
      significado:
        'se refiere a las acciones para optimizar los procesos, en donde existen diversos modelos que han sido referente en la historia',
    },
    {
      termino: 'ISO',
      significado:
        'son las siglas en inglés de la <em>Internacional Organization for Standardization</em>, que en español traducen Organización Internacional de Normalización, la cual tiene como actividad la elaboración de normas técnicas.',
    },
    {
      termino: 'Kanban',
      significado:
        'es un método de señales que surge para gestionar los procesos de fabricación y tener control visual de los pendientes en la planta, así como también de validar el inventario por estación de trabajo e identificar los cuellos de botella.',
    },
    {
      termino: 'Kaizen',
      significado:
        'es una filosofía que contiene diferentes herramientas para mejorar continuamente en la operación de la fábrica',
    },
    {
      termino: '<em>Lean Manufacturing</em>',
      significado:
        'es una filosofía japonesa que tiene como finalidad la eliminación de desperdicios a través de herramientas que permiten generar pequeñas mejoras.',
    },
    {
      termino: '<em>Lean Six Sigma</em>',
      significado:
        'es una filosofía japonesa de gestión y mejoramiento basada en la evidencia estadística.',
    },
    {
      termino: 'Presión',
      significado:
        'unidad de medida que mide la fuerza que se ejerce sobre un producto o material específico',
    },
    {
      termino: 'Proceso',
      significado:
        'secuencia de actividades u operaciones para realizar un producto o servicio específico.',
    },
    {
      termino: 'Sistemas Integrados de Gestión',
      significado:
        'es una compilación de los sistemas de gestión de la calidad ISO 9001, gestión ambiental ISO 14001 e ISO 45001, sistema de gestión de seguridad y salud en el trabajo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez García, A. (2017). <em>Métodos ágiles: Scrum, Kanban, Lean. Difusora Larousse - Anaya Multimedia</em>.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/122933',
    },
    {
      referencia:
        'Gillet Goinard, F. (2015). <em>La caja de herramientas: control de calidad. La caja de herramientas: control de calidad</em> [PDF] Grupo Editorial Patria.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/39347',
    },
    {
      referencia:
        'Heras del Dedo, R. D. L. & Álvarez García, A. (2017). <em>Métodos ágiles: Scrum, Kanban, Lean</em>. Difusora Larousse - Anaya Multimedia.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/122933',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación (2017) NTC-ISO-IEC 17025:2017 (Capitulo 3)',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=6375',
    },
    {
      referencia:
        'Joshelin, C. B. (2018). <em>Propuesta de mejora en la confección de ropa de vestir femenina de una pyme mediante la aplicación de la metodología lean Six Sigma y herramientas VSM, 5S’s y distribución de la planta</em>. Facultad de Ciencias e Ingeniería',
      link:
        'https://tesis.pucp.edu.pe/repositorio/bitstream/handle/20.500.12404/13982/crisostomo_balvin_s%c3%81nchez_gutierrez_propuesta_mejora_confeccion.pdf?sequence=1&isallowed=y',
    },
    {
      referencia:
        'Organización Internacional de Normalización (2015). ISO 9001. Capítulo 0.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eric Daniel Moreno Muñoz',
          cargo: 'Experto Técnico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Luz Aída Quintero Velásquez',
          cargo: 'Diseñadora Instrucciona',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Diseñadora Instrucciona',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
