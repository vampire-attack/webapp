import ConnectButton from "@/lib/wallet-modal";
import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`flex w-full items-center`}>
            <div className="w-full">
                <div className="relative w-full -mx-4 flex items-center justify-between">
                    <div className="w-40 max-w-full px-4">
                        <a href="/#" className="block w-full py-5 ps-5">
                            <img
                                src="/img/navbar-logo.svg"
                                alt="logo"
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={` ${open && "navbarTogglerActive"
                                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color "></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color "></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color "></span>
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg  px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${!open && "hidden"
                                    } `}
                            >
                                <ul className="block lg:flex uppercase">
                                    <ListItem NavLink="/#">migrate</ListItem>
                                    <ListItem NavLink="/#">swap</ListItem>
                                    <ListItem NavLink="/#">rewards</ListItem>
                                    <ListItem NavLink="/#">manage liquidity</ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <a
                                href="/#"
                                className="rounded-md px-7 py-3 text-base font-medium text-white hover:text-primary  bg-light-red "
                            >
                                Chain
                            </a>


                            <ConnectButton />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

const ListItem = ({ children, NavLink }: any) => {
    return (
        <>
            <li>
                <a
                    href={NavLink}
                    className="flex py-2 text-base font-medium  hover:text-dark text-white  lg:ml-12 lg:inline-flex"
                >
                    {children}
                </a>
            </li>
        </>
    );
};
