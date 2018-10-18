import {Component, Inject, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "LY-code";

  username = "lyuan11";

  searchBox: FormControl = new FormControl();

  subscription: Subscription;



  constructor(@Inject('auth') private auth,
              @Inject('input') private input,
              private  router: Router) { }

  ngOnInit() {
    if(this.auth.authenticated()){
      this.username = this.auth.getProfile().nickname;
    }

    this.subscription = this.searchBox
      .valueChanges
      .debounceTime(200)
      .subscribe(
        term => {this.input.changeInput(term);}
      );

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  searchProblem():void{
    this.router.navigate(['/problems']);
  }

  login():void {
    this.auth.login()
              .then(profile => this.username = profile.nickname);

  }


  logout():void {
      this.auth.logout();
  }
}
