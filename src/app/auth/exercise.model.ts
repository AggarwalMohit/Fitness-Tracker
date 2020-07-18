interface Exercise
{
    id:String;
    name:String;
    reps?:number|null;
    duration?:number|null;
    sets:number;
    calories?:number|null;
    date:Date;
    state?:'completed'|'Not Completed'|null;
}
export interface Workout
{
  name:string;
  exc:Exercise[];
}