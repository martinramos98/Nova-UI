export default function chipSizeCases() {
	return `<script>
import { Chip } from '@nv-org/components';
</script>
<div class="flex flex-row gap-4">
	<Chip colors="primary" size="xs" variant="solid">Size xs</Chip>
	<Chip colors="primary" size="sm" variant="solid">Size sm</Chip>
	<Chip colors="primary" size="md" variant="solid">Size md</Chip>
	<Chip colors="primary" size="lg" variant="solid">Size lg</Chip>
</div>`;
}
