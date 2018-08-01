////////////////////////////////////////////////////////////
// route config
import Home from "./components/Home";
import Other from "./components/Other";
import Youtube from "./components/youtube/Youtube";
import Markdown from "./components/markdown/Markdown";
import CountDown from "./components/countdown/Countdown";

const routes = [
  {
    path: "/home",
    component: Home,
    routes: [
      {
        path: "/home/markdown",
        component: Markdown
      },
      {
        path: "/home/youtube",
        component: Youtube
      },
      {
        path: "/home/countdown",
        component: CountDown
      }
    ]
  },
  {
    path: "/other",
    component: Other
  }
];

export default routes;
