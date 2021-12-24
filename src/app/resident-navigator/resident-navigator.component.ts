import { Component, OnInit } from '@angular/core';
import { ResidentService } from 'src/service/ResidentService';

@Component({
  selector: 'app-resident-navigator',
  templateUrl: './resident-navigator.component.html',
  styleUrls: ['./resident-navigator.component.css']
})
export class ResidentNavigatorComponent implements OnInit {


  constructor(private residentService: ResidentService) { }
  residents: any[] | undefined;
  selectedResident = {
    modules: [],
    id: undefined
  };

  ngOnInit(): void {
    this.residentService.findAllResidents()
      .then(residents => this.residents = residents)

  }

  selectResident(resident: any) {
    this.selectResident = resident;
  }

}