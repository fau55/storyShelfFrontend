import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
    selector: 'app-public',
    templateUrl: './public.component.html',
    styleUrl: './public.component.css',
    standalone: true,
    imports: [NavbarComponent, RouterOutlet, FooterComponent]
})
export class PublicComponent {

}
