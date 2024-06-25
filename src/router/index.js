import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import myApps from '../views/myApps.vue'
import PostsView from '../views/PostsView.vue'
import AlbumsView from '../views/AlbumsView.vue'
import AlbumDetails from '../views/AlbumDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/myApps',
    name: 'myApps',
    component: myApps
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsView
  },
  {
    path: '/albums',
    component: AlbumsView,
    children: [
      {
        path: ':id',
        component: AlbumDetails,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
