var es = [
    {
        section: 1,
        title:'Introducción',
        icon:'<i class="fa-duotone fa-signs-post" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i>',
        resume: 'Imagina una herramienta para facilitarte un punto de partida para tu aplicación, ahorrándote tiempo con componentes optimizados para funcionar con Laravel',
        content: `
            Kitu Kizuri es la herramienta especialmente diseñada para Laravel, con la cual podrás contar con un punto de partida para tu aplicación, te puedes ahorrar tiempo de 
            desarrollo tratando de implementar herramientas que con Kitu Kizuri puedes implementar en unos pocos clicks. El Kitu Kizuri cuenta con varios componentes
            que forman parte del ecosistema de Laravel, configurados utilizando las buenas practicas y recomendaciones de la comunidad, para que tengas la confianza
            de iniciar tu proyecto bajo un entorno seguro y confiable.`,
        sub: [
            {
                section: 1,
                title:'¿Qué es Kitu Kizuri?',
                content: `
                    "Kitu Kizuri" son dos palabras que en Suajili significan "algo bonito". Nombrar un paquete como "Algo Bonito" es porque nuestro objetivo 
                    está en entregar una herramienta que te permita generar aplicaciones de manera rápida y practica, que programar se vuelva algo bonito.`,
            },
            {
                section: 2,
                title:'Componentes',
                content: `
                    Dentro de la herramienta, existen tres componentes importantes: <br><br>
                    <i class="fa-duotone fa-medal" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i> <strong>Krud Security</strong> <br><br>
                    Es el componente encargado de gestionar toda la seguridad de la aplicación, cuenta con las siguientes características:
                    <ul>
                        <li>Integración con <strong>Jetstream</strong> por defecto.</li>
                        <li>Integración con Active Directory por medio de <strong>LdapRecod</strong> - esto es opcional.</li>
                        <li>Gestión de usuarios</li>
                        <li>Asignación de roles de usuarios</li>
                        <li>Asignación de permisos por módulos</li>
                    </ul> <br><br>
                    <i class="fa-duotone fa-medal" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i> <strong>Krud Admin</strong> <br><br>
                    Es el componente encargado de facilitar una interfaz gráfica para la gestión de CRUDs ademas de otras herramientas que ayudan a la administración de la aplicación, sus características son:
                    <ul>
                        <li>GUI para la gestión de Krud Security</li>
                        <li>Generador Low Code de "Catálogos (CRUD)"</li>
                        <li>Gestor integrado de base de datos MySQL</li>
                        <li>Almacenamiento de logs en base de datos - opcional</li>
                    </ul> <br><br>
                    <i class="fa-duotone fa-medal" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i> <strong>Krud Auxiliar</strong> <br><br>
                    Es el componente encargado de facilitarte las configuraciones complicadas dentro de Laravel tales como: 
                    <ul>
                        <li>Entorno de desarrollo basado en <strong>Docker</strong>, es recomendable utilizarlo</li>
                        <li>Integración con <strong>Vue</strong> - opcional</li>
                        <li>Integración con <strong>MongoDB</strong> - opcional</li>
                        <li>Integración con <strong>Trino</strong> - opcional</li>
                    </ul>
                    <br><br>
                    Cada componente está diseñado utilizando las buenas y mejores practicas recomendadas por la comunidad, sin perder la flexibilidad de agregar elementos desarrollados por ti.`,
            }
        ]
    },
    {
        section: 2,
        title:'Instalación',
        icon:'<i class="fa-duotone fa-down-to-line" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i>',
        resume: 'Existen dos etapas para tener una completa instalación la primera y es que puedes utilizar composer para instalar el paquete en tu proyecto.',
        content: `
            Puedes instalar el paquete en tu aplicación de Laravel utilizando Composer de la siguiente forma: <br><br>
            <div id="instalacion" style="width:100%; height:200px;"></div> <br><br>
            Una vez que termine la instalación con Composer puedes configurar tu entorno de desarrollo con Docker o puedes instalar los paquetes que trae el Kitu Kizuri. 
        `,
        code: {
            idElement: 'instalacion',
            language: 'shell',
            code: `\n # Instalar la versión estable \n\ncomposer require kitukizuri/krud \n\n# Instalar con funcionalidades Beta \n\ncomposer require icebearsoft/kitukizuri:dev-master \n`
        },
        sub: [
            {
                section: 1,
                title:'Pre requisitos de configuración',
                content: `
                    Si estas utilizando tu entorno de desarrollo basado en Docker puedes saltar esta sección, asegúrate de tener configurado los siguientes elementos: <br><br>
                    <strong>Elementos indispensables</strong>
                    <ul>
                        <li>Node JS versión 20 o superior </li>
                    </ul>
                    <strong>Elementos opcionales</strong>
                    <ul>
                        <li>Extensión de LDAP para PHP (Sí quieres utilizar login con LDAP)</li>
                    </ul>
                `,
            },
            {
                section: 2,
                title:'Configuración',
                content: `
                    <div class="callout-block callout-block-warning">
                        <div class="content">
                            <h4 class="callout-title">
                                <i class="fa-duotone fa-bullhorn" style="--fa-primary-color: #4a5b67; --fa-secondary-color: #fa7820; --fa-secondary-opacity: 1;"></i>
                                Consideraciones previas
                            </h4>
                            <p>Para utilzar este comando te recomendamos previamente configurar tu entorno de desarrollo en docker para que no tengas ningún problema. de lo contrario ve a la sección de pre requisitos.</p>
                        </div><!--//content-->
                    </div>
                    Una vez instalado el paquete, debes publicar los archivos de configuración y ejecutar las migraciones, para ello ejecuta el siguiente comando: <br><br>
                    <div id="configuracion" style="width:100%; height:100px;"></div>`,
                code: {
                    idElement: 'configuracion',
                    language: 'shell',
                    code: `\n php artisan krud:install \n`
                }
            }
        ]
    },
    {
        section: 3,
        title:'Implementar docker',
        icon:'<i class="fa-brands fa-docker"></i>',
        resume: 'Si utilizas docker, puedes configurar tu entorno de desarrollo con un solo comando.',
        content: `
            En las secciones anteriores te hemos recomendado que utilices Docker para tu entorno de desarrollo, especialmente porque ya hemos preparado una 
            forma de trabajo tan eficiente y rápida que no te llevará más de 5 minutos tener tu entorno listo. para ello puedes ejecutar el siguiente comando: <br><br>
            <div id="docker" style="width:100%; height:600px;"></div>`,
        code: {
            idElement: 'docker',
            language: 'shell',
            code: `\n php artisan krud:set-docker \n \n# ahora se ejecutará el asistente con el cual puedes configurar \n# los puertos expuestos de los contenedores y datos de conexión \n# a la base de datos \n \n¿Configurar base de datos? (yes/no) [no]: \n> yes \n \nNombre: \n> Nombre_de_base_de_datos \n \nContraseña: \n> Contraseña_para_base_de_datos \n \n¿Configurar puertos? (yes/no) [no]: \n> yes \n \nHTTP:  \n> 8080 \n \nMySQL: \n> 3306 \n \nMongo: \n> 27017 \n \nTrino: \n> 8081 \n \nLos puertos se han configurado correctamente!`
        },
        sub: [
            {
                section: 1,
                title:'Elementos de docker',
            }
        ]
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
            },
            {
                section: 2,
                title:'Components',
                content: `
                    Within the tool, there are three important components: <br><br>
                    <i class="fa-duotone fa-medal" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i> <strong>Krud Security</strong> <br><br>
                    It is the component responsible for managing all the security of the application, it has the following characteristics:
                    <ul>
                        <li>Integration with <strong>Jetstream</strong> by default.</li>
                        <li>Integration with Active Directory through <strong>LdapRecod</strong> - this is optional.</li>
                        <li>User management</li>
                        <li>Assignment of user roles</li>
                        <li>Assignment of permissions by modules</li>
                    </ul> <br><br>
                    <i class="fa-duotone fa-medal" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i> <strong>Krud Admin</strong> <br><br>
                    It is the component responsible for providing a graphical interface for the management of CRUDs in addition to other tools that help in the administration of the application, its characteristics are:
                    <ul>
                        <li>GUI for managing Krud Security</li>
                        <li>Low Code generator of "Catalogs (CRUD)"</li>
                        <li>Integrated MySQL database manager</li>
                        <li>Storage of logs in the database - optional</li>
                    </ul> <br><br>
                    <i class="fa-duotone fa-medal" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i> <strong>Krud Auxiliar</strong> <br><br>
                    It is the component responsible for facilitating complicated configurations within Laravel such as:
                    <ul>
                        <li>Development environment based on <strong>Docker</strong>, it is recommended to use it</li>
                        <li>Integration with <strong>Vue</strong> - optional</li>
                        <li>Integration with <strong>MongoDB</strong> - optional</li>
                        <li>Integration with <strong>Trino</strong> - optional</li>
                    </ul>
                    <br><br>
                    Each component is designed using the good and best practices recommended by the community, without losing the flexibility to add elements developed by you.`,
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

    var codes = [];

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

                if (sub.code) {
                    codes.push(sub.code);
                }
            });

            articleTmp = articleTmp.replace('{subContent}', subContent);
        } else {
            articleTmp = articleTmp.replace('{subContent}', '');
        }

        document.getElementById('content').insertAdjacentHTML('beforeend', articleTmp);

        if(element.code) {
            codes.push(element.code);
        }
    });

    console.log(codes);

    codes.forEach(code => {
        setEditor(code.idElement, code.code, code.language);
    });
}

function setEditor(idElement, code, language) {
    var el = document.getElementById(idElement);
    require(['vs/editor/editor.main'], function () {
        var editor = monaco.editor.create(el, {
            theme: 'vs-dark',
            model: monaco.editor.createModel(code, language)
        });
        editor.layout();
    });
}


setLanguage('en');

if (document.getElementById('cards')) {
    setCards();
} else {
    require.config({ paths: { 'vs': 'assets/plugins/monaco/min/vs' }});
    setContent()
}


