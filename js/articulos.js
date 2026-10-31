// =========================================================
// NEXORA — DATOS DE ARTÍCULOS
// Cada clave (ia, web, datos...) es el valor que se usa en la URL:
//   articulo.html?post=ia
// Para agregar un artículo nuevo: copia un bloque, cambia la clave
// y llena sus campos. No hay que tocar nada más en este archivo.
// =========================================================

const ARTICULOS = {

    ia: {
        categoria: 'Inteligencia Artificial',
        categoriaClave: 'ia',
        titulo: 'La nueva era de la inteligencia artificial está apenas comenzando',
        resumen: 'La inteligencia artificial está pasando de ser una tecnología experimental a convertirse en una herramienta cada vez más integrada en nuestra vida digital.',
        autor: 'NEXORA Editorial',
        autorRol: 'Tecnología e innovación',
        fecha: '2026-10-25',
        fechaTexto: '25 OCT 2026',
        cover: 'AI',
        contenido: `
            <p id="introduccion">
                Durante los últimos años, la inteligencia artificial ha dejado
                de ser un concepto limitado a laboratorios de investigación
                para convertirse en una de las tecnologías más importantes del
                ecosistema digital.
            </p>
            <p>
                Su evolución ha permitido desarrollar sistemas capaces de
                analizar grandes cantidades de información, reconocer patrones,
                generar contenido y colaborar con las personas en tareas cada
                vez más complejas.
            </p>
            <h2 id="evolucion">La evolución de la inteligencia artificial</h2>
            <p>
                Los primeros sistemas de inteligencia artificial estaban
                diseñados para resolver problemas muy específicos. Con el
                tiempo, el crecimiento de la capacidad computacional y la
                disponibilidad de grandes volúmenes de datos permitieron
                desarrollar modelos mucho más sofisticados.
            </p>
            <p>
                El aprendizaje automático y posteriormente las arquitecturas
                de aprendizaje profundo cambiaron considerablemente las
                posibilidades de estos sistemas.
            </p>
            <blockquote>
                La inteligencia artificial no solamente está automatizando
                tareas; también está cambiando la forma en que interactuamos
                con la tecnología.
            </blockquote>
            <h2 id="aplicaciones">Aplicaciones actuales</h2>
            <p>
                Actualmente podemos encontrar inteligencia artificial en
                numerosos productos y servicios digitales. Los asistentes
                virtuales, sistemas de recomendación, herramientas de análisis
                de datos y plataformas de generación de contenido son algunos
                ejemplos.
            </p>
            <h3>Desarrollo de software</h3>
            <p>
                En el desarrollo de software, la IA puede ayudar a generar
                código, detectar errores, explicar estructuras complejas y
                acelerar determinadas tareas del ciclo de desarrollo.
            </p>
            <h3>Análisis de información</h3>
            <p>
                También permite analizar grandes volúmenes de información para
                identificar patrones que serían difíciles de detectar
                manualmente.
            </p>
            <h2 id="futuro">¿Qué viene después?</h2>
            <p>
                El siguiente paso probablemente estará marcado por sistemas
                cada vez más integrados en las herramientas que utilizamos
                diariamente.
            </p>
            <p>
                El verdadero impacto de esta tecnología no dependerá
                únicamente de la capacidad de los modelos, sino también de
                cómo las personas y las organizaciones decidan utilizarlos.
            </p>
            <p>
                La inteligencia artificial todavía se encuentra en una etapa
                de transformación. Las aplicaciones que hoy parecen novedosas
                podrían convertirse en componentes habituales del entorno
                digital durante los próximos años.
            </p>
        `
    },

    web: {
        categoria: 'Desarrollo',
        categoriaClave: 'desarrollo',
        titulo: 'Cómo está evolucionando el desarrollo web moderno',
        resumen: 'Nuevas herramientas, arquitecturas y metodologías están transformando la manera en que se construyen aplicaciones web.',
        autor: 'NEXORA Editorial',
        autorRol: 'Tecnología e innovación',
        fecha: '2026-10-20',
        fechaTexto: '20 OCT 2026',
        cover: '</>',
        contenido: `
            <p id="introduccion">
                Construir para la web ya no significa únicamente escribir
                páginas con HTML y CSS. Hoy el desarrollo web abarca
                aplicaciones completas, servicios conectados y experiencias
                que se comportan casi como software de escritorio.
            </p>
            <p>
                Esa evolución ha cambiado tanto las herramientas como la
                forma en que los equipos organizan su trabajo.
            </p>
            <h2 id="de-paginas-a-aplicaciones">De páginas a aplicaciones</h2>
            <p>
                Durante años, un sitio web era un conjunto de documentos
                enlazados entre sí. Con el tiempo, el navegador incorporó
                capacidades que permitieron crear interfaces interactivas,
                trabajar con datos en tiempo real y ofrecer servicios
                completos sin instalar nada.
            </p>
            <blockquote>
                La web dejó de ser solo un lugar para leer; ahora es una
                plataforma para construir productos.
            </blockquote>
            <h2 id="herramientas">Herramientas y arquitecturas</h2>
            <p>
                Los frameworks, los componentes reutilizables y los sistemas
                de diseño ayudan a mantener la coherencia en proyectos cada
                vez más grandes. Al mismo tiempo, surgen enfoques que
                combinan contenido estático con partes dinámicas, buscando
                un equilibrio entre rendimiento y flexibilidad.
            </p>
            <h3>Rendimiento y accesibilidad</h3>
            <p>
                Dos criterios se han vuelto centrales: que el sitio cargue
                rápido y que pueda ser utilizado por la mayor cantidad de
                personas posible, independientemente del dispositivo o de
                sus capacidades.
            </p>
            <h2 id="que-sigue">Lo que viene</h2>
            <p>
                Es probable que veamos más automatización en el flujo de
                trabajo y herramientas que reduzcan tareas repetitivas. Aun
                así, los fundamentos —HTML, CSS y JavaScript— seguirán siendo
                la base sobre la que se apoya todo lo demás.
            </p>
        `
    },

    datos: {
        categoria: 'Tecnología',
        categoriaClave: 'tecnologia',
        titulo: 'Por qué los datos se han convertido en un activo estratégico',
        resumen: 'Las organizaciones dependen cada vez más de los datos para comprender su entorno, tomar decisiones y desarrollar nuevos productos digitales.',
        autor: 'NEXORA Editorial',
        autorRol: 'Tecnología e innovación',
        fecha: '2026-10-18',
        fechaTexto: '18 OCT 2026',
        cover: 'DATA',
        contenido: `
            <p id="introduccion">
                Casi todo lo que hacemos en un entorno digital genera
                información: una compra, una búsqueda, una visita a una
                página. Para las organizaciones, esa información se ha
                convertido en una de las fuentes más valiosas para entender
                lo que ocurre a su alrededor.
            </p>
            <h2 id="de-dato-a-valor">De dato a valor</h2>
            <p>
                Un dato aislado dice poco. Su valor aparece cuando se
                recopila con criterio, se organiza y se analiza para
                responder preguntas concretas: qué productos funcionan, qué
                procesos se retrasan o qué necesita realmente un cliente.
            </p>
            <blockquote>
                Tener datos no es lo mismo que saber utilizarlos.
            </blockquote>
            <h2 id="decisiones">Mejores decisiones</h2>
            <p>
                Cuando una decisión se apoya en información verificable, se
                reduce la dependencia de la intuición y se vuelve más fácil
                medir los resultados. Esto aplica tanto a una empresa grande
                como a un equipo pequeño que desarrolla un producto.
            </p>
            <h3>Calidad antes que cantidad</h3>
            <p>
                Acumular información sin orden puede ser un problema en
                lugar de una ventaja. Datos incompletos o desactualizados
                llevan a conclusiones equivocadas.
            </p>
            <h2 id="responsabilidad">Responsabilidad y privacidad</h2>
            <p>
                Su importancia también trae obligaciones. Proteger la
                información personal, ser transparentes sobre su uso y
                cumplir con la regulación aplicable forma parte de tratar
                los datos como un activo estratégico.
            </p>
        `
    },

    futuro: {
        categoria: 'Innovación',
        categoriaClave: 'innovacion',
        titulo: 'Las tecnologías que definirán la próxima década',
        resumen: 'Desde inteligencia artificial hasta nuevas infraestructuras digitales, distintas tecnologías están preparando el escenario para los próximos años.',
        autor: 'NEXORA Editorial',
        autorRol: 'Tecnología e innovación',
        fecha: '2026-10-15',
        fechaTexto: '15 OCT 2026',
        cover: 'INNO',
        contenido: `
            <p id="introduccion">
                Predecir el futuro tecnológico es un ejercicio arriesgado,
                pero algunas tendencias ya muestran hacia dónde se dirige
                buena parte de la industria. No son ideas aisladas: se
                refuerzan entre sí.
            </p>
            <h2 id="inteligencia-artificial">Inteligencia artificial integrada</h2>
            <p>
                La IA dejará de percibirse como una herramienta aparte y
                pasará a formar parte de aplicaciones cotidianas, desde los
                editores de texto hasta los sistemas de gestión empresarial.
            </p>
            <h2 id="infraestructura">Nuevas infraestructuras digitales</h2>
            <p>
                La computación en la nube, las redes más rápidas y el
                procesamiento cercano al usuario permiten ejecutar
                servicios complejos con menos latencia y mayor escala.
            </p>
            <h3>Conectividad y dispositivos</h3>
            <p>
                Cada vez más objetos cotidianos se conectan a internet,
                generando información que alimenta nuevos servicios y
                nuevas formas de automatización.
            </p>
            <blockquote>
                Las tecnologías más influyentes suelen ser las que
                terminamos dejando de notar.
            </blockquote>
            <h2 id="desafios">Desafíos por resolver</h2>
            <p>
                La seguridad, el consumo energético y el acceso equitativo
                a la tecnología son temas que condicionarán qué avances se
                consolidan y cuáles se quedan en el camino.
            </p>
        `
    },

    ml: {
        categoria: 'Inteligencia Artificial',
        categoriaClave: 'ia',
        titulo: 'Machine Learning: de los datos a las decisiones',
        resumen: 'El aprendizaje automático permite encontrar patrones en grandes cantidades de información y utilizarlos para construir sistemas capaces de generar predicciones.',
        autor: 'NEXORA Editorial',
        autorRol: 'Tecnología e innovación',
        fecha: '2026-10-12',
        fechaTexto: '12 OCT 2026',
        cover: 'ML',
        contenido: `
            <p id="introduccion">
                El aprendizaje automático, o machine learning, es una rama
                de la inteligencia artificial que se centra en que los
                sistemas aprendan a partir de ejemplos en lugar de seguir
                únicamente reglas escritas a mano.
            </p>
            <h2 id="como-aprende">Cómo aprende un modelo</h2>
            <p>
                Un modelo se entrena con datos. Al analizar muchos casos,
                identifica patrones y ajusta sus parámetros para que sus
                respuestas se parezcan cada vez más a los resultados
                esperados.
            </p>
            <h3>Aprendizaje supervisado</h3>
            <p>
                El sistema aprende con ejemplos que ya tienen una respuesta
                conocida, como correos marcados como spam o no spam.
            </p>
            <h3>Aprendizaje no supervisado</h3>
            <p>
                Aquí no existen respuestas previas: el modelo busca por su
                cuenta estructuras o grupos dentro de los datos.
            </p>
            <h2 id="usos">Usos habituales</h2>
            <p>
                Se utiliza en recomendaciones de contenido, detección de
                fraudes, análisis de imágenes, predicción de demanda y muchas
                otras tareas donde existen suficientes datos históricos.
            </p>
            <blockquote>
                Un modelo es tan bueno como los datos con los que aprende.
            </blockquote>
            <h2 id="limites">Límites a considerar</h2>
            <p>
                Los modelos pueden heredar sesgos de los datos de
                entrenamiento y equivocarse en situaciones distintas a las
                que conocieron. Por eso la supervisión humana y la
                evaluación continua siguen siendo necesarias.
            </p>
        `
    },

    apps: {
        categoria: 'Tecnología',
        categoriaClave: 'tecnologia',
        titulo: 'La evolución de las aplicaciones conectadas a internet',
        resumen: 'La web ha pasado de documentos estáticos a ecosistemas capaces de ofrecer experiencias interactivas y servicios completos.',
        autor: 'NEXORA Editorial',
        autorRol: 'Tecnología e innovación',
        fecha: '2026-10-10',
        fechaTexto: '10 OCT 2026',
        cover: 'WEB',
        contenido: `
            <p id="introduccion">
                Las primeras páginas de internet mostraban texto y enlaces.
                Hoy usamos la red para trabajar, comunicarnos, estudiar y
                gestionar buena parte de nuestra vida cotidiana, muchas
                veces sin pensar en la tecnología que lo hace posible.
            </p>
            <h2 id="del-documento-al-servicio">Del documento al servicio</h2>
            <p>
                El cambio principal fue pasar de consultar contenido a
                interactuar con él. Los formularios, las cuentas de usuario y
                la información personalizada transformaron los sitios en
                servicios.
            </p>
            <h2 id="conexion-permanente">Conexión permanente</h2>
            <p>
                Las aplicaciones actuales se comunican de manera constante
                con servidores y con otros servicios mediante interfaces
                que intercambian datos en segundo plano. Gracias a eso, una
                misma cuenta puede usarse desde el teléfono, la computadora
                o el navegador.
            </p>
            <h3>Experiencias que se sienten nativas</h3>
            <p>
                Las aplicaciones web progresivas permiten instalar un sitio
                en el dispositivo y usarlo con funciones parecidas a las de
                una aplicación tradicional.
            </p>
            <blockquote>
                La frontera entre sitio web y aplicación es cada vez más
                difusa.
            </blockquote>
            <h2 id="hacia-donde-vamos">Hacia dónde vamos</h2>
            <p>
                Es previsible que las aplicaciones sean cada vez más
                personalizadas, más rápidas y más integradas entre sí,
                mientras la seguridad y la privacidad ganan peso en el
                diseño desde el inicio.
            </p>
        `
    }
};
