const NavBarItems = ["Collections", "Men", "Women", "About", "Contact"];

export const navBarHtml = NavBarItems.map((item, i) => (
	<li key={i} className="cursor-pointer hover:border-b-Orange hover:border-b-4 pb-6">
		{item}
	</li>
));

export const modalNavBarHtml = NavBarItems.map((item, i) => (
	<li key={i} className="cursor-pointer hover:text-Orange">
		{item}
	</li>
));
