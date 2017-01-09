# PocoyoPlayer

> Este es una demostracion de un proyecto SPA en angular 1.x con typescript que permite el entender y tener una idea concreta de como implementar una solucion Front-End con tecnologias estables, seguras y facil de implementar, la idea es que clonando este repositorio pueda aprender un junion frontend developer a trabajar con angular, typescript y manejar la metodologia de componentes.


### Tecnologias y metodologias utilizadas:

* [Angular 1.6.1](https://github.com/angular/code.angularjs.org/tree/master/1.6.1) is what HTML would have been, had it been designed for building web-apps. Declarative templates with data-binding, MVW, MVVM, MVC...
* [TypeScript](https://github.com/Microsoft/TypeScript) TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
* [GulpJs](http://gulpjs.com/) s a task/build runner for development. It allows you to do a lot of stuff within your development workflow. You can compile sass files, uglify and compress js files and much more. The kicker for gulp is that its a streaming build system which doesn't write temp files.
* [SPA](https://johnpapa.net/spa/) Single Page Applications (SPA) are built on expanding reach via the browser, reducing round tripping, and enhancing User Experience (UX)

### Demo
Ver la version más reciente de PocoyoPlayer [Aqui!] (Http://PocoyoPlayer.azurewebsites.net/).
 
 
**Tienes que instalar las dependencias:**
* [Git]()
* [NodeJs]()
* [TypeScript]()
* [Bower]()
* [GulpJs]()
* [VSCode]()

1) Si no tiene Node.js instalado o tiene una versión inferior, ve a [nodejs.org](https://nodejs.org) y haga clic en el botón de instalación grande verde.

3) Instala `gulp` y `bower` globalmente.

```sh
npm install -g gulp bower
```

Esto te permite ejecutar `gulp` y` bower` desde la consola.

4)  Instala las dependencias locales con `npm` y` bower`.

```sh
cd  PocoyoPlayer && npm install && bower install
```
 
### Flujo de desarrollo

#### Build "dist" folder
```sh
Gulp build
```

#### RUN
```sh
Gulp serve
```