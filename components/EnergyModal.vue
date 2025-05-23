<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <button class="close-btn" @click="closeModal">✖</button>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  isOpen: Boolean,
  closeModal: Function,
});
</script>

<style scoped>


.close-btn {
  position: absolute;
  top: 12px;
  right: 18px;
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: var(--text-color, black);
  transition: 0.2s ease-in-out;
}

.close-btn:hover {
  transform: scale(1.2);
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px); /* Mayor desenfoque */
  background: rgba(0, 0, 0, 0.3); /* Fondo más translúcido */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-container {
  background: rgba(255, 255, 255, 0.2); /* Más transparencia */
  backdrop-filter: blur(20px); /* Desenfoque aplicado */
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
  width: 80%;
  max-width: 450px;
  text-align: center;
  animation: fadeIn 0.3s ease-in-out;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.dark-mode .modal-container {
  background: rgba(20, 20, 20, 0.2); /* Ajuste para modo oscuro */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>
