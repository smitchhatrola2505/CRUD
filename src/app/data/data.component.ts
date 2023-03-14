import { Component, OnInit,ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SingUpService } from '../services/sing-up.service';
import { SingUp } from '../sing-up';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  
  Data:MatTableDataSource<SingUp>|any = null;
  rows:SingUp[]=[];
  
  columnToDisplay:string[] = ['firstName','lastName','email','mobileNumber','birthDate','gender','address','city','pincode'];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  constructor(private singUpService: SingUpService) {

  }

  ngOnInit(): void {

    this.singUpService.getSingupData().subscribe(
      (response: SingUp[]) => {
        this.Data = new MatTableDataSource<SingUp>(response) ;
        this.Data.paginator = this.paginator;
        this.Data.sort = this.sort;
        this.rows= response;
        console.log(response);
      });

  }
}
