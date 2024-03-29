import * as Highcharts from "highcharts";

import { Component, OnInit, inject } from "@angular/core";

import { HighchartsChartModule } from "highcharts-angular";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from "@angular/router";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { SocketService } from "../../core/services/socket.service";

@Component({
  selector: "hospital-home",
  standalone: true,
  imports: [
    RouterLink,
    SidenavComponent,
    NavbarComponent,
    HighchartsChartModule,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  private socketService = inject(SocketService);
  chartPacientesPorGenero: typeof Highcharts = Highcharts;
  pacientesPorGeneroOptions!: Highcharts.Options;

  ngOnInit(): void {
    // Suscribirse al evento 'datos'
    this.socketService.getDatosPacientes().subscribe((data) => {
      console.log("Datos de pacientes recibidos:", data);
      // Aquí puedes manejar los datos recibidos según tus necesidades
    });
    this.socketService.getPacientesPorGenero().subscribe(data => {
      console.log('Datos de pacientes por género:', data);
      // Procesar los datos recibidos para Highcharts
      const formattedData = data.map((item: any) => ({
        name: item.genero === "F" ? "Femenino" : "Masculino",
        y: item.TotalPacientes
      }));
      
      this.pacientesPorGeneroOptions = {
        title: {
          text: 'Pacientes por Género',
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.y}',
            }
          }
        },
        series: [{
          type: 'pie',
          name: 'Total Pacientes',
          data: formattedData
        }]
      };
    });
  }

  
}
