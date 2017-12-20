import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //   this.http.get('https://api.github.com/users/DilipKunderu/repos').subscribe(
    //     data => {
    //       console.log(data);
    //     },
    //     // (err: HttpErrorResponse) => {
    //     //   if (err.error instanceof Error) {
    //     //     console.log('error occured');
    //     //   }
    //     //   else {
    //     //     console.log('server error occured');
    //     //   }       
    //     // }
    //   );
    // }
  }
}
// interface ProjectData {
//   clone_url: string;
//   languages_url: string;
//   name: string;
//   description: string;
// }