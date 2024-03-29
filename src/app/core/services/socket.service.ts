import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import io from "socket.io-client";
import { socketUrl } from "../constants/socketUrl";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  private socket = io(socketUrl);
  constructor() {}

  getDatosPacientes(): Observable<any> {
    return new Observable<any>((observer) => {
      // Escuchar el evento 'datos' del servidor
      this.socket.on("datos", (data: any) => {
        observer.next(data); // Enviar los datos recibidos a los suscriptores
      });

      // Manejar la desconexión
      return () => {
        this.socket.disconnect();
      };
    });
  }

  getPacientesPorGenero(): Observable<any> {
    return new Observable<any>((observer) => {
      // Escuchar el evento 'pacientesPorGenero' del servidor
      this.socket.on("pacientesPorGenero", (data: any) => {
        observer.next(data); // Enviar los datos recibidos a los suscriptores
      });

      // Manejar la desconexión
      return () => {
        this.socket.disconnect();
      };
    });
  }
}
