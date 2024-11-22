import { Component } from '@angular/core';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrl: './all-user.component.css'
})
export class AllUserComponent {

  AllUser! : any[];

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.getAllUsers().subscribe((res : any) => {
      console.log('user response:' ,res)
      this.AllUser = res.allUser
      console.log(this.AllUser)
    })

  }

}
