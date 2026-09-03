# Modelado de Amenazas: Sistema de Autenticación y API de Usuarios

**Fecha:** 2026-08-31  
**Versión:** 1.0  
**Autores:** Fernando Madrigal Dominguez

## 1. Diagrama de Flujo de Datos (DFD) con Mermaid.js

A continuación se muestra la arquitectura lógica del sistema, los flujos de datos y las fronteras de confianza (Trust Boundaries) que separan las zonas seguras de las inseguras.

```mermaid
graph TD
    %% Definición de Estilos y Fronteras de Confianza
    classDef internet fill:#f9f,stroke:#333,stroke-width:2px;
    classDef secureZone fill:#bbf,stroke:#333,stroke-width:2px;
    
    %% Actores y Componentes (Declaración previa)
    Usuario["🌐 Usuario (Navegador/App)"]
    API["⚙️ API Gateway / Backend"]
    Admin["👨‍💻 Administrador de Red"]
    BD[("🗄️ Base de Datos SQL")]
    Auth["🔑 Servicio de Auth Externo (OAuth)"]
    
    %% Flujos de Datos (Conexiones)
    Usuario -- "1. Envía Credenciales (HTTPS)" --> API
    Admin -- "5. Mantenimiento (SSH)" --> BD
    API -- "2. Consulta / Guarda Usuario" --> BD
    API -- "3. Valida Token" --> Auth
    
    %% Fronteras de Confianza
    subgraph Zona_Insegura ["Frontera de Internet (Insegura)"]
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
