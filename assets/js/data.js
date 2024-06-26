var es = [
    {
        section: 1,
        title:'Introducción',
        icon:'<i class="fa-duotone fa-signs-post" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i>',
        resume: 'Imagina una herramienta para facilitarte un punto de partida para tu aplicación, ahorrándote tiempo con componentes optimizados para funcionar con Laravel',
        content: `
            Kitu Kizuri es una herramienta diseñada específicamente para Laravel y sirve como punto de partida para tu aplicación. Al utilizar 
            Kitu Kizuri, puedes implementar un entorno seguro y confiable en tan solo unos pocos clics, lo cual contrasta con la cantidad 
            considerable de tiempo que tomaría hacerlo sin esta herramienta. Este kit incluye varios componentes integrados en el ecosistema 
            de Laravel, configurados conforme a las mejores prácticas y recomendaciones de la comunidad. Esto te brinda la confianza necesaria 
            para iniciar tu proyecto en un entorno sólido y confiable desde el principio.`,
        sub: [
            {
                section: 1,
                title:'¿Qué es Kitu Kizuri?',
                content: `
                    El nombre "Kitu Kizuri" proviene del suajili y significa "algo bonito". Elegimos este nombre para nuestro paquete porque 
                    nuestro objetivo es ofrecerte una herramienta que te permita desarrollar aplicaciones de forma rápida y práctica, 
                    transformando la programación en algo agradable.`,
            },
            {
                section: 2,
                title:'Componentes',
                content: `
                    Dentro de la herramienta, existen tres componentes importantes: <br><br>
                    <i class="fa-duotone fa-medal" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i> 
                    <strong>Krud Security</strong> <br><br>
                    Es el componente encargado de gestionar toda la seguridad de la aplicación, cuenta con las siguientes características:
                    <ul>
                        <li>Integración con <strong>Jetstream</strong> por defecto.</li>
                        <li>Integración con Active Directory por medio de <strong>LdapRecod</strong> - esto es opcional.</li>
                        <li>Gestión de usuarios</li>
                        <li>Asignación de roles de usuarios</li>
                        <li>Asignación de permisos por módulos</li>
                    </ul> <br><br>
                    <i class="fa-duotone fa-medal" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i> 
                    <strong>Krud Admin</strong> <br><br>
                    Es el componente encargado de facilitar una interfaz gráfica para la gestión de CRUDs ademas de otras herramientas que 
                    ayudan a la administración de la aplicación, sus características son:
                    <ul>
                        <li>GUI para la gestión de Krud Security</li>
                        <li>Generador Low Code de "Catálogos (CRUD)"</li>
                        <li>Gestor integrado de base de datos MySQL</li>
                        <li>Almacenamiento de logs en base de datos - opcional</li>
                    </ul> <br><br>
                    <i class="fa-duotone fa-medal" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i> 
                    <strong>Krud Auxiliar</strong> <br><br>
                    Es el componente encargado de facilitarte las configuraciones complicadas dentro de Laravel tales como: 
                    <ul>
                        <li>Entorno de desarrollo basado en <strong>Docker</strong>, es recomendable utilizarlo</li>
                        <li>Integración con <strong>Vue</strong> - opcional</li>
                        <li>Integración con <strong>MongoDB</strong> - opcional</li>
                        <li>Integración con <strong>Trino</strong> - opcional</li>
                    </ul>
                    <br><br>
                    Cada componente está diseñado utilizando las buenas y mejores practicas recomendadas por la comunidad, sin perder la 
                    flexibilidad de agregar elementos desarrollados por ti.`,
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
            Una vez que termine la instalación con Composer puedes configurar tu entorno de desarrollo con Docker o puedes instalar los 
            paquetes que trae el Kitu Kizuri. 
        `,
        code: {
            idElement: 'instalacion',
            language: 'shell',
            code: `\n# Instalar la versión estable \n\ncomposer require kitukizuri/krud \n\n# Instalar con funcionalidades Beta \n\ncomposer require icebearsoft/kitukizuri:dev-master \n`
        },
        sub: [
            {
                section: 1,
                title:'Pre requisitos de configuración',
                content: `
                    Si, estás utilizando tu entorno de desarrollo basado en Docker puedes saltar esta sección, asegúrate de tener configurado 
                    los siguientes elementos: <br><br>
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
                    <div class="callout-block callout-block-info">
                        <div class="content">
                            <h4 class="callout-title">
                                <i class="fa-duotone fa-bullhorn" style="--fa-primary-color: #4a5b67; --fa-secondary-color: #fa7820; --fa-secondary-opacity: 1;"></i>
                                Consideraciones
                            </h4>
                            <p>
                                Para utilzar este comando te recomendamos previamente configurar tu entorno de desarrollo en docker para que 
                                no tengas ningún problema. De lo contrario ve a la sección de pre requisitos.
                            </p>
                        </div><!--//content-->
                    </div>
                    Una vez instalado el paquete, debes publicar los archivos de configuración y ejecutar las migraciones, para ello ejecuta 
                    el siguiente comando: <br><br>
                    <div id="configuracion" style="width:100%; height:150px;"></div>`,
                code: {
                    idElement: 'configuracion',
                    language: 'shell',
                    code: `\nphp artisan krud:install \n\n# si estas utilizando el entorno de docker ejecuta el siguiente comando \n\ndocker exec -it id_container php artisan krud:install `
                }
            },
            {
                section: 3,
                title: 'Datos predeterminados',
                content: `
                    Una vez que ejecutes el comando para instalar el paquete, se creará un usuario administrador con los siguientes datos: 
                    <br><br>
                    <ul>
                        <li><strong>Usuario:</strong> admin@mail.com</li>
                        <li><strong>Contraseña:</strong> temp,123</li>
                    </ul>
                    <div class="callout-block callout-block-info">
                        <div class="content">
                            <h4 class="callout-title">
                            <i class="fa-duotone fa-bullhorn" style="--fa-primary-color: #4a5b67; --fa-secondary-color: #fa7820; --fa-secondary-opacity: 1;"></i>
                                Consideraciones
                            </h4>
                            <p>Es importante que cambies la contraseña del usuario administrador por una segura.</p>
                        </div><!--//content-->
                    </div>`
            }
        ]
    },
    {
        section: 3,
        title:'Implementar Docker',
        icon:'<i class="fa-brands fa-docker"></i>',
        resume: 'Si utilizas docker, puedes configurar tu entorno de desarrollo con un solo comando.',
        content: `
            En las secciones anteriores te hemos recomendado que utilices Docker para tu entorno de desarrollo, especialmente porque ya hemos
            preparado una forma de trabajo tan eficiente y rápida que no te llevará más de 5 minutos tener tu entorno listo. Para ello puedes 
            ejecutar el siguiente comando: <br><br>
            <div id="docker" style="width:100%; height:600px;"></div>`,
        code: {
            idElement: 'docker',
            language: 'shell',
            code: `\nphp artisan krud:set-docker \n\n# ahora se ejecutará el asistente con el cual puedes configurar \n# los puertos expuestos de los contenedores y datos de conexión \n# a la base de datos \n\n¿Configurar base de datos? (yes/no) [no]: \n> yes \n\nNombre: \n> Nombre_de_base_de_datos \n\nContraseña: \n> Contraseña_para_base_de_datos \n\n¿Configurar puertos? (yes/no) [no]: \n> yes \n\nHTTP:  \n> 8080 \n\nMySQL: \n> 3306 \n\nMongo: \n> 27017 \n\nTrino: \n> 8081 \n\nLos puertos se han configurado correctamente! \n\n# No olvides ejecutar \n\n docker compose build \n docker composer up -d`
        },
        sub: [
            {
                section: 1,
                title:'Elementos de docker',
                content: `
                    <i class="fa-duotone fa-folders" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i> 
                    <strong> Estructura de carpetas</strong> <br><br>
                    Cuando ejecutas el comando para configurar tu entorno de desarrollo con Docker, se creará una estructura de carpetas en 
                    tu proyecto, la cual es la siguiente: <br><br>
                    <div id="estructura" style="width:100%; height:400px;"></div> <br><br>
                    Como puedes ver la estructura de carpeta se incluye dentro de tu proyecto para que tu lo puedas modificar según tus 
                    necesidades. <br><br>
                    <i class="fa-duotone fa-truck-container" style="--fa-primary-color: #fa7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i>
                    <strong> ¿Como interactúan los contenedores?</strong> <br><br>
                    Como puedes ver en la estructura de carpetas, existen 5 contenedores que se configuran para trabajar en conjunto, cada 
                    cumple una función específica: <br><br>
                    <ul>
                        <li><strong>php</strong> (Requerido): contienen las configuraciones necesarias para ejecutar un proyecto de Laravel</li>
                        <li><strong>nginx</strong> (Requerido): sirve un servidor virtual pre configurado para funcionar con el puerto 80</li>
                        <li><strong>mysql</strong> (Requerido): sirve un gestor de base de datos en MySQL utiliza la ultima versión estable. </li>
                        <li><strong>mongo</strong> (Opcional):  sirve un gestor de base de datos basado en MongoDB utiliza la ultima versión estable.</li>
                        <li><strong>trino</strong> (Opcional): sirve un gestor que permite hacer un cruce de datos entre bases de datos tale como Mongo y MySQL. </li>
                    </ul>`,
                code: {
                    idElement: 'estructura',
                    language: 'shell',
                    code: `\n\ndocker-compose.yml # contiene la configuración para manejar los contenedores \n\ndockerfiles # carpeta que contiene los archivos con las configuraciones de cada contenedor \n├── mongo \n│   └── mongo.docker \n├── mysql \n│   ├── my.cnf \n│   └── mysql.docker \n├── nginx \n│   ├── nginx.docker \n│   └── vhost.conf \n├── php \n│   ├── limits.conf \n│   └── php.docker \n└── trino \n    ├── mongo.properties \n    ├── mysql.properties \n    └── trino.docker`
                }
                
            }
        ]
    },
    {
        section: 4,
        title:'Crea tu primer CRUD',
        icon:'<i class="fa-duotone fa-rectangle-history-circle-user" style="--fa-primary-color: #4a5b67; --fa-secondary-color: #fa7820; --fa-secondary-opacity: 1;"></i>',
        resume: 'Aprende a construir tu primer CRUD con el paquete.',
        content: `
            Kitu Kizuri funciona bajo la filosofía de módulos, cada módulo cuenta con un conjunto de propiedades, las cuales, 
            te permitirán tener un control total sobre los permisos que los usuarios podrán tener sobre la información de tu aplicación. <br><br>
            para ello puedes ejecutar el siguiente comando: <br><br>
            <div id="crud" style="width:100%; height:400px;"></div>
            <div class="callout-block callout-block-info">
                <div class="content">
                    <h4 class="callout-title">
                        <i class="fa-duotone fa-bullhorn" style="--fa-primary-color: #4a5b67; --fa-secondary-color: #fa7820; --fa-secondary-opacity: 1;"></i>
                        Consideraciones
                    </h4>
                    <p>Al crear un módulo se modificarán los siguientes archivos: <strong>Seeders</strong>, <strong>Controller</strong>, 
                    <strong>Models</strong>, <strong>Routes</strong>. Por favor asegúrese de tener un respaldo de estos archivos antes de continuar.'</p>
                </div><!--//content-->
            </div>
            `,
        code: {
            idElement: 'crud',
            language: 'shell',
            code: `\nphp artisan krud:make --module \n\n# Se ejecutará el asistente con las siguientes preguntas \n\nNombre del módulo: \n> Nombre_de_modulo \n\n¿Desea crear el modelo del módulo? (yes/no) [no]: \n> yes \n\nRuta del modelo: \n> Catalog/Example/Route/ModelName \n\n¿Desea crear el controlador del módulo? (yes/no) [no]: \n> yes \n\nRuta del controlador: \n> Catalog/Example/Route/ControllerName \n\nEl módulo se ha creado exitosamente.`
        },
        sub: [
            {
                section: 1,
                title:'¿Como se crea el módulo?',
                content: `
                    El primer paso es tomar el nombre de tú módulo nuevo, con ello se creará una Ruta en el archivo <strong>web.php</strong>, 
                    para luego crear el Modelo y el Controlador en las rutas que tu has definido, al mismo tiempo dentro se creará la definición del módulo y 
                    los permisos que podrán tener los usuarios sobre el módulo en el archivo <strong>ModulosSeeder.php</strong> de tal forma que puedas realizar 
                    modificaciones posteriores. <br><br>
                    <strong>Elementos de un módulo</strong> <br><br>
                    Para este punto es importante que conozcas que elementos se crean a nivel lógico dentro de tu aplicación. <br><br>
                    <ol>
                        <li><strong>Index:</strong> muestra un listado de datos en formato de tabla sin que tu hagas algo adicional.</li>
                        <li><strong>Create / Edit:</strong> genera una vista dinámica encargada de facilitarte todos los inputs.</li>
                        <li><strong>Show:</strong> genera los datos a mostrar en la tabla de Index</li>
                        <li><strong>Delete / Destroy:</strong> elimina un registro dentro del CRUD. </li>
                    </ol>
                `,
            },
            {
                section: 2,
                title:'Estructura del controlador',
                content: `
                    Una vez terminado el proceso del comando anterior, ya puedes entrar a tu controlador y modificarlo para generar la estructura del KRUD. 
                    Podrás ver que el controlador está completamente vacío a excepción de las funciones por defecto, 
                    por lo tanto te recomendamos que utilices la siguiente estructura para comenzar a utilizar el <strong>KRUD</strong> el cual es el encargado 
                    de generar las funciones para crear tu primer CRUD. <br><br>
                    <div id="controller" style="width:100%; height:500px;"></div> <br><br>
                    Como te puedes dar cuenta, cuando implementas el KRUD en tu controlador, puedes hacer uso de las funciones de Eloquent y al mismo tiempo 
                    todo se construye como un gran Query Builder. Es por ello que puedes usar los métodos disponibles en la siguiente sección.`,
                code: {
                    idElement: 'controller',
                    language: 'php',
                    code: `\n<?php \n\nnamespace App\\Http\Controllers\\Catalog\\Example\\Route; \n\nuse Krud; \nuse Illuminate\\Http\\Request; \nuse Models\\Catalogs\\Example\\ModelName;  \n\nclass ControllerName extends Krud \n{ \n    public function __construct() \n    { \n        # Define el modelo donde se consultarán los datos \n        $this->setModel(new ModelName); \n\n        # Define los campos que se van a mostrar, editar o solo consultar \n        $this->setCampo(['nombre' => 'Label', 'campo' => 'nombre_campo_database']); \n\n        # Puedes definir condiciones utilizando las funciones de eloquent por ejemplo \n        $this->where('column_db', 12); \n        $this->orderBy('column_db', 'asc'); \n     } \n}`
                }
            }
        ]           
    },
    {
        section: 5,
        title:'Métodos disponibles',
        icon:'<i class="fa-duotone fa-function" style="--fa-primary-color: #cd7820; --fa-secondary-color: #4a5b67; --fa-secondary-opacity: 1;"></i>',
        resume: 'Conoce los métodos disponibles para trabajar con el paquete.',
        content: `Dentro del KRUD tu puedes utilizar los métodos que hemos preparado para manejar los datos que quieras ver, editar, eliminar o crear.`,
        sub: [
            {
                section: 1,
                title:'<i class="fa-duotone fa-pen-swirl" style="--fa-primary-color: #4a5b67; --fa-secondary-color: #fa7820; --fa-secondary-opacity: 1;"></i>  Sobre escritura de métodos',
                content: `KRUD extiende de un controlador de Laravel, por lo tanto puedes sobrescribir los métodos que ya existen en el controlador de Laravel,
                a continuación te mostramos los métodos que puedes sobrescribir: <br><br>
                <div id="metodos" style="width:100%; height:800px;"></div>`,
                code: {
                    idElement: 'metodos',
                    language: 'php',
                    code: `\n<?php \n\nnamespace App\\Http\Controllers\\Catalog\\Example\\Route; \n\nuse Krud; \nuse Illuminate\\Http\\Request; \nuse Models\\Catalogs\\Example\\ModelName;  \n\nclass ControllerName extends Krud \n{ \n    public function __construct() \n    { \n        $this->setModel(new ModelName); \n        $this->setCampo(['nombre' => 'Label', 'campo' => 'nombre_campo_database']); \n    }\n\n    public function create(Request $request) \n    { \n        ... \n    } \n\n    public function edit($id, Request $request) \n    { \n        ... \n    } \n\n    public function update($id, Request $request) \n    { \n        ... \n    } \n\n    public function destroy($id, Request $request) \n    { \n        ... \n    } \n \n\n    public function store(Request $request) \n    { \n        ... \n    } \n \n}`
                },
            },
            {
                section: 2,
                title:'<i class="fa-duotone fa-code" style="--fa-primary-color: #4a5b67; --fa-secondary-color: #fa7820; --fa-secondary-opacity: 1;"></i>  Métodos prioritarios del KRUD',
                content: `
                    <div class="row">
                        <div class="col-md-6 mb-3"><a href="#item-5-3">setModel</a></div>
                        <div class="col-md-6 mb-3"><a href="#item-5-4">setCampo</a></div>
                        <div class="col-md-6 mb-3"><a href="#item-5-5">setTitulo</a></div>
                        <div class="col-md-6 mb-3"><a href="#item-5-6">setLayout</a></div>
                        <div class="col-md-6 mb-3"><a href="#item-5-7">setStoreMSG</a></div>
                        <div class="col-md-6 mb-3"><a href="#item-5-8">setValidationItem</a></div>
                        <div class="col-md-6 mb-3"><a href="#item-5-9">setBoton</a></div>
                        <div class="col-md-6 mb-3"><a href="#item-5-10">setBotonDT</a></div>
                        <div class="col-md-6 mb-3"><a href="#item-5-11">setDefaultBotonDT</a></div>
                        <div class="col-md-6 mb-3"><a href="#item-5-12">getSql</a></div>
                    </div>`,
            },
            {
                section: 3,
                title:'setModel',
                content: `
                    Define el modelo donde se consultarán los datos, este método es el encargado de generar la estructura de tu formulario,
                    y de la tabla que se mostrará en el index. <br><br>
                    <div id="setModel" style="width:100%; height:100px;"></div>`,
                code: {
                    idElement: 'setModel',
                    language: 'php',
                    code: `\n<?php \n\n$this->setModel(new ModelName);`
                }
            },
            {
                section: 4,
                title:'setCampo',
                content: `
                    Define los campos que se van a mostrar, editar o solo consultar, este método es el encargado de generar la estructura de tu formulario, 
                    y de la tabla que se mostrará en el index. <br><br>
                    <div id="setCampo" style="width:100%; height:550px;"></div>`,
                code: {
                    idElement: 'setCampo',
                    language: 'php',
                    code: `\n<?php \n\n$this->setCampo([ \n        'nombre' => 'Label', \n        'campo' => 'nombre_campo_database', \n        'tipo' => 'string', \n        'edit' => true, \n        'show' => true, ]); \n\n# Tipos de campos disponibles  \n // 'bool'     - Muestra un checkbox en el edit y un si o no en el index   \n // 'combobox' - Muestra un select simple \n // 'select2'  - Muestra un select con select2 \n // 'date'     - Input con formato tipo fecha \n // 'datetime' - Input en formato fecha y hora \n // 'enum'     - Select con valores determinados \n // 'file'     - Guarda un archivo en una ubicación definida \n // 'file64'   - Guarda un archivo codificado en base64 \n // 'hidden'   - Muestra un campo hidden en el formulario edit. \n // 'icono'    - Muestra un campo para seleccionar un icono \n // 'image'    - Guarda una imagen en formato Base64 \n // 'numeric'  - Muestra un campo de tipo number en HTML y le da formato en el index \n // 'password' - Muestra dos campos contraseña y confirmar contraseña \n // 'string'   - Tipo por defecto muestra un input tipo text \n // 'text'     - La misma definición de string \n // 'textarea' - Muestra un campo textArea en el formulario edit \n // 'url'      - Establece  una url con parámetros personalizados. `
                }
            },
            {
                section: 5,
                title: 'setTitulo',
                content: `
                    Define el título que se mostrará en la vista de tu módulo.
                    <br><br>
                    <div id="setTitulo" style="width:100%; height:100px;"></div>
                `,
                code: {
                    idElement: 'setTitulo',
                    language: 'php',
                    code: `\n<?php \n\n$this->setTitulo('Nombre de tu módulo');`
                }
            },
            {
                section: 6,
                title: 'setLayout',
                content: `
                    Define el Layout o plantilla que se mostrará en la vista de tu módulo.
                    <br><br>
                    <div id="setLayout" style="width:100%; height:100px;"></div>
                `,
                code: {
                    idElement: 'setLayout',
                    language: 'php',
                    code: `\n<?php \n\n$this->setLayout('nombre de la vista');`
                }
            },
            {
                section: 7,
                title: 'setStoreMSG',
                content: `
                    Define el mensaje que quieres que se muestre después de que se guardaron los datos correctamente.
                    <br><br>
                    <div id="setStoreMSG" style="width:100%; height:100px;"></div>
                `,
                code: {
                    idElement: 'setStoreMSG',
                    language: 'php',
                    code: `\n<?php \n\n$this->setStoreMSG('nombre de la vista');`
                }
            },
            {
                section: 8,
                title: 'setValidationItem',
                content: `
                    Define las validaciones que se realizarán en los inputs que definas en setCampo.
                    <br><br>
                    <div id="setValidationItem" style="width:100%; height:100px;"></div>
                `,
                code: {
                    idElement: 'setValidationItem',
                    language: 'php',
                    code: `\n<?php \n\n$this->setValidationItem('nombre_campo_database', 'required|string');`
                }
            },
            {
                section: 9,
                title: 'setBoton',
                content: `
                    Agrega botones adicionales en la vista index.
                    <br><br>
                    <div id="setBoton" style="width:100%; height:100px;"></div>
                `,
                code: {
                    idElement: 'setBoton',
                    language: 'php',
                    code: `\n<?php \n\n$this->setBoton(['nombre' => 'boton Extra', 'url' => 'ruta/{id}', 'class' => 'btn-outline-success', 'icon' => 'fas fa-info']);`
                }
            },
            {
                section: 10,
                title: 'setBotonDT',
                content: `
                    Agrega botones adicionales dentro de la tabla Index.
                    <br><br>
                    <div id="setBotonDT" style="width:100%; height:100px;"></div>
                `,
                code: {
                    idElement: 'setBotonDT',
                    language: 'php',
                    code: `\n<?php \n\n$this->setBotonDT(['text' => 'boton Extra', 'action' => 'funcion_de_js()', 'class' => 'btn-outline-success']);`
                }
            },
            {
                section: 11,
                title: 'setDefaultBotonDT',
                content: `
                    Agrega botones adicionales dentro de la tabla Index.
                    <br><br>
                    <div id="setDefaultBotonDT" style="width:100%; height:100px;"></div>
                `,
                code: {
                    idElement: 'setDefaultBotonDT',
                    language: 'php',
                    code: `\n<?php \n\n$this->setDefaultBotonDT(['text' => 'boton Extra', 'action' => 'funcion_de_js()', 'class' => 'btn-outline-success']);`
                }
            },
            {
                section: 12,
                title: 'getSql',
                content: `
                    Muestra el query de la consulta que se está realizando, basado en los campos y condiciones definidas por medio de funciones. 
                    <br><br>
                    <div id="getSql" style="width:100%; height:100px;"></div>
                `,
                code: {
                    idElement: 'getSql',
                    language: 'php',
                    code: `\n<?php \n\n$this->getSql();`
                }
            }
        ]
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
            readOnly: true,
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


