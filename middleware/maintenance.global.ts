export default defineNuxtRouteMiddleware((to, from) => {
  // Contoh kondisi jika situs dalam mode maintenance
  const maintenanceMode = false;

  if (import.meta.env.PROD && maintenanceMode && to.path !== '/maintenance') {
    return navigateTo('/maintenance', { redirectCode: 503 });
  }
});
