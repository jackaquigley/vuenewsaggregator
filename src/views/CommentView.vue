<template>
  <div id="commentWrapper">
    <comment-list v-for="(comment, index) in filteredComments" :key="index" :comment="comment"/>
    <comment-form :source="source"/>
  </div>
</template>
<script>

import CommentForm from '../components/CommentForm.vue'
import CommentList from '../components/CommentList.vue'
import NewsService from '../helpers/NewsService.js'
import { eventBus } from "@/main.js";

export default {
  name: 'comment-view',
  props: ['source'],
  data() {
    return {
      comments: [],
    }
  },
  computed: {
    filteredComments() {
      let filteredComments = this.comments.filter((comment) => {
        return comment.source.id === this.source.id
      })
      return filteredComments;
    }
  },
  components: {
    'comment-list': CommentList,
    'comment-form': CommentForm
  },
  mounted(){
    NewsService.getComments()
    .then(comments => this.comments = comments);

    eventBus.$on('comment-added', (comment) => {
      this.comments.push(comment)
    })
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
