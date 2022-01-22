import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToReadingList, getReadingList, removeFromReadingList} from '@tmo/books/data-access';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from '@tmo/shared/models';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  public snackBarRef : any;

  constructor(private readonly store: Store , public snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.snackBarRef = this.snackBar.open('Book removed from reading list', 'Undo', {duration: 3000,}); 
    this.snackBarRef.onAction().subscribe(() => {
      // Adding book back to reading list
      const book = item;
      this.store.dispatch(addToReadingList({ book }));
    });
  }
}
// .mat-snack-bar-container .mat-focus-indicator.mat-button.mat-button-base
