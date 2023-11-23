import AddReview from '@/views/AddReview.vue';
import AllReviews from '@/views/AllReviews.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/all-reviews',
    component: AllReviews,
    props: true
  },
  {
    path: '/add-review',
    component: AddReview,
    props: { reviews: [] }
  }
];

const router = createRouter({
  history: createWebHistory('/my-app/'),
  routes
});

export default router;
