<template>
  <div class="container">
    <img :src="logo" alt="Logo" class="logo" />
  </div>
</template>

<script lang="ts" setup>
import bg from '~/assets/images/bg.webp'
import logo from '~/assets/images/logo.webp'
</script>

<style scoped>


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* ลดขนาดลง 70% บนอุปกรณ์ที่มีหน้าจอเล็กกว่า 768px (มือถือ) */
@media (max-width: 768px) {
  .logo {
    max-width: 80%;
    max-height: 80%;
  }
}

</style>
