import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import TextArea from "../TextArea/TextArea"
import GlobalStyles from "../../styles/global"
import { processTweet } from "../../utils/marketingLogic"
import { above } from "../../styles"

const App = () => {
  const [value, setValue] = useState('');

  const handleChange = (value) => setValue(value);

  const randomDelay = (min, max) => (Math.floor(Math.random() * (max - min + 1) + min));

  const getCharacterCount = (text, maxLength) => {
    const count = text.length;
    const available = maxLength - count;

    return available;
  }

  const update = (tweet) => {
    const output = document.getElementById('output');
    if (tweet.length > 0) {
      output.value = processTweet(tweet);

      // Manually trigger event in order to update the height of the textarea
      const event = new Event('input', { bubbles: true});
      output.dispatchEvent(event);
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
        <TextAreaWrapper>
          <TextArea id="input" label="Text" handleChange={(event) => handleChange(event.target.value)} value={value} placeholder="Type your tweet here..."/>
        </TextAreaWrapper>
        <CharacterCount>{`You have ${getCharacterCount(value, 280)} characters remaining`}</CharacterCount>
        <TextArea id="output" label="Tweetified text" placeholder="Your beautiful tweet will be displayed here" disabled></TextArea>
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
  font-size: 2.6rem;
  line-height: 2.6rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin: 0 0 20px 0;
  text-align: center;
`

const SubHeading = styled.h4`
  font-size: 1.3rem;
  line-height: 2rem;
  font-weight: 300;
  margin: 0;
  text-align: center;
  letter-spacing: 0.05em;
`

const TextAreaWrapper = styled.div`
    margin: 40px 0 10px 0;
`

const CharacterCount = styled.p`
  text-align: right;
  margin: 0;
  font-size: 1rem;
`

export default App;
