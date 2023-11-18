import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./sticky.css";

import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

export default function Alumani() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const firstDiv = document.getElementById("firstDiv");
    const secondDiv = document.getElementById("secondDiv");

    if (firstDiv && secondDiv) {
      const rect = firstDiv.getBoundingClientRect();

      if (rect.bottom <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          {/* Left Column */}
          <div id="leftCol" className={isSticky ? "sticky" : ""}>
            {/* Content */}kjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkjkj
            <p>
              ssssssssssssssssssssssssssssssssssssssssssssssssss Left
              Cotoday:08.08.2023 exam aasaan hai TCS from namaste javascript
              TCS: 11:21 AM 08-08-2023 Es6 features,
              (https://www.boardinfinity.com/blog/top-10-features-of-es6/),
              Middleware, Error handling, Callback hell, Async promise, Call,
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              08-08-2023 ES6 routing middleware set time Out return the capitial
              word from string using function mindtree javascript- 11:20 AM
              08-08-2023 es6 use strict code spread operator /rest join string
              operator reduce method promice ,rest operator output test node js
              test case callback and node working middle ware routing validTION
              error handling lumn
            </p>
          </div>
        </Col>
        <Col md={4}>
          {/* Middle Column */}
          <div id="firstDiv">
            {/* Content */}
            <p>
              Firtoday:08.08.2023 exam aasaan hai TCS from namaste javascript
              TCS: 11:21 AM 08-08-2023 Es6 features,
              (https://www.boardinfinity.com/blog/top-10-features-of-es6/),
              Middleware, Error handling, Callback hell, Async promise, Call,
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              08-08-2023 ES6 routing middleware set time Out return the capitial
              word from string using function mindtree javascript- 11:20 AM
              08-08-2023 es6 use strict code spread operator /rest join string
              operator reduce method promice ,rest operator output test node js
              test case callback and node working middle ware routing validTION
              error handling st Div
            </p>
            {/* Content */}
          </div>
          <div id="secondDiv">
            {/* Content */}
            <p>
              Secotoday:08.08.2023 exam aasaan hai TCS from namaste javascript
              TCS: 11:211 AM 08-08-2023 Es6 features,
              (https://www.boardinfinity.com/blog/top-10-features-of-es6/),
              Middleware, Error handling, Callback hell, Async promise, Call,
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              08-08-2023 ES6 routing middleware set time Out return the capitial
              word from string using function mindtree javascript- 11:20 A1 AM
              08-08-2023 Es6 features,
              (https://www.boardinfinity.com/blog/top-10-features-of-es6/),
              Middleware, Error handling, Callback hell, Async promise, Call,
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              08-08-2023 ES6 routing middleware set time Out return the capitial
              word from string using function mindtree javascript- 11:20 A1 AM
              08-08-2023 Es6 features,
              (https://www.boardinfinity.com/blog/top-10-features-of-es6/),
              Middleware, Error handling, Callback hell, Async promise, Call,
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              08-08-2023 ES6 routing middleware set time Out return the capitial
              word from string using function mindtree javascript- 11:20 A AM
              08-08-2023 Es6 features,
              (https://www.boardinfinity.com/blog/top-10-features-of-es6/),
              Middleware, Error handling, Callback hell, Async promise, Call,
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              08-08-2023 ES6 routing middleware set time Out return the capitial
              word from string using function mindtree javascript- 11:20 AM
              08-08-2023 es6 use strict code spread operator /rest join string
              operator reduce method promice ,rest operator output test node js
              test case callback and node working middle ware routing validTION
              error handling nd Div
            </p>
            {/* Content */}
          </div>
        </Col>
        <Col md={4}>
          {/* Right Column */}
          <div id="rightCol">
            {/* Content */}
            <p>
              Rigght today:08.08.2023 exam aasaan hai TCS from namaste
              javascript TCS: 11:21 AM 08-08-2023 Es6 features,
              (https://www.boardinfinity.com/blog/top-10-features-of-es6/),
              Middleware, Error handling, Callback hell, Async promise, Call,
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              08-08-2023 ES6 routing middleware set time Out return the capitial
              word from string using function mindtree javascript- 11:20 AM
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join
              stringght today:08.08.2023 exam aasaan hai TCS from namaste
              javascript TCS: 11:21 AM 08-08-2023 Es6 features,
              (https://www.boardinfinity.com/blog/top-10-features-of-es6/),
              Middleware, Error handling, Callback hell, Async promise, Call,
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              08-08-2023 ES6 routing middleware set time Out return the capitial
              word from string using function mindtree javascript- 11:20 AM
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join stringht
              today:08.08.2023 exam aasaan hai TCS from namaste javascript TCS:
              11:21 AM 08-08-2023 Es6 features,
              (https://www.boardinfinity.com/blog/top-10-features-of-es6/),
              Middleware, Error handling, Callback hell, Async promise, Call,
              bind, apply, Rest and soap api, Put and patch method PWC: 11:20 AM
              08-08-2023 ES6 routing middleware set time Out return the capitial
              word from string using function mindtree javascript- 11:20 AM
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              08-08-2023 es6 use strict code spread operator /rest join string
              operator reduce method promice ,rest operator output test node js
              test case callback and node working middle ware routing validTION
              error handling Column
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
