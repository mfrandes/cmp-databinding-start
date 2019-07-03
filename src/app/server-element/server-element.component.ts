import { Component, OnInit, Input, OnChanges, SimpleChange, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  constructor() { 
    console.log('Constructor Caled');
    
  }
  ngOnChanges(changes: SimpleChange){
    console.log('OnChange Caled');
    console.log(changes);
    
  }

  ngOnInit() {
    console.log('ngOnInit Caled');
  }
  ngDoCheck(){
    console.log("ngDoCheck caled");
    
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit colled");
    
  }
  ngAfterContentChecked(){
    console.log("AfterContentChecked called");
    
  }
  ngAfterViewInit(){
    console.log("AfterViewInit caled");
    
  }
  ngAfterViewChecked(){
    console.log("AfterViewChecked caled");
    
  }
  ngOnDestroy(){
    console.log('OnDestroy was called');
    
  }
}
