import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "./styles.css";

const topicArray = [
  [
    {
      title: "科创",
      data: "+4.35%"
    },
    {
      title: "非银金融",
      data: "+4.25%"
    },
    { title: "白酒消费", data: "+3.35%" },
    { title: "5G", data: "+1.35%" },
    { title: "超导", data: "+2.35%" }
  ],
  [
    {
      title: "科创",
      data: "+4.35%"
    },
    {
      title: "非银金融",
      data: "+14.25%"
    },
    { title: "白酒消费", data: "+3.35%" },
    { title: "5G", data: "+10.35%" },
    { title: "超导", data: "+2.35%" }
  ],
  [
    {
      title: "科创",
      data: "+4.35%"
    },
    {
      title: "非银金融",
      data: "+4.25%"
    },
    { title: "白酒消费", data: "+9.35%" },
    { title: "5G", data: "+1.35%" },
    { title: "超导", data: "+2.35%" }
  ],
  [
    {
      title: "科创",
      data: "+24.35%"
    },
    {
      title: "非银金融",
      data: "+14.25%"
    },
    { title: "白酒消费", data: "+3.15%" },
    { title: "5G", data: "+3.35%" },
    { title: "超导", data: "+7.35%" }
  ],
  [
    {
      title: "科创",
      data: "+3.35%"
    },
    {
      title: "非银金融",
      data: "+4.25%"
    },
    { title: "白酒消费", data: "+6.35%" },
    { title: "5G", data: "+1.35%" },
    { title: "超导", data: "+5.35%" }
  ]
];

render(<App />, document.getElementById("root"));
