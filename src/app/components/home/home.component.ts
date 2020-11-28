import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/commons/global-constants';
import { Training } from 'src/app/models/training';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'date', 'subscribe'];
  dataSource: MatTableDataSource<TableHeaderItem>;
  showForm = false;
  trainId: string;
  trainTitle: string;
  isTutor = GlobalConstants.isTutor;
  constructor(private service: BackendService, private router: Router) { }

  ngAfterViewInit(): void {
    this.PopulateDataSource();
  }

  private async PopulateDataSource(): Promise<void> {
    const ds: Training[] = await this.service.getTrainingsList();
    const tableObject: TableHeaderItem[] = [];

    ds.forEach(r => {
      const row: TableHeaderItem = {
        id: r.id,
        title: r.title,
        date: r.date
      };
      tableObject.push(row);
    });
    this.dataSource = new MatTableDataSource<TableHeaderItem>(tableObject);
  }

  ngOnInit(): void {
  }

  signUp(id: number, title: string): void {
    this.trainId = id.toString();
    this.trainTitle = title;
    this.showForm = true;
  }

  navigateToTutorPage(): void {
    if (GlobalConstants.isTutor) {
      this.router.navigate([`tutor/search`]);
    } else {
      this.router.navigate([`tutor/signin`]);
    }
  }
}

export interface TableHeaderItem {
  id: number;
  title: string;
  date: string;
}
