import React from "react";
import styled from "styled-components";

const MainContent = styled.div`
  background-color: yellow;
  color: black;
  flex: 1;
  padding: 10px;
  .cont1{
    font-size: 22px;
    padding: 15px;
  }
  .cont2{
    font-size:18px;
    padding: 10px;
    p{
      padding: 5px;
    }
  }
  .cont3{
    font-size:20px;
    padding: 10px;
    p{
      padding: 5px;
    }
  }
  .cont4{
    font-size:20px;
    padding: 10px;
    p{
      padding: 5px;
    }
  }
  .cont5{
    font-size:25px;
    padding: 10px;
  }
  .cont6{
    font-size:20px;
    padding: 10px;
    p{
      padding: 7px;
    }
  }
  .cont7{
    font-size:15px;
    padding: 10px;
  }
  .cont8{
    font-size:15px;
    padding: 10px;
    p{
      padding: 5px;
    }
  }
  .cont9{
    font-size:15px;
    padding: 10px;
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
    height: 800px;
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

const Dashboard = () => {
    return (
      <Wrapper>
      
           <Sidebar>
           <div className="content1">
           Top earners this week
               </div>
               <div className="content2">
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               <img src="https://news.blr.com/app/uploads/sites/3/2020/01/Jessica_Pfisterer.jpg" />
               </div>
               <div className="content3">
               Statics Data
               </div>
               </Sidebar>
        <MainContent>
          <div className="cont1">
          <p>JOIN OUR Program Today and start advertising your Business Opportunities to our active members.</p>
          </div>
          <div className="cont2">
        <p>Promote to Real Opportunity Seekers even for Free.</p>
        <p>Custom Built 1:1 Traffic Exchange System.</p>
        <p>Memberships Start at only $10 a month.</p>
        <p>Simple but powerful Affiliate Program.</p>
        <p>5 ways to advertise and much more.</p>
        </div>
        <div className="cont3">
        <p>Bizopp Browsing is simple but effective 1:1 traffic exchange system that delivers traffic in real time. </p>
        <p>Fast and real opportunity seekers visiting your web pages. Targeted & Niche related members will see your ad Today!</p>
        <p>OPEN YOUR FREE ACCOUNT TODAY.</p>
        </div>
        <div className="cont4"> 
        <p>You can advertise, Online Tools to marketers, Online Training to Marketers, Online services to Marketers, Online Business Opportunities, Direct Marketing Products, Ebooks, Website Blogs, Lead capture pages, Splash Pages, other traffic generation Programs and much more. </p>
        <p>Help Us Grow and participate in our affiliate program, even Free members can generate Affiliate Income and get paid. </p>
        <p>Paid members get a monthly ad package plus cash bonus for browsing other member ads. Paid Members gets a bonus from a 5 level PayPlan that is simple and straightforward. NO pass Ups, NO Binary systems, NO Matrix, just a 5 level unlimited PayPlan. </p>
        <p>Memberships Start at only $10 a month, and our Elite membership is only $15 a month. Pay monthly or Quarterly or Annually and get a discount. </p>
        </div>
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
        <p>How do I get free BIZZOPP leads?</p>
        <p>Lead generation is easy with BIZZOPP BROWSING. Use our 5 different ways to advertise and share your business opportunities with one another. </p>
        <p>Your ad is placed Infront of people browsing for business opportunities, and if they think it matches what they are searching for they will join in and try your offer or product. </p>
        </div>
        <div className="cont9">
        <p>Promo TOOLS</p>
        <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" />;
        </div>
        </MainContent>
       
      </Wrapper>
    );
  };
  
  export default Dashboard;