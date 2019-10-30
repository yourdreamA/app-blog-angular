import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';


export interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'role'];
  dataSource: MatTableDataSource<UserData>;
  userU : UserData;
  searchInput = '';

  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private apiService : ApiService, public dialog : MatDialog) { }

  ngOnInit() {

    this.apiService.getUsers().subscribe((data : any) => {
      console.log( data);
      this.dataSource = new MatTableDataSource(data);
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(user): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {user}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.userU = result;

      this.editUser(this.userU);
    });


  }

  editUser(user): void {
    this.apiService.editUser(user).subscribe((data : any) => {
      console.log( data);
      if (data.message === 'OK') {
       
      }
    });
  }


}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl : 'edituser.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
