import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { TemporaryEmailComponent } from './components/temporary-email/temporary-email.component';
import { ListEmailComponent } from './components/list-email/list-email.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [TemporaryEmailComponent, ListEmailComponent, ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [TemporaryEmailComponent, ListEmailComponent, ],
})
export class SharedModule {}
