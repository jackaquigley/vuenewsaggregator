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
  height: auto;
  border: 1px black solid;
  margin-left: 12px;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-right: 12px;
  margin: auto;
}
</style>
