import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";

export default function MyProjects() {
  return (
    <div className="myprojects-page mt-16">
      <div className="myprojects-title text-center mb-10">
        <Title value="My Projects"/>
      </div>
      <div className="myprojects-content flex-wrap flex gap-x-8 gap-y-4 flex-cols-3 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
