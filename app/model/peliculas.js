System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Peliculas;
    return {
        setters:[],
        execute: function() {
            Peliculas = (function () {
                function Peliculas(id, titulo, director, anio) {
                    this.id = id;
                    this.titulo = titulo;
                    this.director = director;
                    this.anio = anio;
                }
                return Peliculas;
            }());
            exports_1("Peliculas", Peliculas);
        }
    }
});
//# sourceMappingURL=peliculas.js.map