<script lang="ts" setup>
const props = defineProps({
  user: { type: String, default: "Atika Putri" },
  date: { type: String, default: "30 Menit Lalu" },
  text: { type: String, default: "Wah Seru Banget" },
})

const like: globalThis.Ref<number> = ref(0)
const unlike: globalThis.Ref<number> = ref(0)

const increment = () => { like.value++ }
const decrement = () => { unlike.value++ }

</script>



<template>
  <div>
    <div class="article-comments-card mb-3">
      <div class="d-flex justify-content-start align-content-start">
        <NuxtImg src="/images/user1.png" class="rounded me-3" :width="70" :height="70" />
        <div class="d-flex flex-column justify-content-start g-2">
          <div class="article-comments__name">{{ user }}</div>
          <div class="article-comments__created">
            {{ date }}
          </div>
          <div class="article-comments__content" v-html="text">

          </div>
          <div class="article-comments__action">
            <div class="hstack gap-3">
              <span class="d-inline" @click="increment">
                <BootstrapIcon name="hand-thumbs-up" /> {{ like }}
              </span>
              <span class="d-inline" @click="decrement">
                <BootstrapIcon name="hand-thumbs-down" /> {{ unlike }}
              </span>
              <span class="d-inline"> Balas </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.article-comments-card {
  border-radius: 16px;
  border: 0.836px solid var(--font-100, #e7e7e7);
  background: var(--font-50, #f6f6f6);
  padding: 20px;
}

.article-comments__name {
  color: var(--font-800, #454545);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 12px */
}

.article-comments__created {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding-top: 5px;
  margin-bottom: 8px;
  /* 9.6px */
}

.article-comments__content {
  color: var(--font-900, #3d3d3d);
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 10px;
  /* 9.6px */
}


.dark-mode .article-comments-card {
  background-color: #262626;
  border: 1px solid #454545;
}

.dark-mode .article-comments-card .article-comments__name {
  color: #fff;
}

.dark-mode .article-comments-card .article-comments__created {
  color: #fff;
}

.dark-mode .article-comments-card .article-comments__content {
  color: #fff;
}
</style>
