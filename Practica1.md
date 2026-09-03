graph TD
    %% Definición de Estilos
    classDef internet fill:#f9f,stroke:#333,stroke-width:2px;
    classDef secureZone fill:#bbf,stroke:#333,stroke-width:2px;
    
    %% 1. Declaración de Nodos
    Usuario["🌐 Usuario (Navegador/App)"]
    API["⚙️ API Gateway / Backend"]
    Admin["👨‍💻 Administrador de Red"]
    BD[("🗄️ Base de Datos SQL")]
    Auth["🔑 Servicio de Auth Externo (OAuth)"]
    
    %% 2. Flujos de Datos (Conexiones con comillas dobles)
    Usuario -- "1. Envía Credenciales (HTTPS)" --> API
    Admin -- "5. Mantenimiento (SSH)" --> BD
    API -- "2. Consulta / Guarda Usuario" --> BD
    API -- "3. Valida Token" --> Auth
    
    %% 3. Fronteras de Confianza
    subgraph Zona_Insegura ["Frontera de Internet (Insegura)"]
        Usuario
    end
    
    subgraph Zona_Segura ["Red Interna de la Empresa (Zona Segura)"]
        API
        BD
        Auth
    end

    %% 4. Aplicar Estilos
    class Usuario internet;
    class API,BD,Auth secureZone;
