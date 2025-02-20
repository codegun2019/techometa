<template>
  <div>
    <!-- แทนที่ NuxtWelcome ด้วย Layout และ NuxtPage -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>

</script>

<style>
/* ตั้งค่าให้ body มี background เต็มจอ */
body {
  background: url('~/assets/images/bg.webp') no-repeat center center fixed;
  background-size: cover;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>