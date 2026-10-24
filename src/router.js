import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Programs from "./views/Programs.vue";
import Program from "./views/Program.vue";
import About from "./views/About.vue";
import Faculty from "./views/Faculty.vue";
import News from "./views/News.vue";
import Contact from "./views/Contact.vue";
import NotFound from "./views/NotFound.vue";
// Hash history keeps deep links working on static hosting without server rewrites.
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home, meta: { title: "Home" } },
    { path: "/about", component: About, meta: { title: "About the College" } },
    {
      path: "/programs",
      component: Programs,
      meta: { title: "Academic Programs" },
    },
    ...["bsit", "bscs", "bsdmia", "blis"].map((id) => ({
      path: `/programs/${id}`,
      component: Program,
      props: { id },
      meta: { title: id.toUpperCase() },
    })),
    {
      path: "/faculty",
      component: Faculty,
      meta: { title: "Faculty & Staff" },
    },
    { path: "/news", component: News, meta: { title: "News & Events" } },
    { path: "/contact", component: Contact, meta: { title: "Contact Us" } },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
      meta: { title: "Page not found" },
    },
  ],
  scrollBehavior(to, from, saved) {
    return (
      saved ||
      (to.hash ? { el: to.hash, top: 110, behavior: "smooth" } : { top: 0 })
    );
  },
});
router.afterEach((to) => {
  document.title = `${to.meta.title} | CPU College of Computer Studies`;
});
export default router;
