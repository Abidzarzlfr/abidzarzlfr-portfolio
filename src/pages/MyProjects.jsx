import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";
import Fitclub from "../assets/myProjects/fitclub-mockup.png";
import Kelontong from "../assets/myProjects/kelontong-mockup.png";
import Sapatuku from "../assets/myProjects/sapatuku-mockup.png";
import Restaurant from "../assets/myProjects/restaurant-mockup.png";
import Pelita from "../assets/myProjects/pelita-mockup.jpg";
import Pentiing from "../assets/myProjects/pentiing-mockup.png";

export default function MyProjects() {
  return (
    <div className="myprojects-page mt-16">
      <div className="myprojects-title text-center mb-10">
        <Title value="My Projects"/>
      </div>
      <div className="myprojects-content flex-wrap flex gap-x-8 gap-y-4 flex-cols-3 justify-center">
        <Card img={Fitclub} title={"Fitclub"}/>
        <Card img={Pelita} title={"Pelita"}/>
        <Card img={Restaurant} title={"Restaurant"}/>
        <Card img={Kelontong} title={"Kelontong"}/>
        <Card img={Sapatuku} title={"Sapatuku"}/>
        <Card img={Pentiing} title={"Pentiing"}/>
      </div>
    </div>
  );
}
