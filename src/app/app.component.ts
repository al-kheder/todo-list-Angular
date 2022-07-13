import { Component, ViewChild } from '@angular/core';
import { takeLast } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //using the element reference
  @ViewChild('task') inputTask: any;
  title = 'ToDo list';
  list:any[]=[];

  addTask(item:string){
     if(item !='')
     {
       this.list.push({id:this.list.length,name:item});
      }
    this.inputTask.nativeElement.value='';

  }

  removeTask(id:number){
   this.list=this.list.filter(item=>item.id!==id);
  }


}
