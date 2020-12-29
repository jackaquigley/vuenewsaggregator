import Vue from 'vue';
import Router from 'vue-router';
import StoryView from '@/views/StoryView.vue'
import Story from '@/views/Story.vue'

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
      path: '/story/:id',
      name: 'story',
      component: Story,
      props: true
    }
  ]
})

export default router;
