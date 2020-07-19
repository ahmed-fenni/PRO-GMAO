import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  reference: string;
  family: string;
  state: string;
  brand: string;
  supplierName: string;
  supplierContact: string;
  serialNumber: string;
  dateOfPurchase: string;
  inventory: string;
  ISBN: string;
  department: string;
  image: string;
  comment: string
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {name: "hello",
    reference: "hello",
    family: "hello",
    state: "hello",
    brand: "hello",
    supplierName: "hello",
    supplierContact: "hello",
    serialNumber: "hello",
    dateOfPurchase: "hello",
    inventory: "hello",
    ISBN: "hello",
    department: "hello",
    image: "hello",
    comment: "hello"},
    {name: "hello",
    reference: "hello",
    family: "hello",
    state: "hello",
    brand: "hello",
    supplierName: "hello",
    supplierContact: "hello",
    serialNumber: "hello",
    dateOfPurchase: "hello",
    inventory: "hello",
    ISBN: "hello",
    department: "hello",
    image: "hello",
    comment: "hello"}

];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        // case 'ref' : return compare(+a.ref, +b.ref, isAsc)
        // case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
