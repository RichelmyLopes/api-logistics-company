import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { Client as GoogleMapsCliente} from '@googlemaps/google-maps-services-js';
import { DirectionsController } from './directions/directions.controller';
import { DirectionsService } from './directions/directions.service';


@Module({
  providers: [PlacesService, DirectionsService,
    {
    provide: GoogleMapsCliente,
    useValue: new GoogleMapsCliente()
  }],
  controllers: [PlacesController, DirectionsController],
  exports: [DirectionsService]
})
export class MapsModule {}
