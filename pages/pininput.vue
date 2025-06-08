<template>
  <PinInput :pinLength="4" @pin-complete="handlePinComplete" />
</template>

<script setup>
import Swal from 'sweetalert2';
import PinInput from '@/components/PinInput.vue'; // Ajusta la ruta si es distinta

const CORRECT_PIN = '1234'; // PIN válido para la demo

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
    });
  }
}
</script>

