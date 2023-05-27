import { MdArrowCircleRight } from "react-icons/md";
import style from '@/app/styles/hero_content.module.css';
export const Hero_content = () => {
  return (
    <div className={style.hero_content}>
        <h1 className={style.heading}>Websites done right</h1>

        <h4 className={style.heading_two}>I am a web developer from Cape Breton, Nova Scotia and currently living in Halifax. I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here</h4>
        
        <div className={style.btns_grps}>
            <button className={style.btn}>i need a website <MdArrowCircleRight/></button>
            <button className={style.btn}>i'm looking to hire  <MdArrowCircleRight/></button>
        </div>
    </div>
  )
}
