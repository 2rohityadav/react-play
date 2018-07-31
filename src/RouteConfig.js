////////////////////////////////////////////////////////////
// route config
import Home from "./components/Home";
import Other from "./components/Other";
import Youtube from "./components/Youtube";
import Markdown from "./components/Markdown";

const routes = [
  {
    path: "/home",
    component: Home,
    routes: [
      {
        path: "/home/youtube",
        component: Youtube
      },
      {
        path: "/home/markdown",
        component: Markdown
      }
    ]
  },
  {
    path: "/other",
    component: Other
  }
];

export default routes;
