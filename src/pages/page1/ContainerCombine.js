import Line from './Lines1';
import Content from './Listcontent1';
import Buttons from './Listbuttons1';
import Container from './Listcontainer1';

function ContainerCombine(){

    return(
        <div>
            <Line />
            <Content />
            <Line />
            <Buttons />
            <Line />
            <Container />
        </div>
    );
}

export default ContainerCombine;