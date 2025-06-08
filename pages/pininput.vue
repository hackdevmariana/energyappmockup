<template>
<PinInput :pinLength="4" @pin-complete="handlePinComplete" />
</template>

<script>
export default {
  methods: {
    handlePinComplete(pin) {
      if (pin === '1234') {
        alert('PIN correcto');
      } else {
        alert('PIN incorrecto');
      }
    }
  }
}
</script>

