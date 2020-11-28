import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Training } from 'src/app/models/training';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'date'];
  dataSource: MatTableDataSource<TableHeaderItem>;

  constructor(private service: BackendService) { }

  ngAfterViewInit(): void {
     this.PopulateDataSource();
  }

  private async PopulateDataSource(): Promise<void>
  {
    const ds: Training[] = await this.service.getTrainingsList();
    const tableObject: TableHeaderItem[]  = [];

    ds.forEach(r => {
      const row: TableHeaderItem = {
        id : r.id,
        title : r.title,
        date : r.date
      };
      tableObject.push(row);
    });
    this.dataSource = new MatTableDataSource<TableHeaderItem>(tableObject);
  }

  ngOnInit(): void {
  }
}

export interface TableHeaderItem {
  id: number;
  title: string;
  date: string;
}
