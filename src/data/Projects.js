export const projects = [
 
{
  id: 1,
  title: "Health Clinic Appointments",
  description: "Sistema (API) de gestión de citas para clínicas de salud, con backend en PHP utilizando CI4 como framework y frontend dinámico con React.",
  
  technologies: ["PHP", "React","CI4","CSS","MySQL"],
  image: "/images/sistema-clinica.png",
  github: "https://github.com/Agust18/Health-clinic-appointments",
  demo: "",
  
  fullDescription: `Health Clinic Appointments es un sistema completo para la gestión de citas médicas en clínicas de salud.).
El sistema permite a los pacientes solicitar a la API los turnos,a los médicos gestionar sus agendas y a los administradores supervisar todo el flujo de atención, optimizando la organización de una clínica de salud.`,
  
  challenges: [
    "Diseñar una arquitectura cliente-servidor escalable para la gestión de citas médicas",
    "Implementar un sistema de roles y funciones permitidas a estos.(administrador,pacientes,médicos,recepcionista)",
    "Gestionar la disponibilidad de horarios y la asignación de turnos",
    "Crear una interfaz de usuario dinámica y responsiva",
    "Asegurar la integridad y seguridad de los datos médicos"
  ],
  
  solutions: [
    "Desarrollé un backend robusto en PHP con MySQL para la gestión de datos y lógica de negocio",
    "Implementé un frontend dinámico con React para una experiencia de usuario fluida",
    "Diseñé un sistema de autenticación y autorización por roles usando jwt",
    "Optimicé las consultas a la base de datos para gestionar eficientemente la disponibilidad de turnos",
    "Utilicé CSS para crear una interfaz limpia, moderna y responsiva"
  ],
  
  results: [
    "Sistema completo de gestión de citas para clínicas de salud",
    "Arquitectura cliente-servidor con backend en PHP y frontend en React",
    "Sistema de roles con permisos específicos filters para la proteccion de endpoints",
    "Gestión eficiente de disponibilidad y asignación de turnos",
    "Interfaz de usuario dinámica, moderna",
    "Integridad y seguridad de los datos"
  ],
  
  year: 2026,
  role: "Desarrollador Full Stack",
  status:"En desarrollo"
},
  
  {
  id: 2,
  title: "Sistema de Turnos Laravel MVC",
  description: "Sistema de gestión de turnos con múltiples servicios y profesionales, desarrollado con Laravel 11",
  
  technologies: ["Laravel 11", "PHP", "Blade", "Bootstrap", "MySQL", "JavaScript", "Vite"],
  image: "/images/sistema-turnos-laravel.png",
  github: "https://github.com/Agust18/Turnos_laravel-mvc",
  demo: "",
  fullDescription: `Sistema completo de gestión de turnos desarrollado con Laravel 11 bajo el patrón MVC (Modelo-Vista-Controlador). Permite la administración de múltiples servicios y profesionales, facilitando la reserva y organización de turnos de manera eficiente.
Uso de ajax para mostrar horarios y medicos disponibles mediante JavaScript.
El proyecto implementa el uso de Eloquent ORM, migraciones de base de datos, sistema de rutas,y una interfaz moderna con bootstrap,CSS y Blade.`,
  
  challenges: [
    "Diseñar un sistema de gestión de turnos con múltiples servicios y profesionales",
    "Implementar el patrón MVC con Laravel para una arquitectura limpia y mantenible",
    "Crear un sistema de rutas  para la gestión de recursos.",
    "Diseñar una interfaz intuitiva y responsiva para la reserva de turnos",
    "Gestionar las relaciones entre entidades"
  ],
  
  solutions: [
    "Utilicé Laravel 11 con Eloquent ORM para definir modelos y relaciones entre servicios, profesionales y turnos",
    "Implementé controladores y rutas siguiendo el patrón MVC",
    "Diseñé las vistas con Blade y Bootstrap CSS para una interfaz moderna y responsiva",
    "Configuré migraciones para la gestión de la base de datos MySQL",
    "Utilicé Vite para la compilación de assets y optimización del frontend"
  ],
  
  results: [
    "Sistema de gestión de turnos con múltiples servicios y profesionales",
    "Arquitectura MVC limpia y mantenible con Laravel 11",
    "Interfaz moderna y responsiva con Bootstrap CSS",
    "Rutas  para la gestión completa de recursos",
    "Manejo de relaciones entre entidades",
    "Sistema preparado para agregar nuevas funcionalidades"
  ],
  
  year: 2026,
  role: "Desarrollador Full Stack",
  status:"Por finalizar"
},

  {
    id: 3,
    title: "RF Comisiones",
    description: "Sistema integral de gestión de pedidos por roles y comisiones desarrollado en PHP y MySQL.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "SweetAlert2", "PHPMailer"],
    image: "/images/RFcomisiones.png",
    github: "https://github.com/Agust18/RFcomisiones",
    demo: "",
    fullDescription: `RF Comisiones es un sistema integral de gestión de pedidos y comisiones, desarrollado para digitalizar y optimizar el flujo de trabajo de un negocio real. Centraliza la recepción de pedidos, permite gestionar estados y roles, y proporciona un panel administrativo con filtros avanzados.

Este fue mi primer proyecto real, nacido de la necesidad de organizar y digitalizar el flujo de pedidos de manera eficiente. Me enfoqué en construir una herramienta fácil de usar pero con una estructura sólida y profesional.`,

    challenges: [
      "Diseñar una arquitectura de punto de entrada único para centralizar peticiones",
      "Implementar un sistema de roles (administrador, vendedor) que limite el acceso",
      "Crear URLs amigables y limpias mediante .htaccess",
      "Gestionar la seguridad de sesiones y contraseñas con tokens",
      "Mantener un flujo de trabajo profesional con Git y .gitignore"
    ],
    solutions: [
      "Implementé un index que centraliza todas las peticiones, gestionando seguridad y sesiones de forma global",
      "Programé la lógica de estados para que los pedidos sigan un workflow claro y controlado",
      "Configuré rutas profesionales mediante .htaccess, mejorando SEO y seguridad",
      "Integré PHPMailer para manejo de correos y SweetAlert2 para alertas interactivas",
      "Audité el historial de Git y configuré .gitignore para proteger información sensible"
    ],
    results: [
      "Sistema operativo con gestión de roles (admin, vendedor)",
      "Panel administrativo con filtros avanzados y paginación dinámica",
      "Recuperación de contraseñas mediante tokens de seguridad",
      "Interfaz responsiva con Bootstrap 5 que funciona en cualquier dispositivo",
      "Flujo de trabajo profesional con Git y código limpio y protegido"
    ],
    year: 2024,
    role: "Desarrollador Full Stack",
    status:"completado"
  },

{
  id: 4,
  title: "Task Manager",
  description: "Aplicación web para gestión de tareas con Laravel 11 y Tailwind CSS. CRUD completo, prioridades y estado visual.",
  
  technologies: ["Laravel 11", "PHP", "Tailwind CSS", "Blade", "MySQL", "JavaScript"],
  image: "/images/todolist.png",
  github: "https://github.com/Agust18/To_do_List",
  demo: "", 
  fullDescription: `Task Manager es una aplicación web diseñada para gestionar tareas de forma sencilla, intuitiva y ordenada por prioridades y categorías. Desarrollada con Laravel 11 como framework backend, Blade para la capa de presentación y Tailwind CSS para una interfaz moderna y responsiva.
El objetivo principal fue crear una herramienta práctica que permita a los usuarios organizar su día a día con un sistema claro de prioridades y un feedback visual inmediato.`,
  challenges: [
    "Diseñar un sistema de prioridades visuales (alta, media, baja) con colores distintivos",
    "Implementar validación robusta en el backend con reglas de negocio (Required, Max Length)",
    "Crear un feedback visual de errores usando @error de Blade y Tailwind CSS",
    "Mantener la persistencia de datos con old() para no perder información en errores de validación",
    "Implementar toggle de estado (Completado/Pendiente) con iconos dinámicos"
  ],
  solutions: [
    "Utilicé un sistema de badges con clases condicionales de Tailwind para visualizar prioridades (rojo, amarillo, verde)",
    "Implementé validación con Request Validation y mensajes personalizados en español",
    "Usé @error de Blade para resaltar campos inválidos y mostrar mensajes de error claros",
    "Apliqué la función old() de Laravel para persistir datos ingresados en caso de error",
    "Diseñé un toggle con Alpine.js o JavaScript vanilla para cambiar estado sin recargar la página"
  ], 
  results: [
    "Sistema CRUD completo: Crear, Editar, Listar y Eliminar tareas",
    "Sistema de prioridades visuales con colores (Alta=🔴, Media=🟡, Baja=🟢)",
    "Toggle de estado con iconos dinámicos (✓ Completado / ○ Pendiente)",
    "Validación robusta con feedback visual en tiempo real",
    "Protección completa contra ataques CSRF en todos los formularios",
    "Interfaz responsiva y moderna con Tailwind CSS"
  ],
  year: 2024,
  role: "Desarrollador Full Stack",
  status:"completado"
},
 {
    id: 5,
    title: "Portfolio Nacho Fernández Tattoo",
    description: "Sitio web portfolio para tatuador profesional con diseño moderno",
    technologies: ["Frontend","HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/images/NachoTatto.png",
    github: "https://github.com/Agust18/NF_tatto",
    demo: "https://nachofernadeztatto.netlify.app/",
    fullDescription: `Portfolio web desarrollado para Nacho Fernández. Tatuador de la zona`,
    challenges: [
      "Diseñar una interfaz minimalista con enfoque artístico...",
      "Crear una galería de trabajos visualmente atractiva...",
      "Implementar un sistema de contacto simple pero efectivo...",
      "Optimizar el sitio para dispositivos móviles...",
      "Mantener un código limpio y bien estructurado..."
    ],
    solutions: [
      "Utilicé Bootstrap como framework CSS para asegurar un diseño responsive.",
      "Diseñé una galería con grid responsivo.",
      "Implementé un boton flotante de wsp para un contacto rapido y claro.",
      "Apliqué técnicas de CSS como Flexbox y Grid.",
      "Optimicé imágenes y recursos."
    ],
    results: [
      "Portafolio actualizado con todos los trabajos del tatuador",
      "Información clara sobre estilos y técnicas de tatuaje",
      "Sistema de contacto simple con pasos claros para agendar turnos",
      "Totalmente responsive y optimizado para móviles",
      "Diseño minimalista moderno con enfoque artístico",
      "Navegación fluida y accesible para todos los usuarios"
    ],
    year: 2025,
    role: "Desarrollador Frontend"
  },
{
  id: 6,
  title: "MiWeb Noticias",
  description: "Sistema de publicación y gestión de noticias con panel administrativo, desarrollado en PHP nativo y MySQL.",
  
  technologies: ["PHP", "MySQL", "CSS", "JavaScript"],
  image: "",
  github: "https://github.com/Agust18/miWeb-noticias",
  demo: "",
  
  fullDescription: `MiWeb Noticias,primer projecto personal realizado.Es un sistema completo de publicación y gestión de noticias, desarrollado con PHP nativo y MySQL. Incluye un panel administrativo con funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) para noticias y sus categorias, permitiendo gestionar el contenido de forma eficiente.
Tambien cuenta con vista detalle de cada noticia con un carrusel con noticias relacionadas a la categoria de la misma.
El sistema cuenta con dos áreas principales: una pública para visualización de noticias y una privada (administrativa) para la gestión de contenido, con autenticación de usuarios y manejo de sesiones.`,
  
  challenges: [
    "Diseñar un sistema de autenticación y gestión de sesiones para el panel administrativo",
    "Implementar un CRUD completo para noticias con PHP nativo y MySQL",
    "Crear un sistema de carga y manejo de imágenes para las noticias",
    
  ],
  
  solutions: [
    "Implementé un sistema de autenticación con sesiones PHP para proteger el panel administrativo",
    "CRUD completo con consultas preparadas para evitar inyecciones SQL",
    "Upload de imágenes con validación de archivos",
    "Utilicé consultas SQL con prepare para evitar inyecciones SQL"
  ],
  
  results: [
    "Sistema de noticias con panel administrativo completo",
    "CRUD funcional para crear, editar y eliminar noticias",
    "Carga de imágenes para cada noticia",
    "Área pública con visualización de noticias",
    "Código estructurado con PHP nativo",
    "Autenticación y gestión de sesiones seguras con @session"
  ],
  
  year:2021,
  role: "Desarrollador Full Stack",
  status:"completado"
},

{
  id: 7,
  title: "Card Menu Big Tallo",
  description: "Menú digital interactivo y responsivo para Big Tallo, desarrollado con HTML, CSS y JavaScript.",
  technologies: ["HTML", "CSS", "JavaScript"],
  image: "/images/bigTallo.png",
  github: "https://github.com/Agust18/Card-Menu-Big-Tallo",
  demo: "https://bigtallo.netlify.app/", 
  
  fullDescription: `Card Menu Big Tallo es un menú digital ficticio interactivo diseñado para Big Tallo,negocio gastronómico de la zona que use para represenar. El proyecto presenta una interfaz visual atractiva y responsiva que permite a los usuarios explorar productos, promociones o servicios de manera intuitiva.

Desarrollado con tecnologías web nativas (HTML, CSS y JavaScript), este menú digital ofrece una experiencia de usuario fluida y moderna, con soporte para contenido multimedia como imágenes y videos.`,
  
  challenges: [
    "Diseñar una interfaz de menú digital atractiva y fácil de navegar",
    "Optimizar el sitio para dispositivos móviles (responsive design)",
  ],
  
  solutions: [
    "Utilicé HTML semántico y CSS moderno (Flexbox, Grid) para un layout flexible y responsivo",
    "Organicé el código en carpetas separadas (css, js, imagenes, videos) para mejor mantenibilidad"
  ],
  
  results: [
    "Menú digital interactivo y visualmente atractivo",
    "Diseño responsivo que se adapta a todos los dispositivos",
    "Soporte para contenido multimedia (imágenes y videos)",
    "Sin dependencias externas (HTML, CSS y JavaScript puro)"
  ],
  
  year: 2020,
  role: "Desarrollador Frontend",
  status:"completado"
},


]