import { Component } from "@angular/core";

@Component({
    selector: 'main',
    templateUrl: './main-vista.component.html'
})

export class MainVista{

    public titulo: string;
    constructor(){
        this.titulo = "Vista destinada para el index principal"
        console.log(this.titulo);
    }
}