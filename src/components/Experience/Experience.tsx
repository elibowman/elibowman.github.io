import skills from "../../data/skills.json";
import history from "../../data/history.json"
import { getMediaUrl } from "../../utils";

export const Experience = () => {
    return (
        <section id="experience" className=".container hidden mt-[79px] ml-[10%] mr-[10%]">
            <h2 className="title text-[35px] font-[700] tracking-[1.75px] uppercase">Tools</h2>
            <div className="content flex justify-evenly mt-[14px] max-[830px]:flex-col max-[830px]:items-center max-[830px]:gap-[34px]">
                <div className="skills //w-[25%] justify-center flex flex-wrap gap-[37px] max-[830px]:w-[100%] max-[830px]:flex-row max-[830px]:justify-center">
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className="skill flex flex-col items-center gap-[11px]">
                                <div className="skill-image-container bg-secondary rounded-[100%] flex items-center justify-center w-[120px] h-[120px]">
                                    <img className="w-[75px]" src={getMediaUrl(skill.imageSrc)} alt="Skill image" />
                                </div>
                                <p className="skill-title text-[25px] [font-family:var(--font-robot)] font-medium">{skill.title}</p>
                            </div>
                        )
                    })}
                </div>
                <ul className="hidden history //flex flex-col gap-[40px] w-[75%] max-[830px]:w-[100%] max-[830px]:gap-[9px]">
                    {
                        history.map((historyItem, id) => {
                            return (
                                <li key={id} className="history-item flex flex-row items-center gap-[17px] bg-[#19376d] bg-[linear-gradient(90deg,#19376d,rgba(25,55,109,0)100%)] rounded-[10px] p-[24px]">
                                    {/* <img 
                                        src={getImageUrl(historyItem.imageSrc)} 
                                        alt={`${historyItem.organisation} logo`}
                                        className="w-[50px]"
                                    /> */}
                                    <div className="history-item-details font-[var(--font-robot)]" >
                                    <h3 className="text-[30px] font-medium">{`${historyItem.organisation} - ${historyItem.role}`}</h3>
                                    <p className="font-light text-[20px]">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul className="mt-[6px] list-outside text-[25px] list-disc ml-[17px] font-normal">
                                        {historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>;
                                        })}
                                    </ul>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
}