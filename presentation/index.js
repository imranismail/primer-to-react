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
// code slidz
import CodeSlide from 'spectacle-code-slide';
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
              We write Elixir, Phoenix and React
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
              <Appear><ListItem>it deals with rendering, rendering and more rendering 😎</ListItem></Appear>
              <Appear><ListItem>it leverages on VirtualDOM</ListItem></Appear>
              <Appear><ListItem>it lets you reason about your UI in terms of components</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              How does it work?
            </Heading>
            <Layout>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#7986CB" textColor="tertiary">
                  Components
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#43A047" textColor="tertiary">
                  VirtualDOM
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#EF5350" textColor="tertiary">
                  DOM
                </Text>
              </Fill>
            </Layout>
            <Appear><Text textSize="1.00em" padding="2%" margin="10px 0px 50px" bgColor="#7986CB" textColor="tertiary">
              Components
            </Text></Appear>
            <Appear><CodePane lang="js" source={require("raw!../assets/components.example")} margin="20px auto"/></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center">
           <Heading size={1} fit caps lineHeight={1} textColor="white">
              How does it work?
            </Heading>
            <Layout>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#7986CB" textColor="tertiary">
                  Components
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#43A047" textColor="tertiary">
                  VirtualDOM
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#EF5350" textColor="tertiary">
                  DOM
                </Text>
              </Fill>
            </Layout>
            <Appear><Text textSize="1.00em" padding="2%" margin="10px 0px 50px" bgColor="#43A047" textColor="tertiary">
              VirtualDOM
            </Text></Appear>
            <Appear><Text textSize="1.0em" margin="25px 0px 0px" bold textColor="tertiary">
              this is where all the Magic happens!
            </Text></Appear>
            <List textColor="tertiary">
              <Appear><ListItem>diffing and shallow rendering</ListItem></Appear>
              <Appear><ListItem>lifecycle hooks</ListItem></Appear>
              <Appear><ListItem>synthetic events</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              How does it work?
            </Heading>
            <Layout>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#7986CB" textColor="tertiary">
                  Components
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#43A047" textColor="tertiary">
                  VirtualDOM
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#EF5350" textColor="tertiary">
                  DOM
                </Text>
              </Fill>
            </Layout>
            <Appear><Text textSize="1.00em" padding="2%" margin="10px 0px 50px" bgColor="#43A047" textColor="tertiary">
              VirtualDOM
            </Text></Appear>
            <Appear><CodePane lang="js" source={require("raw!../assets/virtualdom.example")} margin="20px auto"/></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              How does it work?
            </Heading>
            <Layout>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#7986CB" textColor="tertiary">
                  Components
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#43A047" textColor="tertiary">
                  VirtualDOM
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#EF5350" textColor="tertiary">
                  DOM
                </Text>
              </Fill>
            </Layout>
            <Text textSize="1.00em" padding="2%" margin="10px 0px 50px" bgColor="#43A047" textColor="tertiary">
              VirtualDOM
            </Text>
            <CodePane lang="js" source={require("raw!../assets/virtualdom2.example")} margin="20px auto"/>
            <List textColor="tertiary">
              <Appear><ListItem>notice how only the relevant node changes</ListItem></Appear>
              <Appear><ListItem>this is shallow rendering in action</ListItem></Appear>
              <Appear><ListItem>and it is very performant</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="primer" align="center">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              How does it work?
            </Heading>
            <Layout>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#7986CB" textColor="tertiary">
                  Components
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#43A047" textColor="tertiary">
                  VirtualDOM
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" textColor="tertiary" align="center">
                  ➜
                </Text>
              </Fill>
              <Fill>
                <Text textSize="1.00em" padding="10%" margin="25px 0px 50px" bgColor="#EF5350" textColor="tertiary">
                  DOM
                </Text>
              </Fill>
            </Layout>
            <Appear><Text textSize="1.00em" padding="2%" margin="10px 0px 50px" bgColor="#EF5350" textColor="tertiary">
              DOM
            </Text></Appear>
            <Appear><CodePane lang="js" source={require("raw!../assets/dom.example")} margin="20px auto"/></Appear>
            <List textColor="tertiary">
              <Appear><ListItem>knows nothing of business logic</ListItem></Appear>
              <Appear><ListItem>yet are dynamically rendered</ListItem></Appear>
              <Appear><ListItem>unidirectional data flow, not two-way data binding</ListItem></Appear>
            </List>
            <Appear><Text textSize="1.0em" margin="25px 0px 0px" bold textColor="tertiary">
              that is all there to it 🎉🎉
            </Text></Appear>
          </Slide>
          <CodeSlide
            textSize="0.5em"
            transition={[]}
            lang="js"
            code={require("raw!../assets/refactoring.example")}
            ranges={[
              { loc: [0, 0], title: 'a little demo'},
              { loc: [1, 10], note: 'first, we fetch' },
              { loc: [12, 29], note: 'then we render!' },
              { loc: [32, 32], note: 'extremely ugly, but we can do better!' },
              { loc: [16, 26], note: 'we can abstract this' },
              { loc: [33, 47], note: 'into its own component' },
              { loc: [65, 66], note: 'and we can reference them here and relay down data to it' },
              { loc: [70, 70], note: 'but we can do even better' },
              { loc: [35, 45], note: 'we can abstract this' },
              { loc: [72, 79], note: 'into this'},
              { loc: [80, 84], note: 'and this' },
              { loc: [85, 108], note: 'and now our Unsplash component is skinny as it can be!!' },
              { loc: [0, 0], title: 'lets recap!' },
              { loc: [0, 32], note: 'we start off with one large component' },
              { loc: [72, 79], note: 'now we have this' },
              { loc: [80, 84], note: 'and this as stateless functional components' },
              { loc: [85, 108], note: 'and this as our stateful component' },
              { loc: [102, 103], note: 'as you can see, data only flows in one direction' },
              { loc: [80, 81], note: 'passes it here' },
              { loc: [82, 83], note: 'and relays down'},
              { loc: [72, 73], note: 'to here' },
              { loc: [73, 79], note: 'and everything is rendered here' }
            ]}/>
          <Slide transition={["slide"]} bgColor="primer" align="center center">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              The Ecosystem
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primer" align="center center">
            <Text textSize="1.0em" margin="25px 0px 0px" bold textColor="tertiary">
            </Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
