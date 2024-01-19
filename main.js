"use strict";
import { posts, tags } from "./fakeData";

const trendingPost = document.querySelector(".trending__post");
const containerTag = document.querySelector(".container__tag");
const containerPost = document.querySelector(".container__post");
const mainSlider = document.querySelector(".main__slider");
const trendingPostContainer = document.querySelector("section");
const header = document.querySelector(".header");
let isCatched = false;
console.log(mainSlider);
console.log(header);
console.log(trendingPostContainer);

const RenderTredingPost = () => {
  let html = "";
  for (let i = 0; i < 6; i++) {
    const post = posts[i];
    html += `<div class="flex max-w-[50%] md:max-w-[33.33%] pr-4 mb-6 w-full">
    <div class="flex w-10 flex-grow-0 flex-shrink-0 top-[-10px] mr-4">
      <span class="text-black opacity-50 font-bold leading-9 text-3xl"
        >0${i + 1}</span
      >
    </div>
    <div class="flex flex-col">
      <div class="mb-2 flex items-center">
      <div class="w-5 h-5 mr-2">
      <img class="rounded-sm" src="./avatar.jpg" alt="" />
    </div>
        <p class="font-semibold text-xs">
          ${post.author}
        </p>
        <span class="text-xs opacity-65 mx-1"> in </span>
        <p class="font-semibold text-xs">
          ${post.location}
        </p>
      </div>
      <div class="mb-2">
        <p class="font-bold text-wrap">
          ${post.title}
        </p>
      </div>
      <div class="flex items-center text-xs">
        <span>${post.datetime}</span>
        <div class="px-2 flex items-center">
          <span class="leading-5 text-[#6B6B6B]">.</span>
        </div>
        <span>${33 * i + 1 * 0.5} min read</span>
      </div>
    </div>
  </div>`;
  }
  trendingPost.innerHTML = html;
};
const RenderTag = () => {
  let html = ``;
  tags.forEach((t) => {
    html += `  <div class="btn__tag flex items-center justify-center mb-3 mr-2">
    <span class="font-normal">${t}</span>
  </div>`;
  });
  containerTag.innerHTML = html;
};

const RenderPost = () => {
  let html = ``;
  posts.forEach((p) => {
    html += `
<div class="flex justify-between mb-12">
<div class="flex flex-col w-8/12">
  <div class="mb-2 flex items-center">
  <div class="w-5 h-5 mr-2">
  <img class="rounded-sm" src="./avatar.jpg" alt="" />
</div>
  <p class="font-semibold text-xs">
  ${p.author}
</p>
<span class="text-xs opacity-65 mx-1"> in </span>
<p class="font-semibold text-xs">
  ${p.location}
</p>
  </div>
  <div class="mb-2">
    <p class="font-bold text-wrap">
      ${p.title}
    </p>
  </div>
  <div>
    <p>
     ${p.content}
    </p>
  </div>
  <div class="flex items-center text-xs">
    <span>${p.datetime}</span>
    <div class="px-2 flex items-center">
      <span class="leading-5 text-[#6B6B6B]">.</span>
    </div>
    <span>14 min read</span>
  </div>
</div>
<div class="h-full w-4/12">
  <img class="w-48 h-32" src="/post.jpg" alt="" />
</div>
</div>

`;
  });
  containerPost.innerHTML = html;
};

const updateHeaderStyle = () => {
  header.style.backgroundColor = isCatched ? "#111111" : "transparent";
};

const catchingSlider = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  isCatched = !isCatched;
  console.log(isCatched);
  updateHeaderStyle();
  trendingPostContainerObserver.observe(trendingPostContainer);
  observer.unobserve(entry.target);
};

const catchingTrendingPost = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  isCatched = !isCatched;
  updateHeaderStyle();
  sliderObserver.observe(mainSlider);
  observer.unobserve(entry.target);
};

const sliderObserver = new IntersectionObserver(catchingSlider, {
  threshold: 1,
  root: null,
});

const trendingPostContainerObserver = new IntersectionObserver(
  catchingTrendingPost,
  {
    threshold: 0.05,
    root: null,
  }
);
trendingPostContainerObserver.observe(trendingPostContainer);

RenderTredingPost();
RenderTag();
RenderPost();
