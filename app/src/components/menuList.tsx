import Menu from "./menu";
import { useEffect, useState } from "react";

const MenuList = () => {
    const [menus, setMenus] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredMenu, setFilteredMenu] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        fetch('https://dummyjson.com/recipes', { signal: controller.signal })
            .then((res) => res.json())
            .then((data) => {
                setMenus(data.recipes)
                setFilteredMenu(data.recipes)
                console.log(data.recipes)


            })

            .catch((error) => {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {

                    console.error('Error fetching recipes:', error);
                }
            });
        return () => controller.abort();
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setFilteredMenu(menus.filter((menu) => menu.name.toLowerCase().includes(search.toLowerCase())))


    }

    return (
        <>
            <input value={search} placeholder="Search Menu..." onChange={handleSearch} />
            <div className="menuList">

                {
                    filteredMenu.map((menu) => {
                        return (
                            <Menu key={menu.id} menu={menu} />
                        )
                    })
                }
            </div>
        </>
    )
}
export default MenuList;