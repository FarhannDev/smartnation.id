<template>
  <div>
    <NuxtLoadingIndicator :duration="5000" color="#a60b40" />
    <NavigationMenuSticky />
    <main>
      <slot />
    </main>

    <ButtonScrollTop />
    <NavigationFooter />
  </div>
</template>