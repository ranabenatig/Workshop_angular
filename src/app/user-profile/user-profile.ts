
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
  username = 'Ahmed';
  email = 'ahmed@gmail.com';
  role = 'Développeur';
}
