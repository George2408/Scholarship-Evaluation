import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intern } from '../Interfaces/intern';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InterServiceService {
  readonly APIUrl = 'https://localhost:5001';

  constructor(private http: HttpClient) {}

  getInternsData(): Observable<Intern[]> {
    return this.http.get<Intern[]>(this.APIUrl + '/Intern');
  }

  getInternById(id:string):Observable<Intern>{
    return this.http.get<Intern>(this.APIUrl + '/Intern'+ `${id}`);
  }

  addIntern(newIntern: Intern) {
    return this.http.post(this.APIUrl + '/Intern', newIntern, {
      responseType: 'text',
    });
  }

  updateIntern(intern: Intern) {
    return this.http.put(this.APIUrl + '/Intern/'+`${intern.id}`,intern, {
      responseType: 'text',
    });
  }

  deleteIntern(id: string) {
    return this.http.delete(this.APIUrl + '/Intern/' + `${id}`, {
      responseType: 'text',
    });
  }
}
