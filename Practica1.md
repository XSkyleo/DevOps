graph TD
    %% Definición de Estilos y Fronteras de Confianza
    classDef internet fill:#f9f,stroke:#333,stroke-width:2px;
    classDef secureZone fill:#bbf,stroke:#333,stroke-width:2px;
    
    %% 1. Definición de Nodos (Se declaran por separado para evitar errores)
    Usuario["🌐 Usuario (Navegador/App)"]
    API["⚙️ API Gateway / Backend"]
    Admin["👨‍💻 Administrador de Red"]
    BD[("🗄️ Base de Datos SQL")]
    Auth["🔑 Servicio de Auth Externo (OAuth)"]
    
    %% 2. Flujos de Datos (Conexiones)
    Usuario -->|"1. Envía Credenciales (HTTPS)"| API
    Admin -->|"5. Mantenimiento (SSH)"| BD
    API -->|"2. Consulta / Guarda Usuario"| BD
    API -->|"3. Valida Token"| Auth
    
    %% 3. Fronteras de Confianza (Usando la sintaxis ID ["Título"])
    subgraph Zona_Internet ["Frontera de Internet (Insegura)"]
        Usuario
    end
    
    subgraph Zona_Segura ["Red Interna de la Empresa (Zona Segura)"]
        API
        BD
        Auth
    end

    %% Aplicar Estilos
    class Usuario internet;
    class API,BD,Auth secureZone;
