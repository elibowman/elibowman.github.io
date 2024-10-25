import { getMediaUrl } from '../../utils'

const linkStyles = "flex items-center gap-[26px]";
const linkAStyles = "text-[30px] font-[400] tracking-[1.5px]"

export const Contact = () => { 
  return (
    <footer id='contact' className='.container mt-[120px] bg-secondary flex justify-evenly w-[100vw] p-[58px_10%] gap-[10px] max-[830px]:flex-col max-[830px]:gap-[23px]'>
        <div className='.text flex flex-col justify-center max-[830px]:flex max-[830px]:flex-col max-[830px]:items-center'>
            <h2 className='text-[80px] font-bold tracking-[4px]'>Contact</h2>
            <p className='text-[40px] font-[400] tracking-[2px]'>Feel free to reach out!</p>
        </div>
        <ul className='.links flex flex-col items-start justify-center gap-[26px] max-[830px]:items-center'>
            <li className={`link ${linkStyles} max-sm:flex max-sm:flex-col`}>
                <img src={getMediaUrl("contact/emailIcon.png")} alt="Email icon" />
                <a className={`${linkAStyles}`} href="mailto:eli.bowman.dev@gmail.com">eli.bowman.dev@gmail.com</a>
            </li>
            {/* <li className={`link ${linkStyles}`}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a className={`${linkAStyles}`} href="#">LinkedIn</a>
            </li> */}
            <li className={`link ${linkStyles} max-sm:flex max-sm:flex-col`}>
                <img src={getMediaUrl("contact/githubIcon.png")} alt="Github icon" />
                <a className={`${linkAStyles}`} href="https://github.com/elibowman" target="_blank" rel="noopener noreferrer">github.com/elibowman</a>
            </li>
        </ul>
    </footer>
  )
}
