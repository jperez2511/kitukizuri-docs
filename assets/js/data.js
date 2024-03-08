var es = [
    {
        section: 1,
        title:'Introducción',
        icon:'<i class="fa-duotone fa-signs-post" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i>',
        resume: 'Imagina una herramienta para facilitarte un punto de partida para tu aplicación, ahorrandote tiempo con componentes optimizados para funcionar con Laravel',
        content: `
            Kitu Kizuri es la herramienta especialmente diseñada para Laravel, con la cual podras contar con un punto de partida para tu aplicación, te puedes ahorrar tiempo de 
            desarrollo tratando de implementar herramientas que con Kitu Kizuri puedes implementar en unos pocos clicks. El Kitu Kizuri cuenta con varios compoentenes
            que forman parte del ecosistema de laravel, configurados utilizando las buenas practicas y recomendaciones de la comunidad, para que tengas la confianza
            de iniciar tu proyecto bajo un entorno seguro y confiable.`,
        sub: [
            {
                section: 1,
                title:'¿Qué es Kitu Kizuri?',
                content: `
                    "Kitu Kizuri" son dos palabras que en Suajili significan "algo bonito". Nombrar un paquete como "Algo Bonito" es porque nuestro objetivo 
                    está en entregar una herramieta que te permita generar aplicaciones de manera rápida y practica, que programar se vuelva algo bonito.`,
            },
            {
                section: 2,
                title:'Componentes',
                content: `
                    Dentro de la herramienta, existen tres componentes importantes: <br><br>
                    <i class="fa-duotone fa-medal" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i> <strong>Krud Security</strong> <br><br>
                    
                    `,
            }
        ]
    },
    {
        section: 2,
        title:'Instalación',
        icon:'<i class="fa-duotone fa-down-to-line" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i>',
        resume: 'Puedes utilizar composer para instalar el paquete en tu proyecto.',
    },
    {
        section: 3,
        title:'Implementar docker',
        icon:'<i class="fa-brands fa-docker"></i>',
        resume: 'Si utilizas docker, puedes configurar tu entorno de desarrollo con un solo comando.'
    },
    {
        section: 4,
        title:'Crea tu primer CRUD',
        icon:'<i class="fa-duotone fa-rectangle-history-circle-user" style="--fa-primary-color: #4a5b67; --fa-secondary-color: #fa7820; --fa-secondary-opacity: 1;"></i>',
        resume: 'Aprende a construir tu primer CRUD con el paquete.'
    },
    {
        section: 5,
        title:'Métodos disponibles',
        icon:'<i class="fa-duotone fa-function" style="--fa-primary-color: #cd7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i>',
        resume: 'Conoce los métodos disponibles para trabajar con el paquete.'
    }
];

var en = [
    {
        section: 1,
        title:'Introduction',
        icon:'<i class="fa-duotone fa-signs-post" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i>',
        resume: 'Imagine a tool to give you a head start for your application, saving you time with components optimized to work with Laravel',
        content: `
            Kitu Kizuri is the tool specially designed for Laravel, with which you can have a starting point for your application, you can save development time trying 
            to implement tools that with Kitu Kizuri you can implement in a few clicks. The Kitu Kizuri has several components that are part of the Laravel ecosystem, 
            configured using good practices and recommendations from the community, so that you have the confidence to start your project under a secure and reliable 
            environment.`,
        sub: [
            {
                section: 1,
                title:'What is Kitu Kizuri?',
                content: `
                    "Kitu Kizuri" are two words that in Swahili mean "something beautiful". Naming a package as "Something Beautiful" 
                    is because our goal is to deliver a tool that allows you to generate applications quickly and practically, that 
                    programming becomes something beautiful.`,
            }
        ]
    },
    {
        section: 2,
        title:'Installation',
        icon:'<i class="fa-duotone fa-down-to-line" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i>',
        resume: 'You can use composer to install the package in your project.'
    },
    {
        section: 3,
        title:'Docker implementation',
        icon:'<i class="fa-brands fa-docker"></i>',
        resume: 'If you use docker, you can configure your development environment with a single command.'
    },
    {
        section: 4,
        title:'Build your first CRUD',
        icon:'<i class="fa-duotone fa-rectangle-history-circle-user" style="--fa-primary-color: #4a5b67; --fa-secondary-color: #fa7820; --fa-secondary-opacity: 1;"></i>',
        resume: 'Learn to build your first CRUD with the package.'
    },
    {
        section: 5,
        title:'Available methods',
        icon:'<i class="fa-duotone fa-function" style="--fa-primary-color: #cd7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i>',
        resume: 'Learn about the available methods to work with the package.'
    }
];

var lang = 'es';

function setLanguage(lang){
    lang = lang;
}

function setCards() 
{
    var data = [];
    var template = `
        <div class="col-12 col-lg-4 py-3">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title mb-3">
                        <span class="theme-icon-holder card-icon-holder me-2">{icon}</span><!--//card-icon-holder-->
                        <span class="card-title-text">{title}</span>
                    </h5>
                    <div class="card-text text-justify">{resume}</div>
                    <a class="card-link-mask" href="docs-page.html#{section}"></a>
                </div><!--//card-body-->
            </div><!--//card-->
        </div><!--//col-->`;

    if (lang == 'es') {
        data = es;
    } else {
        data = en;
    }

    data.forEach(element => {

        var card = '';
        // adding icon
        card = template.replace('{icon}', element.icon);
        // adding title
        card = card.replace('{title}', element.title);
        // adding section
        card = card.replace('{section}', element.section);
        // adding resume
        card = card.replace('{resume}', element.resume);
        
        document.getElementById('cards').insertAdjacentHTML('beforeend', card);
    });
} 

function setContent()
{
    var titleTemplate = `
        <li class="nav-item section-title">
            <a class="nav-link scrollto" href="#section-{section}">
                <span class="theme-icon-holder me-2">
                    {icon}
                </span>{title}
            </a>
        </li>`;

    var itemTemplate = `
        <li class="nav-item">
            <a class="nav-link scrollto" href="#item-{section}-{subsection}">{title}</a>
        </li>`;

    var articleTemplate = `
        <article class="docs-article" id="section-{section}">
            <header class="docs-header">
                <h1 class="docs-heading">{title}</h1>
                <section class="docs-intro">
                    {content}
                </section><!--//docs-intro-->	
            </header>
            {subContent}
        </article>`;

    var subArticleTemplate = `
        <section class="docs-section" id="item-{section}-{subsection}">
            <h2 class="section-heading">{title}</h2>
            {content}
        </section><!--//section-->`;

    if (lang == 'es') {
        data = es;
    } else {
        data = en;
    }

    data.forEach(element => {
        var menuTmp = '';

        // adding icon
        menuTmp = titleTemplate.replace('{icon}', element.icon);
        // adding title
        menuTmp = menuTmp.replace('{title}', element.title);
        // adding section
        menuTmp = menuTmp.replace('{section}', element.section);
        
        document.getElementById('menu').insertAdjacentHTML('beforeend', menuTmp);

        var articleTmp = '';
        // adding title
        articleTmp = articleTemplate.replace('{title}', element.title);
        // adding section
        articleTmp = articleTmp.replace('{section}', element.section);
        // adding content
        articleTmp = articleTmp.replace('{content}', element.content);

        if (element.sub) {
            var subContent = '';
            element.sub.forEach(sub => {
                var subTmp = '';
                // adding section
                subTmp = itemTemplate.replace('{section}', element.section);
                // adding subsection
                subTmp = subTmp.replace('{subsection}', sub.section);
                // adding title
                subTmp = subTmp.replace('{title}', sub.title);
                
                document.getElementById('menu').insertAdjacentHTML('beforeend', subTmp);

                var subArticleTmp = '';
                // adding title
                subArticleTmp = subArticleTemplate.replace('{title}', sub.title);
                // adding section
                subArticleTmp = subArticleTmp.replace('{section}', element.section);
                // adding subsection
                subArticleTmp = subArticleTmp.replace('{subsection}', sub.section);
                // adding content
                subArticleTmp = subArticleTmp.replace('{content}', sub.content);

                subContent += subArticleTmp;
            });

            articleTmp = articleTmp.replace('{subContent}', subContent);
        }

        document.getElementById('content').insertAdjacentHTML('beforeend', articleTmp);
    });
}

setLanguage('en');

if (document.getElementById('cards')) {
    setCards();
} else {
    setContent()
}


