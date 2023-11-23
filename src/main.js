import { createApp } from 'vue';
import app from './App.vue';
import router from './router';

createApp(app).use(router).mount('#app');

router.beforeEach((to, from, next) => {
  to.meta.reviews = app.data().reviews;
  next();
});

