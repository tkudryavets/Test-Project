import {RouterPaths, NavigationIcons} from '../enums/RouterPaths.enum';

export const NAVIGATION_LINKS = [
	{
		path: RouterPaths.MAIN,
		title: 'Main',
		icon: NavigationIcons.MAIN,
	},
	{
		path: RouterPaths.PROFILE,
		title: 'Profile',
		icon: NavigationIcons.PROFILE,
	},
    {
		path: RouterPaths.CALENDAR,
		title: 'Calendar',
		icon: NavigationIcons.CALENDAR,
	},
	{
		path: RouterPaths.EXCHANGE_RATES,
		title: 'Exchange rates',
		icon: NavigationIcons.EXCHANGE_RATES
	},
	{
		path: RouterPaths.INFO,
		title: 'Info',
		icon: NavigationIcons.INFO,
	}
];