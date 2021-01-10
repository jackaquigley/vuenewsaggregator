<template>
    <div class="comment">
      <p>
      <span class="username">
        {{comment.username}}
      </span>
      <span class="commentBody">
        {{comment.commentBody}}
      </span>
      </p>
    </div>
</template>
<script>

export default {
  name: "comment-list",
  props: ['comment']
}
</script>
<style lang="scss" scoped>

.comment {
  min-height: 10%;
  width: 20%;
  margin: 1%;
}

.username {
  font-family: Playfair;
}

</style>
