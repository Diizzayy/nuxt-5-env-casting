<script setup lang="ts">
const config = useRuntimeConfig()

const report = {
  'public.trial': config.public.trial,
  'typeof public.trial': typeof config.public.trial,
  'public.trial is truthy': !!config.public.trial,
  'male': config.male,
  'typeof male': typeof config.male,
  'age': config.age,
  'typeof age': typeof config.age,
  'title': config.title,
  'typeof title': typeof config.title,
  'obj': config.obj,
  'typeof obj': typeof config.obj,
  'list': config.list,
  'typeof list': Array.isArray(config.list) ? 'array' : typeof config.list
}
</script>

<template>
  <pre id="report">{{ JSON.stringify(report, null, 2) }}</pre>
</template>
