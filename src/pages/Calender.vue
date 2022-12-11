<template>
	<div class="calender">
		<h1 class="calender__header">Vue Calender</h1>
		<section class="calender__sub-header">
			<h2 class="calender__sub-header__month">{{ currentMonthName }}</h2>
			<h2 class="calender__sub-header__year">{{ currentYear }}</h2>
		</section>
		<section class="calender__day">
			<p class="calender__day-each" v-for="day in days" :key="day">{{ day }}</p>
		</section>
		<section class="calender__num-day">
			<p
				class="calender__num-day-each"
				v-for="num in startDay()"
				:key="num"
			></p>
			<p
				class="calender__num-day-each"
				v-for="num in daysInMonth()"
				:key="num"
				:class="currentDateClass(num)"
			>
				{{ num }}
			</p>
		</section>
		<section class="calender__buttons">
			<button class="calender__buttons-prev" @click="prev">Prev</button>
			<button class="calender__buttons-next" @click="next">Next</button>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
	name: "Calender",
	data() {
		return {
			currentDate: new Date().getUTCDate(),
			currentMonth: new Date().getMonth(),
			currentYear: new Date().getFullYear(),
			days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		};
	},
	methods: {
		daysInMonth() {
			return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
		},
		startDay() {
			return new Date(this.currentYear, this.currentMonth, 1).getDay();
		},
		next() {
			if (this.currentMonth === 11) {
				this.currentMonth = 0;
				this.currentYear++;
			} else {
				this.currentMonth++;
			}
		},
		prev() {
			if (this.currentMonth === 0) {
				this.currentMonth = 11;
				this.currentYear--;
			} else {
				this.currentMonth--;
			}
		},
		currentDateClass(num: number | undefined) {
			const calenderFullDate = new Date(
				this.currentYear,
				this.currentMonth,
				num
			).toDateString();
			const currentFullDate = new Date().toDateString();
			return calenderFullDate === currentFullDate
				? "calender__num-day-each-current"
				: "";
		},
	},
	computed: {
		currentMonthName(): any {
			return new Date(this.currentYear, this.currentMonth).toLocaleString(
				"default",
				{ month: "long" }
			);
		},
	},
});
</script>
