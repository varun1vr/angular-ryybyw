import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserModule } from './user/user.module';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, UserModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthenticationService]
})
export class AppModule { }
