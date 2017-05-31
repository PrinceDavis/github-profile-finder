import { Injectable }  from '@angular/core';
import { Http, Headers }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private clientId = 'Iv1.1aa1f055394ca0f2';
  private clientSecret = 'dd384727e15ad4e0d4423e55b4f577c05705e8c1';

  constructor(private http: Http) {
    console.log('github service ready');
    this.username = 'PrinceDavis';
  }

  getUser(){
    return this.http.get(`http://api.github.com/users/${this.username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
    .map(res => res.json());
  }

  getRepos(){
    return this.http.get(`http://api.github.com/users/${this.username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
    .map(res => res.json());
  }

  updateUsername(username: string){
    this.username = username;
  }
}
