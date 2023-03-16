import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SingUpService } from '../../services/sing-up.service';
import { SingUp } from '../../viewmodel/sing-up';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {


  Data: MatTableDataSource<SingUp> | any = null;
  rows: SingUp[] = [];
  isLoadingData: boolean = false;
  isError: boolean = false;
  dataLoadingStatus: string = "Loading...";
  columnToDisplay: string[] = ['firstName', 'lastName', 'email', 'mobileNumber', 'birthDate', 'gender', 'address', 'city', 'pincode'];
  formGroup: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  constructor(private singUpService: SingUpService) {
    this.formGroup = new FormGroup({
      search: new FormControl(null)
    });
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.singUpService.getSingupData().subscribe(
        (response: SingUp[]) => {
          this.Data = new MatTableDataSource<SingUp>(response);
          this.Data.paginator = this.paginator;
          this.Data.sort = this.sort;
          this.rows = response;
          this.isLoadingData = true;

          //filter

          this.Data.filterPredicate = (data: any, filter: any) => {

            let data2 = { ...data };
            if (filter) {
              filter = filter.toLowerCase();
            }
            if (data2.firstName) {
              data2.firstName = data2.firstName.toLowerCase();
            }
            if (data2.lastName) {
              data2.lastName = data2.lastName.toLowerCase();
            }
            if (data2.email) {
              data2.email = data2.email.toLowerCase();
            }
            return data2.firstName.indexOf(filter) != -1 || data.mobileNumber.indexOf(filter) != -1 || data2.lastName.indexOf(filter) != -1 || data2.email.indexOf(filter) != -1;
          };
        }, (error) => {
          this.dataLoadingStatus = "Server side error! Please contact technician.";
          this.isError = true;
        });
    }, 1500);
  }


  filterData() {
    if (this.formGroup.value.search != null && this.Data != null) {
      this.Data.filter = this.formGroup.value.search.trim();
    }
  }
  clearFilter() {
    this.formGroup.patchValue({ search: "" });
    this.filterData();
  }
}
