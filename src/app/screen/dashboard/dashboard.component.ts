import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Story } from 'src/app/interfaces/story';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  storyArray: Story[] = [];

  selectedStories: Story[] = [];
  openCalculator: boolean = true;
  number: number = 0;
  index:number=0;

  storyForm = new FormGroup({
    storyName: new FormControl('', [Validators.required]),
    storyPoint: new FormControl(0, [Validators.required]),
  });

  calcForm = new FormGroup({
    sprintPoint: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (this.storyForm.valid) {  
      let value: Story = {
        storyName: this.storyForm.get('storyName')?.value,
        storyPoint: this.storyForm.get('storyPoint')?.value,
      } as Story; 
      this.storyArray.push(value); 
    }  
  }
 

  checkCalc(index:any) {
    this.selectedStories=[]
    this.number=0 
    if (this.calcForm.valid) {
      let input = this.calcForm.get('sprintPoint')?.value; 
      if (input != null) {    
        for (index; index < this.storyArray.length; index++) { 
          if (this.number <= input) {  
            let sum = this.number + this.storyArray[index].storyPoint;
            if (sum <= input) {
              this.selectedStories.push(this.storyArray[index]);
              this.number = this.number + this.storyArray[index].storyPoint;

            } else {

            }
          }
        } 
        index = index+1
        if(this.number == input){
         }
        else{  
          // this.loop(input,index)
           this.selectedStories=[]
        }
       } else {
       }  
    } else {
     }
  }  

  clear(){
    this.selectedStories=[]
  }
}
