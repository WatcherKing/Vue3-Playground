<template>
	<section @click="close()" class="frame"></section>
	<div class="position">
		<div class="centerlize">
			<div class="modal">
				<div class="p-2 border">
					<h1 class="modal__header">Login</h1>
					<section class="my-5 text-center">
						<button
							class="rounded p-2 shadow-sm text-tonic-default bg-primary-default"
							@click="loginWithGoogle"
						>
							Login with Google
						</button>
					</section>
					<p class="my-5 text-center">OR</p>
					<login-form @close-login-from-form="close" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import auth from "@/utils/firebase";
import { defineComponent } from "@vue/runtime-core";
import LoginForm from "./forms/LoginForm.vue";

export default defineComponent({
	name: "LoginModal",
	components: { LoginForm },
	methods: {
		close() {
			this.$emit("close-login");
		},
		loginWithGoogle() {
			const provider = new auth.GoogleAuthProvider();
			const aut = auth.getAuth();
			auth.signInWithPopup(aut, provider).then(() => {
				this.close();
			});
			// .then((result) => {
			// 	// This gives you a Google Access Token. You can use it to access the Google API.
			// 	// const credential =
			// 	// 	auth.GoogleAuthProvider.credentialFromResult(result);
			// 	// const token = credential.accessToken;
			// 	// // The signed-in user info.
			// 	// const user = result.user;
			// 	// // ...
			// 	let user = result.user;
			// })
			// .catch((error) => {
			// 	// Handle Errors here.
			// 	const errorCode = error.code;
			// 	const errorMessage = error.message;
			// 	// The email of the user's account used.
			// 	const email = error.customData.email;
			// 	// The AuthCredential type that was used.
			// 	const credential = auth.GoogleAuthProvider.credentialFromError(error);
			// 	// ...
			// });
		},
	},
});
</script>
