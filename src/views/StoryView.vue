<template>
  <div id="storyWrapper">
    <story-list v-for="(story, index) in stories" :key="index" :story="story"/>
  </div>
</template>
<script>
import StoryList from '../components/StoryList.vue'

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
  created() {
    fetch('http://localhost:8080/api/stories/')
    .then(response => response.json())
    .then(data => this.stories = data)
}
}
</script>
<style lang="scss" scoped>

#storyWrapper {
  height: 100%;
  width: 80%;
}

</style>
