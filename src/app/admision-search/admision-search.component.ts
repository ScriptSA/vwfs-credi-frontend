import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-admision-search',
  templateUrl: './admision-search.component.html',
  styleUrls: []
})
export class AdmisionSearchComponent implements OnInit {
  //controles del resultado de la búsqueda
  searchForm: FormGroup;
  searchResults = false;

  //control de tabs
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  //mock titulo tramites (hay que hacer el count)
  totalPendingNumber = 20;
  resultNumber = 2;

  //search mock
  constructor(
    private formBuilder: FormBuilder)
    {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.searchResults=true;
    this.tabGroup.selectedIndex = 1;
  }

  removeResults(){
    this.searchResults=false;
  }

}
