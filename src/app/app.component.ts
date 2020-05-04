import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // $は慣習的にobservableを意味します
  user$ = this.auth.user$;

  constructor(private auth: AuthService) {}
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
