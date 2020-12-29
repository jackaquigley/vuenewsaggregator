<template lang="html">
  <div class="component-wrapper">
    <story-page :story="story"/>
  </div>
</template>

<script>

import NewsService from '@/helpers/NewsService.js';
import StoryPage from '@/components/StoryPage.vue';

export default {
  name: 'story',
  data() {
    return {
      story: {},
      id: this.$route.params.id
    }
  },
  mounted() {
    NewsService.getStoryById(this.id)
    .then(story => this.story = story);
  },
  components: {
    'story-page': StoryPage
  }
  }
</script>

<style lang="css">
</style>
