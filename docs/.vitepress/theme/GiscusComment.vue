<template>
  <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--vp-c-divider)">
    <Giscus
      repo="你的用户名/仓库名"
      repo-id="R_xxxxxxxxxx"
      category="Announcements"
      category-id="DIC_xxxxxxxxxx"
      mapping="pathname"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      theme="preferred_color_scheme"
      lang="zh-CN"
      loading="lazy"
    />
  </div>
</template>

<script setup>
import Giscus from '@giscus/vue'
</script>
