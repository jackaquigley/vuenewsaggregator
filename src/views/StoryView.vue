<template>
  <div id="storyWrapper">
    <story-list v-for="(story, index) in stories" :key="index" :story="story"/>
  </div>
</template>
<script>
import StoryList from '../components/StoryList.vue'
import { eventBus } from "@/main.js";

export default {
  name: 'story-view',
  data() {
    return {
      stories: [],
      sources: [],
      comments: []
    }
  },
  components: {
   'story-list': StoryList
  },
  created() {
    fetch('http://localhost:8080/api/stories/')
    .then(response => response.json())
    .then(data => this.stories = data)
    fetch('http://localhost:8080/api/sources')
    .then(response => response.json())
    .then(data => this.sources = data)
    fetch('http://localhost:8080/api/comments')
    .then(response => response.json())
    .then(data => this.comments = data)
},
methods: {
  upvote: function(source){
    let ratingScore = this.rating;
    ratingScore += this.rating;
  }
}
}
</script>
<style lang="scss" scoped>

#storyWrapper {
  height: 100%;
  width: 100%;
  margin: 1%;
}

</style>
