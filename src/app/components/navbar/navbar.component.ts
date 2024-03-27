import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hospital-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
