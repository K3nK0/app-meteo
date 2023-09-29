export default function BtnPrevious({setIndexDay, indexDay}) {
  return (
    <button
    className="drop-shadow-md"
    onClick={() => setIndexDay(indexDay-1)}
    >
        <svg
        className="drop-shadow-md"
        width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="white" d="M11.03 8.53a.75.75 0 1 0-1.06-1.06l-4 4a.748.748 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72H18a.75.75 0 0 0 0-1.5H8.31l2.72-2.72Z"/>
        </svg>
    </button>
  )
}
