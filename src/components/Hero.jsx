import {logo} from '../assets/index';

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center ">
      <nav className=" navvv flex justify-between  items-center  flex-row pt-3 mb-10">
        <img src={logo} alt="sumz logo" className="w-28 object-contain"/>
        <button type="button" onClick={() => window.open('https://github.com/YASSINEGAFF69') } className="black_btn">Github</button>
      </nav>
      <div className=" flex flex-col justify-center items-center">
        <h1 className="head_text ">
          Summarize articles with <br className="max-md:hidden"/>
         <span className="orange_gradient">Open-AI GPT-4</span>
        </h1>
        <h2 className='desc'>
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries
        </h2>
      </div>
      
      </header>
  )
}

export default Hero