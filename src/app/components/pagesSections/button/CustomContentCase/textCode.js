export default function customContentCaseText() {
	return `<script lang="ts">
  import { WarningIcon } from '@nv-org/components';
  import { Button } from "@nv-org/components";
</script>
<Button variant="solid" colors="warning">
  <WarningIcon />
  <span> Custom Content</span>
</Button>`;
}
