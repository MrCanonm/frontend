import { Component, OnInit } from '@angular/core';
import { ApiPService } from './api-p.service';


@Component({
  selector: 'app-api-p',
  templateUrl: './api-p.page.html',
  styleUrls: ['./api-p.page.scss'],
})
export class ApiPPage implements OnInit {

  pokemons: any[] = []; // el tipo record es un tipo de objecto que se accessa un indice usando un string, y contiene en este caso
  // un valor de any al ser indexado
  name: string = "";

  constructor(private pokeService: ApiPService) { }

  ngOnInit() {
    this.getDataApi();
  }
  getDataApi(){
    this.pokeService.getData(this.name).subscribe((results)=>{
      this.pokemons = results.results;
      console.log(results)
    })
  }
  buscar(){
    this.pokeService.getData(this.name).subscribe(data =>{
      this.pokemons = data
    })
  }


}
