import { getMediaUrl } from "../../utils";

const aboutItemStyles = 'flex flex-row items-center rounded-[20px] p-[25px] [background-image:linear-gradient(90deg,rgba(165,215,232,0.42)0%,rgba(255,255,255,0)100%)] [background-size:0_100%] hover:[background-size:100%_100%] bg-no-repeat hover:[transition:0.4s]';

export const About = () => {
    return (
        <section className=".container relative //bg-[rgba(12,12,12,0.6)] //bg-[hsla(219,63%,26%,1)] bg-[hsla(219,0%,0%,0.6)] rounded-[15px] p-[73px] mt-[129px] z-[1] mx-[10%] max-[830px]:bg-transparent max-[830px]:px-0 h-645.517px" id="about">
            <h2 className="title text-[35px] font-[700] tracking-[1.75px] uppercase">About</h2>
            <div className="content flex items-center max-[830px]:flex-col">
                {/* <img className="aboutimage w-[35%] max-[830px]:hidden" src={getImageUrl("about/aboutImage.png")} alt="" /> */}
                <ul className="about-items flex flex-row gap-[50px] [&>li]:flex [&>li]:flex-col [&>li]:items-center [&>li]:rounded-[20px] [&>li]:p-[25px] [&>li]:bg-[linear-gradient(90deg,rgba(165,215,232,0.42)0%,rgba(255,255,255,0)100%)] max-[830px]:mt-[29px] w-[100%] max-[830px]:flex-col">
                    <li className={`about-item ${aboutItemStyles} w-[33.34%] max-[830px]:w-[100%]`}>
                        <img src={getMediaUrl("about/cursorIcon.png")} alt="cursor icon" />
                        <div className="item-text flex flex-col items-center">
                            <h3 className="font-[600] text-[25px]">Frontend Development</h3>
                            <p className="text-[25px]">I have experience building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={`about-item ${aboutItemStyles} w-[33.34%] max-[830px]:w-[100%]`}>
                        <img src={getMediaUrl("about/serverIcon.png")} alt="server icon" />
                        <div className="item-text flex flex-col items-center">
                            <h3 className="font-[600] text-[25px]">Backend Developement</h3>
                            <p className="text-[25px]">I have experience building highly scalable RESTful backend services</p>
                        </div>
                    </li>
                    <li className={`about-item ${aboutItemStyles} w-[33.34%] max-[830px]:w-[100%]`}>
                        <img src={getMediaUrl("about/uiIcon.png")} alt="server icon" />
                        <div className="item-text flex flex-col items-center">
                            <h3 className="font-[600] text-[25px]">UI Design</h3>
                            <p className="text-[25px]">I have experience designing user interfaces to UI design standards</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};