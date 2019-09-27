import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { CoverComponent } from './home/cover/cover.component';
import { ProductFeatureComponent } from './home/product-feature/product-feature.component';
import { CoverAboutComponent } from './about/cover-about/cover-about.component';
import { SoicalNetworkComponent } from './about/soical-network/soical-network.component';
import { IntroComponent } from './home/intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './about/service/service.component';
import { TestminalsComponent } from './about/testminals/testminals.component';
import { ProductFeature2Component } from './home/product-feature2/product-feature2.component';
import { ChatCoverComponent } from './chat/chat-cover/chat-cover.component';
import { ChatbotComponent } from './chat/chatbot/chatbot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChattingComponent } from './chat/chatbot/chatting/chatting.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ChatComponent,
    FeaturedComponent,
    CoverComponent,
    ProductFeatureComponent,
    CoverAboutComponent,
    SoicalNetworkComponent,
    IntroComponent,
    FooterComponent,
    ServiceComponent,
    TestminalsComponent,
    ProductFeature2Component,
    ChatCoverComponent,
    ChatbotComponent,
    LoginComponent,
    RegisterComponent,
    ChattingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule,NgbPaginationModule, NgbAlertModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
