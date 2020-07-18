import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrainingService } from '../training.service';
//import { DialogboxComponent } from './dialogbox/dialogbox.component';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
progress:number=0;
complete:number;
reps:number;
i:number;

  constructor(private dialog:MatDialog,
              private trainingService:TrainingService) { }

  ngOnInit(): void {
    const name=this.trainingService.getExercise().name;
    const set=this.trainingService.getExercise().sets;
    this.reps=this.trainingService.getExercise().duration/100*1000;
    this.complete=setInterval(()=>{
      this.progress=this.progress+1;
      if(this.progress>=100)
      {
        this.trainingService.completeExercise();
        clearInterval(this.complete);
      }
    },this.reps);
  
}
 onStop()
 {
   this.trainingService.cancelExercise(this.progress);
  clearInterval(this.complete);
//this.dialog.open(DialogboxComponent);  
 }

}
