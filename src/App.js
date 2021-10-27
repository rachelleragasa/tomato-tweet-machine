import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import TextArea from "./components/TextArea/TextArea"
import GlobalStyles from "./styles/global"
import { processTweet } from "./utils/marketingLogic"
import { above } from "./styles"

const App = () => {
  const [value, setValue] = useState('');

  const handleChange = (value) => setValue(value);

  const randomDelay = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));

  const update = (tweet) => {
    const output = document.getElementById('output');
    if (tweet.length > 0) {
      output.value = processTweet(tweet);
    } else {
      output.value = "";
    }
    return output.value;
  };

  useEffect(() => {
    const timer = randomDelay(500,2000);
    const timeout = setTimeout(() => {
      update(value);
    }, timer);

    return () => clearTimeout(timeout);
  });

  return (
    <>
      <Helmet>
        <title>Tomato Tweet Machine</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700" />
      </Helmet>
      <GlobalStyles />
      <Main>
        <Heading>Tweet Machine</Heading>
        <SubHeading>Type your tweet below and watch it get tweetified</SubHeading>
        <TextArea id="input" label="Text: " handleChange={(event) => handleChange(event.target.value)} value={value} placeholder="Type your tweet here..." />
        <TextArea id="output" label="Tweetified text:" placeholder="Your beautiful tweet will be displayed here" disabled></TextArea>
      </Main>
    </>
  );
}

const Main = styled.main`
  background-color: var(--red);
  padding: 20px;

  ${above.tablet`
    padding: 40px;
  `};
`

const Heading = styled.h1`
  font-size: 2rem;
  line-height: 2.6rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--white);
  margin: 0;
  text-align: center;

  ${above.tablet`
    font-size: 2.6rem;
    line-height: 3rem;
  `};
`

const SubHeading = styled.h4`
  font-weight: 300;
  color: var(--white);
  margin: 0;
  text-align: center;
  letter-spacing: 0.05em;
`

export default App;
