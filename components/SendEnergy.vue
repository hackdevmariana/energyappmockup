<template>
    <div class="send-energy-container">
        <!-- Usuario destino -->
        <div class="user-card">
            <div class="avatar">
                <img v-if="userImage" :src="userImage" alt="User image" />
                <div v-else class="avatar-initials">{{ avatarInitials }}</div>
            </div>
            <div class="user-info">
                <p v-if="name" class="user-name">{{ name }}</p>
                <p class="user-username">@{{ userName }}</p>
            </div>
        </div>

        <!-- Acción -->
        <div class="action-area">
            <input class="amount-input" v-model="value" placeholder="0,0" inputmode="decimal" />

            <button class="send-button" @click="sendKwh">Enviar kWh</button>


            <!-- Teclado numérico -->
            <div class="num-pad">
                <button v-for="num in numbers" :key="num" @click="addDigit(num)">
                    {{ num }}
                </button>

                <button @click="addComma">,</button>
                <button @click="addDigit(0)">0</button>
                <i class="fa-solid fa-delete-left delete-icon" @click="clearValue"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, defineProps } from 'vue';
import Swal from 'sweetalert2';

const props = defineProps({
  userImage: String,
  name: String,
  userName: {
    type: String,
    required: true,
  },
  availableKwh: {
    type: Number,
    required: true,
  }
});


const value = ref('');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addDigit = (num) => {
    value.value += num.toString();
};

const addComma = () => {
    if (!value.value.includes(',')) {
        value.value += ',';
    }
};

const clearValue = () => {
    value.value = '';
};

const avatarInitials = computed(() => {
    if (props.userImage) return '';

    if (props.name && props.name.trim()) {
        const words = props.name.trim().split(' ');
        return words.map(w => w[0]).join('').toUpperCase().slice(0, 2);
    }

    if (props.userName && props.userName.trim()) {
        return props.userName[0].toUpperCase();
    }

    return '?'; // Valor por defecto en caso de datos faltantes
});


const sendKwh = () => {
  const normalized = value.value.replace(',', '.'); // En caso de decimal con coma
  const amount = parseFloat(normalized);

  if (!value.value || isNaN(amount) || amount <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Cantidad inválida',
      text: 'Introduce una cantidad válida de kWh.',
    });
    return;
  }

  if (amount > props.availableKwh) {
    Swal.fire({
      icon: 'error',
      title: 'Saldo insuficiente',
      text: `Sólo tienes ${props.availableKwh} kWh disponibles.`,
    });
    return;
  }

  // Éxito ficticio
  Swal.fire({
    icon: 'success',
    title: 'kWh enviados',
    text: `Has enviado ${amount} kWh a @${props.userName}.`,
    confirmButtonColor: '#4CAF50',
  });

  value.value = '';
};

</script>

<style scoped>
.send-energy-container {
    width: 320px;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--font-general);
}

.user-card {
    text-align: center;
    margin-bottom: 20px;
}

.avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #555;
    margin: 0 auto 10px auto;
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.avatar-initials {
    font-weight: bold;
}

.user-name {
    font-size: 1.2rem;
    font-weight: 600;
}

.user-username {
    font-size: 0.95rem;
    color: #666;
}

.action-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}

.send-button {
    background-color: var(--secondary-color);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.send-button:hover {
    background-color: #888;
}

/* Teclado */
.num-pad {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.num-pad button {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    background-color: #ccc;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.num-pad button:hover {
    background-color: #bbb;
}

.delete-icon {
    font-size: 2rem;
    color: var(--text-color);
    justify-self: center;
    align-self: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.amount-input {
    text-align: center;
    font-size: 2rem;
    width: 100%;
    max-width: 200px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: white;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    font-weight: 600;
    color: var(--text-color);
}
</style>
