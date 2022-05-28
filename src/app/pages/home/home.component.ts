import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public nombreCiudad = '';
  public region='';
  public dataClimaSemana :any = [];
  constructor(
    private climaService: ClimaService
  ) { }

  ngOnInit(): void {
  }

  getUbicacionActual(){
    console.log("Ubicacion actual");


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          alert("Posicionamiento: " +pos.lat + " " + pos.lng);
          console.log(pos, 'pos');
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('no soportado');
    }

  }

  getClimaSemana(){
    try {
      if(this.nombreCiudad == "London"){
        this.climaService.getClimaLondon().subscribe((data:any)=>{
          this.dataClimaSemana = data.next_days;
          this.region = data.region;

        });
      }else if(this.nombreCiudad == "Mexico"){

        this.climaService.getClimaMexico().subscribe((data:any)=>{
          this.dataClimaSemana = data.next_days;
          this.region = data.region;

        });


      }else{
        alert("Ingrese una ciudad valida (London, Mexico)");
      }
    } catch (error) {
      console.log(error);
    }

  }
}
