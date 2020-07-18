import { Injectable, OnInit } from '@angular/core';
import { Workout } from '../auth/exercise.model';
import { Reference } from '../auth/reference.model';
import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class TrainingService implements OnInit{
  private dateYesterday: Date = new Date();
  private runningworkout:Workout;
  private runningexercise:Reference;
  private exercise:Reference[]=[];
  exerciseChanged=new Subject<Reference>();
  constructor() { }
  ngOnInit()
  {
    this.dateYesterday = new Date(this.dateYesterday.setDate(this.dateYesterday.getDate() - 1));
  }

  private workout: Workout[]=[
  {
    name:'Chest',
    exc: [{ id: 'Bench-press', name: 'Bench-press', reps:15,duration:45, sets:3, calories: 8,date:this.dateYesterday },
    { id: 'Peck-deck fly', name: 'Peck-deck fly', reps:15,duration:45, sets:5, calories: 16,date:this.dateYesterday },
    { id: 'Cable Fly', name: 'Cable Fly', reps:20,duration:60, sets:4, calories: 12,date:this.dateYesterday }]
  },

  {
    name:'Back',
    exc: [{ id: 'Stiff-leg Deadlift', name: 'Stiff-leg Deadlift', reps:8,duration:32,  sets:5, calories: 18,date:this.dateYesterday },
    { id: 'Barbell Rows', name: 'Barbell Rows', reps:12,duration:48, sets:4, calories: 25,date:this.dateYesterday },
    { id: 'Cable Rows', name: 'Cable Rows', reps:8,duration:32, sets:5, calories: 24,date:this.dateYesterday }]
  },
  {
    name:'Shoulder',
    exc: [{ id: 'Shruggs', name: 'Shruggs', reps:12,duration:36, sets:5, calories: 28,date:this.dateYesterday },
    { id: 'Shoulder Press', name: 'Shoulder Press', reps:12,duration:36, sets:5, calories: 35,date:this.dateYesterday },
    { id: 'Side/Front Lateral raises', name: 'Side/Front Lateral raises', reps:10,duration:30, sets:3, calories: 19,date:this.dateYesterday }]
  },
  {
    name:'Cardio/Abs',
    exc: [{ id:'Running', name:'Running',duration:1800, sets:3, calories: 100,date:this.dateYesterday },
    { id: 'crunches', name: 'crunches', reps:25,duration:25, sets:3, calories: 200,date:this.dateYesterday },
    { id: 'Cycling', name: 'Cycling', duration:1800, sets:3, calories: 190,date:this.dateYesterday }]
  },
];

getWorkout()
{
 return this.workout.slice()
}

setExercise(workoutName:string,exerciseName:string)
{
  this.runningworkout=this.workout.find(wrkt=>wrkt.name===workoutName);
  const exercisename=this.runningworkout.exc;
  this.runningexercise=exercisename.find(exID=>exID.name===exerciseName);
  this.exerciseChanged.next({...this.runningexercise});
}
getExercise()
{
  return {...this.runningexercise};
}
cancelExercise(progress:number)
{
  this.exercise.push({...this.runningexercise,
    duration:this.runningexercise.duration*(progress/100),
    calories:this.runningexercise.calories*(progress/100),
    date:new Date(),
    state:'Not Completed'})  
  this.runningexercise=null;
  this.exerciseChanged.next(null);
}
  completeExercise()
  {
     this.exercise.push({...this.runningexercise,
      date:new Date(),
      state:'completed'})  
    this.runningexercise=null;
    this.exerciseChanged.next(null);
  }
  getCompleteOrCancelExercise()
  {
    return this.exercise.slice();
  }
}
