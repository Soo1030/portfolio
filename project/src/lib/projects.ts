import rollingBounce from "@/assets/projects/rolling-bounce.png.asset.json";
import cheeseChase from "@/assets/projects/cheese-chase.png.asset.json";
import anaMuslim from "@/assets/projects/ana-muslim.png.asset.json";
import smartVillage from "@/assets/projects/smart-village.png.asset.json";
import bananaSeekers from "@/assets/projects/banana-seekers.png.asset.json";
import petrolHazard from "@/assets/projects/petrol-hazard.png.asset.json";
import animation3d from "@/assets/projects/animation-3d.png.asset.json";

import rollingBounceVid from "@/assets/videos/rolling-bounce.mp4.asset.json";
import cheeseChaseVid from "@/assets/videos/cheese-chase.mp4.asset.json";
import anaMuslimVid from "@/assets/videos/ana-muslim.mp4.asset.json";
import smartVillageVid from "@/assets/videos/smart-village.mp4.asset.json";
import bananaSeekersVid from "@/assets/videos/banana-seekers.mp4.asset.json";
import petrolHazardVid from "@/assets/videos/petrol-hazard.mp4.asset.json";
import animation1Vid from "@/assets/videos/animation-1.mp4.asset.json";
import animation2Vid from "@/assets/videos/animation-2.mp4.asset.json";

export type Project = {
  slug: string;
  title: string;
  engine: string;
  cover: string;
  tags: string[];
  short: string;
  description: string;
  videos: { url: string; label?: string }[];
};

export const projects: Project[] = [
  {
    slug: "rolling-bounce",
    title: "Rolling Bounce",
    engine: "Godot",
    cover: rollingBounce.url,
    tags: ["Godot", "Platformer", "2D"],
    short: "A platformer series where you control a bouncing red ball through challenging levels.",
    description:
      "Rolling Bounce is a platformer game series, revolving around the player controlling a ball and navigating through levels. The player controls a red ball using the four arrow keys on the keyboard. The game contains a few levels starting with an easy one progressing to hard. To pass each level, the red ball must go through all hoops and collect all the stars as progression. Objective: complete the level by surviving as long as you can.",
    videos: [{ url: rollingBounceVid.url, label: "Gameplay" }],
  },
  {
    slug: "cheese-chase",
    title: "Cheese Chase",
    engine: "Scratch",
    cover: cheeseChase.url,
    tags: ["Scratch", "Puzzle", "Arcade"],
    short: "A small Pac-Man-inspired puzzle game where a rat runs to eat cheese.",
    description:
      "Cheese Chase is a small puzzle game inspired by Pac-Man. Control the rat through a maze to eat as much cheese as possible while avoiding beetles and ghosts. Built entirely in Scratch as an introduction to game logic, collisions, and score systems.",
    videos: [{ url: cheeseChaseVid.url, label: "Gameplay" }],
  },
  {
    slug: "ana-muslim",
    title: "Ana Muslim: Nature Quest",
    engine: "GDevelop",
    cover: anaMuslim.url,
    tags: ["GDevelop", "Educational", "RPG"],
    short: "An educational RPG-adventure exploring nature with interactive math quizzes.",
    description:
      "Ana Muslim: Nature Quest is an educational RPG-adventure game where players explore beautiful environments and solve interactive quizzes. This scene represents a math-based learning puzzle that teaches counting and basic addition through engaging, nature-themed visuals.",
    videos: [{ url: anaMuslimVid.url, label: "Gameplay" }],
  },
  {
    slug: "smart-village",
    title: "Smart Village",
    engine: "HTML / CSS / Three.js",
    cover: smartVillage.url,
    tags: ["Three.js", "WebGL", "Simulation"],
    short: "A small simulation game about nature hazards built with web technologies.",
    description:
      "Smart Village is a small browser-based simulation game built with HTML, CSS and Three.js. Players build and upgrade an isometric village while managing resources and reacting to nature hazards, exploring the balance between sustainability and growth.",
    videos: [{ url: smartVillageVid.url, label: "Gameplay" }],
  },
  {
    slug: "banana-seekers",
    title: "Banana Seekers",
    engine: "C++ (Visual Studio 2022)",
    cover: bananaSeekers.url,
    tags: ["C++", "Adventure", "Console"],
    short: "A single-player adventure across five stages, ending with a survival boss fight.",
    description:
      "Banana Seekers is a single-player adventure divided into five stages. The first four levels focus on collecting bananas to unlock the exit, while the final level features a dedicated Boss Mode that shifts the gameplay to a survival combat challenge. Built in C++ using Visual Studio 2022 as a team project.",
    videos: [{ url: bananaSeekersVid.url, label: "Gameplay" }],
  },
  {
    slug: "petrol-hazard",
    title: "Petrol Hazard: The Last of Oil",
    engine: "Unreal Engine",
    cover: petrolHazard.url,
    tags: ["Unreal", "Game Jam", "3D"],
    short: "Game jam project with creative gameplay and immersive post-apocalyptic atmosphere.",
    description:
      "Petrol Hazard: The Last of Oil is a game jam project built in Unreal Engine. Focused on creative gameplay mechanics and an immersive post-apocalyptic atmosphere, developed under tight time constraints with a small team.",
    videos: [{ url: petrolHazardVid.url, label: "Gameplay" }],
  },
  {
    slug: "animation-3d",
    title: "3D Animation",
    engine: "Blender",
    cover: animation3d.url,
    tags: ["Blender", "3D", "Animation"],
    short: "A 3D animation exploring physics, lighting and destruction using Blender.",
    description:
      "A 3D animation created in Blender exploring rigid-body physics, dramatic lighting and destruction simulation. A red sphere shatters through brick walls in a cinematic, moody studio environment.",
    videos: [
      { url: animation1Vid.url, label: "Animation 1" },
      { url: animation2Vid.url, label: "Animation 2" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
