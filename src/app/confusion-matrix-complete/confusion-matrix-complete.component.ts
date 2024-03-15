import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfusionMatrixGridComponent } from '../confusion-matrix-grid/confusion-matrix-grid.component';
import { NgFor, NgIf } from '@angular/common';
import { AccuracyComputationsComponent } from '../accuracy-computations/accuracy-computations.component';
import { SavedItemsComponent } from '../saved-items/saved-items.component';


@Component({
  selector: 'app-confusion-matrix-complete',
  standalone: true,
  imports: [ConfusionMatrixGridComponent,AccuracyComputationsComponent,SavedItemsComponent,NgFor,NgIf],
  templateUrl: './confusion-matrix-complete.component.html',
  styleUrl: './confusion-matrix-complete.component.css'
})


export class ConfusionMatrixCompleteComponent {
  subtitle = "Enter the following confusion matrix values to generate accuracy metric results";
  cm_grids: any[] = [];
  accuracies = ["Accuracy","Precision","Recall","Specificity","F1Score"]
  showAccuracy:boolean = false;
  showSavedItems:boolean = false;
  strSavedItemsArr:any[] = [];

  tp:string = "";
  tn:string = "";
  fp:string = "";
  fn:string = "";

  
  @ViewChild("truePositive") tpInput: ElementRef = {} as ElementRef;
  @ViewChild("trueNegative") tnInput: ElementRef = {} as ElementRef;
  @ViewChild("falsePositive") fpInput: ElementRef = {} as ElementRef;
  @ViewChild("falseNegative") fnInput: ElementRef = {} as ElementRef;

  temp_saved_items = ["2,3,4,5","6,7,8,9","10,11,12,13"];

  generateAccuracies(truePositive: string,trueNegative: string,falsePositive: string,falseNegative: string){
  this.cm_grids = ['','Predicted A','Predicted B','',
              'True A','True Positive','False Negative','',
              'True B','False Positive','True Negative','',
              '','','','',
             ];
    this.cm_grids[5] = truePositive;
    this.cm_grids[6] = falseNegative;
    this.cm_grids[9] = falsePositive;
    this.cm_grids[10] = trueNegative;

    this.cm_grids[7] = parseFloat(this.cm_grids[5]) + parseFloat(this.cm_grids[6]);
    this.cm_grids[11] = parseFloat(this.cm_grids[9]) + parseFloat(this.cm_grids[10]);
    this.cm_grids[13] = parseFloat(this.cm_grids[5]) + parseFloat(this.cm_grids[9]);
    this.cm_grids[14] = parseFloat(this.cm_grids[6]) + parseFloat(this.cm_grids[10]);
    this.cm_grids[15] = parseFloat(this.cm_grids[7]) + parseFloat(this.cm_grids[11]);
    
    if (this.tpInput.nativeElement.value == "" ||
    this.tnInput.nativeElement.value == "" ||
    this.fpInput.nativeElement.value == "" ||
    this.fnInput.nativeElement.value == "") {
      this.showAccuracy = false;
    }
    else{
      this.showAccuracy = true;
    }
    
  }

  clearData(){
    this.tpInput.nativeElement.value = "";
    this.tnInput.nativeElement.value = "";
    this.fpInput.nativeElement.value = "";
    this.fnInput.nativeElement.value = "";
    this.showAccuracy = false;

  }

  savedItemsModal(isOpen:boolean){
    switch(isOpen){
      case true:{
        this.showSavedItems = false;
      }break;
      case false:{
        this.showSavedItems = true;
      }break;
    }

    
  }

  splitSavedItem(strSavedItems:string){
      this.strSavedItemsArr = strSavedItems.split(",");
      return this.strSavedItemsArr;
  }

 
  
  
}

