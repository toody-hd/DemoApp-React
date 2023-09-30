import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Main from "./components/MainMenu";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";
import Side from "./components/SideMenu";
import Starter from "./components/StarterMenu";
import { MAIN_MENU_ITEMS, MENU_ITEMS, SIDE_MENU_ITEMS, STARTER_MENU_ITEMS } from "./data/Globals";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="menu" element={<Menu items={MENU_ITEMS} />} />
            <Route path="menu/starter" element={<Starter items={STARTER_MENU_ITEMS} />} />
            <Route path="menu/main" element={<Main items={MAIN_MENU_ITEMS} />} />
            <Route path="menu/side" element={<Side items={SIDE_MENU_ITEMS} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}