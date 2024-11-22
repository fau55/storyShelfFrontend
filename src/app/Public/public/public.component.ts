import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HttpClientModule],
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent {

}
