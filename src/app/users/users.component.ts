import { DataService } from './../data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // users$ is assigned type 'Object'
  users$: Object;

  // DataService is aliased as 'data' in this constructor
  constructor(private data: DataService) { }
  // ngOnInit() function is called when the Users component is initialized
  ngOnInit() {
    // Once UsersComponent is called for the first time, it goes to fetch JSON data from the getUsers() method in DataService.

    // The 'subscribe()' function returns data from the Observable it is subscribed to, which in this case is the 'getUsers()' function.
    this.data.getUsers().subscribe(
      // Each time JSON is returned from getUsers(), it is assigned to 'data'.

      // Assign data to class property users$ so it will be available in our template.
      data => this.users$ = data
      // Arrow function written out:
      //
      // function(data) {
      //   this.users$ = data;
      // }
    );
  }

}
