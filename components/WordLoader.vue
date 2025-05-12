<template>
  <div class="card">
    <div class="loader">
      <p>loading</p>
      <div class="words">
        <span
          v-for="(word, index) in words"
          :key="index"
          class="word"
          :style="{ animationDelay: `${index * 0.5}s` }"
        >
          {{ word }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  words: {
    type: Array,
    required: true,
    default: () => ["buttons", "forms", "switches", "cards"],
  },
});
</script>

<style scoped>
.card {
  --bg-color: var(--background-color);
  background-color: var(--bg-color);
  padding: 1rem 2rem;
  border-radius: 1.25rem;
}

.loader {
  color: var(--text-color);
  font-family: var(--font-featured);
  font-weight: 500;
  font-size: 25px;
  display: flex;
  align-items: center;
  border-radius: 8px;
}

.words {
  overflow: hidden;
  position: relative;
  font-family: var(--font-general);
}

.words::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    var(--bg-color) 10%,
    transparent 30%,
    transparent 70%,
    var(--bg-color) 90%
  );
  z-index: 20;
}

.word {
  display: block;
  padding-left: 6px;
  color: var(--primary-color);
  opacity: 0;
  animation: spin_4991 4s infinite;
  animation-timing-function: ease-in-out;
}

@keyframes spin_4991 {
  0%,
  100% {
    transform: translateY(0);
    opacity: 1;
  }

  10%,
  25% {
    transform: translateY(-102%);
    opacity: 1;
  }

  35%,
  50% {
    transform: translateY(-200%);
    opacity: 1;
  }

  60%,
  75% {
    transform: translateY(-300%);
    opacity: 1;
  }

  85% {
    transform: translateY(-400%);
    opacity: 0;
  }
}
</style>
