<template>
  <div>
    <NuxtLoadingIndicator :duration="5000" color="#a60b40" />
    <NavigationHeaderSticky />
    <main>
      <slot />
    </main>
    <ScroolTopButton />
    <NavigationFooter />
  </div>
</template>