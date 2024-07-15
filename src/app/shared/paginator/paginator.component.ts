import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'tgt-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent implements OnInit, AfterViewInit{
  @Input() totalItems!: number;
  @Input() pageSize!: number;
  @Input() currentPage: number = 1;


  @Output() changePage = new EventEmitter<number>();

  protected pages = Math.ceil(this.totalItems / this.pageSize);

  constructor() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.pages = Math.ceil(this.totalItems / this.pageSize);
    },500)

  }

  ngOnInit(): void {
    this.totalItems = Math.ceil(this.totalItems / this.pageSize)*10;
  }


  changePageNext() {
    if(this.currentPage < this.pages) {
      this.currentPage++;
      this.changePage.emit(this.currentPage);
    }
  }

  changePageBack() {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.changePage.emit(this.currentPage);
    }
  }

  changeInitialPage() {
    this.currentPage = 1;
    this.changePage.emit(this.currentPage);
  }

  changeLastPage() {
    this.currentPage = this.pages;
    this.changePage.emit(this.currentPage);
  }
}
