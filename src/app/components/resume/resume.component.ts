import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResumeComponent implements OnInit {
  public previewSrc: string = null;
  
    public setPreviewFromFile(file: File) {
  
      let reader = new FileReader();
  
      reader.onloadend = (e: any) => {
        this.previewSrc = e.target.result;
      };
  
      reader.readAsArrayBuffer(file);
    }

  constructor() { }

  ngOnInit() {
  }

}
