import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';

import { NavigationService } from '../../services/navigation.service';
import { Tab } from '../../models/tab.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  tabs: Tab[];

  constructor(private navigationService: NavigationService, private router: Router, private dialog: MdDialog) {
  }

  ngOnInit() {
    this.navigationService.getTabs()
      .subscribe(data => this.tabs = data);
  }

  createNew() {
    var activeTab: Tab = this.tabs.find(tab => this.router.isActive(tab.path, false));

    if (activeTab && activeTab.creationComponent) {
      let comp = this.dialog.open(activeTab.creationComponent, {
        width: '80%'
      });
    }
  }
}
