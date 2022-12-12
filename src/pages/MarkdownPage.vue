<template>
	<div class="markdown">
		<h1 class="markdown__header">Markdown App</h1>
		<section class="markdown-app">
			<article class="markdown-app__left">
				<textarea
					class="markdown-app__left__input"
					placeholder="Type your blog post"
					:value="text"
					@input="update"
				></textarea>
			</article>
			<article class="markdown-app__right" v-html="markedText"></article>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import MarkdownIt from "markdown-it";
import debounce from "@/utils/mixins/debounce";

export default defineComponent({
	name: "MarkdownPage",
	// beforeCreate() {
	// 	console.log("before create");
	// },
	// created() {
	// 	console.log("created");
	// },
	// beforeMount() {
	// 	console.log("b4 mount");
	// },
	// mounted() {
	// 	console.log("mounted");
	// },
	mixins: [debounce],
	data(): { text: string } {
		return {
			text: "",
		};
	},
	computed: {
		markedText(): string {
			return MarkdownIt().render(this.text);
		},
	},
	methods: {
		update(e: any) {
			const task = () => (this.text = e.target.value);
			this.debounce(task, 500);
		},
	},
});
</script>
