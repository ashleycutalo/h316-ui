import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'nav-chips',
    template: require('./nav-chips.component.html')
})

export class NavChipsComponent implements OnInit {
  pages: string[];
  currentPage: string;
  hide: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    router.events.subscribe(event => {
      this.pages = this.pathToArray(this.router.url);
      this.currentPage = this.getCurrentPage(this.router.url);
    });
  }

  pathToArray(route : string) : string[] {
    var p : string[] = route.split("/");

    p.forEach((item, index) => {
      if (item == "" || item == undefined) {
        p.splice(index, 1);
      }
    });
    p.splice((p.length - 1), 1);
    return p;
  }

  getCurrentPage(route : string) : string {
    if (route == "/") {
      this.hide = true;
    } else {
      this.hide = false;
    }
    var p : string[] = route.split("/");
    return p[(p.length - 1)];
  }

  navToPage(page : string) {
    var idx = this.pages.indexOf(page);
    var len = this.pages.length;
    var p : string[] = this.pages.splice(idx, (len - idx));
    this.router.navigateByUrl(p.toString());
  }

  ngOnInit() {
    this.pages = this.pathToArray(this.router.url);
    this.currentPage = this.getCurrentPage(this.router.url);
  }
}
