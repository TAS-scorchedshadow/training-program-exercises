/**
 * 
 * @returns flex-auto flex-row justify-between w-screen border-2 border-solid
 */

export function Navbar() {

    function logout() {
        localStorage.clear();
    }

    const visible = !localStorage.getItem('gID') ? 'invisible' : '';

    return (
            
            <div className="flex flex-auto flex-row items-center justify-between w-screen h-[13%] bg-[url('./src/assets/Navbar/Nav_BG.png')] shadow-2xl" >
                <div className="flex flex-row items-center px-[2%] w-[60%]">  
                    <img src="./src/assets/Navbar/COS_LOGO.png" className="h-[70%] w-[7%]"></img>
                    <div className="flex flex-row w-[70%] justify-between ml-[10%] text-center">
                        <a href='' className="font-bold text-xl">
                            myGarregMach
                        </a>
                        <a href='/home'>
                            HOME
                        </a>
                        <a className={visible} href={localStorage.getItem('USER_TYPE') === 'STUDENT' ? '/studentProfile' : '/staffProfile'}>
                           {localStorage.getItem('USER_TYPE') === 'STUDENT' ? "STUDENT PROFILE" : "STAFF PROFILE"}
                        </a>
                    </div>
                </div>
                <div className="px-[3%]">
                    <a href='/' onClick={logout}>
                        LOGOUT
                    </a>
                </div>
            </div>

    );
}