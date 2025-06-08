<!--

USAGE:

<SemiCircleProgressWithTotal :percentage="85" :capacity="50" />

-->

<template>
    <div class="progress-container" :style="{ '--line-color': progressColor }">
        <svg class="progress-svg" viewBox="0 0 200 100">
            <path class="progress-bg" d="M 10,100 A 90,90 0 0,1 190,100" />
            <path :d="progressPath" stroke="var(--line-color)" stroke-width="8" fill="none" />
        </svg>

        <div class="progress-text">{{ percentage }}%</div>


        <div class="capacity-text">de {{ capacity }} kWh</div>
    </div>
</template>


<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    percentage: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
});


const progressColor = computed(() => {
    if (props.percentage <= 33) return "var(--expenses-color)";
    if (props.percentage <= 66) return "var(--secondary-color)";
    return "var(--income-color)";
});


// Cálculo del arco según el porcentaje
const progressPath = computed(() => {
    const angle = ((100 - props.percentage) / 100) * 180; // Invertimos el porcentaje
    const radians = (angle * Math.PI) / 180;
    const x = 10 + 90 * (1 + Math.cos(radians));
    const y = 100 - 90 * Math.sin(radians);

    return `M 10,100 A 90,90 0 0,1 ${x},${y}`;
});

</script>

<style scoped>
.progress-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: var(--background-color);
    padding-bottom: 2px;

}

.progress-text {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--text-color);
    margin-top: -80px;
    font-family: var(--font-featured);

}

.capacity-text {
    font-size: 1rem;
    color: var(--text-color);
    margin-top: 5px;
    font-family: var(--font-general);

}

.progress-svg {
    width: 100%;
    height: auto;
    filter: drop-shadow(0px 0px 10px var(--line-color));
    /* Color dinámico */
}



.progress-bg {
    stroke: var(--text-color);
    stroke-width: 1;
    fill: none;
    filter: drop-shadow(0px 0px 2px var(--income-color));
}
</style>
