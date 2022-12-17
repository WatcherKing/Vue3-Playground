<template>
	<section class="flex w-full">
		<div class="m-auto">
			<h1 class="text-2xl text-center">Calculator</h1>
			<p
				class="mt-10 mb-2 text-3xl w-32 text-right border rounded overflow-x-scroll"
				style="direction: rtl"
			>
				{{ calculations }}
			</p>
			<div class="grid grid-cols-4 gap-1">
				<button
					@click="pressed('1')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					1
				</button>
				<button
					@click="pressed('2')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					2
				</button>
				<button
					@click="pressed('3')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					3
				</button>
				<button
					@click="pressed('+')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					+
				</button>
				<button
					@click="pressed('4')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					4
				</button>
				<button
					@click="pressed('5')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					5
				</button>
				<button
					@click="pressed('6')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					6
				</button>
				<button
					@click="pressed('-')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					-
				</button>
				<button
					@click="pressed('7')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					7
				</button>
				<button
					@click="pressed('8')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					8
				</button>
				<button
					@click="pressed('9')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					9
				</button>
				<button
					@click="pressed('*')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					*
				</button>
				<button
					@click="pressed('0')"
					class="p-2 h-10 border rounded shadow border-grey col-span-2"
				>
					0
				</button>
				<button
					@click="pressed('=')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					=
				</button>
				<button
					@click="pressed('/')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					/
				</button>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { calculateBackoffMillis } from "@firebase/util";
import { defineComponent, ref } from "vue";

export default defineComponent({
	setup() {
		const calculations = ref("");
		const ops = ["+", "-", "*", "/"];

		function pressed(value: string) {
			if (value === "=") calculate();
			else if (ops.includes(value)) applyOperation(value);
			else appendNumber(value);
		}

		function appendNumber(value: string) {
			calculations.value = calculations.value + value;
		}

		function applyOperation(value: string) {}

		function calculate() {}

		return {
			calculations,
			pressed,
		};
	},
});
</script>
