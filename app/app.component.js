System.register(["angular2/core", "./model/peliculas"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, peliculas_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (peliculas_1_1) {
                peliculas_1 = peliculas_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = "Listado de peliculas";
                    this.pelicula = new peliculas_1.Peliculas(1, "Kill Bill", "Tarantino", 2012);
                    this.mostrarDatos = true;
                    this.listaPeliculas = [
                        new peliculas_1.Peliculas(1, "Kill Bill", "Tarantino", 2012),
                        new peliculas_1.Peliculas(2, "La verdad duele", "Will Smith", 2016),
                        new peliculas_1.Peliculas(3, "El señor de los anillas", "Descon", null),
                        new peliculas_1.Peliculas(4, "Uno de los nuestros", "Coeb", 2014),
                        new peliculas_1.Peliculas(5, "Don Jon", "Jordan Levit", 2015)];
                }
                AppComponent.prototype.onShowHide = function (value) {
                    this.mostrarDatos = value;
                };
                AppComponent.prototype.debug = function (mostrarTitulo) {
                    if (mostrarTitulo) {
                        console.log(this.pelicula.titulo);
                    }
                    else {
                        console.log(this.pelicula);
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "mi-app",
                        templateUrl: "app/view/peliculas.html",
                        styleUrls: ["../assets/css/styles.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map