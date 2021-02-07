import style from '../styles/title.module.scss'

export default function Title({title}) {
  return (
    <div className={style.title} >
      {title}
    </div>
  );
}