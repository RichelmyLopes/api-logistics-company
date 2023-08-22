import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { DirectionsService } from 'src/maps/directions/directions.service';
import { MapsModule } from 'src/maps/maps.module';
import { RoutesDriverService } from './routes-driver/routes-driver.service';

@Module({
  controllers: [RoutesController],
  providers: [RoutesService, RoutesDriverService],
  imports: [MapsModule]
})
export class RoutesModule {}
