import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,

} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('Constructor Caled');

  }
  ngOnChanges(changes: SimpleChange) {
    console.log('OnChange Caled');
    console.log(changes);

  }

  ngOnInit() {
    console.log('ngOnInit Caled');
    console.log('text Content' + this.header.nativeElement.textContent);
    console.log('Text content of Paragraph: ' + this.paragraph.nativeElement.textContent);
    
  }
  ngDoCheck() {
    console.log("ngDoCheck caled");

  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit colled");
    console.log('Text content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log("AfterContentChecked called");

  }
  ngAfterViewInit() {
    console.log("AfterViewInit caled");

  }
  ngAfterViewChecked() {
    console.log("AfterViewChecked caled");
    console.log('text Content' + this.header.nativeElement.textContent);
  }
  ngOnDestroy() {
    console.log('OnDestroy was called');

  }
}
