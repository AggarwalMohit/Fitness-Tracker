export interface Reference
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