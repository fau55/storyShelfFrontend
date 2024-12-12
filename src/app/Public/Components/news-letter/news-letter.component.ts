import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-news-letter',
    templateUrl: './news-letter.component.html',
    styleUrl: './news-letter.component.css',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule]
})
export class NewsLetterComponent {

}
