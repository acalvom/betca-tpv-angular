## [Máster en Ingeniería Web por la Universidad Politécnica de Madrid (miw-upm)](http://miw.etsisi.upm.es)
## Back-end con Tecnologías de Código Abierto: **SPRING**
> Proyecto TPV. Este proyecto es un apoyo docente de la asignatura. Es una aplicación Front-end,
mediante Angular, funcionando conjuntamente con Front-ends. Proyecto global: [betca-tpv](https://github.com/miw-upm/betca-tpv).

### Tecnologías necesarias
`Node (14.15)`  `npm (6.14)` `Angular (11.0)` `Material`  `Typescript` `HTML` `CSS` --- CI: `GitHub` `Travis-CI` `Heroku`

### :gear: Instalación del proyecto
1. Clonar el repositorio en tu equipo, **mediante consola**:
```sh
> cd <folder path>
> git clone https://github.com/miw-upm/betca-tpv-angular
> cd betca-tpv-angular
betca-tpv-angular> npm install
```
2. Abrir el proyecto mediante **WebStorm**.
   * **Open**, y seleccionar la carpeta del proyecto.

3. Ejecución.
   * Ejecución en local atacando al back-end desplegado en Heroku, por consola: `> ng serve --prod`.
   * Ejecución en local atacando al back-end desplegado localmente: 
      1. Se debe tener arrancado el motor de MongoDB: `mongodb://localhost:27017/tpv`  
      1. Se debe arrancar el **Back-end**: `> mvn clean spring-boot:run`    
      1. Se debe arrancar **Angular**: `> ng serve`

## :book: Documentación del proyecto
> Este proyecto es la práctica de Angular desarrollada de forma colaborativa por todos los alumnos. Se parte de la versión `core`,
ya implementada, y se pretende ampliar con un conjunto de mejoras. Un **T**erminal **P**unto de **V**enta
es un sistema informático que gestiona el proceso de venta mediante una interfaz accesible para los vendedores o compradores.
Permite la creación e impresión del recibo ticket o factura de venta —con los detalles de las referencias y precios— de los artículos vendidos,
actualiza los cambios en el nivel de existencias de mercancías (STOCK) en la base de datos...


## Anexo I. Preparación del entorno
1. Instalar Node: Instalar Node (versión 14.15.0)
   * Todo estándar.
   * Para ver la versión de npm instalada: `>npm –version` (6.14.8).
   * Para ver todas las dependencias instaladas: `>npm list`.
   * Para ver una dependencia específica: `>npm list @angular/cli`
   * Para actualizar npm: `>npm update –g`
2. Instalar Angular CLI ()
   * `>npm install -g @angular/cli` o `>npm install -g @angular/cli@latest`
   * Para ver la versión instalada: `>ng –-version`
   * Para instalar una versión determinada: `>npm install -g @angular/cli@11.0.1`

3. Instalar Material & Flex
   * `>ng add @angular/material` (Indigo/Pink, Yes & Yes)
   * `>npm i @angular/flex-layout`
   * Para ver la versión instalada: `>npm list @angular/material` o `>npm list @angular/flex-layout`
   
## Anexo II. Comandos de Angular CLI
* `>ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* `>ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* `>ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* `>ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
* `>ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Anexo III. Preparación del ecosistema
### Versionado y entorno de trabajo
En el fichero `tsconfig.json` añadir la siguiente opción:
```json
"compilerOptions": {
    "resolveJsonModule": true,
}
```
En el fichero `package.json` , se establece el nombre y versión del artefacto
```json
{
  "name": "betca-tpv-angular",
  "version": "2.4.0-SNAPSHOT",
}
```
Dentro de la carpeta `src/environments`, establecer los valores dependiendo del entorno de trabajo:
> environments.ts
```typescript
import {name, version} from '../../package.json';
export const environment = {
  production: false,
  NAME: name,
  VERSION: version,
  REST_USER: 'http://localhost:8081/api/v0',
  REST_CORE: 'http://localhost:8082/api/v0'
};
```
> environments.prod.ts
```typescript
import {name, version} from '../../package.json';
export const environment = {
  production: true,
  NAME: name,
  VERSION: version,
  REST_USER: 'https://betca-tpv-user.herokuapp.com/api/v0',
  REST_CORE: 'https://betca-tpv-core.herokuapp.com/api/v0'
};
```
### Integración continua con **Travis-CI**
Se despliega para ejecución de los test Unitarios y de Integración.
* En el fichero `.travis.yml`:
```yaml
language: node_js
node_js:
  - '14'
addons:
  chrome: stable
branches:
  - develop
  - /^release-[0-999].[0-999]$/
  - master
notifications:
  email:
    recipients:
      - user@gmail.com
script:
  - ng test --watch=false --no-progress --browsers=ChromeHeadlessNoSandbox
  - ng e2e --protractor-config=e2e/protractor-travis.conf.js

* Se ha creado el fichero `e2e/protractor-travis.conf.js` con el contenido:
```js
const config = require('./protractor.conf').config;
config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox']
  }
};
exports.config = config;
```
### Despliegue en Heroku
Se realiza un despliegue en **Heroku** .  
En la cuenta de **Heroku**, en la página `-> Account settings -> API Key`, se ha obtenido la `API KEY`.  
En la cuenta de **Travis-CI**, dentro del proyecto, en `-> More options -> Settings`, se ha creado una variable de entorno llamada `HEROKU` cuyo contenido es la **API key** de **Heroku**.  

* En el fichero `package.json`, se definen los siguientes valores
```json
{
  "scripts": {
    "postinstall": "ng build --prod",
    "start": "node server.js"
  },
  "engines": {
    "node": "~14.15.0",
    "npm": "~6.14.18"
  }  
}
```
  `~: versión mas cercana posible, ^: versión compatible mas alta`

* Se ha añadido al fichero `.travis.yml` el contenido:
```yaml
# Deploy https://betca-tpv-angular.herokuapp.com
deploy:
  provider: heroku
  api_key:
    secure: $HEROKU
  on:
    branch: master
```
