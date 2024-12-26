import React from "react";
import styles from "./Experience.module.css";
import skills from "../../Data/Skill.json";
import historyData from "../../Data/History.json";
import swiftImage from "../../Assets/Skills/swift.png";
import JSImage from "../../Assets/Skills/js.png";
import reactImage from "../../Assets/Skills/react.png";
import pythonImage from "../../Assets/Skills/python_2.png";
import CImage from "../../Assets/Skills/csharp.png";
import railsImage from "../../Assets/Skills/rails.svg";
import ruby from "../../Assets/Skills/ruby.png";
import gitImage from "../../Assets/Skills/git_icon.png";
import unityImage from "../../Assets/Skills/unity_logo.png";
import trenditImage from "../../Assets/Skills/trendit_img.png";
import typescript from "../../Assets/Skills/typescript_logo.svg.png";
import openai from "../../Assets/Skills/openai.png";
import evryImage from "../../Assets/Skills/ej.png";
import liquid from "../../Assets/Skills/liquid.png";

const getImage = (imageSrc) => {
  switch (imageSrc) {
    case "Skills/swift.png":
      return swiftImage;
    case "Skills/js.png":
      return JSImage;
    case "Skills/react.png":
      return reactImage;
    case "Skills/python.png":
      return pythonImage;
    case "Skills/csharp.png":
      return CImage;
    case "Skills/typescript_logo.svg.png":
      return typescript;
    case "Skills/rails.svg":
      return railsImage;
    case "Skills/ruby.png":
      return ruby;
    case "Skills/git_icon.png":
      return gitImage;
    case "Skills/unity.svg":
      return unityImage;
    case "Skills/trendit_img.png":
      return trenditImage;
    case "Skills/openai.png":
      return openai;
      case "Skills/ej.png":
        return evryImage;
      case "Skills/liquid.png":
        return liquid;
    default:
      return null;
  }
};

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>
        My Experience
      </h2>
      <div className={styles.gridContainer}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, skillId) => (
            <div key={skillId} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={getImage(skill.imageSrc)} alt={skill.title} />
              </div>
              <p className={styles.cardTitle}>{skill.title}</p>
            </div>
          ))}
        </div>
        {/* History Section */}
        <div className={styles.history}>
          {historyData.map((historyItem, historyId) => (
            <div key={historyId} className={styles.historyCard}>
              <div className={styles.historyCardHeader}>
                <img
                  src={getImage(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div>
                  <h3>{historyItem.role}</h3>
                  <p>{historyItem.organisation}</p>
                  <span>
                    {historyItem.startDate} - {historyItem.endDate}
                  </span>
                </div>
              </div>
              <ul>
                {historyItem.experiences.map((experience, id) => (
                  <li key={id}>{experience}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
