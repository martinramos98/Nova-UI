export default function chipColorCases() {
	return `<script>
import { Chip } from '@nv-org/components';
</script>
<div class="flex flex-row gap-4">
	<Chip colors="primary" variant="solid">Primary</Chip>
	<Chip colors="secondary" variant="solid">Secondary</Chip>
	<Chip colors="tertiary" variant="solid">Tertiary</Chip>
	<Chip colors="success" variant="solid">Success</Chip>
	<Chip colors="warning" variant="solid">Warning</Chip>
	<Chip colors="error" variant="solid">Error</Chip>
	<Chip colors="info" variant="solid">Info</Chip>
</div>
`;
}
