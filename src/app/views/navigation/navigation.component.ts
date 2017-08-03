import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NagivationService } from '../../services/nagivation.service';
import { Tab } from '../../models/tab.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  tabs: Tab[];

  constructor(private navigationService: NagivationService, private router: Router) {
  }

  ngOnInit() {
    this.navigationService.getTabs()
      .subscribe(data => this.tabs = data);
  }
}
