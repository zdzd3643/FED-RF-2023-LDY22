// 무비페이지 메인컨텐츠

import { Banner } from "../modules/Banner";
import { VidIntro } from "../modules/Vidintro";
import { VidSwipe } from "../modules/Vidswipe";

export function Movies(){
    return(
        <>
            <Banner category="MOVIES" />
            <VidIntro cat ="MOVIES" cls="on" />
            <VidSwipe tit="TRAILERS, CLIPS AND MORE" />
        </>
    )

} ////////////  Comics 컴포넌트 ///////////