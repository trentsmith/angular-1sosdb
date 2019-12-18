import { Component } from '@angular/core';
import { HttpClientModule, HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
 constructor(private http: HttpClient){
   
 }
  title = 'project';
  data:any[];
  show=true;
  tickers = [];

  myfunct()
  {

var brain = require('brain.js');

var net = new brain.NeuralNetwork();
//this should depend on price and be place about specific requirements
//1.) the volume compared to normal volume compared to price
//2.) check for Dow Jones price or the mnarket
//3.)check the sector by averaging competition
//4.)time of year
//5.)
var buy  = true;
var sell = false;
for(var i =0;i<this.tickers.length;i++)
{
  var variables =[this.tickers[0]];
  net.train([{input: [0, 0], output: [0]},
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]}]);
}
var output = net.run([0, 0]); 
this.name = output;
};

stockhistory:any[];
temp:any;
calculateResult()
{
  var stockstring;
    var brain = require('brain.js');
    var net = new brain.NeuralNetwork();
    var buy  = true;
    var sell = false;  
  for(var i =0;i<this.tickers.length;i++)
  {
    var url1 = "https://api.worldtradingdata.com/api/v1/history?symbol="+this.tickers[i]+"&sort=newest&api_token=PRt07UGBzUrZPTUROLww1CBKxFeS0OcWL7qB3oaaJKxeFJ1mWuhz7LI08qBF";

    this.http.get(url1).subscribe(
      (data:any[])=>
      {
        this.temp = data;
      }) 
        console.log("test");
        console.log(this.temp["history"].length);
        ;

  }
}

teamA:any;
teamB:any;
onTeamAKeyUp(event:any)
{
  this.teamA =event.target.value;
}
onTeamBKeyUp(event:any)
{
  this.teamB =event.target.value;
}

}
