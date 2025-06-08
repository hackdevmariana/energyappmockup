<template>
    <PinInput :pinLength="4" :resetSignal="resetCounter" @pin-complete="handlePinComplete" />
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import PinInput from '@/components/PinInput.vue';

const CORRECT_PIN = '1234';
const resetCounter = ref(0);

function handlePinComplete(pin) {
    if (pin === CORRECT_PIN) {
        Swal.fire({
            icon: 'success',
            title: '¡PIN correcto!',
            text: 'Autenticación exitosa',
            confirmButtonColor: '#4CAF50',
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'PIN incorrecto',
            text: 'Intenta de nuevo',
            confirmButtonColor: '#d33',
            showClass: {
                popup: 'swal2-show-custom'
            },
            hideClass: {
                popup: 'swal2-hide-custom'
            }
        });

        resetCounter.value++; // 🔁 Esto fuerza el reinicio del PIN
    }
}
</script>
<style scoped>
.swal2-show-custom {
  animation: fadeInDown 0.6s ease-out;
}

.swal2-hide-custom {
  animation: fadeOutUp 0.4s ease-in forwards;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}

</style>