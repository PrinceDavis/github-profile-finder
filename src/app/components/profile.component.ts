import { Component } from '@angular/core';
import { GithubService } from '../components/services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent  {
  user: any[];

  constructor(private githubService: GithubService){
    this.githubService.getUser().subscribe(user => this.user = user);
  }
}
