// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  react: require("../assets/react-logo.svg"),
  avatar: require("../assets/avatar.jpg"),
  booster: require("../assets/booster-logo.png"),
  one27labs: require("../assets/one27labs.png"),
  firstReactApp: require("../assets/first-react-app.png"),
  danTwitter: require("../assets/dan-twitter.png"),
  vdom: require("../assets/vdom-diagram.png")
};

preloader(images);

const theme = createTheme({
  primary: "#222222"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom"]} transitionDuration={500} progress="bar">
          <Slide transition={["slide"]} bgColor="primary">
            <Image src={images.react} margin="0px auto 40px" height="293px"/>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Primer to React
            </Heading>
            <Text textSize="1.0em" margin="25px 0px 0px" bold textColor="tertiary">
              @fardormu - Faris Amali Alis
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center center">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Background
            </Heading>
            <Text textSize="2.0em" margin="100px 0px 0px" bold textColor="tertiary">
              Mining Engineering Graduate
            </Text>
            <Text textSize="2.0em" margin="25px 0px 0px" bold textColor="tertiary">
              turned
            </Text>
            <Text textSize="2.0em" margin="25px 0px 0px" bold textColor="tertiary">
              Software Engineer
            </Text>
            <Text textSize="2.0em" margin="25px 0px 0px" bold textColor="tertiary">
              ⛏❌ ➜ 💻🤘
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center center">
            <Image src={images.booster} margin="0px auto 40px" padding="2%" bgColor="tertiary"/>
            <Text textSize="2.0em" margin="25px 0px 0px" bold textColor="tertiary">
              US based Crowdfunding Platform
            </Text>
            <Text textSize="2.0em" margin="25px 0px 0px" bold textColor="tertiary">
              Does mainly Ruby on Rails
            </Text>
            <Text textSize="2.0em" margin="25px 0px 0px" bold textColor="tertiary">
              ... and we are hiring!
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center center">
            <Image src={images.one27labs} margin="0px auto 40px" padding="2%" bgColor="tertiary"/>
            <Text textSize="2.0em" margin="25px 0px 0px" bold textColor="tertiary">
              Brainchild of @imranismail
            </Text>
            <Text textSize="2.0em" margin="25px 0px 0px" bold textColor="tertiary">
              Fullstack devshop
            </Text>
            <Text textSize="2.0em" margin="25px 0px 0px" bold textColor="tertiary">
              We mainly write Elixir, Phoenix and React
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center center">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              So... what is React?
            </Heading>
            <Appear><Text textSize="1.5em" margin="25px 0px 0px" bold textColor="tertiary">
              First created at Facebook
            </Text></Appear>
            <Appear><Image src={images.firstReactApp} margin="25px auto 0px" padding="10px" bgColor="tertiary"/></Appear>
            <Appear><Text textSize="1.5em" margin="25px 0px 0px" bold textColor="tertiary">
              for this little App that we all Know and Love!
            </Text></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center">
            <Text textSize="1.5em" margin="25px 0px 0px" bold textColor="tertiary">
              it has tremendous adoption rate, Instagram, Netflix, Airbnb are all on React
            </Text>
            <Appear><Text textSize="1.5em" margin="25px 0px 25px" bold textColor="tertiary">
              and recently it is being used on Twitter!
            </Text></Appear>
            <Appear><image src={images.danTwitter} margin="50px auto 0px" padding="10px" bgColor="tertiary"/></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center">
            <Text textSize="2.0em" margin="25px 0px 0px" bold textColor="tertiary">
              whats with the hype?!
            </Text>
            <Appear><Text textSize="1.00em" margin="25px 0px 0px" textColor="tertiary">
              but before that, thinking in React requires a mental shift, it can't be compared to common MVC frameworks.
            </Text></Appear>
            <Appear><Text textSize="1.00em" margin="25px 0px 50px" textColor="tertiary">
              the closest category it could get is the V in MVC
            </Text></Appear>
            <Appear><Text textSize="1.00em" margin="25px 0px 100px" textColor="tertiary">
              what does it do then?
            </Text></Appear>
            <List textColor="tertiary">
              <Appear><ListItem>it deals with rendering and rerendering</ListItem></Appear>
              <Appear><ListItem>it leverages on VirtualDOM</ListItem></Appear>
              <Appear><ListItem>it lets you reason about your UI in terms of components</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              How does it work?
            </Heading>
            <Layout>
              <Appear><Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#7986CB" textColor="tertiary">
                  Components
                </Text>
              </Fill></Appear>
              <Appear><Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill></Appear>
              <Appear><Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#43A047" textColor="tertiary">
                  VirtualDOM
                </Text>
              </Fill></Appear>
              <Appear><Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill></Appear>
              <Appear><Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#EF5350" textColor="tertiary">
                  DOM
                </Text>
              </Fill></Appear>
            </Layout>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
