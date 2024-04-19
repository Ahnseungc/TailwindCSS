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
    </>
  );
}
