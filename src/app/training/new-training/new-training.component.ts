import { Component, OnInit, DoCheck } from '@angular/core';
import { TrainingService } from '../training.service';
import { Workout } from '../../auth/exercise.model';
import { Reference } from '../../auth/reference.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit,DoCheck {

exercisename:string;
exercise:Workout[]=[];
reference:Reference[]=[];
num:number;
public exerciseselected:boolean=false;

constructor(private trainingService:TrainingService) { }

  ngOnInit(): void {
this.exercise=this.trainingService.getWorkout();

  }
  ngDoCheck()
  {
    console.log(this.exerciseselected);
  }

   onChange(wrktname:string)
   {     
     for(this.num=0;this.exercise[this.num]!=null;this.num++)
     {
        if(this.exercise[this.num].name===wrktname)
        {
          this.reference=this.exercise[this.num].exc;
        }
     }
   }
   
  onClick(form:NgForm)
  {
   this.trainingService.setExercise(form.value.workout,form.value.exercise);
  }
}
