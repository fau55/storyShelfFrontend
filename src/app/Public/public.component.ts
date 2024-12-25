import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrl: './public.component.css',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, FooterComponent, CommonModule],
})
export class PublicComponent implements OnInit {
  loading = true;

  ngOnInit(): void {
    this.loader();
  }

  loader(): void {
    fetch('https://storyshelfbackend.onrender.com/')
      .then((res) => {
        if (res.ok) {
          this.loading = false; // Set loading to false if the request succeeds
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Log errors for debugging
        this.loading = false; // Stop loader even if the request fails
      });
  }
}
