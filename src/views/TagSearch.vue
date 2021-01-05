<template lang="html">
  <div>
    <story-list v-for="(story, index) in storiesByTag":key="index" :story="story"/>
  </div>
</template>

<script>

import NewsService from '@/helpers/NewsService.js'
import StoryList from '@/components/StoryList.vue'

export default {
  name: 'tagSearch',
    data() {
      return {
        storiesByTag: [],
        tag: this.$route.params.tag
      }
    },
    components: {
     'story-list': StoryList
     },
     mounted(){
      this.refreshTag(this.tag)
    },
    methods: {
      refreshTag(tag){
        NewsService.getStoriesByTag(tag)
        .then(storiesByTag => this.storiesByTag = storiesByTag);
      }
    },
    created () {
    this.refreshTag(this.$route.params.tag);
    },
    beforeRouteUpdate (to, from, next) {
      this.refreshTag(to.params.tag);
      next();
  }
}

</script>

<style lang="css">
</style>
