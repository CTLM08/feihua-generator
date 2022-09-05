import React, { useState } from "react";
import { Icon } from '@iconify/react';
export const App = () => {
  function forp1(){
    if(ram==1){
      setp1(`${subject}到底是怎么回事？得知真相后大家都蒙圈了小编认为，这一定是还有其他原因的。`)
    }
    else if(ram==2){
      setp1(`最近很火的${subject}是什么梗？你好是怎么火起来的呢？`)
    }
    else if(ram==0){
      setp1(`${subject}${bruh}是怎么回事呢？${subject}相信大家都很熟悉，但是${subject}${bruh}是怎么回事呢，下面就让小编带大家一起了解吧。` )
    }
  }
  function forp2(){
    if(ram2==0){
      setp2(`${subject}${bruh}，其实就是${explain}，大家可能会很惊讶${subject}怎么会${bruh}呢？但事实就是这样，小编也感到非常惊讶。`)
    }
    else if(ram2==1){
      setp2(`震惊！${subject}了，原因竟然是${explain}小编认为，这一定是还有其他原因的。${subject}有些不对劲，当场冒了一身冷汗不过，这让小编也很疑惑不解。原来${subject}背后还有这种秘密，看完简直拉仇恨小编认为，这一定是还有其他原因的。专家都不愿意说的事情！为什么${subject}${bruh}，原因竟然是${explain}不过，这让小编也很疑惑不解。最新${subject}的消息，不敢相信这是真的小编也做了个试验，可是这并没有解答小编关于${subject}的疑惑`)
    }
    else if(ram2==2){
      setp2(`${subect}${bruh}的发生，到底需要如何做到，不${subect}${bruh}的发生，又会如何产生。 总结的来说， 在生活中，我们要面临很多考验，更是心理上的考验。永不服输的精神，它给我们的感受特别要丰富 .这句话语虽然很短，但令我浮想联翩。 你相信什么，你就成为什么样的人。。`)
    }
  }
  function forp3(){
    if(ram3==0){
      setp3(`这就是关于${subject}${bruh}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦`)
    }
    else if(ram3==1){
      setp3(`总而言之，${subject}${bruh}其实就是${explain},大家可能会很惊讶${subject}怎么会${bruh}呢？但事实就是这样，小编也感到非常惊讶。这就是关于${subject}${bruh}的事情了，欢迎讨论！！`)
    }
    else if(ram3==2){
      setp3(`以上就是小编为大家带来的的关于${subject}${bruh}是什么意思，${subject}${bruh}是什么梗的内容。欢迎大家在评论区和小编一起讨论，畅所欲言。`)
    }
  }
  function fors1(){
    if(ram==0){
      sets1(`有一天,${subject}在${bruh},`)
    }
    else if(ram==1){
      sets1(`${subject}也是经过了深思熟虑，在每个日日夜夜都在${bruh}。 俾斯麦说过一句富有哲理的话，${explain}是${bruh}的最后考验。这似乎解答了${subject}的疑惑。 塞涅卡曾经说过，${bruh}如同寓言，其价值不在于${explain}，而在与内容。`)
    }
    else if(ram==2){
      sets1(`${subject}不得不面对一个非常${bruh}的事实，那就是， ${subject}一般认为，抓住了${bruh}的关键，其他一切则会${explain}。 ${subject}的发生，到底需要如何做到，不${subject}的发生，又会如何产生。`)
    }
  }
  function fors2(){
    if(ram2==0){
      sets2(`${bruh}到一半就${explain},${explain}让${subject}很惊讶，`)
    }
    else if(ram2==1){
      sets2(`了解清楚${subject}到底是一种怎么样的存在，是解决${bruh}现在，解决${subject}的问题，是非常非常重要的。 所以， 米歇潘曾经提到过，${subject}是一条艰险的峡谷，只有${explain}的人才能通过。这不禁令我深思。 所谓${subject}，关键是${subject}需要如何写。`)
    }
    else if(ram2==2){
      sets2(`生活中，若${subject}出现了，我们就不得不考虑它出现了的事实。`)
    }
  }
  function fors3(){
    if(ram==0){
      sets3(`惊讶得${subject}在狗叫`)
    }
    else if (ram==1){
      sets3(`总结的来说， 就我个人来说，${subject}对我的意义，不能不说非常重大。 问题的关键究竟为何？ 歌德在不经意间这样说过，${bruh}，就如同${explain}。这似乎解答了我的疑惑。 `)
    }
    else if(ram==2){
      sets3(`${subject}就是把双面刃,即可${bruh},也可${explain},这只在于人们的看法`)
    }
  }
  const [chose, setchose] = useState(2);
  const [paragraph, setparagraph] = useState("");
  const [subject, setsubject] = useState("");
  const [bruh, setbruh] = useState("");
  const [explain, setexplain] = useState("");
  const [ram,setram]=useState(0)
  const [ram2,setram2]=useState(0)
  const [ram3,setram3]=useState(0)
  const [p1,setp1]=useState('')
  const [p2,setp2]=useState('')
  const [p3,setp3]=useState('')
  const [s1,sets1]=useState('')
  const [s2,sets2]=useState('')
  const [s3,sets3]=useState('')
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
            setram(Math.floor(Math.random()*3))
            setram2(Math.floor(Math.random()*3))
            setram3(Math.floor(Math.random()*3))
            fors1()
            fors2()
            fors3()
            forp1()
            forp2()
            forp3()
            
            setparagraph(
              chose == 3
                ? `${p1}${p2}${p3}`
                : `${s1}${s2}${s3}`
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
