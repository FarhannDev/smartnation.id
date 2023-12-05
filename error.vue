<script lang="ts" setup >

definePageMeta({ layout: "404" })

const props = defineProps({ error: { type: Object } })

const title: globalThis.Ref<string> = ref(`${props.error?.statusCode} - ${props.error?.message}`)
const statusCode: globalThis.Ref<string> = ref(`${props.error?.statusCode}`)
const message: globalThis.Ref<string> = ref(`${props.error?.statusMessage}`)

useSeoMeta({ title: title.value, description: message })

</script>

<template>
  <div>
    <div class="row justify-content-center align-content-center g-3 pt-5">
      <ErrorNotfound :statusCode="statusCode" :message="message" :class="'col-lg-4 col-xl-4 col-md-auto col-sm-auto'" />
    </div>
  </div>
</template>



