import { Link } from "react-router-dom";
import { getMediaUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className=".container relative flex items-center content-between mt-[49px] z-[1] ml-[10%] mr-[10%] max-[830px]:flex-col-reverse min-h-[560px]" id="hero">
            <div className=".content flex flex-col items-start text-text z-[1] max-[830px]:items-center w-[50%] max-[830px]:w-[100%]">
                <h1 className="title //text-[62.21px] //text-[74.65px] text-[72px] font-[900] mb-[33px] [font-family:var(--font-robot)] //[background:linear-gradient(90deg,rgba(255,255,255,1)70%,rgba(255,255,255,0)120%)] bg-[hsl(219,0%,100%,1)] [-webkit-text-fill-color:transparent] bg-clip-text flex">Hi, I'm Eli</h1>
                <p className="description text-[30px] //text-[72px] [font-family:var(--font-robot)] mb-[52px]">
                    I'm a full-stack developer with 3+ years of experience developing large-scale applications
                    {/* Full-Stack Developer */}
                </p>
                <Link className="contact-btn bg-primary text-text rounded-[100px] text-[30px] font-[600] [padding:17px_26px] shadow-[0_0_4px_0_rgba(0,_0,_0,_0.25)]" to="mailto:3libowm4n@gmail.com">Contact me</Link>
            </div>
            <div className="heroImg w-[50%] max-[830px]:w-[100%] h-[560px] z-[1] //animate-[3s_ease-in-out_infinite_floating] animate-floating flex justify-center">
                <img className="w-[95%] max-[830px]:w-[95%] object-contain" src={getMediaUrl('hero/hero.svg')} alt="Hero image" /></div>            
            <div className="top-blur absolute w-[50vw] h-[50vw] min-w-[350px] top-[-128px] left-[-10vw] rounded-[764px] bg-[rgba(25,55,109,0.7)] //[filter:blur(100px)] blur-[100px] z-0"></div>
            <div className="bottom-blur absolute w-[70vw] h-[50vw] min-w-[250px] top-[246px] right-[-25vw] rounded-[764px] bg-[rgba(25,55,109,0.7)] //[filter:blur(100px)] blur-[100px] z-0"></div>
        </section>
    )
}