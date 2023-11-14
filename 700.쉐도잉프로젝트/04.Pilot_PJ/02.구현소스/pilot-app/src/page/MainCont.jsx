// Pilot PJ 메인 페이지 컨텐츠 컴포넌트

import { Banner } from "../modules/Banner";

export function MainCont(){

    return(
      <>
        <section className="page" 
        style={{background:'lightblue'}}>
          <Banner />
        </section>

        <section className="page" 
        style={{background:'salmon'}}></section>
       
        <section className="page" 
        style={{background:'lightgreen'}}></section>
        
        <section className="page" 
        style={{background:'orangered'}}></section>
        
        <section className="page" 
        style={{background:'cyan'}}></section>
      </>
    )

} ///////////// MainCont 컴포넌트 //////////////