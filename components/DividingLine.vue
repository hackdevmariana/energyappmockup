<template>
  <div class="loader">
    <div class="light"></div>
    <div class="black_overlay"></div>
  </div>
</template>

<style scoped>
.loader {
  height: 2px;
  width: 90%;
  background: var(--background-color);
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.loader .black_overlay {
  background: linear-gradient(
    87deg,
    rgb(var(--text-color-rgb), 0.14) 0%,
    rgba(var(--text-color-rgb)) 30%,
    rgba(var(--text-color-rgb)) 70%,
    rgb(var(--text-color-rgb), 0.14) 100%
  );
  position: absolute;
  inset: 0px;
}

.loader .light {
  width: 70px;
  height: 100%;
  position: absolute;
  left: -20%;
  top: 0px;
  background: linear-gradient(
    87deg,
    var(--income-color) 0%,
    var(--secondary-color) 40%,
    var(--secondary-color) 60%,
    var(--income-color) 100%
  );
  animation: light 2s infinite ease-in-out;
}

@keyframes light {
  from {
    left: -30%;
  }
  to {
    left: 100%;
  }
}
</style>
