import Vue from 'vue';
import Router from 'vue-router';
import StoryView from '@/views/StoryView.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'storyView',
      component: StoryView,
      props: true
    }
  ]
})

export default router;
