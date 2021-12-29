import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tinymce-demo';

  tinyMCEConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    height: 500,
    menubar: true,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
       alignleft aligncenter alignright alignjustify | \
       bullist numlist outdent indent | removeformat | help'
  };
}
