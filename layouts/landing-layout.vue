<template>
  <main class="landing-layout">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
@keyframes BgAnimate {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.landing-layout {
  width: 100vw;
  height: 100vh;

  background: linear-gradient(to right, var(--blue-6), var(--blue-7));
  background-size: 600% 600%;
  animation: BgAnimate 20s ease infinite;
}
</style>
