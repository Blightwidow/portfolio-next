import * as React from "react"
import Head from "next/head"

import { Spacer } from "@/ui/shared/Spacer"

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - Theo Dammaretz</title>
      </Head>
      <h1>RESUME</h1>
      <p>I am a Senior Software and Frontend Engineer with more than 6 years of experience.</p>
      <h2>Experience</h2>
      <div className="spine">
        <div className="row">
          <div className="three columns">
            <p>
              <span>Senior Frontend engineer</span>
              <br />
              at Alan
              <br />
              2021 - Now
            </p>
          </div>
          <div className="three columns">
            <p>
              <span>Senior Frontend engineer</span>
              <br />
              at TheFork
              <br />
              2018 - 2021
            </p>
          </div>
          <div className="three columns">
            <p>
              <span>Fullstack engineer</span>
              <br />
              at Boston Consulting
              <br />
              2017 - 2018
            </p>
          </div>
        </div>
        <div className="row">
          <div className="three columns">
            <p>
              <span>Fullstack engineer</span>
              <br />
              at Le Courrier de Russie
              <br />
              2016 - 2017
            </p>
          </div>
          <div className="three columns">
            <p>
              <span>Research engineer</span>
              <br />
              at Tohoku University
              <br />
              Z2015 - 2016
            </p>
          </div>
        </div>
      </div>
      <h2>Languages</h2>
      <div className="spine">
        <div className="row">
          <div className="three columns">
            <p>
              Fluent
              <br />
              <span>fr-FR</span> French
              <br />
              <span>en-US</span> English
            </p>
          </div>
          <div className="three columns">
            <p>
              Notions
              <br />
              <span>ru-RU</span> Russian
              <br />
              <span>ja-JP</span> Japanese
            </p>
          </div>
        </div>
      </div>
      <h2>Skills</h2>
      <div className="row">
        <div className="three columns">
          <p>Frontend development, Software engineering</p>
        </div>
        <div className="three columns">
          <p>React, Node, Jest, Cypress</p>
        </div>
        <div className="three columns">
          <p>Progressive Web Apps, Service Workers</p>
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <p>Conference, Articles, Community animation</p>
        </div>
      </div>
      <h2>Hobbies</h2>
      <div className="row">
        <div className="three columns">
          <p>
            HomeBrewing beer
            <br />
            Video games
            <br />
            Mountain hiking
          </p>
        </div>
        <div className="three columns">
          <p>
            AI
            <br />
            Keyboards
            <br />
            Skiing
          </p>
        </div>
      </div>
      <style jsx>{`
        span {
          color: rgb(var(--primary-color-rgb));
        }
        .spine {
          border-left: 1px solid rgb(var(--primary-color-rgb));
          padding-left: 1rem;
        }
        @media (min-width: 550px) {
          .spine {
            border-left: none;
            padding-left: 0;
          }
        }
      `}</style>
    </>
  )
}

