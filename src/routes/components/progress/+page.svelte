<script>
	import { Title } from '@nova/title';
	import { Progress } from '@nova/progress';
	let valueBar = 0;
	let valueCircle = 0;
	setInterval(() => {
		if (valueBar >= 1) {
			valueBar = 0;
		} else {
			valueBar += 0.1;
		}
		if (valueCircle >= 1) {
			valueCircle = 0;
		} else {
			valueCircle += 0.1;
		}
	}, 800);
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#progress">Progress</a></li>
			<li><a href="#types">Types</a></li>
			<li><a href="#colors">Colors</a></li>
			<li><a href="#indeterminate">Indeterminate</a></li>
			<!-- <li><a href="#customs"></a></li> -->
		</ul>
	</aside>
	<main>
		<article id="progress">
			<header>
				<Title>Progress</Title>
			</header>
			<section>
				<Progress colors={'primary'} value={0.5} />
			</section>
		</article>
		<article id="types">
			<header>
				<Title level={2}>Types</Title>
			</header>
			<section class="w-full">
				<div class="types-box">
					<Progress colors={'info'} className="w-[50%]" value={valueBar} />
					<Progress colors={'info'} className="w-fit m-auto" type="circle" value={valueCircle} />
				</div>
			</section>
		</article>
		<article id="colors">
			<header>
				<Title level={2}>Colors</Title>
			</header>
			<section>
				<Progress colors={'primary'} value={0.2} />
				<Progress colors={'secondary'} value={0.3} />
				<Progress colors={'tertiary'} value={0.4} />
				<Progress colors={'error'} value={0.5} />
				<Progress colors={'warning'} value={0.6} />
				<Progress colors={'success'} value={0.7} />
				<Progress colors={'info'} value={0.99} />
			</section>
			<section>
				<Title level={3}>Custom Colors</Title>
				<Progress --color-container={'var(--color-pink-300)'} value={0.5}></Progress>
			</section>
		</article>
		<article id="indeterminate">
			<header>
				<Title level={2}>Indeterminate</Title>
			</header>
			<section>
				<Progress
					--color-container={'linear-gradient(to right, #ED64A6, #4299E1)'}
					indeterminate={true}
					value={0.5}
				/>
				<Progress
					className="mx-auto mt-8 w-fit"
					--color-container={'#4299E1'}
					indeterminate={true}
					type={'circle'}
				/>
			</section>
		</article>
		<article id="width">
			<header>
				<Title level={2}>Progress Width</Title>
			</header>
			<section>
				<Progress indeterminate={true} progressWidth={2} colors={'primary'} value={0.5} />
				<Progress indeterminate={true} progressWidth={4} colors={'primary'} value={0.5} />
				<Progress indeterminate={true} progressWidth={6} colors={'primary'} value={0.5} />
				<Progress indeterminate={true} progressWidth={8} colors={'primary'} value={0.5} />
			</section>
		</article>
	</main>
</div>

<style>
	.types-box {
		width: 100%;
		flex-wrap: nowrap;
	}
</style>
