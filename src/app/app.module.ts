import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoComponent } from './components/video/video.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { VideoContentsComponent } from './components/video-section/video-contents/video-contents.component';
import { RouterModule } from '@angular/router';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoComponent,    
    VideoSectionComponent,
    VideoContentsComponent,
    SafePipe,
    
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
