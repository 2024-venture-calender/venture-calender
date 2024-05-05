import Line from './Lines2';
import Content from './Listcontent2';
import Buttons from './Listbuttons2';
import Container from './Listcontainer2';

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