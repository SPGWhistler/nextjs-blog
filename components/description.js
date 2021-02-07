import style from '../styles/description.module.scss'

export default function Description({text}) {
  return (
    <div
      className={style.desc}
      dangerouslySetInnerHTML={{__html: text}}
    />
  );
}