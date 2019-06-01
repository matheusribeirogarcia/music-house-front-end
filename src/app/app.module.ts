import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

// Components
import { UserCreateComponent } from "./user/user-create/user-create.component";
import { UserDetailsComponent } from "./user/user-details/user-details.component";
import { UserUpdateComponent } from "./user/user-update/user-update.component";
import { UsersListComponent } from "./user/users-list/users-list.component";
import { UserLoginComponent } from "./user/user-login/user-login.component";

// HttpClient module for RESTful API
import { HttpClientModule } from "@angular/common/http";

// Forms Module
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainPageComponent } from "./main-page/main-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "user-login" },
  { path: "user-login", component: UserLoginComponent },
  { path: "user-login/create-user", component: UserCreateComponent },
  { path: "user-details", component: UserDetailsComponent },
  { path: "update-user", component: UserUpdateComponent },
  { path: "users-list", component: UsersListComponent },
  { path: "main-page", component: MainPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserDetailsComponent,
    UserUpdateComponent,
    UsersListComponent,
    UserLoginComponent,
    MainPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    UserCreateComponent,
    UserDetailsComponent,
    UserUpdateComponent,
    UsersListComponent,
    UserLoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
