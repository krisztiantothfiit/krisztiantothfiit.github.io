import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryDialogComponent } from './dialog/gallery-dialog/gallery-dialog.component';

export interface Tile {
  src: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent {
  tiles: Tile[] = [];
  showRows = 1;
  showLoadMore = false;
  pictureCount = 20;

  constructor(public dialog: MatDialog, private elem: ElementRef) {
    this.elem.nativeElement.style.setProperty('--picture-count', this.pictureCount)
    this.selectedTabChanged({ index: 0 });
    this.showLoadMore = this.tiles.length > 5;
  }

  selectedTabChanged(event: any) {
    this.tiles = [];
    for (let i = 1; i <= this.pictureCount; i++) {
      this.tiles = [...this.tiles, { src: `../../assets/images/gallery/fotka${i}.jpg` }]
    }
  }

  getBackgroundUrl(index: number) {
    if (index < this.tiles.length) {
      return `url("${this.tiles[index].src}")`;
    }
    return '';
  }

  getRange(): any {
    return [].constructor(this.showRows);
  }

  loadMore(): void {
    if (this.showRows * 5 <= this.tiles.length) {
      this.showRows += 1;
    } 
    if (this.showRows * 5 >= this.tiles.length) {
      this.showLoadMore = false;
    }
  }

  openDialog(index: number): void {
    if (index < this.tiles.length) {
      this.dialog.open(GalleryDialogComponent, {
        data: { src: this.tiles[index].src }
      });
    }
  }

  getReverse(i: number): boolean {
    if (Math.floor(this.tiles.length / 5) + 1 % 2 === 0) {
    return i % 2 == 1;
    } else {
      return i % 2 == 0;
    }
  }
}
