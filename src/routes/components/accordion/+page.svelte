<script lang="ts">
	import Title from '$lib/Components/Title/Title.svelte';
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import Accordion from '$lib/Components/Accordion/Accordion.svelte';
	import AccordionSection from '$lib/Components/Accordion/AccordionSection/AccordionSection.svelte';
</script>

<div class="page-content">
	<aside>
		<span class="font-semibold">On this page</span>
		<ul>
			<li><a href="#accordion">Accordion</a></li>
			<li><a href="#multiopen">Multiopen</a></li>
			<li><a href="#variants">Variants</a></li>
		</ul>
	</aside>
	<main>
		<article>
			<header>
				<Title>Accordion</Title>
			</header>
			<section>
				<div>
					<Accordion className="m-2">
						<AccordionSection>
							<svelte:fragment slot="header">
								<p>Section 1</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 1</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p>Section 2</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<p>Content Section 2</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p>Section 3</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<p>Content Section 3</p>
							</svelte:fragment>
						</AccordionSection>
					</Accordion>
				</div>
			</section>
		</article>
		<article>
			<header>
				<Title level={2}>Multiopen</Title>
			</header>
			<section>
				<div>
					<Accordion multiopen={true} className="m-2">
						<AccordionSection>
							<svelte:fragment slot="header">
								<p>Section 1</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 1</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p>Section 2</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 2</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p>Section 3</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 3</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
					</Accordion>
				</div>
			</section>
		</article>
		<article>
			<header><Title>Variants</Title></header>
			<section>
				<div>
					<Accordion variant="" multiopen={false} className="m-2">
						<AccordionSection>
							<svelte:fragment slot="header">
								<p>Section 1</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 1</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p>Section 2</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 2</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p>Section 3</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 3</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
					</Accordion>
				</div>
				<div>
					<Accordion multiopen={false} className="m-2">
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 1</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 1</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 2</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 2</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 3</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 3</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
					</Accordion>
				</div>
				<div>
					<Accordion
						variant="splitted-content"
						colors="container-hight"
						multiopen={false}
						className="m-2"
					>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 1</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 1</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 2</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 2</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 3</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 3</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
					</Accordion>
				</div>
				<div>
					<Accordion variant="splitted" colors="container-hight" multiopen={false} className="m-2">
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 1</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 1</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 2</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 2</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 3</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 3</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
					</Accordion>
				</div>
				<div>
					<Accordion variant="bordered-items" multiopen={false} className="m-2">
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 1</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 1</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 2</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 2</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
						<AccordionSection>
							<svelte:fragment slot="header">
								<p class="font-semibold">Section 3</p>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<Title level={4}>Section 3</Title>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad
									eligendi aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam
									explicabo aliquam. Nihil natus maxime ipsam sapiente nam?
								</p>
							</svelte:fragment>
						</AccordionSection>
					</Accordion>
				</div>
			</section>
		</article>
	</main>
</div>

<style>
</style>
