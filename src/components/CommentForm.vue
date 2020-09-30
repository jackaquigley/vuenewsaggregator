<template lang="html">
  <div class="commentForm">
    <form v-on:submit.prevent="addComment" method="post">
      <p>Add A Comment</p>
      <input type="text" class="commentUserame" v-model="username" value="Username">
      <input type="text" class="commentBody" v-model="commentBody" value="Comment">
      <button type="submit">Add Comment</button>
    </form>
  </div>
</template>

<script>
import NewsService from '@/helpers/NewsService.js'
import {eventBus} from '@/main.js';

export default {
  name: 'comment-form',
  props: ['source'],
  data() {
    return {
      username: '',
      commentBody: ''
      }
    },
    methods: {
      addComment() {
      const newComment = {
        username: this.username,
        commentBody: this.commentBody,
        source: this.source
      }

      NewsService.postComment(newComment)
      .then(comment => eventBus.$emit('comment-added', comment))
    }
  }
}
</script>

<style lang="css">

.commentForm {
  width: 100%;
  border: 1px black solid;
  margin-top: 2px;
  margin-bottom: 2px;
  justify-content: center;
}

form {
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
