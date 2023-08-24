import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Email } from 'src/app/module/email';
//Services
import { TemporaryEmailService } from 'src/app/services/temporary-email.service';

@Component({
  selector: 'list-email',
  templateUrl: './list-email.component.html',
  styleUrls: ['./list-email.component.scss'],
})
export class ListEmailComponent implements OnInit {
  listEmails: any[] = [];
  listEmailLocalStorage: any;
  emailsData: any = {};
  messageEmail: boolean = false;
  isInbox: boolean = false;
  headerSubject: any;
  showEmailClick: any;

  constructor(
    private temporaryEmailService: TemporaryEmailService,
    private toster: ToastrService
  ) {}

  ngOnInit(): void {
    this.getListInboxLocalStorage();
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();      
    }
    this.setupLocalStorageCleanup() 
  }

  getListInboxLocalStorage() {
    this.listEmails = [];
    this.listEmailLocalStorage = window.localStorage.getItem('inboxMail');
      try {
        const parsedEmails = JSON.parse( this.listEmailLocalStorage);

        if (Array.isArray(parsedEmails)) {
          parsedEmails.forEach((parsedEmail: any) => {
            const email: Email = {
              toAddr: parsedEmail.toAddr,
              fromAddr: parsedEmail.fromAddr,
              headerSubject: parsedEmail.headerSubject,
              rawSize: parsedEmail.rawSize,
              text: parsedEmail.text,
              downloadUrl: parsedEmail.downloadUrl,
            };
            this.listEmails.push(email);
          });
        } else {
          // console.error('JSON is not an array:', parsedEmails);
        }
      } catch (error) {
        // console.error('Error parsing JSON:', error);
      }
  }

  openEmail(index: any) {
    this.messageEmail = true;
    this.showEmailClick = this.listEmails[index];
  }

  closeEmail() {
    this.messageEmail = false;
  }

  checkEmails(sessionId: any): void {
    this.temporaryEmailService
      .solveProblemFromCORSOKBuscarEmails(sessionId)
      .subscribe((response) => {
        this.emailsData = response.data.session.mails;
        this.setLocalStorageInboxMail(this.emailsData);
        this.getListInboxLocalStorage() 
      });
  }

  onDataIdReceived(dataId: number) {
    const sessionId = dataId;
    this.checkEmails(sessionId);
  }

  setLocalStorageInboxMail(inboxMail: any) {
    localStorage.setItem('inboxMail', JSON.stringify(inboxMail));
  }

  setupLocalStorageCleanup() {
    setInterval(() => {
      this.cleanLocalStorage();
    }, 600000);
  }

  cleanLocalStorage() {
    this.listEmails = [];
    localStorage.removeItem('inboxMail'); 
    localStorage.removeItem('inputEmailGenerated');
    console.log('LocalStorage cleaned.');
    this.toster.success('Tempo expirado')
  }
  
 openNotificationSettings() {
    // Abra as configurações de notificação do navegador
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'denied') {
          window.open('chrome://settings/content/notifications');
        }
      });
    }
  }

  getNotification() {
    const allEmails = this.listEmails.length;
    this.showNotification('listEmailLocalStorage');
    this.toster.info('Existe: ' + allEmails + ' emails em sua Caixa de entrada');
  }

  showNotification(title: string, options?: NotificationOptions): any {
    // if ('Notification' in window && Notification.permission === 'granted') {
    const notification = new Notification(title, options);
    console.log(notification)
    return notification;
    // }
  }
}
