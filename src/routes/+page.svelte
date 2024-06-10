<script>
	import Title from '$lib/Components/Title/Title.svelte';
	import Image from '$lib/Components/Image/Image.svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import Link from '$lib/Components/Link/Link.svelte';
	import Badge from '$lib/Components/Badge/Badge.svelte';
	import Avatar from '$lib/Components/Avatar/Avatar.svelte';
	import Card from '$lib/Components/Card/Card.svelte';
	import Selection from '$lib/Components/Selection/Selection.svelte';
	import Option from '$lib/Components/Selection/Option.svelte';
	import Input from '$lib/Components/Input/Input.svelte';
	import Radio from '$lib/Components/RadioGroup/RadioButton/Radio.svelte';
	import RadioGroup from '$lib/Components/RadioGroup/RadioGroup.svelte';
	import Tooltip from '$lib/Components/Tooltip/Tooltip.svelte';
	import LeftTextIcon from '$lib/app/components/Icons/LeftTextIcon.svelte';
	import CenterTextIcon from '$lib/app/components/Icons/CenterTextIcon.svelte';
	import RightTextIcon from '$lib/app/components/Icons/RightTextIcon.svelte';
	import { getContext } from 'svelte';
	import CssIcon from '$lib/app/components/Icons/CssIcon.svelte';
	import PalleteIcon from '$lib/app/components/Icons/PalleteIcon.svelte';
	import SparkIcon from '$lib/app/components/Icons/SparkIcon.svelte';
	import ComponentIcon from '$lib/app/components/Icons/ComponentIcon.svelte';
	const icons = {
		css: CssIcon,
		pallete: PalleteIcon,
		component: ComponentIcon,
		spark: SparkIcon
	};
	const context = getContext('nova-ui-context');
	function themeString() {
		if (context.theme === 'default') {
			if (
				typeof window !== 'undefined' &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			) {
				return 'dark';
			} else {
				return 'light';
			}
		} else {
			return context.theme;
		}
		return undefined;
	}

	const cardsData = [
		{
			title: 'Fully Themeable',
			description: `
			Theme any aspect of the UI to match your brand's look and feel effortlessly. Perfect for
			any project, big or small
		`,
			icon: 'pallete'
		},
		{
			title: 'Powerfull Customize',
			description: `
			Define styling in many format, as you want. Define our custom color schemes that adapts
			your web.
		`,
			icon: 'css'
		},
		{
			title: 'Extensible',
			description: `
			Create your own component on base of ours. Extend variants of a components only with CSS.
		`,
			icon: 'component'
		},
		{
			title: 'Top Development',
			description: `
			Developed with Svelte 5 y TailwindCSS 4. Components are fully motionables, improving best
			web applications.
		`,
			icon: 'spark'
		}
	];
</script>

<svelte:head>
	<title>Nova UI</title>
	<meta name="description" content="Nova UI is a Component UI library for Svelte JS." />
</svelte:head>
<main>
	<article class="hero" style={`background-image:url('/api/bg?theme=${themeString()}&type=svg')`}>
		<img src="/logo.svg" alt="Nova UI Logo" />
		<section>
			<div class="hero-title">
				<span>Innovate your web with</span>
				<Title className="text-7xl">Nova UI</Title>
			</div>
			<div class="hero-buttons">
				<Link
					variant="solid"
					className="p-2 px-3 font-semibold rounded-full"
					target="self"
					colors="primary"
					href="/components">Components</Link
				>
				<Link
					--color-container={'#FDB220'}
					className="p-2 px-3 font-semibold rounded-full"
					target="self"
					variant="bordered"
					href="/components">Get Started</Link
				>
			</div>
		</section>
	</article>
	<article class="detailed-article">
		<section class="component-pool">
			<div class="position-avatar">
				<Badge --color-container="#FDB220" variant="solid">
					<Avatar className="invert p-1"></Avatar>
				</Badge>
			</div>
			<div class="position-card">
				<Card
					color="container-hight"
					className="p-4 h-fit gap-2"
					footerClassname="flex flex-row gap-4"
				>
					<p class="font-semibold text-center">Nova UI</p>
					<p class="w-[200px]">Go to the next level with Svelte</p>
					{#snippet footer()}
						<Button colors="primary" className="rounded-full w-full font-semibold" variant="solid"
							>Go!</Button
						>
						<Button
							colors="primary"
							className="rounded-full w-full font-semibold"
							variant="bordered">Cancel</Button
						>
					{/snippet}
				</Card>
			</div>
			<div class="position-image">
				<Image
					classNameContainer="w-fit "
					alt=""
					className="w-[300px] h-[300px] object-cover object-left-top"
					src="/pm.jpg"
				></Image>
			</div>
			<div class="position-select">
				<Selection colors="container" classNameInputBox="w-[200px]" selectionLabel="Select Option">
					<Option value="Svelte">Svelte</Option>
					<Option value="Angular">Angular</Option>
					<Option value="React">React</Option>
					<Option value="Vue">Vue</Option>
				</Selection>
			</div>
			<div
				class="login-example p-6 bg-[var(--color-surface-hight)] w-[300px] h-fit rounded-xl position-login"
			>
				<h1 class="font-semibold text-3xl text-center">Nova UI</h1>
				<div class="flex flex-col gap-6 mt-6">
					<Input
						colors=""
						--color-container="#464646"
						name="username"
						type="text"
						classNameContainer="w-full"
						labelText="Username"
						labelProps={{ position: 'inside', dynamic: false, className: 'text-xs' }}
					></Input>
					<Input
						name="password"
						type="password"
						colors=""
						classNameContainer="w-full"
						labelProps={{ position: 'inside', dynamic: false, className: 'text-xs' }}
						--color-container="#464646"
						labelText="Password"
					></Input>
					<div class="mt-4">
						<Button variant="solid" className="w-full my-2" colors="primary">Login</Button>
						<Button variant="solid" className="w-full my-2" colors="primary">Sign Up</Button>
					</div>
				</div>
			</div>
			<RadioGroup
				name=""
				type="checkbox"
				className="bg-[#2C2C2C] flex flex-row w-fit h-fit rounded-lg position-radio "
			>
				<Tooltip content="Italic" className="" colors="container-hight">
					<Radio
						id="italic"
						value="italic"
						colors="container-hight"
						className="rounded-none rounded-l-lg"
					>
						{#snippet custom()}
							<span><i>K</i></span>
						{/snippet}
					</Radio>
				</Tooltip>
				<Tooltip content="Bold" colors="container-hight">
					<Radio id="bold" value="bold" colors="container-hight" className="rounded-none">
						{#snippet custom()}
							<span><b>B</b></span>
						{/snippet}
					</Radio>
				</Tooltip>
				<Tooltip content="Left" colors="container-hight">
					<Radio id="left" value="left" colors="container-hight" className="rounded-none">
						{#snippet custom()}
							<LeftTextIcon />
						{/snippet}
					</Radio>
				</Tooltip>
				<Tooltip content="Center" colors="container-hight">
					<Radio id="center" value="center" colors="container-hight" className="rounded-none">
						{#snippet custom()}
							<CenterTextIcon />
						{/snippet}
					</Radio>
				</Tooltip>
				<Tooltip content="Right" position="top" colors="container-hight">
					<Radio
						id="right"
						value="right"
						colors="container-hight"
						className="rounded-none rounded-r-lg"
					>
						{#snippet custom()}
							<RightTextIcon />
						{/snippet}
					</Radio>
				</Tooltip>
			</RadioGroup>
		</section>
		<section class="text-content">
			<p>
				All in one <br />
				library with<br />
				<span>Modern</span><br />
				<span>Components</span><br />
				to improve<br />
				your web
			</p>
		</section>
	</article>
	<article class="cards">
		<section>
			{#each cardsData as card}
				<Card className="p-3  gap-2 h-[180px] w-[250px]" color="container">
					{#snippet header()}
						<div>
							<span>
								<svelte:component this={icons[card.icon]} />
							</span>
							<b>{card.title}</b>
						</div>
					{/snippet}
					<p>
						{card.description}
					</p>
				</Card>
			{/each}
		</section>
	</article>
</main>

<style>
	main {
		width: 100%;
		background: rgb(20, 20, 20);
		background: url('/api/bg_next?theme=dark&type=svg');
		background-repeat: repeat;
		background-position: top;
		background-size: contain;
		height: fit-content;
	}
	article {
		min-height: 100vh;
	}
	.detailed-article {
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 20px 80px;
		& .text-content {
			display: flex;
			align-items: center;
			& p {
				margin-left: auto;
				margin-right: 8vw;
				font-size: 4rem;
				line-height: 5rem;
				& span {
					color: #fdb220;
				}
			}
		}
		&:last-child {
			display: flex;
			flex-shrink: 0;
		}
	}
	.cards {
		height: fit-content;
		min-height: fit-content;
		width: 100%;
		padding: 50px 50px;
		& section {
			display: grid;
			grid-auto-flow: column;
			align-items: flex-start;
			gap: 9rem;
			justify-content: center;
			& div {
				display: flex;
				align-items: center;
				gap: 1rem;
				& span {
					padding: 8px;
					border-radius: var(--radius-lg);
					background-color: var(--color-surface-hight);
				}
			}
		}
	}
	.component-pool {
		width: 100%;
		position: relative;
		display: grid;
		grid-template-areas:
			' . avatar card . . . '
			' . . card select . . '
			' . login login image image . '
			' . login login toolbar . . ';
	}
	.hero {
		background-position: center;
		background-repeat: repeat-x;
		background-size: auto;
		display: flex;
		place-content: center;
		place-items: center;
		flex-direction: column;
		& .hero-title {
			& span {
				translate: 5px 13px;
				display: block;
				color: var(--color-subtext);
				font-weight: 500;
			}
		}
		& .hero-buttons {
			place-content: center;
			margin: 5px 0;
			gap: var(--spacing-4);
			display: flex;
			flex-direction: row;
			margin-bottom: 50px;
		}
	}
	:global {
		[data-custom='true'].ui-radio {
			cursor: pointer;
			padding: var(--spacing-2) var(--spacing-4);
			transition: all 0.25s ease;
			height: 100%;
			/* &:first-child {
				border-radius: 10px 0 0 10px;
			}
			&:last-child {
				border-radius: 0px 10px 10px 0px;
			} */
			&[aria-checked='false']:hover {
				filter: brightness(120%);
			}
			&[aria-checked='true'] {
				filter: brightness(150%);
			}
		}
		.position-radio {
			grid-area: toolbar;
		}
		.position-login {
			grid-area: login;
		}
		.position-image {
			grid-area: image;
		}
		.position-avatar {
			grid-area: avatar;
			align-self: end;
			justify-self: center;
		}
		.position-select {
			grid-area: select;
			align-self: center;
			justify-self: center;
		}
		.position-card {
			grid-area: card;
			justify-self: center;
			align-self: center;
			height: fit-content;
		}
		@media (width <= 550px) {
			& section {
				grid-template-rows: 1fr 1fr 1fr 1fr;
				justify-items: center;
				gap: 1rem;
			}
		}
		@media (width <= 1100px) {
			.position-login {
				display: none;
			}
			.position-card {
				display: none;
			}
			.position-image {
				grid-row: 3 / 4;
				grid-column: 2 / 6;
			}
			.cards {
				& section {
					grid-template-columns: 1fr 1fr;
					grid-template-rows: 1fr 1fr;
					justify-items: center;
					gap: 1rem;
				}
			}
		}
		@media (width <= 700px) {
			.detailed-article {
				flex-direction: column !important;
				& .component-pool {
					height: 700px !important;
				}
				& .text-content {
					& p {
						margin-right: auto !important;
					}
				}
			}
		}
	}
</style>
