import React from 'react';

function Modal() {
  return (
    <div class="w-[380px] h-44 p-4 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
      <div class="self-stretch justify-start items-start gap-4 inline-flex">
        <div class="grow shrink basis-0 text-gray-800 text-base font-bold font-['Open Sans'] leading-normal">
          Headline
        </div>
      </div>
      <div class="self-stretch text-gray-800 text-base font-normal font-['Open Sans'] leading-normal">
        Text
      </div>
      <div class="w-2 h-2 relative">
        <div class="w-2 h-2 left-0 top-0 absolute shadow"></div>
      </div>
      <div class="self-stretch justify-start items-start inline-flex">
        <div class="grow shrink basis-0 h-7"></div>
        <div class="justify-start items-start flex">
          <div class="px-2 py-1.5 bg-indigo-500 rounded-lg border border-indigo-500 justify-center items-center flex">
            <div class="px-2 py-0.5 justify-start items-start gap-2 flex">
              <div class="text-white text-sm font-semibold font-['Open Sans'] leading-normal">
                Label
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
