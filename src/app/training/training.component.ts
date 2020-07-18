import { Component, OnInit } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
training:boolean=false;
exerciseSubscription:Subscription;
  constructor(private trainingService:TrainingService) { }

  ngOnInit(): void {
    this.exerciseSubscription=this.trainingService.exerciseChanged.subscribe(
      exercise=>{
        if(exercise){
          this.training=true;
        }
        else
        {
          this.training=false;
        }
      }
    );
  }

}
