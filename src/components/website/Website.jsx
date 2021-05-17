import React , { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";

const Wrapper = styled.div`
iframe{
    width: 500px;
    height: 500px;
    padding: 5px;
}
padding: 10px;
  
`;

const Website = () => {
    const urlState = {
        currentUrl: 0,
        url: ['https://hungryforhits.com/',
        'https://flutter.dev/',
        'https://angular.io/']
      };
    const [data, setData] = useState(urlState);
    

    // switchUrl =() => {
    //     if (urlState.currentUrl < urlState.url.length - 1) {
    //       this.setData({
    //         currentUrl: urlState.currentUrl + 1
    //       });
    //     } else {
    //       this.setData({
    //         currentUrl: 0
    //       });
    //     }
    //     return this.currentUrl;
    //   }

    useEffect(() => {
        const interval = setInterval(() => {
        if (data.currentUrl < urlState.url.length -1) {
            setData({
              currentUrl: data.currentUrl + 1
            });
          } else {
            setData({
              currentUrl: 0
            });
          }
        // const interval = setInterval(() => {
        //   setData(data => data);
        }, 15000);
        return () => clearInterval(interval);
      }, [data]);

    return (
        <div>
            <Wrapper>
            <iframe src={urlState.url[data.currentUrl]} />;
           
            </Wrapper>
        </div>
    )
}

export default Website;