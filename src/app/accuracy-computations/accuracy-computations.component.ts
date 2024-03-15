import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accuracy-computations',
  standalone: true,
  imports: [],
  templateUrl: './accuracy-computations.component.html',
  styleUrl: './accuracy-computations.component.css'
})
export class AccuracyComputationsComponent {
    @Input() tp = "";
    @Input() tn = "";
    @Input() fp = "";
    @Input() fn = "";
    @Input() accuracyType = "";

    tp2 = 0;
    tn2 = 0;
    fn2 = 0;
    fp2 = 0;
    accuracyOutput = 0;
    accuracy = 0;
    recall = 0;
    precision = 0;
    f1score = 0;
    specificity = 0;

    computeAccuracy(accuracyName: string,tp1:string,tn1:string,fp1:string,fn1:string){
        this.tp2 = parseFloat(tp1);
        this.tn2 = parseFloat(tn1);
        this.fp2 = parseFloat(fp1);
        this.fn2 = parseFloat(fn1);
        this.accuracy = (this.tp2 + this.tn2)/(this.tp2 + this.tn2 + this.fn2 + this.fp2);
        this.precision = (this.tp2)/(this.tp2 + this.fp2);
        this.recall = (this.tp2)/(this.tp2 + this.fn2);
        this.specificity = (this.tn2)/(this.tn2 + this.fp2);

        this.f1score = (2*this.precision * this.recall)/(this.precision + this.recall);

        switch(accuracyName){
            case "Accuracy":{
              this.accuracyOutput = this.accuracy;
            }break;
            case "F1Score":{
              this.accuracyOutput = this.f1score;
            }break;
            case "Precision":{
              this.accuracyOutput = this.precision;
            }break;
            case "Recall":{
              this.accuracyOutput = this.recall;
            }break;
            case "Specificity":{
              this.accuracyOutput = this.specificity;
            }break;
        }

        return this.accuracyOutput;
    }
}
