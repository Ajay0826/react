export default function Main() {
  return (
    <div className="flex  bg-red-400 min-w-250 min-h-full rounded-xl m-1">
      <aside className="flex flex-col items-center bg-gray-100 min-w-[24%] min-h-full rounded-xl m-1">
        <ul className="m-2 p-1">
          <li>Deshborad </li>
          <li>Projects</li>
          <li>Tasks</li>
          <li>Calendar</li>
          <li>Settings</li>
        </ul>
      </aside>
      <main className="flex flex-col items-center bg-gray-100 min-w-[74%] min-h-full rounded-xl m-1">
        this is the main section
      </main>
    </div>
  );
}
