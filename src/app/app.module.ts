import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http'
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoreDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';
import { CategoryListComponent } from './media-item-list/category-list.component';
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        CategoryListComponent,
        FavoreDirective,
        CategoryListPipe,
    ],
    providers: [
        { provide: lookupListToken, useValue: lookupLists },
        { provide: HttpXhrBackend, useClass: MockXHRBackend }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}