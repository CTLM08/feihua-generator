import React, { useState } from "react";
import { Icon } from '@iconify/react';
export const App = () => {
  const [chose, setchose] = useState(2);
  const [paragraph, setparagraph] = useState("");
  const [subject, setsubject] = useState("");
  const [bruh, setbruh] = useState("");
  const [explain, setexplain] = useState("");

  return (
    <div className="bg-slate-200 h-screen w-full flex items-center justify-center gap-4 md:gap-12 relative p-2 md:p-0">
      <div className="z-[999]">
        <div className="text-xl md:text-3xl ">营销号生成器</div>
        <div className="mt-5">
          <div className="md:text-2xl mt-3 ">主体</div>
          <input
            type="text"
            className="rounded-xl w-32 md:w-80 h-5 md:h-8 p-5 border "
            value={subject}
            onChange={(e) => setsubject(e.target.value)}
          ></input>
        </div>
        <div>
          <div className=" md:text-2xl mt-3">事件</div>
          <input
            type="text"
            className="rounded-xl w-32 md:w-80 h-5 md:h-8 p-5 border"
            value={bruh}
            onChange={(e) => setbruh(e.target.value)}
          ></input>
        </div>
        <div>
          <div className="md:text-2xl mt-3">解释</div>
          <input
            type="text"
            className="rounded-xl w-32 md:w-80 h-5 md:h-8 p-5 border"
            value={explain}
            onChange={(e) => setexplain(e.target.value)}
          ></input>
        </div>
        <div className="mt-5 flex flex-row gap-5 ">
          <div>
            <button
              onClick={() => setchose(2)}
              className={`bg-white rounded-sm w-14 md:w-20 h-10 flex items-center justify-center  ${
                chose == 2 ? "border-2" : ""
              } border-slate-500 text-xs md:text-base`}
            >
              故事性
            </button>
          </div>
          <div
            onClick={() => setchose(3)}
            className={`bg-white rounded-sm w-14 md:w-20 h-10 flex items-center justify-center  ${
              chose == 3 ? "border-2" : ""
            } border-slate-500 text-xs md:text-base`}
          >
            <button>废话文学</button>
          </div>
        </div>
        <div
          className="mt-3 w-32 md:w-80 h-8 md:h-10 flex items-center justify-center bg-white rounded-xl hover:bg-slate-300 hover:text-white "
          onClick={(e) => {
            setparagraph(
              chose == 3
                ? `${subject}${bruh}是怎么回事呢？${subject}相信大家都很熟悉，但是${subject}${bruh}是怎么回事呢，下面就让小编带大家一起了解吧。${subject}${bruh}，其实就是${explain}，大家可能会很惊讶${subject}怎么会${bruh}呢？但事实就是这样，小编也感到非常惊讶。这就是关于${subject}${bruh}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦`
                : `有一天,${subject}在${bruh},${bruh}到一半就${explain},${explain}让${subject}很惊讶，惊讶得${subject}在狗叫`
            );
          }}
        >
          生成
        </div>
      </div>
      <div className="bg-white w-48 md:w-96  ans  rounded-xl p-3 z-[99]">
        <div className="text-sm md:text-base">{bruh==''||subject==''||explain=='' ?  '请输入内容,谢谢':paragraph}</div>
      </div>
      <div className=""><Icon icon="charm:face-smile" className=" -left-12 md:-left-16 w-56 h-56 md:w-96 md:h-96 absolute top-2 md:-top-16 text-slate-300 hover:animate-spin"/></div>
      <div className="container absolute bottom-2 "><h1>made by liming..</h1> </div>
    </div>
  );
};

export default App;
