
import { Component } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  standalone: true,
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css'
})
export class FriendsList {
  friends: string[] = [
    'Ali',
    'Sara',
    'Amine',
    'Sonia',
    'Mohamed'
  ];
}
