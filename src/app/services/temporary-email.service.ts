import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

//Interface

@Injectable({
  providedIn: 'root',
})
export class TemporaryEmailService {
  constructor(private http: HttpClient) {}

  private corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
  private apiUrl = 'https://dropmail.me/api/graphql/465321674563';
  private endpointSession =
    '?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D';
  private endpointSearchEmails =
    '?query=query%20%7Bsessions%20%7Bid%2C%20expiresAt%2C%20mails%20%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%7D';

  solveProblemFromCORSOK(
    url: string,
    method: string,
    body?: any
  ): Observable<any> {
    const fullUrl = this.corsAnywhereUrl + url;

    if (method === 'GET') {
      return this.http.get(fullUrl);
    } else if (method === 'POST') {
      return this.http.post(fullUrl, body);
    } else {
      throw new Error('Unsupported HTTP method');
    }
  }

  solveProblemFromCORSOKSession(): Observable<any> {
    const mutation = `mutation {
      introduceSession {
        id
        expiresAt
        addresses {
          address
        }
      }
    }`;

    const requestBody = {
      query: mutation,
    };

    return this.solveProblemFromCORSOK(
      this.apiUrl + this.endpointSession,
      'POST',
      requestBody
    );
  }

  solveProblemFromCORSOKBuscarEmails(id: string): Observable<any> {
    const sessionQuery = `{
      session(id: "${id}") {
        mails {
          rawSize
          fromAddr
          toAddr
          downloadUrl
          text
          headerSubject
        }
      }
    }`;

    const requestBody = {
      query: sessionQuery,
    };

    return interval(15000).pipe(
      switchMap(() =>
        this.solveProblemFromCORSOK(
          this.apiUrl + this.endpointSearchEmails,
          'POST',
          requestBody
        )
      )
    );
  }
}
