import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ApiService
{

    constructor(private httpclient: HttpClient) {}
gettracks(): 

Observable<any>{
 return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks")
}


getalbums(): 

Observable<any>{
 return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
}


getartists(): 

Observable<any>{
 return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists")
}


getgenres(): 

Observable<any>{
 return this.httpclient.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
}


}
