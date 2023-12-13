<template>
  <div>
    <NuxtLoadingIndicator :duration="5000" color="#a60b40" />
    <NavigationMenuDefault />
    <main>
      <slot></slot>
    </main>
    <ButtonScrollTop />
    <NavigationFooter />
  </div>
</template>
