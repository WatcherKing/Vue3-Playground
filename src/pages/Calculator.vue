<template>
	<section class="flex w-full">
		<div class="m-auto">
			<h1 class="text-2xl text-center">Calculator</h1>
			<p
				class="mt-10 text-3xl w-42 h-20 text-right border rounded overflow-x-scroll"
				style="direction: rtl"
			>
				{{ currentNum }}
			</p>
			<div class="h-10">
				<small v-if="selectedOp">
					{{ prevNum }} {{ selectedOp }} {{ currentNum }}
				</small>
			</div>
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
					@click="pressed('c')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
				>
					C
				</button>
				<button
					@click="pressed('0')"
					class="p-2 w-10 h-10 border rounded shadow border-grey"
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
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
	setup() {
		// const calculations = ref("");
		const ops = ["+", "-", "*", "/"];
		const currentNum = ref("");
		const prevNum = ref("");
		const selectedOp = ref("");
		const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

		function pressed(value: string) {
			if (value === "=" || value === "Enter") calculate();
			else if (value == "c") clear();
			else if (ops.includes(value)) applyOperation(value);
			else if (numbers.includes(value)) appendNumber(value);
		}

		function appendNumber(value: string) {
			currentNum.value = currentNum.value + value;
		}

		function applyOperation(value: string) {
			calculate();
			prevNum.value = currentNum.value;
			currentNum.value = "";
			selectedOp.value = value;
		}

		function calculate() {
			if (selectedOp.value === "*") multiply();
			else if (selectedOp.value === "/") divide();
			else if (selectedOp.value === "-") minus();
			else if (selectedOp.value === "+") sum();

			prevNum.value = "";
			selectedOp.value = "";
		}

		function multiply() {
			const value = (
				parseInt(prevNum.value) * parseInt(currentNum.value)
			).toString();
			currentNum.value = value;
		}

		function divide() {
			const value = (
				parseInt(prevNum.value) / parseInt(currentNum.value)
			).toString();
			currentNum.value = value;
		}

		function sum() {
			const value = (
				parseInt(prevNum.value) + parseInt(currentNum.value)
			).toString();
			currentNum.value = value;
		}

		function minus() {
			const value = (
				parseInt(prevNum.value) - parseInt(currentNum.value)
			).toString();
			currentNum.value = value;
		}
		function clear() {
			currentNum.value = "";
		}

		const handleKeydown = (e: any) => pressed(e.key);

		onMounted(() => {
			window.addEventListener("keydown", handleKeydown);
		});

		onUnmounted(() => {
			window.removeEventListener("keydown", handleKeydown);
		});
		return {
			currentNum,
			pressed,
			selectedOp,
			prevNum,
		};
	},
});
</script>
