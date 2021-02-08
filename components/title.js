import style from '../styles/title.module.scss'

/**
 * Just show a title.
 * @param {string} title The title to show.
 */
export default function Title({title}) {
  return (
    <div className={style.title} >
      {title}
    </div>
  );
}