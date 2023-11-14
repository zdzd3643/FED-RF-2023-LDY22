// Pilot PJ 메인영역 공통 컴포넌트 

import { MainCont } from "../page/MainCont";
import { MenSub } from "../page/MenSub";
import { WomenSub } from "../page/WomenSub";
import { StyleSub } from "../page/StyleSub";

export function MainArea(props){
    // props.page 속성값으로 main/men/women/style
    return(
      <>
        <h1>메인영역</h1>
        {props.page=='main'&&<MainCont />}
        {props.page=='men'&&<MenSub />}
        {props.page=='women'&&<WomenSub />}
        {props.page=='style'&&<StyleSub />}
      </>
    );
} ///////////////////// MainArea 컴포넌트 //////////////////