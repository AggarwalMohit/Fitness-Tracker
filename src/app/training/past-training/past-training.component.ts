import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Reference } from '../../auth/reference.model';
import { MatPaginator } from '@angular/material/paginator';

interface Exercise{  value:string;  viewValue:string;}
interface Workout{  name:string;  exc:Exercise[];}

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})

export class PastTrainingComponent implements OnInit,AfterViewInit {

// workouts:Workout[]=[{
//   name:'Chest',
//   exc:[
//     {value:'Bench-press',viewValue:'bench-press'},
//       {value:'Cable Fly',viewValue:'Cable Fly'}
//   ]
// },
// {
//   name:'Back',
//   exc:[
//     {value:'Stiff-leg Deadlift',viewValue:'Stiff-leg Deadlift'},
//     {value:'Dumbell row',viewValue:'Dumbell row'},
//   ]
// },
// {
//   name:'Shoulders',
//   exc:[
//     {value:'Shruggs',viewValue:'Shruggs'},
//     {value:'Cable cross',viewValue:'Cable cross'},
//   ]
// }
// ];
displayedColumns=['Date','Name','Calories','Duration','State'];
public dataSource=new MatTableDataSource<Reference>();
constructor(private trainingService:TrainingService) { }
@ViewChild(MatSort, {static:true}) sort:MatSort;
@ViewChild(MatPaginator) paginator:MatPaginator;
  ngOnInit(): void
  {
    this.dataSource.data=this.trainingService.getCompleteOrCancelExercise();
    this.dataSource.sort=this.sort;
    
  }
  ngAfterViewInit()
  {
    this.dataSource.paginator=this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();    //datasource will concat all our values in the row into one long string 
                                                                  //and will trim and convert into lowercase
  }
}
