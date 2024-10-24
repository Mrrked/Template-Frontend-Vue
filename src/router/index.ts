import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main System',
    component: () => import('../views/Protected/MainView.vue'),
    meta: {
      requiresAuth: true,
      header: 'Main System'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      requiresAuth: false,
      header: 'Login'
    }
  },
  // NotFound Route
  {
    path: '/:pathMatch(.*)*',
    name: '404 Not Found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Middleware
router.beforeEach(async (to, _from, next,) => {
  // console.log('FROM: ', from.fullPath);
  // console.log('TO: ', to.fullPath);

  const token = localStorage.getItem('access');
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      return next('/login');
    }
  } else if (to.name === 'Login' && token) {
    return next('/');
  }

  document.title = 'System'
  next()
});

export default router;