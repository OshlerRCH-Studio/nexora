// =========================================================
// PLANTILLA DE ARTÍCULO
// Archivo: js/articulo.js
// Solo se carga en articulo.html. Necesita que js/articulos.js
// se haya cargado antes (define la variable ARTICULOS).
// =========================================================

const articuloRoot = document.querySelector('#articulo');

if (articuloRoot) {
    // 1. Leer el parámetro ?post=... de la URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('post');

    // 2. Buscar ese id en el objeto de datos
    const articulo = ARTICULOS[id];

    // 3. Mostrar el artículo o el mensaje de error
    if (articulo) {
        pintarArticulo(articulo);
        pintarIndice();
        pintarRelacionados(id);
    } else {
        mostrarNoEncontrado();
    }
}

/* ---------------------------------------------------------
   Helper: crea un elemento con clase y texto
   --------------------------------------------------------- */
function crear(etiqueta, clase, texto) {
    const el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    if (texto) el.textContent = texto;
    return el;
}

/* ---------------------------------------------------------
   Rellena la plantilla con los datos del artículo
   --------------------------------------------------------- */
function pintarArticulo(a) {
    // <title> y meta description (útil al compartir y para SEO básico)
    document.title = `${a.titulo} | NEXORA`;
    document
        .querySelector('meta[name="description"]')
        .setAttribute('content', a.resumen);

    // Textos simples: textContent
    document.querySelector('#articulo-categoria').textContent = a.categoria.toUpperCase();
    document.querySelector('#articulo-titulo').textContent = a.titulo;
    document.querySelector('#articulo-intro').textContent = a.resumen;
    document.querySelector('#articulo-autor').textContent = a.autor;
    document.querySelector('#articulo-autor-rol').textContent = a.autorRol;
    document.querySelector('#articulo-cover').textContent = a.cover;

    // Fecha: texto visible + valor legible por máquinas
    const fecha = document.querySelector('#articulo-fecha');
    fecha.textContent = a.fechaTexto;
    fecha.setAttribute('datetime', a.fecha);

    // Contenido con etiquetas (p, h2, blockquote): innerHTML
    // Es seguro aquí porque el HTML lo escribimos nosotros en articulos.js
    document.querySelector('#articulo-contenido').innerHTML = a.contenido;
}

/* ---------------------------------------------------------
   Índice lateral: se genera a partir de los elementos con id
   que existen dentro del contenido
   --------------------------------------------------------- */
function pintarIndice() {
    const indice = document.querySelector('#articulo-indice');
    const marcados = document.querySelectorAll('#articulo-contenido [id]');

    marcados.forEach((el) => {
        const texto = el.id === 'introduccion' ? 'Introducción' : el.textContent.trim();
        const enlace = crear('a', '', texto);
        enlace.href = `#${el.id}`;
        indice.appendChild(enlace);
    });
}

/* ---------------------------------------------------------
   Relacionados: primero los de la misma categoría, hasta 3
   --------------------------------------------------------- */
function pintarRelacionados(idActual) {
    const contenedor = document.querySelector('#articulo-relacionados');
    const actual = ARTICULOS[idActual];

    const otros = Object.entries(ARTICULOS)
        .filter(([rid]) => rid !== idActual)
        .sort((a, b) => {
            const mismaA = a[1].categoriaClave === actual.categoriaClave;
            const mismaB = b[1].categoriaClave === actual.categoriaClave;
            return mismaB - mismaA;
        })
        .slice(0, 3);

    otros.forEach(([rid, r]) => {
        const tarjeta = crear('article', 'article-card');

        const imagen = crear('div', 'article-image');
        imagen.appendChild(crear('span', '', r.cover));

        const cuerpo = crear('div', 'article-card-content');

        const meta = crear('div', 'article-meta');
        meta.append(
            crear('span', '', r.categoria.toUpperCase()),
            crear('span', '', r.fechaTexto)
        );

        const enlace = crear('a', 'text-link', 'Leer artículo');
        enlace.href = `articulo.html?post=${rid}`;
        enlace.append(' ', crear('span', '', '→'));

        cuerpo.append(meta, crear('h3', '', r.titulo), enlace);
        tarjeta.append(imagen, cuerpo);
        contenedor.appendChild(tarjeta);
    });
}

/* ---------------------------------------------------------
   Caso de error: ?post=xyz o sin parámetro
   --------------------------------------------------------- */
function mostrarNoEncontrado() {
    document.title = 'Artículo no encontrado | NEXORA';

    articuloRoot.innerHTML = `
        <header class="article-header">
            <div class="article-header-content">
                <h1>Artículo no encontrado</h1>
                <p class="article-intro">
                    El artículo que buscas no existe o fue movido.
                </p>
                <a href="blog.html" class="button button-primary">
                    Volver al blog
                </a>
            </div>
        </header>
    `;

    document.querySelector('#relacionados').remove();
}
function actualizarMetaProperty(property, content) {
    let meta = document.querySelector(
        `meta[property="${property}"]`
    );
    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
}
actualizarMetaProperty(
    "og:title",
    articulo.titulo
);
actualizarMetaProperty(
    "og:description",
    articulo.resumen
);
function actualizarDatosEstructurados(a) {
    let script = document.querySelector(
        'script[type="application/ld+json"]'
    );
    if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        document.head.appendChild(script);
    }
    const datos = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": a.titulo,
        "description": a.resumen,
        "author": {
            "@type": "Person",
            "name": a.autor
        },
        "datePublished": a.fecha ,
        "articleSection": a.categoria
    };
    script.textContent = JSON.stringify(datos);
}
const a = ARTICULOS[post];
actualizarDatosEstructurados(a);