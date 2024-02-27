// @ts-ignore
const NavItems =({selectedButton,handleButtonClick,name,names})=>{
    return(
        <div>
            <div className="flex gap-6 ">
                <div className={`font-bold text-base leading-7 font-sans h-7 ${selectedButton === 'home' ?
                    'text-blue-500  border-b-4 border-blue-800 min-h-12  w-22' : 'text-[#475661]'}`}>
                    <button className= {`${ selectedButton === `${name}`? 'bg-sky-100 rounded-xl w-30': null}`}
                            onClick={() => handleButtonClick(`${name}`)}>{names}</button>
                </div>
            </div>
        </div>
    )
}
export default NavItems;
