export const BRAND = 'DemoApp';
export const NAV_LINKS = ['Home', 'Menu'];
export const MENU_ITEMS = ['Starter', 'Main', 'Side'];
export const STARTER_MENU_ITEMS = ['Starter 1', 'Starter 2', 'Starter 3'];
export const MAIN_MENU_ITEMS = ['Main 1', 'Main 2', 'Main 3'];
export const SIDE_MENU_ITEMS = ['Side 1', 'Side 2', 'Side 3'];


export default function Title() {
    return (<title>{BRAND}</title>)
}
