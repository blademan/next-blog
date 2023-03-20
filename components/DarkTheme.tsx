export default function DarkTheme() {
	return (
		<style jsx global>
			{`
				:root {
					--bg-color: black;
					--text-color: white;
					--link-color: rgb(169, 35, 176);
				}
			`}
		</style>
	)
}
