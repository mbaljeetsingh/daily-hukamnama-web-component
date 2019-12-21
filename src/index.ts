import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "daily-hukamnama",
  template: `<div class="hukamnama-container" *ngIf="hukamnama">
  <ul class="hukamnama-info">
    <li>{{hukamnama.hukamnamainfo.source.unicode}}</li>
    <li>{{hukamnama.hukamnamainfo.writer.unicode}}</li>
    <li>{{hukamnama.hukamnamainfo.raag.unicode}}</li>
  </ul>
  
  <ul class="hukamnama" >
    <li *ngFor="let item of hukamnama.hukamnama">
      {{item.line.gurmukhi.unicode}}
    </li>
  </ul>
  </div>
  `,
  styles: [
    `
    .hukamnama-container{
      display: grid; 
      place-items: center;
    }
    ul.hukamnama-info li{
      list-style-type: none;
      text-align: center;
      font-weight: bold;
    }
    ul.hukamnama li{
      list-style-type: none;
      text-align: center;
    }
  `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export default class DailyHukamnama {
  hukamnama: any;

  constructor() {
    fetch("https://api.gurbaninow.com/v2/hukamnama/today")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.hukamnama = data;
        console.log(this.hukamnama);
      });
  }
}
