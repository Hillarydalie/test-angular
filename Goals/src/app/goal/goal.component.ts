import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for myself'),
    new Goal(3, 'Get a new Phone Case', 'Diana has her birthday coming up'),
    new Goal(4, 'Get shopping list', 'Need to stock in snacks for visitors'),
    new Goal(5, 'Solve math homework', "I don't like math much"),
    new Goal(6, 'Plot my world domination plan', "Cause I'm an  good"),
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}