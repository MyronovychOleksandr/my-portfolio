import { lazy } from "react";

export const routes = [
  {
    path: "/",
    exact: true,
    label: "Home",
    component: lazy(() =>
      import("./views/Home/Home.js" /* webpackChunkName: "home-page" */)
    ),
  },
  {
    path: "/skills",
    exact: true,
    label: "Skills",
    component: lazy(() =>
      import("./views/Skills/Skills.js" /* webpackChunkName: "skills-page" */)
    ),
  },
  {
    path: "/projects",
    exact: true,
    label: "Projects",
    component: lazy(() =>
      import(
        "./views/Projects/Projects" /* webpackChunkName: "projects-page" */
      )
    ),
  },
  {
    path: "/about",
    exact: true,
    label: "About",
    component: lazy(() =>
      import("./views/About/About" /* webpackChunkName: "education-page" */)
    ),
  },
  {
    path: "/contacts",
    exact: true,
    label: "Contacts",
    component: lazy(() =>
      import(
        "./views/Contacts/Contacts" /* webpackChunkName: "contacts-page" */
      )
    ),
  },
];
