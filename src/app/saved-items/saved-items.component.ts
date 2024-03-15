import { Component,ElementRef,Input } from '@angular/core';

@Component({
  selector: 'app-saved-items',
  standalone: true,
  imports: [],
  templateUrl: './saved-items.component.html',
  styleUrl: './saved-items.component.css'
})
export class SavedItemsComponent {
  @Input() tp = "";
  @Input() tn = "";
  @Input() fp = "";
  @Input() fn = "";
  @Input() tpInput: ElementRef = {} as ElementRef;
  @Input() tnInput: ElementRef = {} as ElementRef;
  @Input() fpInput: ElementRef = {} as ElementRef;
  @Input() fnInput: ElementRef = {} as ElementRef;

  openSavedItem(tpRef:ElementRef,tpVal:string,tnRef:ElementRef,tnVal:string,fpRef:ElementRef,fpVal:string,fnRef:ElementRef,fnVal:string){
      tpRef.nativeElement.value = tpVal;
      tnRef.nativeElement.value = tnVal;
      fpRef.nativeElement.value = fpVal;
      fnRef.nativeElement.value = fnVal;

      
  }

}
