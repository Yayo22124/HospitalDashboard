import { HomeComponent } from "./pages/home/home.component";
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard/home",
  },
  {
    path: "dashboard",
    children: [
      {
        path: "home",
        async loadComponent() {
          return (await import("./pages/home/home.component")).HomeComponent;
        },
      },
    ],
  },
  {
    path: "**",
    async loadComponent() {
      return (await import("./pages/errors/page-404/page-404.component"))
        .Page404Component;
    },
  },
];
