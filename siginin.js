import { OAuth } from "./fakeData";

const oatuhContainer = document.querySelector(".oauth__container");
console.log(oatuhContainer);

const renderOAuth = () => {
  let html = ``;
  OAuth.forEach((x) => {
    html = `  
            <div class="w-full">
              <button
                class="border-solid border-[1px] border-[rgb(212,212,212)] rounded-md p-3 flex items-center w-full bg-white mb-3 hover:bg-[rgb(245,245,245)]"
              >
                <div>${x.Svg}</div>
                <div class="w-full font-bold">Continue with ${x.Company}</div>
              </button>
            </div>
  `;
    oatuhContainer.innerHTML += html;
  });
};
renderOAuth();
