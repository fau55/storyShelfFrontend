import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.css',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class ContactUsComponent {
  ngOnInit(){
    window.scroll(0,0)
  }
}
