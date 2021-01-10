<template>
  <div class="commentsWrapper">
    <div class=commentHeaderWrapper>
    <h4>Comments</h4>
    </div>
    <comment-list v-for="(comment, index) in filteredComments" :key="index" :comment="comment"/>
    <comment-form :source="source"/>
    </div>
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

.commentsWrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
justify-content: center;
}

.commentHeaderWrapper {
  height: 10%;
  text-align: center;
  width: 100%;
}

</style>
