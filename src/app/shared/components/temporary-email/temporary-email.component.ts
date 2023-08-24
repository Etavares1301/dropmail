import { Component, OnInit, EventEmitter, Output } from '@angular/core';
//Services
import { TemporaryEmailService } from 'src/app/services/temporary-email.service';

@Component({
  selector: 'temporary-email',
  templateUrl: './temporary-email.component.html',
  styleUrls: ['./temporary-email.component.scss'],
})
export class TemporaryEmailComponent implements OnInit {
  @Output() dataIdEmitter: EventEmitter<number> = new EventEmitter<number>();

  temporaryEmail: boolean = false;
  sessionData: any = {};
  dataId: any = {};
  email: any = '';
  copiedEmail: any;
  inputEmail: string = '';

  constructor(private temporaryEmailService: TemporaryEmailService) {}

  ngOnInit(): void {
    this.fetchSessionData();
  }

  generateEmail() {
    this.temporaryEmail = true;
    this.dataId = this.sessionData.id;
    this.inputEmail = '';
    this.inputEmail = this.sessionData.addresses[0].address;
    this.setEmailLocalStorage(this.inputEmail);
    this.dataIdEmitter.emit(this.dataId);
  }

  setEmailLocalStorage(inputEmail: string) {
    localStorage.setItem('inputEmailGenerated', JSON.stringify(inputEmail));
  }

  fetchSessionData(): void {
    this.temporaryEmailService
      .solveProblemFromCORSOKSession()
      .subscribe((response) => {
        this.sessionData = response.data.introduceSession;
      });
  }

  copyEmail() {
    this.copiedEmail = this.inputEmail;

    const textarea = document.createElement('textarea');
    textarea.value = this.copiedEmail;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    console.log(this.copiedEmail);
  }
}
