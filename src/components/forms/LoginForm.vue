<template>
	<form class="form" @submit.prevent="submit">
		<div class="form__control">
			<label>Email/Username</label>
			<input
				v-model="email"
				type="text"
				class="form__input"
				placeholder="Username or Email"
				ref="mailRef"
			/>
		</div>
		<div class="form__control">
			<label>Password</label>
			<input
				v-model="password"
				type="password"
				class="form__input"
				placeholder="Enter Password"
			/>
		</div>
		<div class="form__control">
			<button type="submit" class="form__btn">
				<span v-if="!isLoading">Login</span>
				<span v-else>⌛</span>
			</button>
		</div>
	</form>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import auth from "@/utils/firebase";

export default defineComponent({
	name: "LoginForm",
	data() {
		return {
			email: "",
			password: "",
			isLoading: false,
		};
	},
	methods: {
		submit() {
			// submit form
			this.isLoading = true;
			const authenticate = auth.getAuth();
			auth
				.signInWithEmailAndPassword(authenticate, this.email, this.password)
				.then(() => {
					this.email = "";
					this.password = "";
					this.isLoading = false;
					this.$emit("close-login-from-form");
				})
				.catch((e) => {
					console.log(e);
					this.isLoading = false;
				});
		},
	},
	mounted() {
		this.$refs.mailRef.focus();
	},
});
</script>
