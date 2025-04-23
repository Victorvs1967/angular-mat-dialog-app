import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableFormDataSource, MatTableFormItem } from './mat-table-form-datasource';

@Component({
  selector: 'app-mat-table-form',
  templateUrl: './mat-table-form.component.html',
  styleUrl: './mat-table-form.component.sass',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class MatTableFormComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MatTableFormItem>;

  dataSource = new MatTableFormDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
