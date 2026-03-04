export default {
  global: {
    Name:
      'Gestión de las reclamaciones y telemarketing en la atención telefónica',
    Description:
      'El componente formativo aborda la gestión de reclamaciones en la atención telefónica y el uso estratégico del telemarketing. Destaca la importancia de la satisfacción del cliente, el manejo adecuado de quejas y clientes enfadados, así como las fases del proceso de reclamación. También se analizan funciones, ventajas, tipos y elementos clave del telemarketing para mejorar la fidelización y productividad empresarial.',
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Reclamaciones del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Pautas de acción ante una reclamación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tratamiento de reclamaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '¿Qué hacer una vez resuelta la reclamación?',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tratamiento de un interlocutor enfadado',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cómo interactuar con un interlocutor enfadado',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Telemarketing',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Qué es el telemarketing?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Funciones del telemarketing',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Elementos del telemarketing',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Técnicas de ventas telefónicas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Tipos de telemarketing',
            hash: 't_2_5',
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
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acuse de recibo',
      significado:
        'Confirmación que se entrega al cliente para informarle que su reclamación fue recibida y está en proceso de análisis.',
    },
    {
      termino: 'Call center',
      significado:
        'Centro especializado en la atención y realización de llamadas telefónicas para ofrecer servicios como soporte, ventas o atención al cliente.',
    },
    {
      termino: 'Contact center',
      significado:
        'Sistema de atención al cliente que integra varios canales de comunicación, como llamadas, correos electrónicos, chats y redes sociales.',
    },
    {
      termino: 'Curva de hostilidad',
      significado:
        'Representación del proceso emocional que atraviesa un cliente enfadado, desde el inicio del enojo hasta el retorno al estado racional.',
    },
    {
      termino: 'Fidelización del cliente',
      significado:
        'Estrategia orientada a mantener la relación con el cliente mediante la satisfacción de sus necesidades y el fortalecimiento de su confianza en la empresa.',
    },
    {
      termino: 'Gestión de reclamaciones',
      significado:
        'Proceso mediante el cual una empresa recibe, analiza, responde y realiza seguimiento a las inconformidades de los clientes para brindar soluciones.',
    },
    {
      termino: 'Queja',
      significado:
        'Expresión de insatisfacción presentada por un cliente ante una organización, relacionada con un servicio o producto que no cumple sus expectativas.',
    },
    {
      termino: 'Reclamación del cliente',
      significado:
        'Manifestación de inconformidad que realiza un usuario frente a un producto, servicio o atención recibida, con la intención de obtener una solución o compensación.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'Percepción positiva que experimenta el cliente cuando sus necesidades y expectativas son atendidas adecuadamente por una empresa.',
    },
    {
      termino: 'Telemarketing',
      significado:
        'Técnica de mercadeo directo que utiliza medios de comunicación, especialmente el teléfono, para promocionar productos, servicios o brindar atención al cliente.',
    },
  ],
  referencias: [
    {
      referencia:
        'AlbaMar. (2015). Curva de hostilidad y comportamiento emocional del cliente.',
      link: '',
    },
    {
      referencia:
        'Alet, J. (2011). Marketing directo e interactivo (2.ª ed.). ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Carrasco, J. (2014). Técnicas de venta. Ediciones Paraninfo.',
      link: '',
    },
    {
      referencia:
        'Crece Negocios. (2015). Cómo manejar las quejas o reclamos del cliente.',
      link:
        'http://www.crecenegocios.com/como-manejar-las-quejas-o-reclamos-del-cliente/',
    },
    {
      referencia:
        'González, J. (2015). Aprende a vender profesionalmente y el telemarketing en las ventas. IT Campus Academy.',
      link: '',
    },
    {
      referencia: 'Hernández, A. (2016). Marketing directo.',
      link: '',
    },
    {
      referencia:
        'Integralia. (2014). Manejo de reclamaciones y atención al cliente.',
      link: '',
    },
    {
      referencia:
        'Krasovitzky, S. (2011). Gestión y solución de reclamaciones de clientes.',
      link: '',
    },
    {
      referencia:
        'López Fresno, P. (2010). Gestión de reclamaciones: convierta en oportunidades las reclamaciones de sus clientes. Netbiblo.',
      link: '',
    },
    {
      referencia: 'Moron, J. (2015). Base de datos y gestión de clientes.',
      link: '',
    },
    {
      referencia: 'Palos Sánchez, P. (2013). Manual de telemarketing.',
      link: '',
    },
    {
      referencia:
        'Pote, M., y Martínez, L. (2015). Diferencias entre call center y contact center.',
      link: '',
    },
    {
      referencia: 'QAEC. (2016). Quejas y reclamaciones.',
      link:
        'http://www.aec.es/web/guest/centro-conocimiento/quejas-y-reclamaciones',
    },
    {
      referencia:
        'Sánchez, P. (2014). Técnicas de comunicación y de relaciones. Editex.',
      link: '',
    },
    {
      referencia:
        'Valdivia, M. (2015). Comercialización de productos y servicios en pequeños negocios o microempresas. IC Editorial.',
      link: '',
      nk: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Oscar Hernán Fuentes Hernández',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial – Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
