import { useState } from 'react'
import DarkTheme from './DarkTheme'

function loadDarkMode() {
	if (typeof localStorage === 'undefined') {
		return false
	}
	const value = localStorage.getItem('darkMode')
	return value === null ? false : JSON.parse(value)
}

export default function ThemeButton() {
	const [darkMode, setDarkMode] = useState(loadDarkMode)
	console.log('[DarkMode]', darkMode)
	const text = darkMode ? 'Dark Mode' : 'Light Mode'

	const handleClick = () => {
		localStorage.setItem('darkMode', JSON.stringify(!darkMode))
		setDarkMode(!darkMode)
	}
	return (
		<>
			<button onClick={handleClick} suppressHydrationWarning>
				{text}
			</button>
			<style jsx>
				{`
					button {
						background: none;
						border: none;
						cursor: pointer;
						color: inherit;
					}
				`}
			</style>
			{darkMode && <DarkTheme />}
		</>
	)
}
