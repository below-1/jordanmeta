<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import type { Portfolio, Activity } from '$src/types';

	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	// import RepoItem from '$lib/RepoItem.svelte';
	// import PortfolioGrid from './portfolios/_PortfolioGrid.svelte';
	import CarouselPictures from '$lib/CarouselPictures.svelte'
	import CarouselText from '$lib/CarouselText.svelte'
	import ActivityItem from './activities/_ActivityItem.svelte'

	import { portfolios } from '$src/data'
	export let activities: Activity[] = [];

	let showHiThere = false;
	let showItsMe = false;
	let showName = false;

	setTimeout(() => {
		showHiThere = true
	}, 1000);

	setTimeout(() => {
		showItsMe = true
	}, 2500);

	setTimeout(() => {
		showName = true
	}, 4000);

	const menus = [
		{ label: 'Home', path: '#home' },
		{ label: 'About', path: '#about' },
		{ label: 'Portifolio', path: '#portfolios' },
		{ label: 'Activities', path: '#activities' },
	]

	const socialLinks = [
		{ label: 'Linkedin', path: 'https://www.linkedin.com/in/below-bed-3967b3240/', icon: 'bi:linkedin' },
		{ label: 'Github', path: 'https://github.com/below-1/', icon: 'bi:github' },
		{ label: 'HackerRank', path: 'https://www.hackerrank.com/jordanmeta', icon: 'cib:hackerrank' }
	]

	const buzzwords = [
		'Make It Work',
		'Make It Fast',
		'Make It Scale',
	]

	let interval: any = null;
	let activeBuzzWord = 0;
	onMount(() => {
		setInterval(() => {
			activeBuzzWord = (activeBuzzWord + 1) % buzzwords.length;
		}, 3000);
	})
</script>

<svelte:head>
	<title>Jordan Meta's Personal Site</title>
	<meta name="description" content="Information about Jordan Meta. Software Developer from Nusa Tenggara Timur" />
</svelte:head>

<div id="home" class="flex flex-wrap">
	<section class="h-screen bg-yellow-300 flex flex-col px-4 w-full md:w-1/2 md:px-6">
		<div class="flex-grow flex flex-col items-center justify-center">
			<div class="flex flex-col justify-center w-full">
				{#if showHiThere}
					<h1 
						transition:fade 
						class="font-bold uppercase transition-all"
						class:text-2xl={showName}
						class:duration-1000={showName}
						class:text-5xl={!showName}
					>Hi, There</h1>
				{/if}
				{#if showItsMe}
					<h1 
						transition:fade 
						class="font-bold uppercase transition-all"
						class:text-2xl={showName}
						class:duration-1000={showName}
						class:text-5xl={!showName}
					>It's Me</h1>
				{/if}
				{#if showName}
					<h1 transition:fade="{{ duration: 1000 }}" class="font-bold text-6xl uppercase tracking-wider">Jordan Meta</h1>
				{/if}
			</div>
		</div>
		<nav class="h-32 flex flex gap-x-6 w-full md:mx-auto">
			{#each socialLinks as menu}
				<a 
					href={menu.path}
					target="_blank"
					class="py-4 font-bold border-black text-center flex items-center justify-start gap-x-2 text-sm md:text-base"
				>
					<span>{menu.label}</span>
					<Icon icon={menu.icon} class="w-6 h-6" />
				</a>
			{/each}
		</nav>
	</section>

	<section 
		class="flex flex-col h-screen w-full md:w-1/2 flex flex-col items-center justify-center text-white px-6"
		style="background: #402e32"
	>
		<p class="text-2xl uppercase font-bold tracking-wider">
			Fullstack Developer. Eccentric Mind. 
		</p>
		<div class="text-2xl uppercase font-bold tracking-wider self-stretch md:text-center">Code With Mantras:</div>
		<div class="relative w-full h-20 mt-6 md:mt-none">
			{#each buzzwords as bz, i}
				{#if i == activeBuzzWord}
					<div 
						class="font-bold text-6xl absolute top-0 left-0 right-0 top-0 flex items-center justify-center"
						transition:fade
					>{bz}</div>
				{/if}
			{/each}
		</div>
	</section>
</div>

<section id="about" class="min-h-screen w-full bg-jobg flex items-center justify-center flex-col py-24 md:py-none">

	<h1 class="title underline text-4xl font-bold">About Me</h1>

	<div class="px-4 py-12 md:py-none md:px-none md:w-3/4 md:mx-auto flex flex-col md:flex-row">

		<div class="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-none">
			<div
				style="background: url(/joavatar.jpg); background-position: 50% 90%; background-size: cover;"
				class="w-48 h-48 md:w-64 md:h-64 rounded-full"
			/>
		</div>
		<div class="w-full px-6 md:px-none md:w-2/3 text-sm md:text-xl flex flex-col gap-y-6 font-medium">
			<p class="leading-8">Jordan Meta is passionate programmer from Nusa Tenggara Timur, Indonesia. 
				He has written code for multiple languages including JavaScript/Typescript, Java, Python and a litle bit of Go. He has extensive experience working in the web, especially in node js ecosystem.</p>
			<p class="leading-8">He likes to learn new technology. At time of writing, he's learning svelte and golang. And will likely to create couple of projects in those framework/language in future</p>
		</div>

	</div>
</section>

<section id="portfolios" class="min-h-screen w-full bg-jobg flex items-center justify-center flex-col py-24 md:py-none">
	<h2 class="text-4xl md:text-6xl font-bold text-center mb-24 underline">PORTFOLIOS</h2>

	{#each portfolios as portfolio}
		<div class="w-4/5 mx-auto py-12 flex flex-col">
			<a 
				href={portfolio.url}
				target="_blank"
				class="md:w-1/2 md:mx-auto text-3xl md:text-4xl font-bold text-gray-600 text-center mb-6 transition-all active:text-joblack hover:text-joblack active:underline hover:underline">{portfolio.title}</a>
			
			<div class="flex flex-col md:flex-row gap-6 w-full">

				<div class="w-full md:w-1/2 md:h-auto h-[300px]">
					<CarouselPictures
						pictures={portfolio.pictures}
					/>
				</div>
				
				<div class="w-full md:w-1/2 h-[300px]">
					<CarouselText
						items={portfolio.description}
					/>
				</div>
			</div>
		</div>
	{/each}
	
</section>

<!-- <div 
	id="portfolios" 
	class="flex flex-col justify-center items-center min-h-screen py-24 md:py-none bg-jocrem"
>
	<div 
		class="text-4xl md:text-5xl font-bold mb-8 text-center underline"
	>
		My Portfolios
	</div>
	<PortfolioGrid
		items={portfolios.items}
	/>
</div> -->

<div 
	id="activities"
	class="py-24 bg-jobg"
>
	<div class="md:w-2/5 md:mx-auto">
		<div class="text-4xl md:text-5xl font-bold mb-8 text-center underline">My Activities</div>
		<div class="flex flex-col">
			{#each activities as activity}
				<ActivityItem
					{activity}
				/>
			{/each}
		</div>
	</div>
</div>

<footer class="bg-joblack py-24 px-4">
	<div class="md:w-1/3 md:mx-auto flex flex-col gap-y-4">
		<a 
			href="https://github.com/below-1"
			class="bg-joyellow px-6 py-2 rounded flex items-center justify-center gap-x-4 text-black"
		>
			<Icon icon="bi:github" class="w-6 h-6"/>
			<div class="text-xl font-bold">Follow on Github</div>
		</a>
		<a 
			class="bg-joyellow px-6 py-2 rounded flex items-center justify-center gap-x-4 text-black"
			href="mailto:jordanmeta4677@gmail.com"
		>
			<Icon icon="mdi:gmail" class="w-6 h-6"/>
			<div class="text-xl font-bold">Contact Me</div>
		</a>
		<div class="text-lg text-jocrem text-center mt-8">copyright © Jordan Meta, {(new Date()).getFullYear()}</div>
	</div>
</footer>