import React from "react";
import "./skillLanguage.css";
import { sLanguage } from "../../portfolio";
import { Fade } from "react-reveal";

const aiWorkTypes = [
    {
        title: "Training Code",
        description: "Python and PyTorch training scripts for computer vision models.",
    },
    {
        title: "YOLO Models",
        description: "YOLO weights, detection configs, and model outputs.",
    },
    {
        title: "Dataset / Labels",
        description: "Image datasets, annotations, and preprocessing workflow.",
    },
    {
        title: "Result Images",
        description: "Detection, classification, confusion matrix, and performance visuals.",
    },
    {
        title: "Demo Video",
        description: "Real-time detection or model demonstration video.",
    },
    {
        title: "Project Report",
        description: "Technical explanation, methodology, results, and documentation.",
    },
];

function AIWorkShowcase() {
    return (
        <div className="language-work-showcase">
            <div className="language-work-heading">
                <p>Combined Work Type</p>
                <h2>YOLO + Python + PyTorch</h2>
            </div>
            <div className="language-work-card">
                <div className="language-work-card-header">
                    <div>
                        <span>AI / Computer Vision Work</span>
                        <h3>Model Training, Detection, and Result Showcase</h3>
                    </div>
                    <strong>76%</strong>
                </div>
                <div className="language-work-links">
                    {aiWorkTypes.map((work) => {
                        return (
                            <span className="language-work-link is-pending" key={work.title}>
                                <strong>{work.title}</strong>
                                <small>{work.description}</small>
                                <em>Coming soon</em>
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function SkillLanguage(props) {
    if (sLanguage.viewSkillBars) {
        return (
            <Fade bottom duration={2000} distance="40px">
            <div className="lskills-heading">
                <h1>Language / Framework</h1>
            </div>
            <div className="lskills-container">
            <Fade left duration={1500}>
                <div className="lskills-bar">
                    
                    {sLanguage.experience.slice(0, Math.ceil(sLanguage.experience.length/2)).map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="lskill">
                            <div className="lskill-title-row">
                                <p>{exp.Stack}</p>
                                <span>{exp.progressPercentage}</span>
                            </div>
                            <div className="lmeter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </Fade>

            <Fade right duration={1500}>
                <div className="lskills-bar">
                    {sLanguage.experience.slice(Math.ceil(sLanguage.experience.length/2)).map((exp) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div className="lskill">
                            <div className="lskill-title-row">
                                <p>{exp.Stack}</p>
                                <span>{exp.progressPercentage}</span>
                            </div>
                            <div className="lmeter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </Fade>

            </div>
            <AIWorkShowcase />
            </Fade>
        );
    }
    return null;
}
