import React from "react";
import styled from "styled-components";
import img1 from './../../assets/img1.jpeg';
import img2 from './../../assets/img2.jpeg';

const MainContent = styled.div`
  background-color: white;
  color: black;
  flex: 1;
  padding: 10px;
  .cont1{
    font-size: 25px;
    padding: 15px;
    font-weight: bold;
    font-family: "Times New Roman";
  }
  .cont2{
    font-size:20px;
    padding: 10px;
    p{
      padding: 5px;
    }
    font-family: "Times New Roman";
    padding: 15px;
  }
  .cont3{
    font-size:22px;
    padding: 10px;
    p{
      padding: 5px;
    }
    background-color: LightGray;
    font-family: "Times New Roman";
    font-style: italic;
  }
  .cont4{
    font-size:20px;
    padding: 10px;
    font-family: "Times New Roman";
    p{
      padding: 5px;
    }
  }
  .cont5{
    font-size:25px;
    padding: 10px;
    font-family: "Times New Roman";
    background-color: Gray;
    color: white
  }
  .cont6{
    font-size:20px;
    padding: 15px;
    p{
      padding: 7px;
    }
  }
  .cont7{
    font-size:22px;
    padding: 10px;
    font-family: "Times New Roman";
    font-weight: bold;
    font-style: italic;
  }
  .cont8{
    font-size:20px;
    padding: 10px;
    font-family: "Times New Roman";
    p{
      padding: 5px;
    }
    .title{
      font-size:25px;
      background-color: LightGray;
    }
  }
  .cont9{
    font-size:22px;
    padding: 10px;
    font-family: "Times New Roman";
  }
  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;

const Sidebar = styled.div`
  background-color: gray;
  color: white;
  flex: 0 auto;
  padding: 0px;
  width: 200px;
  @media (max-width: 768px) {
    width: 100%;
    order: 1;
  }
  .content1 {
    background-color: dodgerblue;
    height: 40px;
    padding:10px;
  }
  .content2 {
    background-color: green;
    height: 400px;
    img {
      padding: 2px;
      width: 40px;
      height: 40px;
      border-radius: 25px;
    }
  }
  .content3 {
    background-color: blue;
    height: 970px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 768px) {
    display: flex-wrap;
    flex-flow: row wrap;
  }
`;

export const Row = styled.div`
display: flex;
text-align: justify;
padding: 5px;
`;

export const Col = styled.div`
padding: 10px;
`;

const Dashboard = () => {
    return (
      <Wrapper>
      
           <Sidebar>
           <div className="content1">
           Top earners this week
               </div>
               <div className="content2">
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg" />
               <img src="https://kottke.org/plus/misc/images/ai-faces-01.jpg" />
               <img src="https://www.indiewire.com/wp-content/uploads/2015/04/dakota-fanning-by-daniel-bergeron.jpg?w=780" />
               <img src="https://images.ctfassets.net/1wryd5vd9xez/6imn4PsoUBr6I9Hs8jWxk4/b28965e1afec63588266cf42ba5178ae/https___cdn-images-1.medium.com_max_2000_1_7hkI-ZKsglnbjxCRV1bMZA.png" />
               <img src="https://www.employersgroup.com/files/2018/06/female-picture.png" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1JZaRPlV9QjNsJ5oWQ2nPuVOX7kj8PrbTfHrVz9gjNlgQoC-yc1U4j8rI54OMYU05iE&usqp=CAU" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0FBlywn29uBOQWPR8R3ATVmIO2YPZv9zMs_Ji19bvpPwvTiMfVcT4-Cq1-_efv7HI0q0&usqp=CAU" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQttcvBBO2DnB-xBozKSYZo-e40dd9o2u8Tdh529q_6dmRVCMSEdOY98F1C8ekDWBLzI&usqp=CAU" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJX-eSvU52EHi7rrGN97R2gPLCP-TFdjSji-PskgwF8myeaNKxjRJxRtCucKj8XDy4EE&usqp=CAU" />
               <img src="https://www.hakuhodo-global.com/wp_admin/wp-content/uploads/2017/11/Shuntaro_Ito2square.jpg" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtIlwCcyeTEyeQ1Tnl-x2FT-8cAZ9bh6PhNsSz2GpufUeLLBb2I4pdNY3-KPJ7yjoYpQ&usqp=CAU" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbzhRxbSx_xpgK0KQGdl_cgiJUPlaV04jE6L2BZHA2FnpAhI6IuygBoG5EQNFPpESDws&usqp=CAU" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQctSsMK-RWOZ6mWIH6tg_7re5ePQpZcFKcfjAeP-V5k8v35FSa4kec2zXpvfTIjmcDF8&usqp=CAU" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEImypUsmDbUjIdZ-Orw6AS2xeR5edfKtN66PhQ1z8vynPhyF0M6ABrNew3l1dYzqI_A&usqp=CAU" />
               <img src="https://images3.programmersought.com/675/1d/1d09e0d4a4eb885c3cbe3033722dbd93.png" />
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmn2uridq3o7UpI4awUyMXVXLXS2FBzaSllZ2UlNaG0f8BaL8z4THuofy05ZZ8BcTZ08&usqp=CAU" />
               <img src="https://i.redd.it/gyr8l7e23pc31.jpg" />
               <img src="https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-10-1.jpeg" />
               <img src="https://www.thesun.co.uk/wp-content/uploads/2019/02/Comp11.jpg" />
               </div>
               <div className="content3">
               Statics Data
               </div>
               </Sidebar>
        <MainContent>
          <div className="cont1">
          <p>JOIN OUR Program Today and start advertising your Business Opportunities to our active members.</p>
          </div>
          <Row>
        <Col>
        <div className="cont2">
        <p>Promote to Real Opportunity Seekers even for Free.</p>
        <p>Custom Built 1:1 Traffic Exchange System.</p>
        <p>Memberships Start at only $10 a month.</p>
        <p>Simple but powerful Affiliate Program.</p>
        <p>5 ways to advertise and much more.</p>
        </div>
        </Col>
          <Col>
          <div>
        <img src={img1} alt="Image1" />
        </div>
          </Col>
        </Row>
        <div className="cont3">
        <p>Bizopp Browsing is simple but effective 1:1 traffic exchange system that delivers traffic in real time. </p>
        <p>Fast and real opportunity seekers visiting your web pages. Targeted & Niche related members will see your ad Today!</p>
        <p>OPEN YOUR FREE ACCOUNT TODAY.</p>
        </div>
        <div className="cont4"> 
        <Row>
        <Col>
        <p>You can advertise, Online Tools to marketers, Online Training to Marketers, Online services to Marketers, Online Business Opportunities, Direct Marketing Products, Ebooks, Website Blogs, Lead capture pages, Splash Pages, other traffic generation Programs and much more. </p>
        <p>Help Us Grow and participate in our affiliate program, even Free members can generate Affiliate Income and get paid. </p>
        </Col>
        <Col>
        <p>Paid members get a monthly ad package plus cash bonus for browsing other member ads. Paid Members gets a bonus from a 5 level PayPlan that is simple and straightforward. NO pass Ups, NO Binary systems, NO Matrix, just a 5 level unlimited PayPlan. </p>
        <p>Memberships Start at only $10 a month, and our Elite membership is only $15 a month. Pay monthly or Quarterly or Annually and get a discount. </p>
        </Col>
        </Row>
        </div>
        <Row>
        <Col>
        <div className="cont5">
        <p>TESTIMONIALS SECTION</p>
        </div>
        <div className="cont6">
        <p>IDEA 2</p>
        <p>SEE WHAT OTHERS ARE MAKING MONEY FROM OR SHARE YOUR BIZZOPP WITH THEM.</p>
        <p>WANT TO SEE HOW OUR MEMBERS MAKES MONEY ONLINE? BROWSE THEM TODAY!</p>
        <p>BROWSE OUR MEMBER’S Business Opportunities, SEE WHETHER IT FITS YOUR PLAN?</p>
        <p>ARE THESE BIZZOPP DEALS FOR YOU? BROWSE THEM TODAY!</p>
        <p>FREE BIZOPP LEAD GENERATION</p>
        </div>
        <div className="cont7">
        <p>discover new opportunities with BIZZOPP BROWSING</p>
        </div>
        <div className="cont8">
        <p className="title">How do I get free BIZZOPP leads?</p>
        <p>Lead generation is easy with BIZZOPP BROWSING. Use our 5 different ways to advertise and share your business opportunities with one another. </p>
        <p>Your ad is placed Infront of people browsing for business opportunities, and if they think it matches what they are searching for they will join in and try your offer or product. </p>
        </div>
        <div className="cont9">
        <p>Promo TOOLS</p>
        </div>
        </Col>
        <Col>
        <img src={img2} alt="Image2" />
        </Col>
        </Row>
        </MainContent>
       
      </Wrapper>
    );
  };
  
  export default Dashboard;