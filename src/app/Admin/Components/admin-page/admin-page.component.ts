import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrl: './admin-page.component.css',
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class AdminPageComponent {

}
