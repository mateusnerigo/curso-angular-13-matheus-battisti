import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IComment, IResponse } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(
    private http: HttpClient
  ) { }

  createComment(data: IComment): Observable<IResponse<IComment>> {
    return this.http.post<IResponse<IComment>>(
      `${this.apiUrl}/${data.momentId}/comments`,
      data
    );
  }
}
