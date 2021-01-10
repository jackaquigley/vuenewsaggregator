<template lang="html">
  <div class="commentForm">
    <form v-on:submit.prevent="addComment" method="post">
      <h4 class="commentFormTitle">Add A Comment</h4>
      <label for="">Username
      <input type="text" class="commentUsername" v-model="username" value="Username">
      </label>
      <label>Comment
      <input type="text" class="commentBody" v-model="commentBody" value="Comment">
      </label>
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
}

.commentFormTitle {
  text-align: center;
}

form {
  align-items: center;
  width: 100%;
  text-align: center;
}

label {
  margin-left: 2%;
  margin-right: 2%;
  margin: 0.5%;
}

input {
  margin-left: 1%;
  margin-right: 2%;
  margin: 0.5%;
}

</style>
