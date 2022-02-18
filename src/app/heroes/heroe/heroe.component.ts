import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "./heroe.component.html",
})

export class HeroeComponent {
    nombre: string = "Aquaman";
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} tiene ${this.edad} años`;
    }

    cambiarNombre():void {
        this.nombre = "Superman";
    }

    cambiarEdad():void {
        this.edad = 30;
    }
}