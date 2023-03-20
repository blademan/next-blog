import Link from 'next/link'
import ThemeButton from './ThemeButton'

export default function NavBar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link href='/'>home</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
				</ul>
				<ThemeButton />
			</nav>
			<style jsx>{`
				nav {
					display: flex;
					gap: 3rem;
					justify-content: space-between;
				}
				nav ul {
					display: flex;
					gap: 3rem;
					text-transform: uppercase;
				}
			`}</style>
		</header>
	)
}
