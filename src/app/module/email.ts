export interface Email {
    toAddr: string;
    fromAddr: string;
    headerSubject: string;
    rawSize: number;
    text: string;
    downloadUrl: string;
  }