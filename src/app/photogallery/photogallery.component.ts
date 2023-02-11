import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html'
})
export class PhotogalleryComponent {
    @Input() secondPhotogallery = false;
}
