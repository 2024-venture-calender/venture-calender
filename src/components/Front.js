import ContainerCombine from "../pages/page1/ContainerCombine";

function Front(){

    return(
        <div>

            <nav>
                <NavLink to="/containerCombines" element={<ContainerCombine/>}/>
            </nav>
        </div>

    );
}

export default Front;