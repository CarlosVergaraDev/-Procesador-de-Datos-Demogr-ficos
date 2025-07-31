# 📊 Aplicación Web de Análisis Estadístico de Edades

Una aplicación web interactiva diseñada para la recolección, validación y análisis estadístico de datos demográficos (edades), construida completamente con tecnologías web fundamentales: **HTML5**, **CSS3** y **JavaScript**.

---

## 🧩 Descripción General

Este proyecto simula un asistente que guía al usuario a lo largo del proceso de ingreso de 10 edades, validando cada entrada en tiempo real y presentando al final un **dashboard estadístico dinámico**.

A diferencia de un formulario estático tradicional, esta interfaz progresiva mejora la experiencia de usuario, garantiza la integridad de los datos ingresados y presenta los resultados de forma visual y clara.

---

## ✨ Funcionalidades Clave

- ✅ **Ingreso Guiado de Datos**  
  Las edades se introducen una por una. Un contador visual de progreso guía al usuario en el proceso, evitando errores por saturación visual.

- 🔎 **Validación en Tiempo Real**  
  Cada edad se valida al momento de ser ingresada. Se aceptan únicamente valores numéricos dentro del rango permitido (1 a 120 años). En caso de error, se muestra un mensaje claro y no intrusivo.

- 💊 **Visualización de Edades Ingresadas**  
  Cada edad válida se representa mediante una "píldora" visual agregada dinámicamente al contenedor de datos ingresados.

- 📈 **Cálculo Automático de Estadísticas**  
  Una vez capturadas las 10 edades, se realiza el análisis de:
  
  - Total de personas menores de edad.
  - Total de adultos (≥ 18 años).
  - Total de adultos mayores (≥ 60 años).
  - Edad mínima.
  - Edad máxima.
  - Edad promedio.

- 📊 **Dashboard de Resultados**  
  Los resultados más relevantes se presentan en tarjetas visuales que resaltan el valor mínimo, máximo y promedio del conjunto de datos.

- 🔄 **Reinicio Dinámico**  
  El usuario puede reiniciar el proceso y comenzar una nueva sesión de ingreso con un solo clic.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología  | Propósito |
|-------------|----------|
| **HTML5**   | Estructura semántica del documento y etiquetas accesibles. |
| **CSS3**    | Estilos personalizados, layout con Flexbox y diseño responsive. |
| **JavaScript (ES6+)** | Lógica funcional, interacción dinámica con el DOM, validación y análisis de datos. |

---

## 📁 Estructura del Proyecto

📦 estadisticas-edades
├── index.html     # Estructura de la interfaz
├── styles.css     # Estilos de la aplicación
└── script.js      # Lógica principal del programa



---

## 🧠 Lógica de la Aplicación (Resumen Técnico)

- Se utilizan **event listeners** para manejar interacciones del usuario (`click`, `keyup`).
- Validaciones de entrada usando `parseInt` e `isNaN` para garantizar valores válidos.
- Almacenamiento de edades en un arreglo dinámico.
- Se recorren las edades solo una vez para calcular:
  - Clasificaciones por grupo etario (menores, adultos, adultos mayores).
  - Estadísticas: mínimo (`Math.min`), máximo (`Math.max`) y promedio (`suma / n`).
- La interfaz se manipula usando métodos del DOM (`createElement`, `appendChild`, `classList`).
- Se emplea un patrón de separación de responsabilidades para modularidad y claridad.

---

## 🚀 Cómo Ejecutar el Proyecto

1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador preferido.
3. Ingresa las edades siguiendo las instrucciones en pantalla.
4. Visualiza el análisis en el dashboard.
5. Reinicia para una nueva sesión de ingreso.

---

## 📌 Requisitos del Navegador

- Compatible con todos los navegadores modernos que soporten ES6+
- No requiere conexión a internet ni dependencias externas

---

## 👨‍💻 Autor

Desarrollado como práctica de fundamentos de desarrollo web usando **JS**, **HTML5** y **CSS3**.
