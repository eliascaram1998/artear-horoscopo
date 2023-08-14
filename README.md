# Horóscopo App

Esta es una aplicación de horóscopos que te permite ver información sobre los signos del zodíaco y sus predicciones. Puedes explorar diferentes signos, ordenarlos alfabéticamente y filtrarlos por nombre.

## Funcionalidades

- Ver información detallada de los signos del zodíaco.
- Ordenar los signos alfabéticamente.
- Filtrar signos por nombre.
- Almacenar y cargar el tipo de desplazamiento en el almacenamiento local.

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/eliascaram1998/artear-horoscopo.git
```
2. Ingresa al directorio del proyecto:
```bash
cd artear-horoscopo
```
3. Instala las dependencias:
```bash
yarn
```
## Pruebas
Para ejecutar las pruebas unitarias, utiliza el siguiente comando:
```bash 
npm test
```
## Tecnologías Utilizadas
- React Native
- React Navigation
- Axios
- AsyncStorage
- Jest (para pruebas unitarias)
- React Testing Library (para pruebas de componentes)
## Asumpciones

Durante el desarrollo de esta aplicación, se tomaron las siguientes asunciones:

- Se asume que la API proporcionada está disponible y en funcionamiento durante la ejecución de la aplicación.
- Se asume que la API requiere el encabezado "Authorization" con el valor "qazwsx" para realizar peticiones exitosas.
- Se asume que los datos proporcionados por la API seguirán el formato especificado en la documentación.
- Se asume que la aplicación se ejecutará en emuladores o dispositivos con capacidades compatibles con React Native y las bibliotecas utilizadas.
- Se asume que las rutas y endpoints de la API no cambiarán durante el desarrollo de la aplicación.
- Se asume que los íconos utilizados en la aplicación estarán disponibles y funcionarán correctamente con React Native Vector Icons.
- Se asume que el almacenamiento local proporcionado por AsyncStorage estará disponible y funcionará correctamente.
- Se asume que las pruebas unitarias y de componente seguirán siendo efectivas y relevantes a medida que la aplicación evolucione.
