<template>
  <div class="loader">
    <div class="black_overlay"></div>
    <div class="light"></div>

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
    rgb(var(--text-color-rgb), 0.07) 0%,
    rgba(var(--text-color-rgb)) 30%,
    rgba(var(--text-color-rgb)) 70%,
    rgb(var(--text-color-rgb), 0.07) 100%
  );
  position: absolute;
  inset: 0px;
}

.loader .light {
  --yellow: #e3f86c;
  width: 70px;
  height: 100%;
  position: absolute;
  left: -20%;
  top: 0px;
  background: linear-gradient(
    87deg,
    var(--yellow) 0%,
    var(--secondary-color) 40%,
    var(--secondary-color) 60%,
    var(--yellow) 100%
  );
  animation: light 2s infinite ease-in-out;
}

.light {
  will-change: transform;
}


@media (prefers-reduced-motion: reduce) {
  .light {
    animation: none;
  }
}


@keyframes light {
  0% { left: -100%; opacity: 0.1; }
  10% { left: 0%; opacity: 0.4; }
  90% { left: 100%; opacity: 0.4; }
  100% { left: 100%; opacity: 0.1; }
}



.light {
  animation: light 4s infinite cubic-bezier(0.65, 0, 0.35, 1);
}




</style>
