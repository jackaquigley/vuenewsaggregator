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
  min-width: 15%;
  max-width: 24%;
  width: 20%;
  margin-left: 0.5%;
  margin-right: 0.5%;
}

.username {
  font-family: Playfair;
}

</style>
