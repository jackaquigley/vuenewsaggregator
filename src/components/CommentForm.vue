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
  margin-top: 8px;
  margin-bottom: 8px;
  justify-content: center;
}

form {
  margin-top: 8px;
  margin-bottom: 8px;
  height: 100;
  width: 98%;
  margin-left: 1%;
  border: 1px solid black;
}

.commentUsername {
  margin-left: 8px;
  margin-right: 8px;
  margin: 4px;
}

.commentBody {
  margin-left: 8px;
  margin-right: 8px;
  margin: 4px;
}

.commentFormDivider {
  border: 0.25px solid lightblue;
}

.commentFormTitle {
  margin-top: 8px;
  margin-bottom: 8px;
}

label {
  margin-left: 8px;
  margin-right: 8px;
}
</style>
