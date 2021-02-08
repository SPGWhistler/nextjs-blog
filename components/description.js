import style from '../styles/description.module.scss'

/**
 * Display a block of raw html.
 * @param {string} text The text to display, in raw html.
 */
export default function Description({text}) {
  return (
    <div
      className={style.desc}
      dangerouslySetInnerHTML={{__html: text}}
    />
  );
}