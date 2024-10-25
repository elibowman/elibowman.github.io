import { getMediaUrl } from '../../utils'

export const ProjectCard = ( 
    { 
        project : 
            { 
                title,
                videoSrc,
                description,
                skills,
                demo,
                source
            }
        } : {
            project:{
                title: string,
                imageSrc: string[],
                videoSrc: string,
                description: string,
                skills: string[],
                demo: string,
                source: string
            }}) => {

    const linkStyles = 'text-[30px] font-[600] rounded-[100px] bg-primary p-[1px_22px]'

    description;

    return (
        // <div className=".container flex flex-col rounded-[10px] bg-[linear-gradient(180deg,#576cbc_0%,#132a53_100%)] shadow-[0_16px_14px_0_#04152d] p-[18px_14px] max-w-[345px]">
        <div className=".container flex flex-col rounded-[10px] bg-[linear-gradient(180deg,#576cbc_0%,#132a53_100%)] shadow-[0_16px_14px_0_#04152d] p-[18px_14px] max-w-[350px]">
            <video controls={true} autoPlay={true} muted={true} width='1920' height='1080' loop={true} >
                <source src={getMediaUrl(videoSrc)} type="video/mp4"/>
            </video>
            <h3 className='.title text-[25px] font-bold mt-[8px]'>{title}</h3>
            {/* <p className='description mt-[6px] text-[25px] //min-h-[112.5px] min-h-[150px] font-normal'>{description}</p> */}
            {/* <p className='description mt-[6px] text-[25px]  min-h-[112.5px] font-normal'>This is a project made to learn the latest languages by building an app.</p> */}
            <div className='.skills-wrapper //h-[21.25rem] //h-[17.75rem] //h-[24.5rem] h-[calc(27*16px)] max-sm:min-h-[calc(27*16px)] max-sm:h-[unset]'>
                <ul className='.skills w-[100%] mt-[14px] flex flex-wrap gap-[6px] //h-[20rem] grow-0'>
                    {skills.map((skill, id) => {
                        return <li key={id} className='skill text-[25px] //text-[20px] font-normal rounded-[100px] bg-dark p-[2px_22px] //h-fit'>{skill}</li>
                    })}
                </ul>
            </div>
            <div className='.links w-[100%] mt-[26px] flex justify-around'>
                <a className={`link ${linkStyles}`} href={demo}>Demo</a>
                <a className={`link ${linkStyles}`} href={source} target="_blank" rel="noopener noreferrer">Source</a>
            </div>
        </div>        
    )
}
