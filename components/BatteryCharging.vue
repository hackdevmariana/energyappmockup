<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  position: relative;
  width: 92px;
  height: 180px;
  border-radius: 8px;
  transform: translateY(-30px);
  background-color: #000;
  background-image: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 4%,
      rgba(81, 81, 81, 1) 14%,
      rgba(44, 44, 44, 1) 26%,
      rgba(2, 2, 2, 1) 53%,
      rgba(2, 2, 2, 1) 65%,
      rgba(2, 2, 2, 0) 66%
    ),
    linear-gradient(#111, #111);
  background-repeat: no-repeat;
  background-size: 10px 10px, 84px 162px;
  background-position: center 2px, 4px 8px;
  animation: lightUp 6s linear infinite alternate;
}

.loader:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 190px;
  transform: translateX(-50%);
  width: 32px;
  height: 75px;
  background-image: linear-gradient(#fff, #fff), linear-gradient(#bbb, #bbb),
    linear-gradient(#fff, #fff);
  background-repeat: no-repeat;
  background-position: center 4px, center top, center 5px;
  background-size: 11px 11px, 7px 4px, 2px 100%;
  animation: plugin 6s linear infinite alternate;
}

.loader:after {
  content: "";
  width: 30px;
  height: 60px;
  background-image: linear-gradient(#888, #888),
    linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.5) 40%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.1) 100%
    ),
    linear-gradient(#15ff00, #15ff00), linear-gradient(#888, #888);
  background-size: 12px 4px, 30px 52px, 30px 0px, 30px 56px;
  background-position: center 0, center 6px, center bottom, center 4px;
  background-repeat: no-repeat;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  animation: charging 6s linear infinite alternate;
}

@keyframes charging {
  0%,
  25% {
    opacity: 0;
    background-size: 12px 4px, 30px 52px, 30px 0px, 30px 56px;
  }

  26%,
  75% {
    opacity: 1;
    background-size: 12px 4px, 30px 52px, 30px 0px, 30px 56px;
  }

  50%,
  100% {
    opacity: 1;
    background-size: 12px 4px, 30px 52px, 30px 56px, 30px 56px;
  }
}

@keyframes lightUp {
  0%,
  25% {
    background-image: radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 4%,
        rgba(81, 81, 81, 1) 14%,
        rgba(44, 44, 44, 1) 26%,
        rgba(2, 2, 2, 1) 53%,
        rgba(2, 2, 2, 1) 65%,
        rgba(2, 2, 2, 0) 66%
      ),
      linear-gradient(#111, #111);
  }

  26%,
  100% {
    background-image: radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 4%,
        rgba(81, 81, 81, 1) 14%,
        rgba(44, 44, 44, 1) 26%,
        rgba(2, 2, 2, 1) 53%,
        rgba(2, 2, 2, 1) 65%,
        rgba(2, 2, 2, 0) 66%
      ),
      linear-gradient(#ddd, #ddd);
  }
}

@keyframes plugin {
  0%,
  25% {
    top: 190px;
    background-position: center 4px, center top, center 5px;
  }

  26%,
  100% {
    background-position: center 0, center top, center 5px;
    top: 180px;
  }
}
</style>
