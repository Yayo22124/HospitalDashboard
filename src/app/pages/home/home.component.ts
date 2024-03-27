import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'hospital-home',
  standalone: true,
  imports: [RouterLink, SidenavComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
