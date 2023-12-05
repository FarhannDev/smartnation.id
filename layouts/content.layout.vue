<template>
  <div>
    <NuxtLoadingIndicator :duration="5000" color="#a60b40" />
    <NavigationHeaderDefault />
    <main>
      <slot></slot>
    </main>
    <NavigationFooter />
  </div>
</template>
