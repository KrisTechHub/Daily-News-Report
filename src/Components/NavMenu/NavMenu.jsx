import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const NavMenu = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Pages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Channels
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Radio
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Newspaper
                </a>
            </Typography>
        </ul>
    );

    return (
        <div>
                <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-3 py-2 lg:px-8 lg:py-3">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography as="a" href="#" className="items-center mr-4 cursor-pointer py-1.5 font-medium font-bold lg:text-xl flex">
                        Daily Report <svg className="mx-1" width="50" height="50" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.902 40.7496C22.4679 44.0778 24.8082 47.2593 27.8694 50.2215C21.4525 49.258 16.117 45.3416 13.2194 39.9249L20.9019 40.7496H20.902ZM27.7529 10.9112C21.5015 11.8907 16.2958 15.6681 13.3838 20.8974L20.9038 20.1568C22.4504 16.8958 24.7551 13.7921 27.7528 10.9111L27.7529 10.9112ZM30.1107 20.2558L30.215 10.6938H30.1938C26.8304 13.6296 24.271 16.8076 22.5652 20.1711L30.1106 20.2561L30.1107 20.2558ZM13.8693 23.2251L12.4801 23.2127L11.1067 23.1949L10.9989 33.1263L5.43847 23.1348L2.33833 23.1011L2.1864 37.2338L3.56857 37.2532L4.94365 37.2655L5.05328 27.0778L10.7747 37.3292L13.7194 37.3629L13.8696 23.2248L13.8693 23.2251ZM27.0848 25.8781L27.0971 24.618L27.113 23.3666L16.7061 23.2553L16.5542 37.3933L27.2846 37.5064L27.2987 36.2498L27.311 34.9967L19.5358 34.9136L19.5747 31.2249L26.4874 31.299L26.4998 30.0865L26.5121 28.8669L19.5994 28.7944L19.6331 25.7967L27.0848 25.8779V25.8781ZM41.1928 33.7822L39.2557 23.4989L36.1113 23.4617L33.9815 33.7892L31.7297 23.4175L28.6596 23.3822L32.442 37.5626L33.8437 37.5767L35.2488 37.5945L37.5871 26.4842L39.7381 37.6405L41.1486 37.6599L42.5483 37.674L46.6347 23.5784L43.6495 23.5465L41.1927 33.7821L41.1928 33.7822ZM31.7333 10.7114H31.7121L31.6097 20.2716L39.1604 20.3513C37.5238 16.9506 35.0352 13.7196 31.7334 10.7114H31.7333ZM47.8597 20.4431C44.7171 15.1979 39.3547 11.5602 33.1042 10.8219C37.1082 13.9228 39.344 17.0743 40.8234 20.3688L47.8596 20.443L47.8597 20.4431ZM33.2109 50.2781C39.6242 49.4561 45.0108 45.6815 48.0308 40.383L40.3816 40.9599C38.7431 44.2527 36.3323 47.3811 33.211 50.278L33.2109 50.2781ZM38.7077 40.9423L31.3885 40.8627L31.2895 49.9935C34.5099 47.1885 37.0002 44.1431 38.7076 40.9422L38.7077 40.9423ZM58.1994 31.0197C57.5102 30.4099 56.1456 29.862 54.0935 29.3865C52.6795 29.0472 51.7552 28.7696 51.3239 28.5293C50.8837 28.2977 50.6628 27.9672 50.6682 27.5414C50.6718 26.9599 50.8892 26.4879 51.3187 26.1644C51.7411 25.8515 52.3313 25.6907 53.0791 25.7013C53.9451 25.7084 54.645 25.917 55.1806 26.3111C55.7126 26.7088 56.0008 27.2408 56.0432 27.916L58.9188 27.9513C58.8269 26.5286 58.2878 25.4043 57.3016 24.5595C56.3207 23.7147 55.0339 23.2852 53.4503 23.2693C51.7606 23.2499 50.4121 23.6405 49.4099 24.4252C48.4095 25.2189 47.9023 26.3146 47.8881 27.6792C47.8757 28.9041 48.2399 29.8091 48.9804 30.3976C49.7315 30.9826 51.2267 31.5412 53.461 32.0625C54.677 32.3454 55.4671 32.6228 55.8382 32.8703C56.2129 33.1249 56.4003 33.5136 56.395 34.051C56.3897 34.59 56.1193 35.0037 55.5872 35.3042C55.0535 35.6011 54.32 35.746 53.3744 35.7354C52.4605 35.7247 51.7447 35.518 51.2393 35.1062C50.7268 34.7013 50.4651 34.127 50.4404 33.3688L47.5966 33.3387C47.6479 34.8659 48.1764 36.0465 49.1733 36.8843C50.1719 37.7292 51.5665 38.1552 53.3497 38.1727C55.1365 38.1905 56.5488 37.8246 57.6023 37.0504C58.6592 36.2799 59.1895 35.2353 59.2036 33.9061C59.2248 32.5875 58.8855 31.6224 58.1996 31.0197L58.1994 31.0197ZM29.7926 49.9688L29.8916 40.8487L22.5724 40.769C24.2161 44.0035 26.6358 47.1001 29.7925 49.9688L29.7926 49.9688Z"
                                fill="black" />
                            </svg>
                        </Typography>

                        <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block">{navList}</div>
                            <div className="flex items-center gap-x-1">
                                <Button
                                    variant="text"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Socials</span>
                                </Button>
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Watch Live</span>
                                </Button>
                            </div>
                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                    </div>
                    <Collapse open={openNav}>
                        {navList}
                        <div className="flex items-center gap-x-1">
                            <Button fullWidth variant="text" size="sm" className="">
                                <span>Log In</span>
                            </Button>
                            <Button fullWidth variant="gradient" size="sm" className="">
                                <span>Sign in</span>
                            </Button>
                        </div>
                    </Collapse>
                </Navbar>
                
        </div>
    );
};

export default NavMenu;