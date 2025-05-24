<template>
    <div class="contenedor">
        <h2>Estructura de generación energética en España</h2>

        <p v-if="generationData.length === 0" class="no-data">
            No hay datos disponibles en este momento.
        </p>

        <div v-else class="chart-container">
            <client-only>
                <v-chart class="chart" :option="chartOptions" />
            </client-only>

        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { use } from 'echarts/core';
import VChart from 'vue-echarts';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

use([BarChart, GridComponent, TooltipComponent, CanvasRenderer]);

const generationData = ref([]);

const fetchGenerationData = async () => {
    try {
        const response = await fetch("https://www.ree.es/es/datos/generacion/estructura-generacion");
        const data = await response.json();
        generationData.value = data.sources.map((source) => ({
            name: source.name,
            value: source.value,
        }));
    } catch (error) {
        console.error("Error al obtener los datos de generación:", error);
    }
};

const chartOptions = computed(() => ({
    tooltip: { trigger: "axis" },
    xAxis: { type: "category", data: generationData.value.map((s) => s.name) },
    yAxis: { type: "value", name: "MW" },
    series: [
        {
            data: generationData.value.map((s) => s.value),
            type: "bar",
            color: "#149CEA",
        },
    ],
}));

onMounted(fetchGenerationData);
</script>

<style scoped>
.contenedor {
    width: 90%;
    margin: 0 auto;
    text-align: center;
}

.chart-container {
    width: 90%;
    margin: 20px auto;
}

.chart {
    width: 100%;
    height: 400px;
}
</style>
