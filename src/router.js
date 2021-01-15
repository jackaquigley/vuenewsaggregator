import Vue from 'vue';
import Router from 'vue-router';
import StoryView from '@/views/StoryView.vue';
import TagSearch from '@/views/TagSearch.vue';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'storyView',
      component: StoryView,
      props: true
    },
    {
      path: '/story/tagSearch/:tag',
      name: 'tagSearch',
      component: TagSearch,
      props: true
    }
  ]
})

export default router;
