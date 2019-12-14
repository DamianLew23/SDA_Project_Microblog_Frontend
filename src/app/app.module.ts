import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpPostService } from "./home/post/http-post.service";
import { PostComponent } from "./home/post/post.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PostComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpPostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
