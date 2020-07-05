<template>
    <div class="comment">
      <div class="username">
        {{comment.username}}
      </div>
      <div class="commentBody">
        {{comment.commentBody}}
      </div>
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
  width: 48%;
  border: 1px black solid;
  margin-left: 1%;
  margin-right: 1%;
}
</style>
