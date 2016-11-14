import {Component} from "angular2/core";
import {Peliculas} from "./model/peliculas"

@Component({
	selector: "mi-app",
	templateUrl: "app/view/peliculas.html",
	styleUrls:["../assets/css/styles.css"]
})

export class AppComponent{
	public titulo:string; 
	public pelicula:Peliculas;
	public mostrarDatos:boolean;
	public listaPeliculas:Array<Peliculas>;

	constructor(){
		this.titulo = "Listado de peliculas";
		this.pelicula = new Peliculas(1,"Kill Bill","Tarantino",2012);
		this.mostrarDatos = true;
		this.listaPeliculas = [
			new Peliculas(1,"Kill Bill","Tarantino",2012),
			new Peliculas(2,"La verdad duele","Will Smith",2016),
			new Peliculas(3,"El señor de los anillas","Descon",null),
			new Peliculas(4,"Uno de los nuestros","Coeb",2014),
			new Peliculas(5,"Don Jon","Jordan Levit",2015)];
	}

	onShowHide(value:boolean){
		this.mostrarDatos = value;
	}

	debug(mostrarTitulo){
		if(mostrarTitulo){
			console.log(this.pelicula.titulo);
		}else{
			console.log(this.pelicula);
		}
	}


}