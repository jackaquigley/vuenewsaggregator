<template>
  <div id="storyWrapper">
    <story-list v-for="(story, index) in stories" :key="index" :story="story"/>
  </div>
</template>
<script>
import NewsService from '../helpers/NewsService.js'
import StoryList from '../components/StoryList.vue'
import { eventBus } from "@/main.js";

export default {
  name: 'story-view',
  data() {
    return {
      stories: []
    }
  },
  components: {
   'story-list': StoryList
   },
  mounted(){
    NewsService.getStories()
    .then(stories => this.stories = stories);
  }
}


</script>
<style lang="scss" scoped>

#storyWrapper {
  height: 100%;
  width: 100%;
  margin: 2%;
  overflow: scroll;
}

</style>
