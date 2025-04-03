export default function imageAspectCases(aspect) {
	return `<script>
import { Image } from '@nv-org/components';
</script>
<Image
	alt="Buenos Aires"
	height="fit-content"
	classContainer={'max-w-[400px]'}
	aspect={"${aspect}"}
	src="https://r4.wallpaperflare.com/wallpaper/856/590/514/night-lights-road-tower-wallpaper-734fc7670e0277e4667a6a3424ed9f1a.jpg"
></Image>
`;
}
