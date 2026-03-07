<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué representan las quejas y reclamaciones para una empresa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una oportunidad de venta directa inmediata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una pérdida inevitable de clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una oportunidad para aprender y mejorar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un obstáculo que debe evitarse siempre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué actitud debe evitar un asesor ante una queja del cliente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tomárselo como algo personal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Escuchar activamente al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mostrar empatía con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tomar nota de la situación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué aportan las quejas a una empresa?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Información para campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Información fundamental para mejorar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Causas para reducir personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Motivos para elevar los precios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el riesgo principal de un cliente insatisfecho que no se queja?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No volverá a comprar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Realizará una queja escrita.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solicitará un descuento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recomendará la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué efecto tienen los comentarios “boca a boca” negativos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Sirven como retroalimentación interna.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Son una forma de evaluación ética.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Son altamente perjudiciales para la empresa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No tienen gran impacto real.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué permite la solución rápida de una reclamación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar multas gubernamentales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fidelizar al cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Minimizar devoluciones de dinero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir personal en atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la primera fase del proceso de gestión de reclamaciones?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluación de satisfacción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recepción de la reclamación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Análisis del mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificación del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué función tiene el acuse de recibo en una reclamación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolver inmediatamente la queja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener informado al cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ignorar quejas injustificadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Demostrar autoridad al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál debe ser el tono del asesor ante un cliente enfadado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Firme y dominante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sarcástico y evasivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tranquilo y empático.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Irónico y rápido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué significa “ofrecer algo más” al cliente tras una queja?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el precio del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ofrecer una compensación adicional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solicitar una nueva compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar que vuelva a llamar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué representa la curva de hostilidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un indicador de venta inmediata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una secuencia emocional del enojo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una lista de objeciones frecuentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una estrategia de <i>marketing</i> directo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es una acción incorrecta al atender una queja?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prometer lo que no se puede cumplir.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Escuchar atentamente al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pedir disculpas por el error.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar preguntas abiertas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué diferencia al <i>contact center</i> del <i>call center</i>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No usa canales digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usa múltiples canales de contacto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tiene menos personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo hace llamadas salientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué ventaja ofrece el <i>telemarketing</i>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite llegar a más clientes a bajo costo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evita cualquier tipo de objeción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplaza totalmente las ventas físicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reduce la calidad del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es un elemento básico del <em>telemarketing</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Horario de oficina del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cantidad de quejas registradas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fichero o base de datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cantidad de ventas diarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué tipo de <i>telemarketing</i> recibe llamadas del cliente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<i>Telemarketing</i> promocional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<i>Telemarketing</i> de entrada (<i>in bound</i>).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<i>Telemarketing</i> por catálogo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<i>Telemarketing</i> presencial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál es una técnica para tratar objeciones?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Técnica del “sí, pero”.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Técnica de evasión total.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Técnica del silencio prolongado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Técnica de distracción verbal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué tipo de cierre se aplica cuando el cliente no objeta nada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cierre directo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cierre de prueba.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cierre emocional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cierre defensivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué se busca con la técnica del aplazamiento?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar la objeción del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ganar tiempo para responder mejor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cancelar la llamada automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '¿Qué se busca con la técnica del aplazamiento?',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es una función del <i>telemarketing</i> según Carrasco?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Auditoría fiscal interna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fidelizar clientes actuales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Gestionar recursos humanos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar nuevos productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
