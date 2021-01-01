import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";

import TechnologyStackListItem from "./technology-stack-list-item";

export function TechnologyStackWeb() {
  return (
    <section className="text-center">
      <h3 className="text-4xl">Web</h3>

      <section className="my-4">
        <h4 className="text-3xl">Front-end</h4>
        <ul className="my-1">
          <TechnologyStackListItem>
            <svg className="h-5" viewBox="0 0 128 128">
              <path
                fill="#B3B3B3"
                d="M63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"
              />
              <path
                fill="#A6120D"
                d="M117.536 25.998l-53.864-18.369v112.785l45.141-24.983z"
              />
              <path
                fill="#DD1B16"
                d="M11.201 26.329l8.026 69.434 44.444 24.651v-112.787z"
              />
              <path
                fill="#F2F2F2"
                d="M78.499 67.67l-14.827 6.934h-15.628l-7.347 18.374-13.663.254 36.638-81.508 14.827 55.946zm-1.434-3.491l-13.295-26.321-10.906 25.868h10.807l13.394.453z"
              />
              <path
                fill="#B3B3B3"
                d="M63.671 11.724l.098 26.134 12.375 25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"
              />
            </svg>
            <span>Angular</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <img
              className="h-5"
              src="https://material.angular.io/assets/img/angular-material-logo.svg"
              alt="Angular Material Logo"
            />
            <span>Angular Material</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <svg
              className="h-5"
              viewBox="26.69 28.9 1173.9 1144.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m599.49 29.7c-2.2.1-10.5.8-18.5 1.4-100 7.4-201.4 44.4-284.5 103.8-27.5 19.6-49.2 38-73.4 62.2-139.1 139.2-196.4 338.4-152.9 531.9 17.8 79.4 55.8 159.3 106.2 223.5 79.1 100.9 187.5 172 309.1 202.8 49.5 12.6 90.6 17.7 142.5 17.7 51.2 0 88.9-4.6 137.7-16.5 70.1-17.2 131.7-45.5 193.3-88.6 59-41.4 113.9-99.4 153.3-161.9 50.8-80.8 79.7-170 86.8-267.9 1.5-20.6.6-71.6-1.6-92.6-4.4-41.7-15.6-96.7-22.1-108.2-2.6-4.5-9.9-10.3-15.3-12.2-1.9-.6-6.1-1.1-9.5-1.1-15 0-27.6 12.5-27.6 27.2 0 3.5 1.6 11.9 3.9 21 19.8 77 21.4 161.6 4.5 238.8-21.6 98.9-69.8 186.1-142.5 257.6-33.9 33.3-66.6 57.9-108.9 82.1-98.7 56.5-221.4 77.9-336.5 58.7-87.4-14.5-163.3-48.1-235.4-104.2-33.9-26.4-75.2-69.9-100.8-106.3-44.2-62.8-72-129-86.4-205.9-7.3-39.2-9.8-91.2-6.4-133.5 5.2-64.2 21.3-123.8 48.6-180.3 12.6-26.3 20.4-40 35.5-62.7 30.8-46.6 71.6-90.2 116.7-124.8 52.9-40.7 115.7-71.6 179.2-88.2 34.3-9 61.7-13.5 96.5-16 125.9-9 248.3 27.2 348 103.1 7.4 5.6 15.2 11.7 17.3 13.6l3.8 3.3-1.5 4.2c-7.7 21.6-2 48.5 14.2 67.3 8.3 9.6 23.3 18.6 36 21.6 8.7 2.1 23.8 2.1 32.6 0 22.3-5.3 43.1-24.4 49.7-45.6 7.4-23.7 3.1-47.1-12.1-66.1-16.8-21-45.7-30.4-72.4-23.4l-5.8 1.5-8.2-6.8c-33.3-27.9-73.6-53.7-116-74.2-68.8-33.3-137.9-51.2-216.6-56-15.1-.9-50.8-1.1-60.5-.3z" />
              <path d="m540.29 358.7c-10.6 27.4-33.6 87.4-51.3 133.3s-54 140.2-80.7 209.5c-26.6 69.3-48.7 126.3-48.9 126.7-.3.5 27.8.8 62.3.8h62.9l3.7-10.3c2.1-5.6 9.5-25.4 16.4-44l12.6-33.7h94.4c75.2 0 94.4-.3 94.1-1.3-1-2.7-16.4-46.7-24.6-70.2l-8.8-25-62.5-.5-62.4-.5 40.6-111.9c24.4-67.2 40.9-111.2 41.2-110.2.4.9 16.6 47 36.1 102.4s51.7 146.6 71.5 202.7l35.9 102 62.6.3c34.4.1 62.6 0 62.6-.2s-8.1-21.5-18.1-47.2c-10-25.8-31.4-81.3-47.6-123.4s-34.4-89.3-40.5-105c-6-15.7-16.5-42.9-23.3-60.5s-24.5-63.7-39.5-102.5-28.1-72.9-29.2-75.8l-1.9-5.2h-138.5z" />
            </svg>
            <span>Apollo</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <i className="devicon-bootstrap-plain colored" />
            <span>Bootstrap</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <svg className="h-5" viewBox="0 0 128 128">
              <path
                style={{ fill: "#64328B" }}
                d="M64,0C28.7,0,0,28.7,0,64v0c0,35.3,28.7,64,64,64s64-28.7,64-64v0C128,28.7,99.3,0,64,0z M13.2,64L64,114.8 C35.9,114.8,13.2,92.1,13.2,64z M75.4,113.5l-60.9-61C19.7,30,39.9,13.2,64,13.2c16.6,0,31.3,7.9,40.5,20.2l-7.5,7.2 C89.7,30.2,77.7,23.5,64,23.5c-17.6,0-32.5,11.2-38.1,26.8C33.1,57,75.4,98.8,78.1,102c12.7-4.7,22.3-15.5,25.4-28.9H81.9v-9.4 l33,0.2C114.8,88.2,98,108.4,75.4,113.5z"
              />
            </svg>
            <span>Gatsby</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <i className="devicon-jquery-plain colored" />
            <span>jQuery</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <path
                style={{ fill: "#1FA6CA" }}
                d="M0.2,68.6V13.4L48,41v18.4L16.1,41v36.8L0.2,68.6z"
              />
              <path
                style={{ fill: "#1C7FB6" }}
                d="M48,41l47.9-27.6v55.3L64,87l-16-9.2L80,59.4V41L48,59.4V41z"
              />
              <path
                style={{ fill: "#1FA6CA" }}
                d="M48,77.8v18.4L80,114.6V96.2L48,77.8z"
              />
              <path
                style={{ fill: "#1C7FB6" }}
                d="M80,114.6L127.8,87V50.2l-16,9.2v18.4L80,96.2V114.6z M111.9,41V22.6l16-9.2v18.4L111.9,41z"
              />
            </svg>
            <span>Material UI</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 298"
              className="h-5"
            >
              <g fill="none" fillRule="nonzero">
                <path
                  fill="#00C58E"
                  d="M227.92099 82.07407l-13.6889 23.7037-46.8148-81.08641L23.7037 273.58025h97.3037c0 13.0912 10.61252 23.7037 23.70371 23.7037H23.70371c-8.46771 0-16.29145-4.52017-20.5246-11.85382-4.23315-7.33366-4.23272-16.36849.00114-23.70174L146.89383 12.83951c4.23415-7.33433 12.0596-11.85252 20.5284-11.85252 8.46878 0 16.29423 4.51819 20.52839 11.85252l39.97037 69.23456z"
                />
                <path
                  fill="#2F495E"
                  d="M331.6642 261.7284l-90.05432-155.95062-13.6889-23.7037-13.68888 23.7037-90.04445 155.95061c-4.23385 7.33325-4.23428 16.36808-.00113 23.70174 4.23314 7.33365 12.05689 11.85382 20.5246 11.85382h166.4c8.46946 0 16.29644-4.51525 20.532-11.84955 4.23555-7.3343 4.23606-16.37123.00132-23.706h.01976zM144.7111 273.58024L227.921 129.48148l83.19012 144.09877h-166.4z"
                />
                <path
                  fill="#108775"
                  d="M396.04938 285.4321c-4.23344 7.33254-12.05656 11.85185-20.52345 11.85185H311.1111c13.0912 0 23.7037-10.6125 23.7037-23.7037h40.66173L260.09877 73.74815l-18.4889 32.02963-13.68888-23.7037L239.5753 61.8963c4.23416-7.33433 12.0596-11.85252 20.5284-11.85252 8.46879 0 16.29423 4.51819 20.52839 11.85252l115.41728 199.8321c4.23426 7.33395 4.23426 16.36975 0 23.7037z"
                />
              </g>
            </svg>
            <span>Nuxt</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 54 33"
              className="h-5"
            >
              <g clipPath="url(#prefix__clip0)">
                <path
                  fill="#06B6D4"
                  fillRule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="prefix__clip0">
                  <path fill="#fff" d="M0 0h54v32.4H0z" />
                </clipPath>
              </defs>
            </svg>
            <span>Tailwind CSS</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <i className="devicon-vuejs-plain colored" />
            <span>Vue</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <img
              src="https://cdn.vuetifyjs.com/images/logos/v.png"
              alt="Vuetify Logo"
              className="h-5"
            />
            <span>Vuetify</span>
          </TechnologyStackListItem>
        </ul>
      </section>

      <section className="my-4">
        <h4 className="text-3xl">Back-end</h4>
        <ul className="my-1">
          <TechnologyStackListItem>
            <i className="devicon-express-original colored" />
            <span>Express</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <FontAwesomeIcon
              icon={faLaravel}
              className="h-4 fill-current text-red-600"
            />
            <span>Laravel</span>
          </TechnologyStackListItem>
          <TechnologyStackListItem>
            <img
              className="h-5"
              src="https://flask.palletsprojects.com/en/1.1.x/_images/flask-logo.png"
              alt="Flask Logo"
            />
            <span>Flask</span>
          </TechnologyStackListItem>
        </ul>
      </section>
    </section>
  );
}
