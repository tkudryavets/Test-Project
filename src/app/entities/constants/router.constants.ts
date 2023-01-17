import {RouterPaths, NavigationIcons} from '../enums/RouterPaths.enum';

export const NAVIGATION_LINKS = [
	{
		path: RouterPaths.MAIN,
		title: 'Главная',
		icon: NavigationIcons.MAIN,
	},
	{
		path: RouterPaths.PROFILE,
		title: 'Профиль',
		icon: NavigationIcons.PROFILE,
	},
    {
		path: RouterPaths.CALENDAR,
		title: 'Календарь',
		icon: NavigationIcons.CALENDAR,
	},
	{
		path: RouterPaths.EXCHANGE_RATES,
		title: 'Курсы валют',
		icon: NavigationIcons.EXCHANGE_RATES
	},
	{
		path: RouterPaths.INFO,
		title: 'Инфо',
		icon: NavigationIcons.INFO,
	}
];