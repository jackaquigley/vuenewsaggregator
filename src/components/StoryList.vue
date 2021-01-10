<template>
  <div class="storyList">
    <h2> <router-link class="storyTitle":to="{ name: 'story', params: { id: this.story.id  }}"> {{story.title}} </router-link> </h2>
    <source-view class="sourceView":story="story"/>
  </div>
</template>

<script>

import SourceView from '../views/SourceView.vue'

export default {
  name: "story-list",
  props: ['story'],
  components: {
    'source-view': SourceView
  }
}
</script>

<style lang="scss" scoped>

.storyList {
  width: 100%;
  border-top: 1px solid lightblue;
  border-bottom: 1px solid lightblue;
}

.storyTitle {
  font-family: PlayfairDisplay-Bold;
  margin-left: 0.5%;
  color: black;
  font-size: 48px;
}

.sourceView {
}

</style>
