<script lang="ts">
	import Title from '$lib/Components/Title/Title.svelte';
	import Divider from '$lib/Components/Divider/Divider.svelte';
	import Accordion from '$lib/Components/Accordion/Accordion.svelte';
	import AccordionSection from '$lib/Components/Accordion/AccordionSection/AccordionSection.svelte';
</script>

<Title className="px-4">Accordion</Title>
<Divider className="my-2" size={1} color={'rgb(var(--primary-10))'}></Divider>
<div>
	<Accordion className="m-2">
		<AccordionSection>
			<svelte:fragment slot="header">
				<p>Section 1</p>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<Title level={4}>Section 1</Title>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
<Title className="px-4" level={3}>Accordion Multiselect</Title>
<Divider className="my-2" size={1} color={'rgb(var(--primary-10))'}></Divider>
<div>
	<Accordion multiopen={true} className="m-2">
		<AccordionSection>
			<svelte:fragment slot="header">
				<p>Section 1</p>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<Title level={4}>Section 1</Title>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
				</p>
			</svelte:fragment>
		</AccordionSection>
	</Accordion>
</div>

<Title className="px-4" level={3}>Accordion variants</Title>
<Divider className="my-2" size={1} color={'rgb(var(--primary-10))'}></Divider>
<div class="div-grid">
	<Accordion variant="" multiopen={false} className="m-2">
		<AccordionSection>
			<svelte:fragment slot="header">
				<p>Section 1</p>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<Title level={4}>Section 1</Title>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
				</p>
			</svelte:fragment>
		</AccordionSection>
	</Accordion>
	<Accordion multiopen={false} className="m-2">
		<AccordionSection>
			<svelte:fragment slot="header">
				<p class="font-semibold">Section 1</p>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<Title level={4}>Section 1</Title>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
				</p>
			</svelte:fragment>
		</AccordionSection>
	</Accordion>
	<Accordion variant="splitted-content" colors="container-hight" multiopen={false} className="m-2">
		<AccordionSection>
			<svelte:fragment slot="header">
				<p class="font-semibold">Section 1</p>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<Title level={4}>Section 1</Title>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
				</p>
			</svelte:fragment>
		</AccordionSection>
	</Accordion>

	<Accordion variant="splitted" colors="container-hight" multiopen={false} className="m-2">
		<AccordionSection>
			<svelte:fragment slot="header">
				<p class="font-semibold">Section 1</p>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<Title level={4}>Section 1</Title>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
				</p>
			</svelte:fragment>
		</AccordionSection>
	</Accordion>
	<Accordion variant="bordered-items" multiopen={false} className="m-2">
		<AccordionSection>
			<svelte:fragment slot="header">
				<p class="font-semibold">Section 1</p>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<Title level={4}>Section 1</Title>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error ad eligendi
					aperiam vel asperiores quos officiis, facilis iusto quae, earum quisquam explicabo
					aliquam. Nihil natus maxime ipsam sapiente nam?
				</p>
			</svelte:fragment>
		</AccordionSection>
	</Accordion>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		margin-left: 20px;
		margin-top: 20px;
		margin-bottom: 10px;
	}
	.div-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: auto;
	}
	.div-col {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin: 10px 20px;
	}
</style>
