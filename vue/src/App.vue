<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>这是后台的Feed内容: {{ feedContent }}</p>
  <p>这是后台的Comment内容: {{ commentContent }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getCommentById } from './api/comment'
import { getFeedById } from './api/feed'

export default defineComponent({
  setup() {
    const feedContent = ref('');
    const commentContent = ref('');
    return {
      feedContent,
      commentContent
    }
  },
  async mounted() {
    const resFeed = await getFeedById(1);
    const resComment = await getCommentById(1);
    console.log(resFeed.data.feed.content);
    this.feedContent = resFeed.data.feed.content;
    console.log(resComment.data.comment.content);
    this.commentContent = resComment.data.comment.content;
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
