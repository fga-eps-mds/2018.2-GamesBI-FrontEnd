import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReactTestUtils from 'react-dom/test-utils';
import expect from "expect";
import jsdom from "mocha-jsdom";
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
configure({ adapter: new Adapter() });
//componentes

import Title from './components/game/Title'
import Button from './components/Button'
import Footer from './components/Footer'
import GraphicCard from './components/GraphicCard'
import LineGraphic from './components/LineGraphic'
import SearchBar from './components/SearchBar'
import Suggestions from './components/Suggestions'
import TableRank from './components/TableRank'
import SideBar from './components/SideBar'
import Main from './components/Main'
import HeaderCards from './components/HeaderCards'
import App from './App';
import SideCard from './components/SideCard'
import GameApp from './components/game/GameApp'
import GameDashboard from './components/game/GameDashboard'
import GameInfo from './components/game/GameInfo'
import PaletaDeCor from './components/game/PaletaDeCor'
import {Filtro} from './actions/Filtro'


import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);


describe("<Title />", () => {

  it("should return an h1 with 'hello' string", () => {

    const component = ReactTestUtils.renderIntoDocument(
      <Title >nome do jogo</ Title>
    );

    const h1 = ReactTestUtils.findRenderedDOMComponentWithTag(
      component, "h1"
    );

    expect(h1.textContent).toEqual("nome do jogo");


              })

  });
  describe("<PaletaDeCor />", () => {

    it("should return an h1 with 'hello' string", () => {


              const renderer = new ShallowRenderer();
              renderer.render(<PaletaDeCor />);
              const result = renderer.getRenderOutput();

              expect(result.type).toBe('div');
            ReactTestUtils.isElement(ReactTestUtils)

                })

    });
    describe("<SideCard />", () => {

      it("should return an h1 with 'hello' string", () => {


                const renderer = new ShallowRenderer();
                renderer.render(<SideCard />);
                const result = renderer.getRenderOutput();

                expect(result.type).toBe('div');
              ReactTestUtils.isElement(ReactTestUtils)

                  })

      });
    describe("<HeaderCards />", () => {

      it("should return an h1 with 'hello' string", () => {


                const renderer = new ShallowRenderer();
                renderer.render(<HeaderCards />);
                const result = renderer.getRenderOutput();

                expect(result.type).toBe('div');
              ReactTestUtils.isElement(ReactTestUtils)

                  })

      });

describe("<GameInfo />", () => {

  it("should return an h1 with 'hello' string", () => {

    const component = ReactTestUtils.renderIntoDocument(
      <GameInfo >test</ GameInfo>
    );

    const div = ReactTestUtils.findRenderedDOMComponentWithTag(
      component, "div"
    );

    expect(div.textContent).toEqual("test");


  });

});

describe("<Button />", () => {

  it("should return an h1 with 'hello' string", () => {

          const component = ReactTestUtils.renderIntoDocument(
            <Button >teste</ Button>
          );

          const button = ReactTestUtils.findRenderedDOMComponentWithTag(
            component, "button"
          );

          expect(button.textContent).toEqual("teste");

        });
  });

  describe("<Footer />", () => {

    it("should return an h1 with 'hello' string", () => {

        const renderer = new ShallowRenderer();
        renderer.render(<Footer />);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('footer');
        ReactTestUtils.isElement(ReactTestUtils)
          });
    });

    describe("<Suggestions />", () => {

      it("should return an h1 with 'hello' string", () => {

          const renderer = new ShallowRenderer();
          renderer.render(<Suggestions />);
          const result = renderer.getRenderOutput();

          expect(result.type).toBe('ul');
          ReactTestUtils.isElement(ReactTestUtils)
            });
      });

      describe("<GameDashboard />", () => {

        it("should return an h1 with 'hello' string", () => {

            const renderer = new ShallowRenderer();
            renderer.render(<GameDashboard />);
            const result = renderer.getRenderOutput();

            expect(result.type).toBe('div');
            ReactTestUtils.isElement(ReactTestUtils)
              });
        });

      describe("<TableRank />", () => {

        it("should return an h1 with 'hello' string", () => {

            const renderer = new ShallowRenderer();
            renderer.render(<TableRank />);
            const result = renderer.getRenderOutput();

            expect(result.type).toBe('div');
            ReactTestUtils.isElement(ReactTestUtils)
              });

        });

    describe("<SearchBar />", () => {

      it("should return an h1 with 'hello' string", () => {

          const renderer = new ShallowRenderer();
          renderer.render(<SearchBar />);
          const result = renderer.getRenderOutput();

          expect(result.type).toBe('form');
          ReactTestUtils.isElement(ReactTestUtils)
            });
      });



      describe("<LineGraphic />", () => {

        it("should return an h1 with 'hello' string", () => {

            const renderer = new ShallowRenderer();
            renderer.render(<LineGraphic />);
            const result = renderer.getRenderOutput();

            expect(result.type).toBe('div');

            ReactTestUtils.isElement(ReactTestUtils)
              });
        });

              describe("<Main />", () => {

                it("should return an h1 with 'hello' string", () => {

                    const renderer = new ShallowRenderer();
                    renderer.render(<Main />);
                    const result = renderer.getRenderOutput();

                    expect(result.type).toBe('div');

                    ReactTestUtils.isElement(ReactTestUtils)
                      });

                });

    describe("<GraphicCard />", () => {

      it("should return an h1 with 'hello' string", () => {

          const renderer = new ShallowRenderer();
          renderer.render(<GraphicCard />);
          const result = renderer.getRenderOutput();

          expect(result.type).toBe('div');
          ReactTestUtils.isElement(ReactTestUtils)
            });
      });
      describe("<SideBar />", () => {

        it("should return an h1 with 'hello' string", () => {

            const renderer = new ShallowRenderer();
            renderer.render(<SideBar />);
            const result = renderer.getRenderOutput();

            expect(result.type).toBe('nav');
            ReactTestUtils.isElement(ReactTestUtils)
              });
        });

      describe("<GameApp />", () => {

        it("should return an h1 with 'hello' string", () => {

            const renderer = new ShallowRenderer();
            renderer.render(<GameApp />);
            const result = renderer.getRenderOutput();

            expect(result.type).toBe('div');
            expect(result.props.children).toEqual([
                <SideBar />,
                <GameDashboard />
            ]);
              });
        });


describe("function Filtro", () => {

  it("teste filtro", () => {

      var filtro = Filtro("?name=Dota%202");

      expect(filtro.paramArray).toEqual("Dota 2");
        });
  });
