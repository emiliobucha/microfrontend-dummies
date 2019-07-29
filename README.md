PoC micro-frontends

El objetivo de esta prueba es el de verificar la aplicabilidad de la metodologíoa micro-frontends que propone, aplicando un enfoque similar al de micro servicios, construir frontends dividiendolo en componentens funcionales implementados por distintos equipos de desarrollo utilizando distintos frameworks en la cosntrucción de cada componente.

Para ejecutar tenemos
1. Proyecto main-app
    Realizado en REACT,
    a. npm i
    b. npm run build
    c. npm run serve
2. Proyecto apps/login-app-react
    Realizado en REACT
    a. npm i
    b. npm run build
    c. npm run serve
3. Proyecto apps/navbar-app-vuew
    Realizado en VUE
    a. npm i
    b. npm run build
    c. npm run serve
4. Proyecto apps/gestiones-app-angular
    Realizado en Angular 7
    a. npm i
    b. ng serve --port 4201 --publicHost http://localhost:4201 --disableHostCheck (Viejo)
    c. npm run serve:single-spa
5. Proyecto apps/instaladores-app-angular
    Realizado en Angular 8
    a. npm i
    b. npm run build:single-spa
    c. npm run serve:single-spa
6. WebComponent/tarjeta-instalador
    a. npm start 