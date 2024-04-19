export default function Home() {
  return (
    <>
      <div>
        <div>TailwindCss 공부</div>

        <div className="space-y-8 bg-blue-400">
          <div className="w-96 bg-white shadow rounded">w-96</div>
          <div className="w-80 bg-white shadow rounded">w-80</div>
        </div>

        {/* Color 숫자가 같으면 더 우선순위 가 높은 것으로 적용. */}
        <div className="w-10 h-10 bg-blue-500 bg-red-500"></div>
        <br />
        <div className="w-10 h-10 bg-red-500 bg-blue-500"></div>
      </div>
      {/* // 폰트 사이즈 */}
      <div className="space-y-5">
        <div className="p-3 bg-white shadow rounded-lg">
          <h3 className="text-xs border-b">font-sans</h3>
          <p className="font-sans">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div className="p-3 bg-white shadow rounded-lg">
          <h3 className="text-xs border-b">font-serif</h3>
          <p className="font-serif">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div className="p-3 bg-white shadow rounded-lg">
          <h3 className="text-xs border-b">font-mono</h3>
          <p className="font-mono">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        {/* 박스 쉐도우 */}
        <div className="grid grid-cols-2 gap-6">
          <div className="shadow-sm bg-white rounded-lg">shadow-sm</div>
          <div className="shadow bg-white rounded-lg">shadow</div>
          <div className="shadow-md bg-white rounded-lg">shadow-md</div>
          <div className="shadow-lg bg-white rounded-lg">shadow-lg</div>
          <div className="shadow-xl bg-white rounded-lg">shadow-xl</div>
          <div className="shadow-2xl bg-white rounded-lg">shadow-2xl</div>
        </div>
        {/* 마진,패딩, 텍스트 컬러 */}
        <div className="p-3 bg-white shadow rounded-lg">
          <div className="text-base text-red-500">hello world</div>
          <div className="text-lg">hello world</div>
          <div className="text-2xl">hello world</div>
          <div className="text-2xl p-3">hello world</div>
          <div className="text-2xl pt-3">hello world</div>
          <div className="text-2xl mt-3 mb-3">hello world</div>
          <div className="text-2xl my-3">my-3</div>
        </div>
        <div className="p-5">
          <ul>
            <li>hello world</li>
            <li>hello world</li>
            <li>hello world</li>
            <li>hello world</li>
            <li>hello world</li>
          </ul>
        </div>
      </div>
      <div className="p-5">
        <ul className="list-decimal">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            fugiat libero nulla tempore doloremque obcaecati minus molestiae
            asperiores cumque esse sit est, commodi quaerat ex minima.
            Reprehenderit consequatur dignissimos autem?
          </li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
        </ul>
      </div>
      <div className="w-32 h-32 bg-red-400"></div>
      <br />
      <div className="w-32 h-32 bg-red-400 rounded"></div>
      <br />
      <div className="w-32 h-32 bg-red-400 rounded-2xl"></div>
      <br />
      <div className="w-32 h-32 bg-red-400 rounded-full"></div>

      <div className="text-[17px]">hello world</div>
      <div className="mt-[17px]">hello world</div>
      <div className="bg-[#426782] text-white">hello world</div>

      {/*flex & grid */}
      <div>
        <div className="flex border-4 border-red-300 m-3">
          <div className="p-2 border-4 border-blue-500">1 hello</div>
          <div className="p-2 border-4 border-blue-500">1 hello</div>
          <div className="p-2 border-4 border-blue-500">1 hello</div>
          <div className="p-2 border-4 border-blue-500">1 hello</div>
          <div className="p-2 border-4 border-blue-500">1 hello</div>
        </div>

        <div className="flex flex-col border-4 border-red-300 m-3">
          <div className="p-2 border-4 border-blue-500">3 hello</div>
          <div className="p-2 border-4 border-blue-500">3 hello</div>
          <div className="p-2 border-4 border-blue-500">3 hello</div>
          <div className="p-2 border-4 border-blue-500">3 hello</div>
        </div>

        <div className="flex flex-wrap border-4 border-red-300 m-3">
          <div className="p-2 border-4 border-blue-500">4 hello</div>
          <div className="p-2 border-4 border-blue-500">4 hello</div>
          <div className="p-2 border-4 border-blue-500">4 hello</div>
          <div className="p-2 border-4 border-blue-500">4 hello</div>
          <div className="p-2 border-4 border-blue-500">4 hello</div>
          <div className="p-2 border-4 border-blue-500">4 hello</div>
          <div className="p-2 border-4 border-blue-500">4 hello</div>
        </div>

        {/* 
          justify-content: center  - justirfy-center
          justify-contetn: space-between - justify-berween
          align-items: flex-start -items-start
          align-self: autop -self-auto
          flex: 1 1 0% -flex-1
          flex: none -flex-none
         */}
        <div className="flex flex-wrap border-4 border-red-300 m-3">
          <div className="flex-1 p-2 border-4 border-blue-500">5 hello</div>
          <div className="flex-1 p-2 border-4 border-blue-500">5 hello</div>
          <div className="flex-1 p-2 border-4 border-blue-500">5 hello</div>
          <div className="flex-1 p-2 border-4 border-blue-500">5 hello</div>
          <div className="flex-1 p-2 border-4 border-blue-500">5 hello</div>
        </div>
        {/* 

            space-x-1 > margin-left: 0.25rem 
            space-y-1 > margin-top: 0.25rem

        */}
        <div className="flex space-x-1 flex-wrap border-4 border-red-300 m-3">
          <div className="w-16 h-16 p-2 border-4 border-blue-500">6 hello</div>
          <div className="w-16 h-16 p-2 border-4 border-blue-500">6 hello</div>
          <div className="w-16 h-16 p-2 border-4 border-blue-500">6 hello</div>
          <div className="w-16 h-16 p-2 border-4 border-blue-500">6 hello</div>
          <div className="w-16 h-16 p-2 border-4 border-blue-500">6 hello</div>
        </div>
      </div>

      {/* 
       gap-px     gap: 1px;
       gap-x-px   column-gap: 1px;
       gap-1      gap: 0.25rem
       */}
      <div className="flex gap-[6px] flex-wrap border-4 border-red-300 m-3">
        <div className="w-16 h-16 p-2 border-4 border-blue-500">7 hello</div>
        <div className="w-16 h-16 p-2 border-4 border-blue-500">7 hello</div>
        <div className="w-16 h-16 p-2 border-4 border-blue-500">7 hello</div>
        <div className="w-16 h-16 p-2 border-4 border-blue-500">7 hello</div>
      </div>
      {/* -m-3 네거티브 마진으로 간격 맞출 수 있음 */}
      <div className="flex flex-wrap border-4 border-red-300 m-3">
        <div className="w-16 h-16 m-3 p-2 border-4 border-blue-500">
          8 hello
        </div>
        <div className="w-16 h-16 m-3 p-2 border-4 border-blue-500">
          8 hello
        </div>
        <div className="w-16 h-16 m-3 p-2 border-4 border-blue-500">
          8 hello
        </div>
        <div className="w-16 h-16 m-3 p-2 border-4 border-blue-500">
          8 hello
        </div>
      </div>

      <div className="flex border-4 border-red-300 m-3">
        <div className="w-3/4 p-2 border-4 border-blue-500">9 hello</div>
        <div className="w-1/4 p-2 border-4 border-blue-500">9 hello</div>
      </div>

      <div className="flex flex-wrap border-4 border-red-300 m-3">
        <div className="w-3/4 p-2 border-4 border-blue-500">10 hello </div>
        <div className="w-1/4 p-2 border-4 border-blue-500">10 hello </div>
        <div className="w-3/4 p-2 border-4 border-blue-500">10 hello </div>
        <div className="w-1/4 p-2 border-4 border-blue-500">10 hello </div>
      </div>

      <div className="flex flex-wrap border-4 border-red-300 m-3">
        <div className="w-1/4 p-2 border-4 border-blue-500">11 hello </div>
        <div className="w-1/4 p-2 border-4 border-blue-500">11 hello </div>
        <div className="w-1/4 p-2 border-4 border-blue-500">11 hello </div>
        <div className="w-1/4 p-2 border-4 border-blue-500">11 hello </div>
        <div className="w-1/4 p-2 border-4 border-blue-500">11 hello </div>
        <div className="w-1/4 p-2 border-4 border-blue-500">11 hello </div>
        <div className="w-1/4 p-2 border-4 border-blue-500">11 hello </div>
        <div className="w-1/4 p-2 border-4 border-blue-500">11 hello </div>
      </div>

      <div className="border-4 border-red-300 m-3">
        <div className="inline-block p-2 border-4 border-blue-500">
          12 hello
        </div>
        <div className="inline-block p-2 border-4 border-blue-500">
          12 hello
        </div>
        <div className="inline-block p-2 border-4 border-blue-500">
          12 hello
        </div>
      </div>

      {/* justify-content: space-between */}
      <div className="flex justify-between border-4 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500">13 hello</div>
        <div className="p-2 border-4 border-blue-500">13 hello</div>
        <div className="p-2 border-4 border-blue-500">13 hello</div>
        <div className="p-2 border-4 border-blue-500">13 hello</div>
      </div>
      {/* justify-center: center */}
      <div className="flex justify-center border-4 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500">14 hello</div>
        <div className="p-2 border-4 border-blue-500">14 hello</div>
        <div className="p-2 border-4 border-blue-500">14 hello</div>
        <div className="p-2 border-4 border-blue-500">14 hello</div>
      </div>

      <div className="flex justify-center items-center w-80 h-80 border-4 border-red-300 m-3">
        <div className="text-center leading-9 w-32 h-16 p-2 border-4 border-blue-500">
          15 hello
        </div>
      </div>

      {/* 접근성과 모바일 고려 */}
      <div className="flex md:flex-row flex-col border-4 border-red-300 m-3">
        <div className="p-2 flex-1 border-4 borer-blue-500">1 hello</div>
        <div className="p-2 flex-1 border-4 borer-blue-500 order-last md:order-none">
          2 hello
        </div>
        <div className="p-2 flex-1 border-4 borer-blue-500">3 hello</div>
        <div className="p-2 flex-1 border-4 borer-blue-500">4 hello</div>
      </div>

      {/* Grid */}
      <h2>1</h2>
      <div className="grid grid-cols-3 gap-2 border-4 border-red-400">
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
      </div>

      <h2>2</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 border-4 border-red-500">
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
      </div>

      <h2>3</h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 border-4 border-red-400">
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
      </div>
      <h2>4</h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 border-4 border-red-400">
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
      </div>
      <h2>5</h2>
      <div className="grid grid-cols-4 grid-rows-3 grid-flow-row gap-2 border-4 border-red-400">
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
      </div>
      <h2>6</h2>
      <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
        <div className="col-span-2 row-span-2 border-4 border-blue-500">
          hello1
        </div>
        <div className="col-span-2 border-4 border-blue-500">hello2</div>
        <div className="border-4 border-blue-500">hello3</div>
        <div className="border-4 border-blue-500">hello4</div>
        <div className="border-4 border-blue-500">hello5</div>
        <div className="border-4 border-blue-500">hello6</div>
      </div>
      <h2>7</h2>
      <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
        <div className="col-start-1 col-end-3 row-start-1 row-end-3 border-4 border-blue-500">
          hello 1
        </div>
        <div className="border-4 border-blue-500">hello 2</div>
        <div className="border-4 border-blue-500">hello 3</div>
        <div className="border-4 border-blue-500">hello 4</div>
        <div className="border-4 border-blue-500">hello 5</div>
        <div className="border-4 border-blue-500">hello 6</div>
      </div>
      <h2>8</h2>
      <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
        <div className="border-4 border-blue-500">hello 1</div>
        <div className="col-start-2 row-start-1 border-4 border-blue-500">
          hello 2
        </div>
        <div className="border-4 border-blue-500">hello 3</div>
        <div className="border-4 border-blue-500">hello 4</div>
        <div className="border-4 border-blue-500">hello 5</div>
        <div className="border-4 border-blue-500">hello 6</div>
      </div>

      <h2>9</h2>
      <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
        <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 border-4 border-blue-500">
          hello 1
        </div>
        <div className="border-4 border-blue-500">hello 2</div>
        <div className="border-4 border-blue-500">hello 3</div>
        <div className="border-4 border-blue-500">hello 4</div>
        <div className="border-4 border-blue-500">hello 5</div>
        <div className="border-4 border-blue-500">hello 6</div>
      </div>

      <h2>10</h2>
      <div className="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
        <div className="border-4 border-blue-500">hello 1</div>
        <div className="border-4 border-blue-500">hello 2</div>
        <div className="border-4 border-blue-500">hello 3</div>
        <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 border-4 border-blue-500">
          hello 4
        </div>
        <div className="border-4 border-blue-500">hello 5</div>
        <div className="border-4 border-blue-500">hello 6</div>
      </div>

      {/* items-center, items-start , items-end, items-stretch */}
      <h2>11</h2>
      <div className="grid grid-cols-4 grid-rows-4 items-center gap-2 border-4 border-red-400">
        <div className="border-4 border-blue-500">hello 1</div>
        <div className="border-4 border-blue-500">hello 2</div>
        <div className="border-4 border-blue-500">hello 3</div>
        <div className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 border-4 border-blue-500">
          hello 4
        </div>
        <div className="md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-4 border-4 border-blue-500">
          hello 5
        </div>
        <div className="border-4 border-blue-500">hello 6</div>
      </div>

      <h2>12</h2>
      <div className="grid grid-cols-4 grid-rows-4 items-stretch gap-2 border-4 border-red-400">
        <div className="h-20 border-4 border-blue-500">hello 1</div>
        <div className="border-4 border-blue-500">hello 2</div>
        <div className="h-20 border-4 border-blue-500">hello 3</div>
        <div className="h-20 border-4 border-blue-500">hello 4</div>
        <div className="h-20 border-4 border-blue-500">hello 5</div>
        <div className="h-20 border-4 border-blue-500">hello 6</div>
      </div>
      {/* <!-- justify-items-start, justify-items-end, justify-items-center --> */}
      <h2>13</h2>
      <div className="grid grid-cols-4 grid-rows-4 justify-items-stretch gap-2 border-4 border-red-400">
        <div className="h-20 border-4 border-blue-500">hello 1</div>
        <div className="border-4 border-blue-500">hello 2</div>
        <div className="h-20 border-4 border-blue-500">hello 3</div>
        <div className="h-20 border-4 border-blue-500">hello 4</div>
        <div className="h-20 border-4 border-blue-500">hello 5</div>
        <div className="h-20 border-4 border-blue-500">hello 6</div>
      </div>

      {/* <!-- content-start, content-end, content-center, content-between, content-around --> */}
      <h2>14</h2>
      <div className="h-80 grid grid-cols-4 content-around gap-2 border-4 border-red-400">
        <div className="h-20 border-4 border-blue-500">hello 1</div>
        <div className="border-4 border-blue-500">hello 2</div>
        <div className="h-20 border-4 border-blue-500">hello 3</div>
        <div className="h-20 border-4 border-blue-500">hello 4</div>
        <div className="h-20 border-4 border-blue-500">hello 5</div>
        <div className="h-20 border-4 border-blue-500">hello 6</div>
      </div>
      <h2>15</h2>
      <div className="grid grid-cols-4 gap-2 border-4 border-red-400">
        <div className="border-4 border-blue-500">hello 1</div>
        <div className="border-4 border-blue-500 order-last">hello 2</div>
        <div className="border-4 border-blue-500">hello 3</div>
        <div className="border-4 border-blue-500">hello 4</div>
        <div className="border-4 border-blue-500">hello 5</div>
        <div className="border-4 border-blue-500">hello 6</div>
      </div>

      {/* transition */}
      <div className="flew h-64 justify-center items-center">
        <button
          className="transition ease-in-out delay-150 bg-blue-500
        hover:-translate-y-1 hovber:scale-110 hover:bg-indigo-500 duration-300 rounded p-5 m-3 text-white      
        "
        >
          save changes
        </button>
        <button
          className="transition ease-linear delay-150 bg-blue-500
        hover:-translate-y-1 hovber:scale-110 hover:bg-indigo-500 duration-300 rounded p-5 m-3 text-white      
        "
        >
          save changes
        </button>
        <button className="transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 rounded p-5 m-3 text-white">
          Save Changes
        </button>
      </div>

      {/* animation */}
      <div className="relative rounded-xl overflow-auto p-8">
        <div className="flex items-center justify-center">
          <span className="relative inline-flex">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-4 ring-slate-900/10 dark:ring-slate-200/20
              "
            >
              transactions
            </button>
            <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
