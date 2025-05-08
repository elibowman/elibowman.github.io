import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <section className=".container relative flex items-center content-between mt-[49px] z-[1] ml-[10%] mr-[10%] max-[830px]:flex-col-reverse min-h-[560px]" id="hero">
            <div className=".content flex flex-col items-start text-text z-[1] max-[830px]:items-center w-[50%] max-[830px]:w-[100%]">
                <h1 className="title //text-[62.21px] //text-[74.65px] text-[72px] font-[900] mb-[33px] [font-family:var(--font-robot)] [background:linear-gradient(90deg,rgba(255,255,255,1)_70%,rgba(255,255,255,0)_120%)] bg-[hsl(219,0%,100%,1)] [-webkit-text-fill-color:transparent] bg-clip-text flex">Hi, I'm Eli</h1>
                <p className="description text-[30px] //text-[72px] [font-family:var(--font-robot)] mb-[52px]">
                    a full-stack developer with 4+ years of experience developing large-scale applications
                    {/* Full-Stack Developer */}
                </p>
                <Link className="contact-btn bg-primary text-text rounded-[100px] text-[30px] font-[600] [padding:17px_26px] shadow-[0_0_4px_0_rgba(0,_0,_0,_0.25)]" to="mailto:eli.bowman.dev@gmail.com">Contact me</Link>
            </div>
            <div className="heroImg w-[50%] max-[830px]:w-[100%] h-[560px] z-[1] //animate-[3s_ease-in-out_infinite_floating] animate-floating flex justify-center">
                {/* <svg className="//w-[85%] w-[36rem] max-[830px]:w-[26rem] object-contain" viewBox="0 0 788 507" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M269 121C269 121 269 1 394 1C519 1 519 121 519 121C519 121 526 231.06 482 297V350.889C482 350.889 704 400 731 418C758 436 787 506 787 506H1C1 506 34 437 59 418C84 399 297.5 350.889 297.5 350.889V288.889C258.563 222.28 269 121 269 121Z" fill="url(#Gradient3)" stroke="none"/>
                    <defs>
                        <linearGradient id="Gradient3" gradientTransform="rotate(90)">
                            <stop offset="0%" stop-color="hsla(228, 50%, 70%, 0.67)" />
                            <stop offset="100%" stop-color="hsla(228, 50%, 70%, 0)" />
                        </linearGradient>
                    </defs>
                </svg> */}
                {/* <svg className=".hero //w-[90%] w-[36rem] max-[830px]:w-[26rem] object-contain" viewBox="0 0 500 319" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M171 75.5C171 75.5 170.185 0 249.5 0C326 0 326.814 75.5 326.814 75.5C326.814 75.5 333 143.5 305.838 185.602V219.795C305.838 219.795 446.701 250.957 463.833 262.378C480.965 273.799 499.366 318.216 499.366 318.216H0.634766C0.634766 318.216 21.5739 274.434 37.4368 262.378C53.2997 250.322 188.769 219.795 188.769 219.795V180.455C164.063 138.19 171 75.5 171 75.5Z" fill="url(#Gradient3)" stroke="none"/>
                    <linearGradient id="Gradient3" gradientTransform="rotate(90)">
                        <stop offset="0%" stop-color="hsla(228, 50%, 70%, 0.67)" />
                        <stop offset="100%" stop-color="hsla(228, 50%, 70%, 0)" />
                    </linearGradient>
                </svg> */}
                {/* <svg className="//w-[90%] w-[36rem] max-[830px]:w-[26rem] object-contain" viewBox="0 0 500 317" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M171 75.5C171 75.5 171 0 249.5 0C326.814 0 326.814 75.5 326.814 75.5C326.814 75.5 333 141.5 305.838 183.602V217.795C305.838 217.795 446.701 248.957 463.833 260.378C480.965 271.799 499.366 316.216 499.366 316.216H0.634766C0.634766 316.216 21.5739 272.434 37.4368 260.378C53.2997 248.322 188.769 217.795 188.769 217.795V178.455C164.063 136.19 171 75.5 171 75.5Z" fill="url(#Gradient3)" stroke="none"/>
                    <linearGradient id="Gradient3" gradientTransform="rotate(90)">
                        <stop offset="0%" stop-color="hsla(228, 50%, 70%, 0.67)" />
                        <stop offset="100%" stop-color="hsla(228, 50%, 70%, 0)" />
                    </linearGradient>
                </svg> */}
                <svg className="//w-[90%] w-[36rem] max-[830px]:w-[26rem] object-contain" viewBox="0 0 500 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M171 75.5C171 75.5 171 0 249.5 0C326.814 0 326.814 75.5 326.814 75.5C326.814 75.5 333 142.5 305.838 184.602V218.795C305.838 218.795 446.701 249.957 463.833 261.378C480.965 272.799 499.366 317.216 499.366 317.216H0.634766C0.634766 317.216 21.5739 273.434 37.4368 261.378C53.2997 249.322 188.769 218.795 188.769 218.795V179.455C164.063 137.19 171 75.5 171 75.5Z" fill="url(#Gradient3)" stroke="none"/>
                    <linearGradient id="Gradient3" gradientTransform="rotate(90)">
                        <stop offset="0%" stop-color="hsla(228, 50%, 70%, 0.67)" />
                        <stop offset="100%" stop-color="hsla(228, 50%, 70%, 0)" />
                    </linearGradient>
                </svg>
            </div>            
            <div className="top-blur absolute w-[50vw] h-[50vw] min-w-[350px] top-[-128px] left-[-10vw] rounded-[764px] bg-[rgba(25,55,109,0.7)] //[filter:blur(100px)] blur-[100px] z-0 [transform:translate3d(0,0,0)]"></div>
            <div className="bottom-blur absolute w-[70vw] h-[50vw] min-w-[250px] top-[246px] right-[-25vw] rounded-[764px] bg-[rgba(25,55,109,0.7)] //[filter:blur(100px)] blur-[100px] z-0 [transform:translate3d(0,0,0)]"></div>
        </section>
    )
}