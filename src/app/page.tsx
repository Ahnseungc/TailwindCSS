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

        <div className="grid grid-cols-2 gap-6">
          <div className="shadow-sm bg-white rounded-lg">shadow-sm</div>
          <div className="shadow bg-white rounded-lg">shadow</div>
          <div className="shadow-md bg-white rounded-lg">shadow-md</div>
          <div className="shadow-lg bg-white rounded-lg">shadow-lg</div>
          <div className="shadow-xl bg-white rounded-lg">shadow-xl</div>
          <div className="shadow-2xl bg-white rounded-lg">shadow-2xl</div>
        </div>
      </div>
    </>
  );
}
