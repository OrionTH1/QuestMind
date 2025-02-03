export function Loading() {
  return (
    <div className="h-svh flex flex-col justify-center items-center">
      <div>
        <h1 className="text-[2.5rem] font-bold">Loading...</h1>
        <p className="text-[1rem] opacity-50 -mt-3">This might take a while</p>
      </div>
    </div>
  );
}
