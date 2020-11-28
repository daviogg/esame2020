import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignedUp } from 'src/app/models/signedUp';
import { Training } from 'src/app/models/training';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-tutor-search',
  templateUrl: './tutor-search.component.html',
  styleUrls: ['./tutor-search.component.css']
})
export class TutorSearchComponent implements OnInit {

  trainings: Training[];
  private selectedTrainId: number;
  signedUps: SignedUp[];
  constructor(private service: BackendService, private router: Router) { }

  ngOnInit(): void {
     this.searchStudents();
  }

  async searchStudents(): Promise<void>{
    this.trainings = await this.service.getTrainingsList();

  }

  async changeValue(value: number): Promise<void>{
    this.selectedTrainId = value;
    this.signedUps = await this.service.getSignedUpList(this.selectedTrainId);
  }

  navigateToHome(){
    this.router.navigate([`home`]);
  }

}
