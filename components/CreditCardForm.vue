<template>
  <div class="visa-card">
    <div class="logoContainer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="23"
        height="23"
        viewBox="0 0 48 48"
        class="svgLogo"
      >
        <path
          fill="#ff9800"
          d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
        ></path>
        <path
          fill="#d50000"
          d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
        ></path>
        <path
          fill="#ff3d00"
          d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
        ></path>
      </svg>
    </div>
    <div class="number-container">
      <label class="input-label" for="cardNumber">NÚMERO DE TARJETA</label>
      <input
        class="inputstyle"
        id="cardNumber"
        placeholder="XXXX XXXX XXXX XXXX"
        name="cardNumber"
        type="text"
      />
    </div>

    <div class="name-date-cvv-container">
      <div class="name-wrapper">
        <label class="input-label" for="holderName">TITULAR</label>
        <input
          class="inputstyle"
          id="holderName"
          placeholder="NOMBRE"
          type="text"
        />
      </div>

      <div class="expiry-wrapper">
        <label class="input-label" for="expiry">VÁLIDO HASTA</label>
        <input class="inputstyle" id="expiry" placeholder="MM/YY" type="text" />
      </div>
      <div class="cvv-wrapper">
        <label class="input-label" for="cvv">CVV</label>
        <input
          class="inputstyle"
          placeholder="***"
          maxlength="3"
          id="cvv"
          type="password"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.visa-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 300px;
  height: 180px;
  background-image: radial-gradient(
    circle 897px at 9% 80.3%,
    rgba(55, 60, 245, 1) 0%,
    rgba(234, 161, 15, 0.9) 100.2%
  );
  border-radius: 10px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  gap: 15px;
}
.logoContainer {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Lo mantiene dentro */
  width: 100%;
  position: relative; /* Sigue el flujo del contenido */
  padding: 10px;
}

.svgLogo {
  height: 40px;
  width: auto;
}
.inputstyle::placeholder {
  color: #ffffff;
}
.inputstyle {
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  caret-color: red;
  font-size: 13px;
  height: 25px;
  letter-spacing: 1.5px;
}
.number-container {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
#cardNumber {
  width: 100%;
  height: 25px;
}
.name-date-cvv-container {
  width: 100%;
  height: 25px;
  display: flex;
  gap: 10px;
}
.name-wrapper {
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
.expiry-wrapper,
.cvv-wrapper {
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
}
.cvv-wrapper {
  width: 10%;
}
#expiry,
#cvv {
  width: 100%;
}
.input-label {
  font-size: 8px;
  letter-spacing: 1.5px;
  color: #e2e2e2;
  width: 100%;
  text-align: left;
}
</style>
