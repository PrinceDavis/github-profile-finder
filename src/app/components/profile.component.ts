import { Component } from '@angular/core';
import { GithubService } from '../components/services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent  {
  user: object;
  repos: any[];
  username: string;

  constructor(private githubService: GithubService){
    this.user = null;
  }

  searchUser() {
    this.githubService.updateUsername(this.username);
    this.githubService.getUser().subscribe(user => this.user = user);
    this.githubService.getRepos().subscribe(repos => this.repos = repos);
  }
}
