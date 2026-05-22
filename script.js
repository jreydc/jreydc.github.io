const header = document.querySelector("[data-elevate]");
const featuredVideo = document.querySelector("#featured-video");
const featuredTitle = document.querySelector("#featured-title");
const featuredCategory = document.querySelector("#featured-category");
const featuredDescription = document.querySelector("#featured-description");
const videoGrid = document.querySelector("#video-grid");
const filterChips = document.querySelectorAll("[data-filter]");

const demoVideos = [
  {
    title: "Initial WalkThrough Start To GameOver",
    project: "Sabong",
    category: "Game Systems",
    description: "Gameplay walkthrough showing the first pass from start flow through game over.",
    src: "assets/videos/_Sabong/Initial-WalkThrough-Start-To-GameOver.mp4",
  },
  {
    title: "UI Implementation and GameManager",
    project: "Sabong",
    category: "UI and Product",
    description: "User interface implementation connected with core game state management.",
    src: "assets/videos/_Sabong/UI Implementation and GameManager.mp4",
  },
  {
    title: "AI Behaviour Data Structure",
    project: "Sabong",
    category: "Game Systems",
    description: "AI behavior structure work for gameplay decision flow and tuning.",
    src: "assets/videos/_Sabong/AIBehaviour-Data-Structure.mp4",
  },
  {
    title: "Implemented Animation Transition",
    project: "Sabong",
    category: "VFX and Feel",
    description: "Animation transition work for smoother character and combat feedback.",
    src: "assets/videos/_Sabong/Implemented-Animation-Transition.mp4",
  },
  {
    title: "Initial Animation Implementation",
    project: "Sabong",
    category: "VFX and Feel",
    description: "First animation implementation pass for the combat prototype.",
    src: "assets/videos/_Sabong/Initial-Implementation-Animation.mp4",
  },
  {
    title: "Initial Fighting Tweak",
    project: "Sabong",
    category: "Game Systems",
    description: "Combat tuning pass focused on early fighting behavior and pacing.",
    src: "assets/videos/_Sabong/Initial-Fighting-Tweak.mp4",
  },
  {
    title: "Fighting Tweaks Based On Comments",
    project: "Sabong",
    category: "Game Systems",
    description: "Iteration pass applying combat feel and behavior feedback.",
    src: "assets/videos/_Sabong/FightingTweaksBasedOn-Eco-Comments.mp4",
  },
  {
    title: "Initial Game Over Implementation",
    project: "Sabong",
    category: "UI and Product",
    description: "Game over state and interface implementation for the prototype loop.",
    src: "assets/videos/_Sabong/Initial Sabong GameOver Implementation.mp4",
  },
  {
    title: "Game Over Issue Workaround",
    project: "Sabong",
    category: "Game Systems",
    description: "Bug workaround and flow correction for game over handling.",
    src: "assets/videos/_Sabong/WorkAround-GameOver-Issue.mp4",
  },
  {
    title: "Game Feel Task NonHDRP",
    project: "Hopscotch Games",
    category: "VFX and Feel",
    description: "Game feel adjustments in a Unity sample scene using non-HDRP rendering.",
    src: "assets/videos/HopscotchGamesTaskVideo/Game Feel Task NonHDRP - SampleScene.mp4",
  },
  {
    title: "Player Movement Teaching Demo",
    project: "Tutorial Player Movement",
    category: "Game Systems",
    description: "Teaching demo showing player movement implementation in Unity.",
    src: "assets/videos/Tutorial-PlayerMovement/CIITTeachDemoVid.mp4",
  },
  {
    title: "Winning Messages UI Detail Arrangements",
    project: "Hijack Poker",
    category: "UI and Product",
    description: "Winning message UI polish and layout refinement for poker result states.",
    src: "assets/videos/_HijackPoker/Winning Messages UI winning detail arrangements.mp4",
  },
  {
    title: "Menu UI Arrangements and Loading Transitions",
    project: "Hijack Poker",
    category: "UI and Product",
    description: "Menu arrangement and loading transition work for a smoother product flow.",
    src: "assets/videos/_HijackPoker/Menu UI Arrangements and Loading Transitions.mp4",
  },
  {
    title: "Card Strength Indicator Pre-Flop Event",
    project: "Hijack Poker",
    category: "Game Systems",
    description: "Card strength indicator behavior for pre-flop poker interaction states.",
    src: "assets/videos/_HijackPoker/Card Strength Indicator - Pre-Flop event.mp4",
  },
  {
    title: "Android Build Capture",
    project: "Hijack Poker",
    category: "UI and Product",
    description: "Unity Android build capture showing live interface behavior.",
    src: "assets/videos/_HijackPoker/unity - Main - Android - Unity 2021.3.11f1 Personal _DX11_ 2023-06-27 22-37-35.mp4",
  },
  {
    title: "Missing Dealer Button Issue",
    project: "Hijack Poker",
    category: "UI and Product",
    description: "Issue reproduction and UI pass for a missing dealer button state.",
    src: "assets/videos/_HijackPoker/MOB-438-missing-dealer-button-issue.mp4",
  },
  {
    title: "Display Overlapping Issue",
    project: "Hijack Poker",
    category: "UI and Product",
    description: "Layout issue capture for overlapping mobile display elements.",
    src: "assets/videos/_HijackPoker/MOB-234-display-overlapping.mp4",
  },
  {
    title: "Game Spotlight Issue Other Table",
    project: "Hijack Poker",
    category: "UI and Product",
    description: "Spotlight issue capture involving table state and visual focus.",
    src: "assets/videos/_HijackPoker/game-spotlight-issue-other-table.mp4",
  },
  {
    title: "Display Overlapping Infos",
    project: "Hijack Poker",
    category: "UI and Product",
    description: "Information display overlap pass for poker table interface elements.",
    src: "assets/videos/_HijackPoker/display-overlapping-infos.mp4",
  },
  {
    title: "Detail Arrangements of Capsules",
    project: "Hijack Poker",
    category: "UI and Product",
    description: "Capsule detail arrangement and spacing work for the poker interface.",
    src: "assets/videos/_HijackPoker/Detail Arrangements of Capsules.mp4",
  },
  {
    title: "Turn-Based Level Design",
    project: "Engkanto Fantasy",
    category: "Game Systems",
    description: "Turn-based level design pass for a folklore-inspired tactical game.",
    src: "assets/videos/Engkanto Fantasy/Turn-based_LevelDesign.mp4",
  },
  {
    title: "Active Player Indicator",
    project: "Engkanto Fantasy",
    category: "UI and Product",
    description: "Turn-based active player indicator implementation for clearer combat turns.",
    src: "assets/videos/Engkanto Fantasy/Turn-basedSystem_ActivePlayerIndicator.mp4",
  },
  {
    title: "Health System Damage Pop Ups",
    project: "Engkanto Fantasy",
    category: "Game Systems",
    description: "Health system feedback with damage pop-up implementation.",
    src: "assets/videos/Engkanto Fantasy/HealthSystem_DamagePopUps.mp4",
  },
  {
    title: "Outfit Changer System",
    project: "Engkanto Fantasy",
    category: "Game Systems",
    description: "Character outfit changer system implementation for customization workflows.",
    src: "assets/videos/Engkanto Fantasy/OutfitChangerSystem.mp4",
  },
  {
    title: "Initial Animation Implementation",
    project: "Engkanto Fantasy",
    category: "VFX and Feel",
    description: "Initial animation implementation for character and combat presentation.",
    src: "assets/videos/Engkanto Fantasy/InitialAnimationImplementation.mp4",
  },
  {
    title: "Initial Turn-Based System Implementation",
    project: "Engkanto Fantasy",
    category: "Game Systems",
    description: "First implementation pass for turn order and combat interaction systems.",
    src: "assets/videos/Engkanto Fantasy/InitialTurnBasedSystemImplementation.mp4",
  },
  {
    title: "Splice FX",
    project: "Engkanto Fantasy",
    category: "VFX and Feel",
    description: "Sample visual effect implementation for combat and skill presentation.",
    src: "assets/videos/Engkanto Fantasy/Sample VFX Implementation/SpliceFX.mp4",
  },
  {
    title: "Splash FX",
    project: "Engkanto Fantasy",
    category: "VFX and Feel",
    description: "Sample splash effect implementation for game feedback and impact.",
    src: "assets/videos/Engkanto Fantasy/Sample VFX Implementation/SplashFX.mp4",
  },
  {
    title: "Rays FX",
    project: "Engkanto Fantasy",
    category: "VFX and Feel",
    description: "Sample ray effect implementation for skill and combat visuals.",
    src: "assets/videos/Engkanto Fantasy/Sample VFX Implementation/RaysFX.mp4",
  },
  {
    title: "Configurator 3D Comparison",
    project: "Configurator",
    category: "UI and Product",
    description: "3D configurator comparison flow for product visualization.",
    src: "assets/videos/Configurator/3DComparison.mp4",
  },
  {
    title: "Configurator How To Run",
    project: "Configurator",
    category: "Software",
    description: "Project run-through showing setup and launch behavior.",
    src: "assets/videos/Configurator/How To Run.mp4",
  },
  {
    title: "Configurator Initial Implementation",
    project: "Configurator",
    category: "Software",
    description: "Initial implementation pass for the product configurator experience.",
    src: "assets/videos/Configurator/InitialImplementation.mp4",
  },
  {
    title: "TeleCareline Bootstrap Implementation",
    project: "TeleCareline Frontend",
    category: "Software",
    description: "Frontend structure and Bootstrap implementation for a careline interface.",
    src: "assets/videos/TeleCareline-Frontend/Bootstrap Implementation.mp4",
  },
  {
    title: "TeleCareline Initial Structure",
    project: "TeleCareline Frontend",
    category: "Software",
    description: "Initial frontend structure pass for the TeleCareline interface.",
    src: "assets/videos/TeleCareline-Frontend/Initial Structure.mp4",
  },
  {
    title: "TeleCareline Navbar Styling",
    project: "TeleCareline Frontend",
    category: "UI and Product",
    description: "Navigation styling and layout polish for the TeleCareline frontend.",
    src: "assets/videos/TeleCareline-Frontend/Navbar styling.mp4",
  },
  {
    title: "DeTiled Gameplay Capture",
    project: "DeTiled",
    category: "Game Systems",
    description: "Unity gameplay capture from a PC standalone build.",
    src: "assets/videos/DeTiled/DeTiled - MainGameScene - PC, Mac & Linux Standalone - Unity 2019.4.38f1 Personal _DX11_ 2022-10-21 10-16-52.mp4",
  },
  {
    title: "SpaceShooters Gameplay",
    project: "SpaceShooters",
    category: "Game Systems",
    description: "Core gameplay demo for an arcade shooter project.",
    src: "assets/videos/SpaceShootersCoreGameplay/SpaceShooters-Gameplay.mp4",
  },
  {
    title: "Gamified Quiz Game",
    project: "Lampara",
    category: "Software",
    description: "Gamified quiz implementation for educational gameplay.",
    src: "assets/videos/Lampara/GamifiedQuizGame.mp4",
  },
  {
    title: "Payroll Summary Update",
    project: "Payroll System",
    category: "Software",
    description: "Payroll summary update flow for operational management software.",
    src: "assets/videos/PayrollSystem/PayrollSummaryUpdate.mp4",
  },
];

let selectedVideo = demoVideos[0];

function syncHeader() {
  header.classList.toggle("is-elevated", window.scrollY > 24);
}

function updateFeatured(video, shouldPlay = false) {
  selectedVideo = video;
  featuredVideo.src = video.src;
  featuredTitle.textContent = video.title;
  featuredCategory.textContent = video.project;
  featuredDescription.textContent = video.description;

  document.querySelectorAll(".video-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.src === video.src);
  });

  if (shouldPlay) {
    featuredVideo.play().catch(() => {});
  }
}

function renderVideos(filter = "all") {
  if (!videoGrid) {
    return;
  }

  const videos = filter === "all"
    ? demoVideos
    : demoVideos.filter((video) => video.category === filter);

  videoGrid.innerHTML = "";

  videos.forEach((video) => {
    const card = document.createElement("button");
    card.className = "video-card";
    card.type = "button";
    card.dataset.src = video.src;
    card.innerHTML = `
      <span class="video-card-top">
        <span class="video-pill">${video.project}</span>
        <span class="play-mark" aria-hidden="true">Play</span>
      </span>
      <h3>${video.title}</h3>
      <p>${video.description}</p>
    `;
    card.addEventListener("click", () => updateFeatured(video, true));
    videoGrid.appendChild(card);
  });

  if (!videos.includes(selectedVideo) && videos.length > 0) {
    updateFeatured(videos[0]);
  } else {
    updateFeatured(selectedVideo);
  }
}

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((item) => item.classList.remove("is-active"));
    chip.classList.add("is-active");
    renderVideos(chip.dataset.filter);
  });
});

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();
renderVideos();
