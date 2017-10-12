import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BuilderComponent } from './components/builder/builder.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToolComponent } from './components/builder/tool/tool.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    {   path: '',
        component: HomeComponent,
        data: { title: 'Lander' }
    },
    {   path: 'builder',
        component: BuilderComponent,
        data: { title: 'Lander - Builder' }
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        BuilderComponent,
        PageNotFoundComponent,
        ToolComponent,
        NavigationComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: false}),
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
