import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { clean, countSelector, decrease, increase } from "./reducers/counter";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(public store: Store) {}

  ngOnInit() {}
  
  public count: number = 0;
  
  public count$ = this.store.select(countSelector);
  
  public increase(): void {
    this.store.dispatch(increase());
  }

  public decrease(): void {
    this.store.dispatch(decrease());
  }

  public clean(): void {
    this.store.dispatch(clean());
    console.dir(this.count$);
  }
}
