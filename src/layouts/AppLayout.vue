<template>
	<app-header />
	<div class="container">
		<router-view></router-view>
	</div>
	<login-modal></login-modal>
</template>

<script lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import LoginModal from "@/components/LoginModal.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	name: "AppLayout",
	components: { AppHeader, LoginModal },
});
</script>
